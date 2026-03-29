import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/books.jpg";
import Service from "./Service";
import { Link } from "react-router";

const About = () => {
  return (
    <section className="py-16  bg-transparent transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-800 dark:text-white">
            About <span className="text-cyan-600">Book Courier</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
            Book Courier is dedicated to bringing your favorite books right to
            your doorstep. We make browsing, ordering, and receiving books
            simple and enjoyable for everyone.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg leading-relaxed">
            Our mission is to connect readers with the books they love,
            providing seamless online ordering, reliable delivery, and excellent
            customer service across all districts.
          </p>
          <Link 
            to="/about-details" 
            className="inline-block bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-700 dark:hover:bg-cyan-600 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-xl shadow-cyan-400/20 active:scale-95 uppercase tracking-widest text-sm"
          >
            Learn Our Story
          </Link>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-cyan-600/10 dark:bg-purple-600/10 rounded-2xl blur-2xl -z-10"></div>
          <img
            src={aboutImage}
            alt="About Book Courier"
            className="rounded-2xl shadow-2xl w-full border border-gray-100 dark:border-slate-800 transition-all duration-300"
          />
        </motion.div>

      </div>
      <div className="mt-20">
        <Service></Service>
      </div>
    </section>
  );
};

export default About;
