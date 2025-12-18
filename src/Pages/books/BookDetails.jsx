import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import UseAuth from "../../components/Hooks/UseAuth";
import OrderModal from "./OrderModal";
import Loading from "../Loading";
import Dataimg from "../../assets/data.jpeg";
import BookRating from "../../components/Bookrating/BookRating";

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

  //  loading state
  if (loading) return <Loading />;


  if (!book) {
    return (
      <div className="flex justify-center mt-5 mb-3">
        <img src={Dataimg} alt="No data found" />
      </div>
    );
  }


  return (
    <div className="max-w-5xl mx-auto px-4 my-12">
      <h2 className="text-xl lg:text-3xl px-4 font-bold mb-6">
        {book.bookName}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <img
          src={book.image || Dataimg}
          className="rounded-2xl w-full lg:w-96 h-72 shadow-md"
          alt={book.bookName}
        />
        <div className="px-5">
          <h3 className="text-xl font-semibold mt-2"><span className="font-bold ">Author </span> : {book.author}</h3>
          <h3 className="text-xl font-semibold mt-2"><span className="font-bold ">Author-Email </span> : {book.email}</h3>
          <div className="flex justify-between">
          <p className="text-gray-600 mt-2">Category  : {book.category}</p>
          <p className="text-gray-600 mt-2 ">Tags   : {book.tags}</p>
          </div>

         <div className="flex justify-between">
           <p className="text-gray-600 mt-2 ">Publisher   : {book.publisher}</p>
          <p className="text-gray-600 mt-2 "> Published   : {book.yearOfPublishing}
          </p>
         </div>
         <p className="text-gray-600 mt-2 ">description   : {book.review}</p>
          <div>
            <p className="text-gray-600 mt-2 ">Pages   : {book.totalPages}</p>
             <p className="text-2xl font-bold mt-4 flex justify-between text-purple-700">
            Price: ${book.price}
            <span className="text-orange-500 font-medium">
              ⭐ {book.rating}
            </span>
          </p>
          </div>

          <div className="flex justify-between">
            <button
            className="btn bg-purple-600 hover:bg-purple-800 text-white mb-2 mt-5"
            onClick={() => setOpenModal(true)}
          >
            Order Now
          </button>
          <Link to="/wishlist"
            className="btn bg-purple-600  hover:bg-purple-800 font-bold  text-white mb-2 mt-5">
           Wish-List
          </Link>
          </div>
        </div>
      </div>

      {openModal && (
        <OrderModal
          book={book}
          user={user}
          closeModal={() => setOpenModal(false)}
        />
      )}
      <BookRating book={book}></BookRating>
    </div>
  );
};

export default BookDetails;
