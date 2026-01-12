import React from 'react';

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
        <section className="py-10 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        From Our Blog
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Stay updated with the latest news, shipping tips, and book recommendations from our expert team.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div 
                            key={blog.id} 
                            className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                        >
                            {/* Image Wrapper */}
                            <div className="relative h-52 overflow-hidden">
                                <img 
                                    src={blog.image} 
                                    alt={blog.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    News
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                    <span>{blog.date}</span>
                                    <span className="mx-2">•</span>
                                    <span>By {blog.author}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-5">
                                    {blog.excerpt}
                                </p>
                                <button className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2 hover:underline">
                                    Read More <span>&rarr;</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;