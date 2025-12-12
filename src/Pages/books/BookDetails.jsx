import { useParams } from "react-router";
import { useEffect, useState } from "react";
import UseAuth from "../../components/Hooks/UseAuth";
import OrderModal from "./OrderModal";
import Loading from "../Loading";
import Dataimg from "../../assets/data.jpeg";
const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [openModal, setOpenModal] = useState(false);
const [loading, setLoading] = useState(true);
  const { user } = UseAuth();

   useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/Books/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);
  if (loading) return <Loading />;
  if (!book)
     return 
      <img src={Dataimg} alt="" />
   
  return (
    <div className="max-w-5xl mx-auto px-4 my-12">
      <h2 className="text-xl lg:text-3xl px-4 font-bold mb-6">{book.bookName}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <img src={book.image} className="rounded-2xl w-full lg:w-96 h-72 shadow-md" />

        <div className="px-5">
          <h3 className="text-xl font-semibold">Author: {book.author}</h3>
          <p className="text-gray-600">Category: {book.category}</p>
          <p className="text-gray-600">Tags: {book.tags}</p>
          <p className="text-gray-600">review: {book.review}</p>
          <p className="text-gray-600">Pages: {book.totalPages}</p>
          <p className="text-gray-600">Publisher: {book.publisher}</p>
          <p className="text-gray-600">Published: {book.yearOfPublishing}</p>
          <p className="text-2xl font-bold mt-4 flex justify-between text-purple-700">
            Price: ${book.price} <span className="text-orange-500 font-medium">
                  ⭐ {book.rating}
                </span>
          </p>

          <button
            className="btn bg-purple-700 text-white mt-6"
            onClick={() => setOpenModal(true)}
          >
            Order Now
          </button>
        </div>
      </div>

      {/* Modal */}
     {openModal && (
  <OrderModal
    book={book}
    user={user}
    closeModal={() => setOpenModal(false)}
  />
)}
    </div>
  );
};

export default BookDetails;
