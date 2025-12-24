import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { imageUpload } from "../../../utilites";

const UpdateBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const axiosSecure = UseAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    // Fetching the existing book data
    const { data: book = {}, isLoading } = useQuery({
        queryKey: ["updateBooks", id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/update-book/${id}`);
            return res.data;
        },
    });

    // Prefill the form once data is loaded
    useEffect(() => {
        if (book) {
            reset(book);
        }
    }, [book, reset]);

    const handleUpdate = async (data) => {
        try {
            let imageUrl = book.image; // Keep current image by default

            // If a new image is selected, upload it
            if (data.bookCover && data.bookCover.length > 0 && data.bookCover[0] instanceof File) {
                imageUrl = await imageUpload(data.bookCover[0]);
            }

            // Destructure to remove file object and _id
            const { bookCover, _id, ...otherData } = data;

            const updatedBookData = {
                ...otherData,
                image: imageUrl,
                price: parseFloat(data.price),
                stockQuantity: parseInt(data.stockQuantity),
                totalPages: parseInt(data.totalPages),
                publishedYear: parseInt(data.publishedYear),
            };

            const res = await axiosSecure.put(`/books/${id}`, updatedBookData);
            
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    title: "Success!",
                    text: "Book updated successfully",
                    icon: "success",
                    confirmButtonColor: "#A855F7",
                });
                navigate('/dashboard/my-books');
            } else {
                Swal.fire({
                    title: "No Changes Made",
                    text: "The information remains the same.",
                    icon: "info"
                });
            }
        } catch (error) {
            console.error(error);
            Swal.fire("Error!", "Something went wrong while updating.", "error");
        }
    };

    if (isLoading) return <div className="text-center py-20 text-purple-600 font-bold">Loading...</div>;

    return (
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
            <h1 className="text-xl lg:text-3xl font-bold mb-8 text-center text-gray-800">
                Update Book Information
            </h1>
            
            <form onSubmit={handleSubmit(handleUpdate)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Book Name */}
                <div>
                    <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2"><FaBook /> Book Name</label>
                    <input type="text" {...register("bookName", { required: true })} className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>

                {/* Publisher */}
                <div>
                    <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2"><FaUser /> Publisher</label>
                    <input type="text" {...register("publisher", { required: true })} className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>

                {/* Published Year */}
                <div>
                    <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2"><FaCalendarAlt /> Published Year</label>
                    <input type="number" {...register("publishedYear", { required: true })} className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>

                {/* Total Pages */}
                <div>
                    <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2"><FaSortNumericDown /> Total Pages</label>
                    <input type="number" {...register("totalPages", { required: true })} className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>

                {/* Price */}
                <div>
                    <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2"><FaDollarSign /> Price</label>
                    <input type="number" step="0.01" {...register("price", { required: true })} className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>

                {/* Stock */}
                <div>
                    <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2"><FaSortNumericDown /> Stock Quantity</label>
                    <input type="number" {...register("stockQuantity", { required: true })} className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>

                {/* Category */}
                <div>
                    <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2"><FaLayerGroup /> Category</label>
                    <input type="text" {...register("category", { required: true })} className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>

                {/* Status */}
                <div>
                    <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2"><FaLayerGroup className="text-purple-500" /> Status</label>
                    <select {...register("status", { required: true })} className="w-full border border-gray-300 rounded px-3 py-2">
                        <option value="published">Published</option>
                        <option value="unpublished">Unpublished</option>
                    </select>
                </div>

                {/* Book Cover */}
                <div className="md:col-span-2">
                    <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2"><FaImage /> Update Book Cover (Optional)</label>
                    <input type="file" {...register("bookCover")} className="w-full border border-gray-300 rounded px-3 py-2" />
                    <p className="text-xs text-purple-600 mt-1 italic">* Current cover will be kept if empty</p>
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                    <label className="block text-gray-700 font-semibold mb-1">Book Description</label>
                    <textarea rows="4" {...register("description", { required: true })} className="w-full border border-gray-300 rounded px-3 py-2" />
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2">
                    <button type="submit" className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition font-bold">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateBook;