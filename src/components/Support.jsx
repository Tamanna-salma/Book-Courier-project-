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
        <section className="py-24 bg-transparent transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between px-5 mb-16 gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-left max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-gray-800 dark:text-white mb-6 leading-tight">
                            Need Any Help? <br />
                            <span className="text-cyan-600">We're Here for You.</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                            Have questions about your delivery or our services? Choose your preferred way to connect with us. Our support team is ready to assist you 24/7.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="hidden lg:block"
                    >
                        <div className="bg-cyan-50 dark:bg-cyan-900/20 p-8 rounded-[3rem] rotate-3 relative overflow-hidden group">
                           <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent"></div>
                            <div className="bg-cyan-600 text-white p-10 rounded-[2.5rem] shadow-2xl shadow-cyan-600/40 relative z-10 animate-pulse">
                                <FaHeadphones size={60} />
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
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 hover:shadow-2xl transition-all group relative overflow-hidden flex flex-col h-full"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-600/5 dark:bg-cyan-600/10 rounded-full translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-500"></div>
                            
                            <div className="relative z-10 flex-grow">
                                <div className={`text-5xl ${method.color.replace('blue', 'cyan').replace('green', 'emerald').replace('purple', 'indigo').replace('red', 'rose')} mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all relative z-10`}>
                                    {method.icon}
                                </div>
                                <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-3 relative z-10 group-hover:text-cyan-600 transition-colors">
                                    {method.title}
                                </h3>
                                <p className="text-cyan-600 dark:text-cyan-400 font-bold mb-2 text-lg relative z-10">
                                    {method.info}
                                </p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 leading-relaxed relative z-10">
                                    {method.description}
                                </p>
                            </div>
                            
                            <button className="w-full py-4 px-6 bg-gray-50 dark:bg-slate-800 border-none rounded-2xl text-sm font-black text-gray-700 dark:text-gray-300 hover:bg-cyan-600 hover:text-white transition-all shadow-sm hover:shadow-xl hover:shadow-cyan-600/20 active:scale-95 uppercase tracking-widest relative z-10 mt-auto">
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