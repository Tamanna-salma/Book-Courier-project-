import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How long does it take to deliver a book?",
            answer: "For inside city deliveries, it usually takes 24 hours. For inter-city or nationwide deliveries, it takes 2-3 business days depending on the location."
        },
        {
            question: "Is there a weight limit for book parcels?",
            answer: "No, there is no strict limit. However, our standard rates apply up to 2kg. For bulk book orders or heavy packages, additional charges may apply."
        },
        {
            question: "Do you provide international book shipping?",
            answer: "Currently, we operate nationwide. We are planning to launch our international shipping services very soon. Stay tuned to our newsletter!"
        },
        {
            question: "How can I track my parcel in real-time?",
            answer: "Once your order is confirmed, you will receive a tracking ID. You can enter this ID in the 'Track Order' section of our website to see live updates."
        },
        {
            question: "What happens if my book gets damaged during delivery?",
            answer: "We take extreme care with secure packaging. However, if any damage occurs, we have a 100% refund policy or we will replace the book for you."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-3xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">
                        Got questions? We've got answers. Everything you need to know about our courier service.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden"
                        >
                            <button 
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-5 text-left bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                            >
                                <span className="font-semibold text-gray-800 dark:text-white">
                                    {faq.question}
                                </span>
                                <motion.span
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-blue-600"
                                >
                                    <FaChevronDown />
                                </motion.span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-5 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;