import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Followers = () => {
    const socialStats = [
        { id: 1, name: "Facebook", count: "120K+", icon: <FaFacebookF />, color: "bg-blue-600", link: "#" },
        { id: 2, name: "Twitter", count: "45K+", icon: <FaEnvelope />, color: "bg-sky-400", link: "#" },
        { id: 3, name: "Instagram", count: "85K+", icon: <FaInstagram />, color: "bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500", link: "#" },
        { id: 4, name: "LinkedIn", count: "15K+", icon: <FaLinkedinIn />, color: "bg-blue-700", link: "#" },
        { id: 5, name: "YouTube", count: "30K+", icon: <FaYoutube />, color: "bg-red-600", link: "#" },
    ];

    return (
    <section className="py-20 bg-transparent transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-gray-800 dark:text-white mb-4">
                    Join Our <span className="text-cyan-600">Community</span>
                </h2>
                <div className="w-16 h-1.5 bg-cyan-600 mx-auto rounded-full mb-6"></div>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    Follow us on social media to get the latest book reviews, delivery updates, and participate in our weekly giveaways.
                </p>
            </div>

            {/* Followers Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {socialStats.map((social, index) => (
                    <motion.a
                        key={social.id}
                        href={social.link}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -10 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-lg hover:shadow-2xl border border-gray-100 dark:border-slate-800 text-center group transition-all"
                    >
                        <div className={`w-16 h-16 ${social.color} text-white rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                            {social.icon}
                        </div>
                        <h4 className="text-3xl font-black text-gray-800 dark:text-white mb-2">
                            {social.count}
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400 font-black tracking-widest uppercase text-[10px]">
                            {social.name}
                        </p>
                    </motion.a>
                ))}
            </div>

            {/* Call to Action */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="mt-16 text-center"
            >
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-black py-4 px-12 rounded-2xl shadow-xl shadow-cyan-600/20 transition-all active:scale-95 text-lg">
                    Follow All Platforms
                </button>
            </motion.div>
        </div>
    </section>
    );
};

export default Followers;