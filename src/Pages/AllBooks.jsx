import { useEffect, useState } from "react";
import AllbooksCard from "./AllbooksCard";
import Loading from "./Loading";
import match from "../assets/match.jpeg";
import axios from "axios";
import { motion } from "framer-motion";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const sortQuery = sort === "low" ? "low-high" : sort === "high" ? "high-low" : "";
        const res = await axios.get(`https://book-courier-server-ten.vercel.app/books?search=${search}&sort=${sortQuery}`);
        setBooks(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [search, sort]);

  return (
    <div className="max-w-7xl mx-auto px-4 my-16 transition-colors duration-300 min-h-screen">
      <h2 className="text-3xl md:text-5xl font-black text-center mb-10 text-gray-800 dark:text-white">
        Explore <span className="text-cyan-600">All Books</span>
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
        <div className="w-full max-w-md relative group">
            <input
            type="text"
            placeholder="Search by book name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-8 py-4 rounded-full bg-white dark:bg-slate-900 shadow-lg border border-gray-100 dark:border-slate-800 focus:ring-4 focus:ring-cyan-600/20 outline-none transition-all dark:text-white dark:placeholder-gray-500 font-medium"
            />
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-8 py-4 rounded-full bg-white dark:bg-slate-900 shadow-lg border border-gray-100 dark:border-slate-800 focus:ring-4 focus:ring-cyan-600/20 outline-none transition-all dark:text-white font-medium cursor-pointer"
        >
          <option value="">Sort by price</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>
      </div>

      {loading ? (
        <Loading />
      ) : books.length === 0 ? (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col justify-center items-center py-20"
        >
          <img src={match} alt="No data" className="w-64 grayscale opacity-50 mb-6" />
          <p className="text-xl font-bold text-gray-400">No books found matching your search.</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <AllbooksCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooks;