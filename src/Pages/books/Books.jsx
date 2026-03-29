import { useEffect, useState } from "react";
import Loading from "../Loading";
import { Link } from "react-router";
import { motion } from "framer-motion";

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
    <section className="max-w-7xl mx-auto my-20 px-4 transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="text-left">
            <h2 className="text-3xl md:text-5xl font-black text-gray-800 dark:text-white mb-4">
                Latest <span className="text-cyan-600">Arrivals</span>
            </h2>
            <div className="w-20 h-1.5 bg-cyan-600 rounded-full"></div>
        </div>
        <Link to="/allbooks" className="text-cyan-600 font-black hover:underline underline-offset-8 flex items-center gap-2 transition-all">
            View All Collections →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {books.map((book) => (
          <Link
            to={`/bookdetails/${book._id}`}
            key={book._id}
            className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-slate-800 flex flex-col h-full"
          >
            {/* Image Section */}
            <div className="relative aspect-[4/5] overflow-hidden p-5 bg-gray-50 dark:bg-slate-800/50">
              <img
                src={book.image}
                alt={book.bookName}
                className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-8 right-8 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-full shadow-lg z-10">
                <span className="text-orange-500 font-black text-sm flex items-center gap-1">
                  ⭐ {book.rating || "5.0"}
                </span>
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex-grow">
                <p className="text-[10px] font-black tracking-[0.2em] uppercase text-purple-600 dark:text-purple-400 mb-3">
                  {book.category}
                </p>
                <h3 className="text-2xl font-black text-gray-800 dark:text-white line-clamp-2 leading-tight mb-3 group-hover:text-cyan-600 transition-colors">
                  {book.bookName}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-bold italic mb-4">
                  by {book.authorName || book.author}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between pt-6 border-t border-gray-100 dark:border-slate-800">
                <p className="text-3xl font-black text-cyan-600 dark:text-cyan-400">
                  ${book.price}
                </p>
                <div className="w-12 h-12 rounded-2xl bg-purple-700 group-hover:bg-cyan-600 text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-12">
                   →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Books;