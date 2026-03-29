import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import UseAuth from "../../components/Hooks/UseAuth";
import OrderModal from "./OrderModal";
import Loading from "../Loading";
import Dataimg from "../../assets/data.jpeg";
import BookRating from "../../components/Bookrating/BookRating";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaHeartPulse } from "react-icons/fa6";


const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user } = UseAuth();

  useEffect(() => {
    setLoading(true);
    fetch(`https://book-courier-server-ten.vercel.app/books/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleWishlist = () => {
    if (!user) {
      return toast.warning("Please login to add wishlist!");
    }

    const wishlistData = {
      bookId: book._id,
      bookName: book.bookName,
      authorName: book.authorName,
      image: book.image,
      price: book.price,
      userEmail: user?.email,
    };

    fetch("https://book-courier-server-ten.vercel.app/wish-list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(wishlistData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Added to Wishlist!");
        } else {
          toast.info(data.message || "Already in Wishlist!");
        }
      })
      .catch((err) => toast.error("Error: " + err.message));
  };

  if (loading) return <Loading />;

  if (!book) {
    return (
      <div className="flex justify-center mt-5 mb-3">
        <img src={Dataimg} alt="No data found" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 my-16 transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 dark:border-slate-800"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* Image Section */}
          <div className="lg:col-span-2 bg-gray-50 dark:bg-slate-800/50 p-8 flex items-center justify-center relative">
            <div className="absolute -inset-10 bg-cyan-600/5 dark:bg-purple-600/5 blur-3xl rounded-full"></div>
            <img
              src={book.image || Dataimg}
              className="rounded-2xl w-full max-w-sm shadow-2xl border-4 border-white dark:border-slate-900 relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              alt={book.bookName}
            />
          </div>

          {/* Details Section */}
          <div className="lg:col-span-3 p-8 lg:p-12">
            <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-xs font-black uppercase tracking-widest">
                    {book.category}
                </span>
                <span className="px-4 py-1.5 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 rounded-full text-xs font-black uppercase tracking-widest">
                    {book.tags}
                </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-gray-800 dark:text-white mb-6 leading-tight">
                {book.bookName}
            </h2>

            <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center font-black text-purple-600">
                        A
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-tighter">Author</p>
                        <p className="text-lg font-bold text-gray-700 dark:text-gray-200">{book.authorName}</p>
                    </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">
                    {book.description || "No description available for this book."}
                </p>
            </div>

            <div className="grid grid-cols-2 gap-8 py-8 border-y border-gray-100 dark:border-slate-800 mb-10">
                <div>
                   <p className="text-xs text-gray-400 font-bold uppercase mb-1">Publisher</p>
                   <p className="font-bold text-gray-700 dark:text-gray-200">{book.publisher}</p>
                </div>
                <div>
                   <p className="text-xs text-gray-400 font-bold uppercase mb-1">Year</p>
                   <p className="font-bold text-gray-700 dark:text-gray-200">{book.publishedYear}</p>
                </div>
                <div>
                   <p className="text-xs text-gray-400 font-bold uppercase mb-1">Pages</p>
                   <p className="font-bold text-gray-700 dark:text-gray-200">{book.pageNumber}</p>
                </div>
                <div>
                   <p className="text-xs text-gray-400 font-bold uppercase mb-1">Rating</p>
                   <p className="font-bold text-orange-500 flex items-center gap-1 text-xl">⭐ {book.rating}</p>
                </div>
            </div>

            <div className="flex items-center justify-between gap-6">
                <div>
                    <p className="text-xs text-gray-400 font-bold uppercase mb-1">Price</p>
                    <p className="text-4xl font-black text-cyan-600 dark:text-cyan-400">${book.price}</p>
                </div>
                <div className="flex gap-4 flex-1 max-w-sm">
                    <button
                    className="flex-1 bg-purple-700 hover:bg-purple-800 text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-purple-600/20 active:scale-95"
                    onClick={() => setOpenModal(true)}
                    >
                    Order Now
                    </button>
                    <button
                    onClick={handleWishlist}
                    className="bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-800 dark:text-white p-4 rounded-2xl transition-all active:scale-95 border border-transparent dark:border-slate-700"
                    title="Add to Wishlist"
                    >
                    <FaHeartPulse className="text-xl text-red-500" />
                    </button>
                </div>
            </div>
          </div>
        </div>
      </motion.div>

      {openModal && (
        <OrderModal
          book={book}
          user={user}
          closeModal={() => setOpenModal(false)}
        />
      )}
      <div className="mt-20">
        <BookRating book={book}></BookRating>
      </div>
    </div>
  );
};

export default BookDetails;