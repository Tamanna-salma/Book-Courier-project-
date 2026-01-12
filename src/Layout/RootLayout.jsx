import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Pages/Shared/Footer'
import Navbar from '../Pages/Shared/Navber'

const RootLayout = () => {
  return (
    <div className='flex flex-col h-fit bg-gray-100'>
<header  className='sticky !z-[100] top-0 h-fit'>
        <Navbar></Navbar>

</header>
        <Outlet></Outlet>
       <section className='sticky top-0 h-fit'>
        <Footer></Footer>
       </section>
    </div>
  )
}

export default RootLayout