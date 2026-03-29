import React from 'react';
import errorImg from "../assets/Error.jpeg";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const Error = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col items-center justify-center p-6 transition-colors duration-300">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-lg"
            >
                <div className="relative mb-10 group">
                    <div className="absolute inset-0 bg-cyan-600/20 blur-[100px] rounded-full group-hover:bg-cyan-600/30 transition-colors"></div>
                    <img className="relative w-full rounded-[3rem] shadow-2xl border-4 border-white dark:border-slate-900" src={errorImg} alt="Error 404" />
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black text-gray-800 dark:text-white mb-6 tracking-tighter">
                    Oops! <span className="text-cyan-600">Lost in Space?</span>
                </h1>
                <p className="text-gray-500 dark:text-gray-400 font-bold mb-10 text-lg leading-relaxed">
                    The page you are looking for doesn't exist or has been moved. Let's get you back on track.
                </p>
                
                <Link 
                    to="/" 
                    className="inline-flex items-center gap-3 px-10 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-cyan-600/20 active:scale-95 uppercase tracking-widest text-sm"
                >
                    <IoMdArrowRoundBack size={20} />
                    Back to Safety
                </Link>
            </motion.div>
        </div>
    );
};

export default Error