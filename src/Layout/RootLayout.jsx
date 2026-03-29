import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Pages/Shared/Footer'
import Navbar from '../Pages/Shared/Navber'

const RootLayout = () => {
  return (
    <div className='flex flex-col min-h-screen bg-white dark:bg-slate-950 text-gray-800 dark:text-gray-100 transition-colors duration-300'>
      <header className='sticky !z-[100] top-0 h-fit'>
        <Navbar></Navbar>
      </header>
      <main className="flex-1">
        <Outlet></Outlet>
      </main>
      <section className='mt-auto'>
        <Footer></Footer>
      </section>
    </div>
  )
}

export default RootLayout