import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaHeadphones, FaMapMarkerAlt } from 'react-icons/fa';

const Support = () => {
    const contactMethods = [
        {
            id: 1,
            title: "Call for Support",
            info: "+880 1234 567 890",
            description: "Talk to our team (9 AM - 8 PM)",
            icon: <FaPhoneAlt />,
            color: "text-blue-600",
            btnText: "Call Now"
        },
        {
            id: 2,
            title: "Send an Email",
            info: "support@bookcourier.com",
            description: "Expect a response within 2 hours",
            icon: <FaEnvelope />,
            color: "text-green-600",
            btnText: "Email Us"
        },
        {
            id: 3,
            title: "Live Chat",
            info: "Active 24/7",
            description: "Chat with our expert agents",
            icon: <FaHeadphones />,
            color: "text-purple-600",
            btnText: "Start Chat"
        },
        {
            id: 4,
            title: "Office Address",
            info: "Banani, Dhaka, Bangladesh",
            description: "Visit our main logistics hub",
            icon: <FaMapMarkerAlt />,
            color: "text-red-600",
            btnText: "Get Direction"
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between  px-5 mb-12 gap-6">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-left max-w-xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4 leading-tight">
                            Need Any Help? <br /> 
                            <span className="text-blue-600">We're Here for You.</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Have questions about your delivery or our services? Choose your preferred way to connect with us. Our support team is ready to assist you.
                        </p>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="hidden lg:block"
                    >
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full">
                            <div className="bg-blue-600 text-white p-6 rounded-full animate-bounce">
                                <FaHeadphones size={40} />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Support Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactMethods.map((method, index) => (
                        <motion.div 
                            key={method.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all group"
                        >
                            <div className={`text-4xl ${method.color} mb-6 group-hover:scale-110 transition-transform`}>
                                {method.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                {method.title}
                            </h3>
                            <p className="text-blue-600 font-semibold mb-1 text-sm">
                                {method.info}
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs mb-6 leading-relaxed">
                                {method.description}
                            </p>
                            <button className="w-full py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors">
                                {method.btnText}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Support;