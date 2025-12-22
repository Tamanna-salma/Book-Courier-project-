import React from 'react'

import useRole from '../Hooks/useRole'
import AdminDashboard from './AdminDashboard';
import LibrarianDeshboard from './LibrarianDeshboard';
import UserDashboard from './UserDashboard';
import Loading from '../../Pages/Loading';
const DashboardRoot = () => {
  const { role, isRoleLoading } = useRole();
  if (isRoleLoading) {
    return <Loading></Loading>
  }
  if (role === "admin") {
    <AdminDashboard></AdminDashboard>
  } else if (role === "Librarian") {
    <LibrarianDeshboard></LibrarianDeshboard>

  }
  else {
    <UserDashboard></UserDashboard>
  }

}

export default DashboardRoot;