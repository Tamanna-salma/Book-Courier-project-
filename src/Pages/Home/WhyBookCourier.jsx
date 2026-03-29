import { BookOpen, Locate, ShieldCheck, Star, Truck, Wallet } from 'lucide-react';
import React from 'react'
import { motion } from 'framer-motion'
const features = [
  {
    icon: <Truck className="w-12 h-12 text-cyan-600" />,
    title: "Fast Delivery",
    desc: "Get your books delivered quickly and safely anywhere in Bangladesh.",
  },
  {
    icon: <Wallet className="w-12 h-12 text-cyan-600" />,
    title: "Affordable Prices",
    desc: "We offer competitive prices with no hidden charges.",
  },
  {
    icon: <BookOpen className="w-12 h-12 text-cyan-600" />,
    title: "Huge Collection",
    desc: "Thousands of books from different categories and authors.",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-cyan-600" />,
    title: "Secure & Reliable",
    desc: "Safe payments and trusted delivery system.",
  },
  {
    icon: <Star className="w-12 h-12 text-cyan-600" />,
    title: "Trusted Readers",
    desc: "Loved by book lovers all over the country.",
  },
  {
    icon: <Locate className="w-12 h-12 text-cyan-600" />,
    title: "Online Tracking",
    desc: "Keep tabs on your shipments with real-time updates.",
  }
];

const WhyBookCourier = () => {
  return (
    <section className="bg-transparent py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-6 text-gray-800 dark:text-white leading-tight">
          Why Choose <span className="text-cyan-600">Book Courier</span>?
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 md:mb-16 text-base md:text-lg px-4 font-bold">
          We make buying books easy, affordable, and reliable for everyone.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-800 group"
            >
              <div className="mb-6 p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-3 text-gray-800 dark:text-white group-hover:text-cyan-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyBookCourier;