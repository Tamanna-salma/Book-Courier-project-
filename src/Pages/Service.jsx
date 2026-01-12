import React from "react";
import { motion } from "framer-motion";
import { Search, ShoppingCart, Truck, CreditCard } from "lucide-react";

const services = [
  {
    icon: <Search className="w-10 h-10 text-purple-700" />,
    title: "Search Books",
    desc: "Browse thousands of books and find your favorite titles easily.",
  },
  {
    icon: <ShoppingCart className="w-10 h-10 text-purple-700" />,
    title: "Place Order",
    desc: "Add books to your cart and order securely with a few clicks.",
  },
  {
    icon: <Truck className="w-10 h-10 text-purple-700" />,
    title: "Fast Delivery",
    desc: "Get your books delivered quickly to your doorstep.",
  },
  {
    icon: <CreditCard className="w-10 h-10 text-purple-700" />,
    title: "Multiple Payment Options",
    desc: "Pay safely using card, mobile banking, or cash on delivery.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Service = () => {
  return (
    <section className="py-16 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-10 text-gray-800"
      >
       Book Courier Services
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 px-4"
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition cursor-pointer"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Service;
