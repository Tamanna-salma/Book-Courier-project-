import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Anika Rahman",
            role: "Avid Reader",
            image: "https://i.pravatar.cc/150?u=anika",
            review: "The service from Book Courier is exceptional! I sent books from Dhaka to Chittagong and they were delivered within just 24 hours. The packaging was also very secure.",
            rating: 5
        },
        {
            id: 2,
            name: "Tanvir Ahmed",
            role: "Student",
            image: "https://i.pravatar.cc/150?u=tanvir",
            review: "Their courier charges are very affordable. For students who need to exchange books frequently, there's no better platform than this. Highly recommended!",
            rating: 4
        },
        {
            id: 3,
            name: "Sumi Akter",
            role: "Writer",
            image: "https://i.pravatar.cc/150?u=sumi",
            review: "Their real-time tracking system is a lifesaver. I could see exactly where my books were at every moment. A very professional and reliable service.",
            rating: 5
        },
        {
            id: 4,
            name: "Nasir Uddin",
            role: "Bookstore Owner",
            image: "https://i.pravatar.cc/150?u=nasir",
            review: "I use this service for my business deliveries. Their bulk shipping rates and careful handling of rare books are unmatched. Truly a game changer!",
            rating: 5
        }
    ];

    return (
        <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header with Fade-in Animation */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        What Our Readers Say
                    </h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                        Thousands of book lovers trust us every day to deliver their favorite stories safely and on time.
                    </p>
                </motion.div>

                {/* Testimonial Grid with Staggered Animation */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reviews.map((item, index) => (
                        <motion.div 
                            key={item.id} 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Star Rating */}
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg 
                                        key={i} 
                                        className={`w-5 h-5 ${i < item.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                                        fill="currentColor" 
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-gray-600 dark:text-gray-400 italic mb-6">
                                "{item.review}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-12 h-12 rounded-full border-2 border-blue-600 p-0.5"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-white">
                                        {item.name}
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-500">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;