import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaHeart, FaShieldAlt, FaLightbulb, FaUsers, FaChartLine } from 'react-icons/fa';
import aboutDetailsHero from "../assets/about_hero.png";
import { Link } from 'react-router';

const AboutDetails = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const coreValues = [
        {
            icon: <FaRocket className="text-cyan-600" />,
            title: "Fast Delivery",
            description: "We ensure your favorite books reach your doorstep within 24-48 hours across major cities."
        },
        {
            icon: <FaShieldAlt className="text-purple-600" />,
            title: "Secure Packaging",
            description: "Every book is handled with extreme care and packed securely to prevent any damage during transit."
        },
        {
            icon: <FaHeart className="text-rose-600" />,
            title: "Reader Centric",
            description: "Our platform is built by book lovers, for book lovers. Your satisfaction is our top priority."
        },
        {
            icon: <FaLightbulb className="text-amber-600" />,
            title: "Constant Innovation",
            description: "We continuously evolve our logistics and platform to provide the smoothest ordering experience."
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 pb-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-600/10 to-transparent dark:from-cyan-950/20 -z-10"></div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center px-4"
                >
                    <h1 className="text-5xl md:text-8xl font-black text-gray-800 dark:text-white mb-6 tracking-tighter">
                        Our <span className="text-cyan-600">Story</span>
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-xl font-bold leading-relaxed">
                        Beyond just a delivery service, we are a bridge between authors and readers, stories and souls.
                    </p>
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-[10%] w-32 h-32 bg-cyan-600/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-20 left-[10%] w-48 h-48 bg-purple-600/5 rounded-full blur-3xl"
                />
            </section>

            {/* Mission Section */}
            <section className="max-w-6xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="text-4xl font-black text-gray-800 dark:text-white mb-8">
                            Empowering the <span className="text-cyan-600">Reading Community</span>
                        </h2>
                        <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-semibold">
                            <p>
                                Founded in 2024, Book Courier began with a simple observation: readers in remote areas struggled to find local bookstores with diverse collections. We saw an opportunity to democratize access to literature.
                            </p>
                            <p>
                                Today, we serve thousands of users across all 64 districts of Bangladesh, partnering with hundreds of publishers and local bookstores to bring you the widest selection imaginable.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-2 gap-8">
                            <div className="p-6 bg-gray-50 dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800">
                                <span className="block text-4xl font-black text-cyan-600 mb-2">64</span>
                                <span className="font-bold text-gray-500 dark:text-gray-500 uppercase tracking-widest text-xs">Districts Covered</span>
                            </div>
                            <div className="p-6 bg-gray-50 dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800">
                                <span className="block text-4xl font-black text-purple-600 mb-2">50k+</span>
                                <span className="font-bold text-gray-500 dark:text-gray-500 uppercase tracking-widest text-xs">Happy Readers</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-cyan-600/20 rounded-[3rem] blur-2xl rotate-3"></div>
                        <img
                            src={aboutDetailsHero}
                            alt="Book Logistics and Reading Community"
                            className="relative rounded-[2.5rem] shadow-2xl border border-white dark:border-slate-800"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section className="max-w-6xl mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-gray-800 dark:text-white mb-4">Our Core <span className="text-cyan-600">Values</span></h2>
                    <div className="w-20 h-2 bg-cyan-600 mx-auto rounded-full"></div>
                </div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {coreValues.map((value, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 shadow-xl hover:shadow-cyan-600/10 transition-all group"
                        >
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-black text-gray-800 dark:text-white mb-4">
                                {value.title}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 font-bold text-sm leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Team/Impact Section */}
            <section className="max-w-6xl mx-auto px-4 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-cyan-600 dark:bg-cyan-700 p-12 md:p-20 rounded-[4rem] text-white shadow-2xl shadow-cyan-600/40 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Ready to Start Reading?</h2>
                        <p className="text-white/80 max-w-xl mx-auto text-xl font-bold mb-10">
                            Explore thousands of titles and get them delivered to your home today.
                        </p>
                        <Link
                            to="/allbooks"
                            className="inline-block px-12 py-5 bg-white text-cyan-600 font-black rounded-2xl hover:bg-gray-100 transition-all active:scale-95 uppercase tracking-widest text-sm shadow-xl"
                        >
                            Explore All Books
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default AboutDetails;
