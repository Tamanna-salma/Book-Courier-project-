import React from 'react'

import { NavLink, Outlet } from "react-router";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-purple-800 text-white p-5">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

        <nav className="space-y-3">
          <NavLink to="users" className="block hover:bg-purple-600 p-2 rounded">
            All Users
          </NavLink>

          <NavLink to="manage-books" className="block hover:bg-purple-600 p-2 rounded">
            Manage Books
          </NavLink>

          <NavLink to="profile" className="block hover:bg-purple-600 p-2 rounded">
            My Profile
          </NavLink>
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
