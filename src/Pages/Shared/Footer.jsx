import React from 'react'
import { FaFacebook, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router'
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-slate-950 border-t border-gray-100 dark:border-slate-900 pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="space-y-6">
          <Link to="/" className="inline-block transition-transform hover:scale-105 active:scale-95">
            <Logo />
          </Link>
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            Your premier destination for high-quality books, delivered with care to every corner of Bangladesh. Join our reading revolution today.
          </p>
          <div className="flex items-center gap-4">
            <Link to="#" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-slate-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-cyan-600 hover:text-white transition-all duration-300">
              <FaFacebook size={20} />
            </Link>
            <Link to="#" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-slate-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-cyan-600 hover:text-white transition-all duration-300">
              <FaXTwitter size={20} />
            </Link>
            <Link to="#" className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-slate-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-cyan-600 hover:text-white transition-all duration-300">
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-black text-gray-800 dark:text-white mb-8 tracking-widest uppercase text-sm">Explore</h3>
          <ul className="space-y-4">
            <li><Link to="/" className="text-gray-500 dark:text-gray-400 font-bold hover:text-cyan-600 transition-colors">Home</Link></li>
            <li><Link to="/allbooks" className="text-gray-500 dark:text-gray-400 font-bold hover:text-cyan-600 transition-colors">All Books</Link></li>
            <li><Link to="/about" className="text-gray-500 dark:text-gray-400 font-bold hover:text-cyan-600 transition-colors">About Us</Link></li>
            <li><Link to="/blog" className="text-gray-500 dark:text-gray-400 font-bold hover:text-cyan-600 transition-colors">Our Blog</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-black text-gray-800 dark:text-white mb-8 tracking-widest uppercase text-sm">Support</h3>
          <ul className="space-y-4">
            <li><Link to="/support" className="text-gray-500 dark:text-gray-400 font-bold hover:text-cyan-600 transition-colors">Help Center</Link></li>
            <li><Link to="/covarage" className="text-gray-500 dark:text-gray-400 font-bold hover:text-cyan-600 transition-colors">Coverage Area</Link></li>
            <li><Link to="#" className="text-gray-500 dark:text-gray-400 font-bold hover:text-cyan-600 transition-colors">Privacy Policy</Link></li>
            <li><Link to="#" className="text-gray-500 dark:text-gray-400 font-bold hover:text-cyan-600 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Newsletter / Contact (Merging for 4 columns) */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-black text-gray-800 dark:text-white mb-8 tracking-widest uppercase text-sm">Contact Us</h3>
            <p className="text-gray-500 dark:text-gray-400 font-bold">Email: support@bookcourier.com</p>
            <p className="text-gray-500 dark:text-gray-400 font-bold mt-2">Phone: +880 1234 567 890</p>
          </div>
          <div className="p-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl">
            <div className="bg-white dark:bg-slate-900 rounded-[0.9rem] p-4">
              <p className="text-sm font-black text-gray-800 dark:text-white mb-2">Subscribe to News</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email" className="w-full bg-gray-100 dark:bg-slate-800 border-none rounded-xl px-3 py-2 text-sm" />
                <button className="bg-cyan-600 text-white p-2 rounded-xl">→</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20 pt-10 border-t border-gray-400 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 font-bold text-sm">
          © {new Date().getFullYear()} Book Courier Inc. All rights reserved.
        </p>
        <p className="text-gray-400 font-bold text-sm flex items-center gap-2">
          Made with <span className="text-rose-500 animate-pulse">❤</span> for Readers
        </p>
      </div>
    </footer>
  );
};

export default Footer;