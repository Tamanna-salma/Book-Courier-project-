import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/books.jpg"; 
import Service from "./Service";

const About = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            About Book Courier
          </h2>
          <p className="text-gray-600 mb-6">
            Book Courier is dedicated to bringing your favorite books right to
            your doorstep. We make browsing, ordering, and receiving books
            simple and enjoyable for everyone. With fast delivery and a wide
            selection of books, we ensure your reading journey starts effortlessly.
          </p>
          <p className="text-gray-600 mb-6">
            Our mission is to connect readers with the books they love,
            providing seamless online ordering, reliable delivery, and excellent
            customer service across all districts.
          </p>
          <button className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition">
            Learn More
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImage}
            alt="About Book Courier"
            className="rounded-xl shadow-lg w-full"
          />
        </motion.div>
        
      </div>
      <Service></Service>
    </section>
  );
};

export default About;
