import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: "How to Pack Books for Safe Shipping",
            excerpt: "Ensure your favorite books arrive in perfect condition with our professional packing tips...",
            image: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=500",
            date: "Jan 10, 2026",
            author: "Admin"
        },
        {
            id: 2,
            title: "Top 10 Must-Read Books This Winter",
            excerpt: "Discover the best-selling titles that are trending in our courier network this season...",
            image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=500",
            date: "Jan 08, 2026",
            author: "Sarah J."
        },
       {
        id: 3,
        title: "Our New Logistics Hub",
        excerpt: "We have expanded our reach! Learn how our new Dhaka hub speeds up your book delivery...",
        image: "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=600",
        date: "Jan 05, 2026",
        author: "Operations Team"
    }
    ];

    return (
        <section className="py-20 bg-transparent transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-800 dark:text-white mb-4">
                        From Our <span className="text-cyan-600">Blog</span>
                    </h2>
                    <div className="w-16 h-1.5 bg-cyan-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        Stay updated with the latest news, shipping tips, and book recommendations from our expert team.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.div 
                            key={blog.id} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-800 group flex flex-col h-full"
                        >
                            {/* Image Wrapper */}
                            <div className="relative h-60 overflow-hidden m-4 rounded-[2rem]">
                                <img 
                                    src={blog.image} 
                                    alt={blog.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 bg-cyan-600/90 backdrop-blur-sm text-white text-xs font-black px-4 py-2 rounded-full tracking-widest uppercase">
                                    News
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 pt-4 flex flex-col flex-grow">
                                <div className="flex-grow">
                                    <div className="flex items-center text-xs font-bold text-gray-400 mb-4 tracking-wider uppercase">
                                        <span>{blog.date}</span>
                                        <span className="mx-2 text-cyan-600">•</span>
                                        <span>By {blog.author}</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-4 group-hover:text-cyan-600 transition-colors leading-tight">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                                        {blog.excerpt}
                                    </p>
                                </div>
                                <button className="text-cyan-600 dark:text-cyan-400 font-black flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm active:scale-95 mt-auto">
                                    Read More <span>&rarr;</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;