import React from 'react'
import AdminDashboard from './AdminDashboard/AdminDashboard'
import LibrarianDeshboard from './Librarian-Dashboard/LibrarianDeshboard'
import UserDashboard from './User-Dashboard/UserDashboard'

const DashBoardRoot = () => {
  return (
    <div>
        <AdminDashboard></AdminDashboard>
        <LibrarianDeshboard></LibrarianDeshboard>
        <UserDashboard></UserDashboard>
    </div>
  )
}

export default DashBoardRoot