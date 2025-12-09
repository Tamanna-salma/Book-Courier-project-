import React from 'react'
import Navbar from '../../Pages/Shared/Navber'
import { Outlet } from 'react-router'
import Footer from '../../Pages/Shared/Footer'

const AuthLayout = () => {
  return (
    <div>
        <header className='sticky z-100 top-0 h-fit'>
            <Navbar></Navbar>
        </header>
        <main className='min-h-fit'>
            <Outlet></Outlet>
        </main>
        <section className='sticky z-100 top-0 h-fit'>
            <Footer></Footer>
        </section>
    </div>
  )
}

export default AuthLayout