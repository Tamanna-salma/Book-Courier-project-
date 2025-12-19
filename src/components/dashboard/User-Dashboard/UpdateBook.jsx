import React from "react";
import { FaCalendarAlt, FaFileAlt, FaSortNumericDown } from "react-icons/fa";
import { FaBook, FaDollarSign, FaImage, FaLanguage, FaLayerGroup, FaUser } from "react-icons/fa6";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { imageUpload } from "../../../utilites";

const UpdateBook = () => {
    const { id } = useParams();
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    const { data: updateBooks = {} } = useQuery({
        queryKey: ["updateBooks", id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/update-book/${id}`);
            return res.data;
        },
    });


    const handleBookAdd = async (data) => {
        const {
            bookName,
            author,
            publisher,
            publishedYear,
            totalPages,
            price,
            stockQuantity,
            category,
            status,
            tags,
            description,
            bookCover,
            format,

        } = data;
        const imageFile = bookCover[0];

        try {
            const image = await imageUpload(imageFile);

            const bookData = {
            bookName,
            author,
            publisher,
           publishedYear,
            totalPages,
            price,
            stockQuantity,
            category,
            status,
            tags,
            description,
            bookCover,
            image,
            format,
            };
            await axiosSecure.put(`/books/${id}`, bookData);
            Swal.fire({
                title: `Update book ${bookName}!`,
                text: "Update book  successful",
                icon: "success",
                confirmButtonColor: "#22c55e",
            });
            reset();
        } catch (error) {
            Swal.fire({
                      title: "Error!",
                      text: "Something went wrong. Please try again.",
                      icon: "error",
                      confirmButtonText: "OK" ,error
                    });
        }
    };
    return (
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
            <h1 className="text-xl lg:text-3xl font-bold mb-8 text-center ">
                Add a New Book
            </h1>
            <form
                onSubmit={handleSubmit(handleBookAdd)}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                <div>
                    <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
                        <FaBook className="" /> Book Name
                    </label>
                    <input
                        type="text"
                        defaultValue={updateBooks.bookName}
                        {...register("bookName", { required: true })}
                        placeholder="Enter book Name"
                        className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
                        <FaUser className="" /> Publisher
                    </label>
                    <input
                        defaultValue={updateBooks.publisher}
                        {...register("publisher", { required: true })}
                        type="text"
                        placeholder="Enter publisher name"
                        className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
                        <FaCalendarAlt className="" /> Published Year
                    </label>
                    <input
                        defaultValue={updateBooks.publishedYear}
                        {...register("publishedYear", { required: true })}
                        type="number"
                        placeholder="Enter published year"
                        className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 "
                    />
                </div>

                <div>
                    <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
                        <FaSortNumericDown className="" /> Total page
                    </label>
                    <input
                        defaultValue={updateBooks. totalPages}
                        {...register("totalPage", { required: true })}
                        type="number"
                        placeholder="Enter total pages"
                        className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 "
                    />
                </div>          

                <div>
                    <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
                        <FaDollarSign className="" /> Price
                    </label>
                    <input
                        defaultValue={updateBooks.price}
                        {...register("price", { required: true })}
                        type="number"
                        placeholder="Enter price"
                        className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 "
                    />
                </div>

                <div>
                    <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
                        <FaSortNumericDown className="" /> Stock Quantity
                    </label>
                    <input
                        defaultValue={updateBooks.stockQuantity}
                        {...register("stockQuantity", { required: true })}
                        type="number"
                        placeholder="Enter stock quantity"
                        className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2"
                    />
                </div>

                <div>
                    <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
                        <FaLayerGroup className="" /> Format
                    </label>
                    <input
                        defaultValue={updateBooks.format}
                        {...register("format", { required: true })}
                        type="text"
                        placeholder="Hardcover / Paperback / eBook"
                        className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 "
                    />
                </div>

                <div>
                    <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
                        <FaLayerGroup className="" /> Category
                    </label>
                    <input
                        defaultValue={updateBooks.category}
                        {...register("category", { required: true })}
                        type="text"
                        placeholder="Enter category"
                        className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 "
                    />
                </div>
                <div>
                    <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
                        <FaLayerGroup className="" /> tags
                    </label>
                    <input
                        defaultValue={updateBooks.tags}
                        {...register("tags", { required: true })}
                        type="text"
                        placeholder="Enter tags"
                        className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 "
                    />
                </div>

                <div>
                    <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
                        <FaLayerGroup className="text-purple-500" /> Status
                    </label>
                    <select
                        {...register("status", { required: true })}
                        className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 "
                        defaultValue={updateBooks?.status}
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
                        <FaImage className="" /> Book Cover
                    </label>
                    <input
                        {...register("bookCover", { required: true })}
                        type="file"
                        className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 "
                    />
                </div>

                {/* Book Description (full width) */}
                <div className="md:col-span-2">
                    <label className="block text-gray-700 font-semibold mb-1">
                        Book Description
                    </label>
                    <textarea
                        defaultValue={updateBooks?.description}
                        {...register("description", { required: true })}
                        placeholder="Enter book description"
                        className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 "
                    />
                </div>

                {/* Submit Button (full width) */}
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-800 transition"
                    >
                        Update Book
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateBook;