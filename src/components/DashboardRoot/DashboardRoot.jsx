import React from 'react'

import useRole from '../Hooks/useRole'
import AdminDashboard from './AdminDashboard';
import LibrarianDeshboard from './LibrarianDeshboard';
import UserDashboard from './UserDashboard';
const DashboardRoot = () => {
    const [role]=useRole();
  return (
    <div>
        
    {role === "admin" && <AdminDashboard></AdminDashboard> }
    {role === "Librarian" && <LibrarianDeshboard></LibrarianDeshboard>}
    {role === "customer" && <UserDashboard></UserDashboard>}
    
    </div>
  )
};

export default DashboardRoot;