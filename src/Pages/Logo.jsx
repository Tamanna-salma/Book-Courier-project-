import React from 'react'

import logo from '../assets/logo.png';
const Logo = () => {
  return (
    
            <div className='flex items-end pb-4'>
                <img className="w-20 h-16 mix-blend-darken rounded-full hidden lg:flex" src={logo} alt="" />
             
          <p className="text-purple-600 text-2xl">Book<span className="text-gray-700 dark:text-white">Courier</span> </p>
          
            </div>
      
  )
}

export default Logo