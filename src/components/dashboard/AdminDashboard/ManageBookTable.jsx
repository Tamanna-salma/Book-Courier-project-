import React from 'react';
import { FaTrashAlt, FaToggleOn, FaToggleOff } from 'react-icons/fa';

const ManageBookTable = ({ book, handleToggleStatus, handleDelete }) => {
    const { _id, bookName, author, price, status, image, category } = book;

    return (
        <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
            {/* Book Image & Name */}
            <td className="py-3 px-4">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img 
                                src={image} 
                                alt={bookName} 
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-gray-800">{bookName}</div>
                    </div>
                </div>
            </td>

            {/* Author Name */}
            <td className="px-4 text-center text-gray-600">
                {author}
            </td>

            {/* Category */}
            <td className="px-4 text-center">
                <span className="badge badge-ghost badge-sm font-medium">
                    {category}
                </span>
            </td>

            {/* Price */}
            <td className="px-4 text-center font-semibold text-purple-700">
                ${price}
            </td>

            {/* Status with Toggle UI */}
            <td className="px-4 text-center">
                <div className="flex flex-col items-center gap-1">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                        status === 'published' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                        {status}
                    </span>
                </div>
            </td>

            {/* Actions: Toggle & Delete */}
            <td className="px-4 text-center">
                <div className="flex justify-center items-center gap-3">
                    {/* Toggle Status Button */}
                    <button
                        onClick={() => handleToggleStatus(_id, status)}
                        className={`btn btn-sm btn-ghost ${
                            status === 'published' ? 'text-orange-500' : 'text-green-500'
                        }`}
                        title={status === 'published' ? "Click to Unpublish" : "Click to Publish"}
                    >
                        {status === 'published' ? (
                            <FaToggleOn size={24} />
                        ) : (
                            <FaToggleOff size={24} />
                        )}
                    </button>

                    {/* Delete Button */}
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-sm btn-ghost text-red-500 hover:bg-red-50"
                        title="Delete Book"
                    >
                        <FaTrashAlt size={18} />
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default ManageBookTable;