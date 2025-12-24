import React from 'react';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../components/Hooks/UseAxiosSecure';

const UpdateRoleModal = ({ user, isOpen, closeModal, refetch }) => {
  const axiosSecure = UseAxiosSecure();

  const handleUpdate = async (selectedRole) => {
    try {
      const res = await axiosSecure.patch(`/users/role/${user?._id}`, { role: selectedRole });
      if (res.data.modifiedCount > 0) {
        await refetch();
        Swal.fire("Success!", `User role is now ${selectedRole}`, "success");
        closeModal();
      } else {
        Swal.fire("Info", "Role is already set to this", "info");
        closeModal();
      }
    } catch (error) {
      Swal.fire("Error!", "Something went wrong", "error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-80 border-t-4 border-purple-600">
        <h2 className="text-xl font-bold mb-2 text-center text-purple-600">Update User Role</h2>
        <p className="text-center text-sm text-gray-600 mb-6">Current User: <strong>{user?.name}</strong></p>
        
        <div className="flex flex-col gap-3">
          {/* Admin Button */}
          <button 
            onClick={() => handleUpdate('admin')}
            className="bg-purple-600 text-white py-2 rounded shadow-md hover:bg-purple-700 font-medium transition"
          >
            Make Admin
          </button>

          {/* Librarian Button (New) */}
          <button 
            onClick={() => handleUpdate('librarian')}
            className="bg-blue-600 text-white py-2 rounded shadow-md hover:bg-blue-700 font-medium transition"
          >
            Make Librarian
          </button>

          {/* Customer Button */}
          <button 
            onClick={() => handleUpdate('customer')}
            className="bg-gray-200 text-gray-800 py-2 rounded shadow-sm hover:bg-gray-300 font-medium transition"
          >
            Make Customer
          </button>

          <button 
            onClick={closeModal}
            className="text-red-500 mt-4 text-sm font-semibold hover:underline"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateRoleModal;