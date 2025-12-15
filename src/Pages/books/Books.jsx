import { useEffect, useState } from "react";
import Loading from "../Loading";
import { Link } from "react-router";

const Books = () => {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/recentBooks")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto mb-8">
      <h2 className="text-3xl font-bold mt-10 mb-6 text-center">Latest Books </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">

        {books.map((book) => (
          <Link 
            to={`/bookdetails/${book._id}`} 
            key={book._id} 
            className="rounded-xl w-full lg:w-96 border shadow-md hover:shadow-xl px-3 py-3 bg-white transition overflow-hidden duration-300"
          >
            {/* Card Image */}
            <img
              src={book.image}
              alt=""
              className="w-full lg:w-96 h-56 px-3 rounded-2xl "
            />

            <div className="mt-4 px-3">
              {/* Title */}
              <h3 className="text-xl font-semibold">{book.bookName}</h3>

              {/* Author */}
              <p className="text-gray-600 text-sm">by {book.author}</p>

              <div className="flex justify-between">
                <p className="text-sm font-bold">{book.category}</p>
                <p className="text-sm font-bold">{book.tags}</p>
              </div>

              {/* Price */}
              <div className="mt-2 flex justify-between text-lg font-semibold text-purple-700">
                ${book.price}
                <span className="text-orange-500 font-medium">
                  ⭐ {book.rating}
                </span>
              </div>

              {/* Button */}
              <p Link to="/allbooks" className="mt-4 w-full bg-purple-600 hover:bg-purple-800 text-white py-2 text-center rounded-lg">
                View Details
              </p> 
            </div> 
          </Link>
        ))}

      </div>
    </div>
  );
};

export default Books;
