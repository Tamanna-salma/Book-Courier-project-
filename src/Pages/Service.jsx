import React from "react";
import { motion } from "framer-motion";
import { Search, ShoppingCart, Truck, CreditCard } from "lucide-react";

const services = [
  {
    icon: <Search className="w-12 h-12 text-cyan-600" />,
    title: "Search Books",
    desc: "Browse thousands of books and find your favorite titles easily.",
  },
  {
    icon: <ShoppingCart className="w-12 h-12 text-cyan-600" />,
    title: "Place Order",
    desc: "Add books to your cart and order securely with a few clicks.",
  },
  {
    icon: <Truck className="w-12 h-12 text-cyan-600" />,
    title: "Fast Delivery",
    desc: "Get your books delivered quickly to your doorstep.",
  },
  {
    icon: <CreditCard className="w-12 h-12 text-cyan-600" />,
    title: "Secure Payment",
    desc: "Pay safely using card, mobile banking, or cash on delivery.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Service = () => {
  return (
    <section className="py-16 bg-transparent transition-colors duration-300">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-black text-center mb-16 text-gray-800 dark:text-white"
      >
        Our Premium <span className="text-cyan-600">Services</span>
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl p-8 rounded-[2.5rem] border border-gray-100 dark:border-slate-800 transition-all cursor-pointer group"
          >
            <div className="mb-6 p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {service.icon}
            </div>
            <h3 className="text-2xl font-black mb-3 text-gray-800 dark:text-white group-hover:text-cyan-600 transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Service;
