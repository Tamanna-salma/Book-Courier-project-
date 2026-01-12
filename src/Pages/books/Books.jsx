import { useEffect, useState } from "react";
import Loading from "../Loading";
import { Link } from "react-router";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://book-courier-server-ten.vercel.app/recentBooks")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-6xl mx-auto mb-8 px-4">
      <h2 className="text-3xl font-bold mt-10 mb-6 text-center">Latest Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <Link
            to={`/bookdetails/${book._id}`}
            key={book._id}
            className="rounded-xl w-full border shadow-md hover:shadow-xl px-3 py-3 bg-white transition overflow-hidden duration-300 flex flex-col"
          >
            {/* Card Image */}
            <img
              src={book.image}
              alt={book.bookName}
              className="w-full h-56 object-cover rounded-2xl"
            />

            <div className="mt-4 px-3 flex-grow">
              {/* Title */}
              <h3 className="text-xl font-semibold line-clamp-1">{book.bookName}</h3>

              {/* Author */}
              <p className="text-gray-600 text-sm">by {book.authorName || book.author}</p>

              <div className="flex justify-between mt-2">
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-md font-bold">{book.category}</span>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md font-bold">{book.tags}</span>
              </div>

              {/* Price & Rating */}
              <div className="mt-4 flex justify-between items-center text-lg font-semibold text-purple-700">
                <span>${book.price}</span>
                <span className="text-orange-500 font-medium flex items-center gap-1">
                  ⭐ {book.rating || "N/A"}
                </span>
              </div>

              {/* Button UI (Since parent is already a Link) */}
              <div className="mt-4 w-full bg-purple-600 hover:bg-purple-800 text-white py-2 text-center rounded-lg transition duration-200">
                View Details
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Books;