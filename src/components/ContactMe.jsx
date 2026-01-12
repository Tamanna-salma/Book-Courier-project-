import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router";
import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";

const ContactMe = () => {
    return (
        <section className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-800">
                        Get In <span className="text-purple-600">Touch</span>
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                        Have a question about a restaurant or want to share your food experience? We'd love to hear from you!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="bg-purple-100 p-8 rounded-[2rem] flex items-center gap-6">
                            <div className="w-14 h-14 bg-green-700 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-lg">Call Us Directly</h4>
                                <p className="text-gray-600">+880 1234 567 890</p>
                            </div>
                        </div>
 
                        <div className="bg-orange-100 p-8 rounded-[2rem] flex items-center gap-6">
                            <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-lg">Email Support</h4>
                                <p className="text-gray-600">hello@foodlovers.com</p>
                            </div>
                        </div>

                        <div className="bg-green-100 p-8 rounded-[2rem] flex items-center gap-6">
                            <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-lg">Visit Our Office</h4>
                                <p className="text-gray-600">Level 4, Foodie Plaza, Chittagong, BD</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-6 flex gap-4">
                            <nav>
                                <div className="flex items-center justify-center px-4 py-3 gap-4">
                                    <Link to="https://x.com/">
                                        <FaXTwitter className='text-3xl w-12 h-12 transition cursor-pointer hover:bg-cyan-700 hover:text-white text-black' />
                                    </Link >

                                    <Link to="https://www.youtube.com/" >
                                        <FaYoutube className='text-2xl w-12 h-12 hover:bg-purple-600 hover:text-white transition cursor-pointer text-red-500'></FaYoutube>
                                    </Link>

                                    <Link to="https://web.facebook.com/?_rdc=1&_rdr#" >
                                        <FaFacebook className='text-2xl hover:bg-purple-600 hover:text-white w-12 h-12 transition cursor-pointer text-blue-700'></FaFacebook>
                                    </Link>
                                </div>

                            </nav>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-purple-500 outline-none transition" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-purple-500 outline-none transition" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                                <input type="text" placeholder="I have a suggestion" className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-purple-500 outline-none transition" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea rows="4" placeholder="Tell us more..." className="w-full px-5 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-purple-500 outline-none transition resize-none"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-cyan-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-200 hover:bg-purple-700 hover:-translate-y-1 transition-all active:scale-95">
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactMe;