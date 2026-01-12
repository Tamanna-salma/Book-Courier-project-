import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import Swal from 'sweetalert2'; 

const NewsLetter = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        
        if (email) {
            // Success State Logic
            Swal.fire({
                title: 'Success!',
                text: 'Thank you for subscribing to our newsletter!',
                icon: 'success',
                confirmButtonColor: '#2563eb',
            });
            setEmail(""); 
        }
    };

    return (
        <section className="py-10 px-4">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto  bg-gradient-to-br from bg-gray-400 to-indigo-800  rounded-[2rem] p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
            >
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-black/10 rounded-full translate-x-16 translate-y-16"></div>

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                        Don't Miss Any Update!
                    </h2>
                    <p className="text-blue-100 mb-8 max-w-lg mx-auto">
                        Subscribe to our newsletter to get the latest shipping rates, book recommendations, and exclusive offers delivered to your inbox.
                    </p>

                    <form 
                        onSubmit={handleSubscribe}
                        className="flex flex-col md:flex-row gap-4 max-w-md mx-auto"
                    >
                        <input 
                            type="email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="flex-1 px-6 py-4 outline-2 rounded-full text-gray-800 focus:ring-2 focus:ring-white dark:bg-gray-100"
                        />
                        <button 
                            type="submit"
                            className="bg-white hover:bg-cyan-600 text-blue-900 font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Subscribe <FaPaperPlane />
                        </button>
                    </form>
                    
                    <p className="text-xs text-blue-200 mt-4 italic">
                        * We respect your privacy. No spam, only useful updates.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default NewsLetter;