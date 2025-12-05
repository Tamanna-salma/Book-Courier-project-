import React from 'react'
import { FaFacebook, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div>
         <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
     
      <div className=" w-full lg:max-w-7xl mx-auto px-10 lg:px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">

        {/* quick links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
          <p>Email: <span className="text-gray-400">info@example.com</span></p>
          <p>Phone: <span className="text-gray-400">+123 456 789</span></p>
          <p>Address: <span className="text-gray-400">City, Country</span></p>
        </div>

        {/* social */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex items-center space-x-4 text-2xl">

            {/* X logo */}
            <div className="flex items-center justify-center py-3 gap-4">
            <Link to="https://x.com/">
              <FaXTwitter className='text-3xl text-white' />
            </Link >

            <Link to="https://www.youtube.com/" >
              <FaYoutube className='text-2xl text-red-500'></FaYoutube>
            </Link>

            <Link to="https://web.facebook.com/?_rdc=1&_rdr#" >
              <FaFacebook className='text-2xl text-blue-700'></FaFacebook>
            </Link>
          </div>

          </div>
        </div>

      </div>

      
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © 2024 Your Company. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer;