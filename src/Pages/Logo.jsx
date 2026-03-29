import React from 'react'
import logo from '../assets/logo.png';

const Logo = () => {
  return (
    <div className='flex items-center gap-3 group transition-all duration-300'>
      <div className="bg-white p- rounded-full shadow-lg shadow-cyan-600/10 dark:shadow-cyan-400/20 group-hover:rotate-12 transition-transform duration-500">
        <img
          className="w-20 h-16 mix-blend-darken rounded-full"
          src={logo}
          alt="Book Courier Logo"
        />
      </div>
      <p className="hidden lg:flex items-center text-xl font-black tracking-tighter">
        <span className="text-cyan-600">Book</span>
        <span className="text-slate-800 dark:text-white transition-colors duration-300">Courier</span>
      </p>
    </div>
  )
}

export default Logo