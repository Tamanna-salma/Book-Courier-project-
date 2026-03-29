import { FaBook, FaMicroscope, FaHistory, FaPalette, FaGlobeAmericas, FaChess } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Categories = () => {
    const categories = [
        { id: 1, name: 'Fiction', icon: <FaBook />, count: '1,200+ Books' },
        { id: 2, name: 'Science', icon: <FaMicroscope />, count: '850+ Books' },
        { id: 3, name: 'History', icon: <FaHistory />, count: '450+ Books' },
        { id: 4, name: 'Arts', icon: <FaPalette />, count: '300+ Books' },
        { id: 5, name: 'Geography', icon: <FaGlobeAmericas />, count: '600+ Books' },
        { id: 6, name: 'Strategy', icon: <FaChess />, count: '150+ Books' },
    ];

    return (
        <section className="py-20 bg-transparent transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-800 dark:text-white mb-4">
                        Explore <span className="text-cyan-600">Categories</span>
                    </h2>
                    <div className="w-16 h-1.5 bg-cyan-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Discover a world of knowledge across our most popular genres. Find your next great read today.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {categories.map((item, index) => (
                        <motion.div 
                            key={item.id} 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-800 cursor-pointer overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-600/5 dark:bg-cyan-600/10 rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
                            
                            <div className="text-5xl text-cyan-600 mb-6 flex justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-black text-gray-800 dark:text-white mb-2 relative z-10 group-hover:text-cyan-600 transition-colors">
                                {item.name}
                            </h3>
                            <p className="text-sm font-bold text-gray-400 dark:text-gray-500 relative z-10 group-hover:text-cyan-500/80 transition-colors">
                                {item.count}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;