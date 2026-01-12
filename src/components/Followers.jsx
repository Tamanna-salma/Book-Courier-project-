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
        <section className="py-10  bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        Join Our Community
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                        Follow us on social media to get the latest book reviews, delivery updates, and participate in our weekly giveaways.
                    </p>
                </div>

                {/* Followers Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {socialStats.map((social, index) => (
                        <motion.a
                            key={social.id}
                            href={social.link}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -8 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 text-center group transition-all"
                        >
                            <div className={`w-14 h-14 ${social.color} text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                {social.icon}
                            </div>
                            <h4 className="text-2xl font-bold text-gray-800 dark:text-white">
                                {social.count}
                            </h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                                {social.name} Followers
                            </p>
                        </motion.a>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-12 text-center"
                >
                    <button className="bg-cyan-800 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all active:scale-95">
                        Follow All Platforms
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Followers;