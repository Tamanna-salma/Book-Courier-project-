import React from 'react'
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const AllbooksCard = ({ book }) => {

  const {
    _id,
    bookName,
    image,
    author,
    category,
    price,
    rating
  } = book;

  return (
    <motion.div 
        whileHover={{ y: -8 }}
        className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-800 flex flex-col h-full group"
    >
      {/* Image Overlay */}
      <div className="relative overflow-hidden aspect-[4/5] p-4 bg-gray-50 dark:bg-slate-800/50">
        <img
            src={image}
            alt={bookName}
            className="w-full h-full object-cover rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-6 right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
            <span className="text-orange-500 font-bold flex items-center gap-1">
                ⭐ {rating}
            </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
            <p className="text-xs font-black tracking-widest uppercase text-purple-600 dark:text-purple-400 mb-2">
                {category}
            </p>
            <h3 className="text-xl font-black text-gray-800 dark:text-white line-clamp-2 leading-tight mb-2 group-hover:text-cyan-600 transition-colors">
            {bookName}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium italic">
            by {author}
            </p>
        </div>

        <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-800">
            <p className="text-2xl font-black text-cyan-600 dark:text-cyan-400">
                ${price}
            </p>
            <Link to={`/bookDetails/${_id}`} className="flex-1 ml-4">
                <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-purple-600/20 whitespace-nowrap px-4">
                    Details
                </button>
            </Link>
        </div>
      </div>
    </motion.div>
  )
};

export default AllbooksCard;