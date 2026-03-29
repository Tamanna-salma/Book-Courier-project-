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
                className="max-w-6xl mx-auto bg-gradient-to-br from-cyan-600 to-purple-800 dark:from-slate-900 dark:to-purple-950 rounded-[2rem] p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden transition-all duration-500"
            >
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16 blur-xl"></div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-cyan-400/10 rounded-full translate-x-24 translate-y-24 blur-2xl"></div>

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black mb-6">
                        Don't Miss Any Update!
                    </h2>
                    <p className="text-cyan-50 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                        Subscribe to our newsletter to get the latest shipping rates, book recommendations, and exclusive offers delivered to your inbox.
                    </p>

                    <form
                        onSubmit={handleSubscribe}
                        className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
                    >
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="flex-1 px-8 py-4 rounded-full text-gray-800 bg-white/95 backdrop-blur-sm border-none focus:ring-4 focus:ring-cyan-400/50 outline-none transition-all placeholder-gray-500 font-medium"
                        />
                        <button
                            type="submit"
                            className="bg-white hover:bg-cyan-100 text-cyan-900 font-black px-10 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-400/20 active:scale-95 whitespace-nowrap"
                        >
                            Subscribe <FaPaperPlane className="text-sm" />
                        </button>
                    </form>

                    <p className="text-xs text-cyan-200 mt-6 italic font-medium">
                        * We respect your privacy. No spam, only useful updates.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default NewsLetter;