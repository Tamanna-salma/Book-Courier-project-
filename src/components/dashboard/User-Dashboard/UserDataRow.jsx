
import React, { useState } from "react";
import UpdateRoleModal from "../modal/UpdateRoleModal";

const UserDataRow = ({ users, refetch }) => {
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  return (
    <tr className="bg-white hover:bg-purple-50/50 transition-colors border-b border-gray-50 last:border-0">
      <td className="px-6 py-5 text-center">
        <div className="flex justify-center">
          <img 
            src={users?.image || "https://i.ibb.co.com/vP0B9sV/user.png"} 
            alt={users?.name} 
            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md shadow-purple-600/10" 
          />
        </div>
      </td>
      <td className="px-6 py-5 text-center">
        <p className="text-gray-700 font-bold ">{users?.name}</p>
      </td>
      <td className="px-6 py-5 text-center">
        <p className="text-gray-500 font-semibold ">{users?.email}</p>
      </td>
      <td className="px-6 py-5 text-center">
        <span className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-black uppercase tracking-wider">
          {users?.role}
        </span>
      </td>
      <td className="px-6 py-5 text-center">
        <p className="text-gray-500 font-bold text-xs uppercase tracking-tight">
          {users?.last_loggedIn ? new Date(users?.last_loggedIn).toLocaleDateString() : "Never"}
          <span className="block text-[10px] text-gray-400 mt-0.5">{users?.last_loggedIn ? new Date(users?.last_loggedIn).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ""}</span>
        </p>
      </td>

      <td className="px-6 py-5 text-center">
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-2 bg-purple-100 text-purple-700 text-xs font-black rounded-full hover:bg-purple-600 hover:text-white transition-all active:scale-95 shadow-sm shadow-purple-600/10"
        >
          Update Role
        </button>
        {/* Modal */}
        <UpdateRoleModal
          refetch={refetch}
          user={users}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </td>
    </tr>
  );
};

export default UserDataRow;
