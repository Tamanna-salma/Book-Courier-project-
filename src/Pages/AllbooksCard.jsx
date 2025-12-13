import React from 'react'
import { Link } from 'react-router';

const AllbooksCard = ({book}) => {

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
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      
      {/* Image */}
      <img
        src={image}
        alt={bookName}
        className="w-full h-56 px-3 py-5 rounded-2xl"
      />

      {/* Content */}
      <div className="p-2">
        <h3 className="text-lg font-bold line-clamp-1">
          {bookName}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          by : {author}
        </p>

        <p className="text-sm text-purple-600 mt-1">
          {category}
        </p>

        <p className="text-xl flex justify-between font-semibold text-purple-700 mt-3">
           {price}
            <span className="text-orange-500 font-medium">
                  ⭐ {rating}
                </span>
        </p>

        <Link to={`/bookDetails/${_id}`}>
          <button className="btn w-full mt-4 bg-purple-700 rounded-xl text-white hover:bg-purple-800">
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
};

export default AllbooksCard;