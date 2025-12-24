import React from 'react';
import UseAxiosSecure from '../../../components/Hooks/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import Loading from '../../../Pages/Loading';
import ManageBookTable from './ManageBookTable';

const ManageBook = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: books = [], isLoading, refetch } = useQuery({
        queryKey: ["manage-books"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/manage-books`);
            return res.data;
        },
    });

    const handleToggleStatus = async (id, currentStatus) => {
        const newStatus = currentStatus === "published" ? "unpublished" : "published";
        try {
            const res = await axiosSecure.patch(`/books/status/${id}`, { status: newStatus });
            if (res.data.acknowledged) {
                await refetch();
                Swal.fire({
                    title: "Success!",
                    text: `Book is now ${newStatus}`,
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });
            }
        } catch (error) {
            Swal.fire("Error!", "Failed to update status", "error");
        }
    };

    const handleDelete = async (id) => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "This will delete the book and all associated orders!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete everything!"
        });

        if (!confirm.isConfirmed) return;

        try {
            const res = await axiosSecure.delete(`/books/${id}`);
            if (res.data.deletedCount > 0) {
                await refetch();
                Swal.fire("Deleted!", "Book and related orders removed.", "success");
            }
        } catch (error) {
            Swal.fire("Error!", "Something went wrong.", "error");
        }
    };

    if (isLoading) return <Loading />;

    return (
        <div className="p-4">
            <h2 className="text-center text-3xl font-bold text-purple-600 mb-6">Manage All Books</h2>
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="table w-full bg-white">
                    <thead className="bg-purple-100">
                        <tr>
                            <th>Book</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book) => (
                            <ManageBookTable
                                key={book._id}
                                book={book}
                                handleToggleStatus={handleToggleStatus}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageBook;