import React from "react";
import UseAuth from "../../../components/Hooks/UseAuth";
import { useForm } from "react-hook-form";
import UseAxiosSecure from "../../../components/Hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { FaBook, FaDollarSign, FaImage, FaLanguage, FaLayerGroup, FaUser } from "react-icons/fa6";
import { FaCalendarAlt, FaFileAlt, FaSortNumericDown } from "react-icons/fa";


const AddBook = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const handleBookAdd = async (data) => {
    const {
      bookName,
      author,
      publisher,
      yearOfPublishing,
     totalPages,  
      price,
      stockQuantity,
      category,
      status,
      tags,
      description,
      bookCover,
    } = data;
    const imageFile = bookCover[0];

    try {
      const image = await imageUpload(imageFile);

      const bookData = {
       bookName,
      author,
      publisher,
      yearOfPublishing,
     totalPages,  
      price,
      stockQuantity,
      category,
      status,
      tags,
      description,
      bookCover,
        image,
      };
      await axiosSecure.post("/books", bookData);
      Swal.fire({
        title: `New Book added!`,
        text: "New Book Added successful",
        icon: "success",
        confirmButtonColor: "#22c55e",
      });
      reset();
    } catch (error) {}
  };
  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-purple-600 ">
        Add a New Book
      </h1>
      <form
        onSubmit={handleSubmit(handleBookAdd)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaBook className="text-purple-500" /> Book Name
          </label>
          <input
            type="text"
            {...register("bookName", { required: true })}
            placeholder="Enter book Name"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaUser className="text-purple-500" /> Author Name
          </label>
          <input
            {...register("authorName", { required: true })}
            type="text"
            defaultValue={user?.displayName}
            placeholder="Enter author name"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaUser className="text-purple-500" /> Publisher
          </label>
          <input
            {...register("publisher", { required: true })}
            type="text"
            placeholder="Enter publisher name"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaCalendarAlt className="text-purple-500" /> Published Year
          </label>
          <input
            {...register("publishedYear", { required: true })}
            type="number"
            placeholder="Enter published year"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaSortNumericDown className="text-purple-500" /> Total page
          </label>
          <input
            {...register("pageNumber", { required: true })}
            type="number"
            placeholder="Enter total pages"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        
        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaDollarSign className="text-purple-500" /> Price
          </label>
          <input
            {...register("price", { required: true })}
            type="number"
            placeholder="Enter price"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaSortNumericDown className="text-purple-500" /> Stock Quantity
          </label>
          <input
            {...register("stockQuantity", { required: true })}
            type="number"
            placeholder="Enter stock quantity"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaLayerGroup className="text-purple-500" /> Format
          </label>
          <input
            {...register("format", { required: true })}
            type="text"
            placeholder="Hardcover / Paperback / eBook"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaLayerGroup className="text-purple-500" /> Category
          </label>
          <input
            {...register("category", { required: true })}
            type="text"
            placeholder="Enter category"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaLayerGroup className="text-purple-500" /> tags
          </label>
          <input
            {...register("tags", { required: true })}
            type="text"
            placeholder="Enter Tags"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaLayerGroup className="text-purple-500" /> Status
          </label>
          <select
            {...register("status", { required: true })}
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            defaultValue=""
          >
            <option value="" disabled>
              Select status
            </option>
            <option value="published">Published</option>
            <option value="unpublished">Unpublished</option>
          </select>
        </div>

        {/* Book Cover (full width) */}
        <div className="md:col-span-2">
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaImage className="text-purple-500" /> Book Cover
          </label>
          <input
            {...register("bookCover", { required: true })}
            type="file"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 font-semibold mb-1">
            Book Description
          </label>
          <textarea
            {...register("description", { required: true })}
            placeholder="Enter book description"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Submit Button (full width) */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;