import { BookOpen, Locate, ShieldCheck, Star, Truck, Wallet } from 'lucide-react';
import React from 'react'
const features = [
  {
    icon: <Truck className="w-10 h-10 text-purple-700" />,
    title: "Fast Delivery",
    desc: "Get your books delivered quickly and safely anywhere in Bangladesh.",
  },
  {
    icon: <Wallet className="w-10 h-10 text-purple-700" />,
    title: "Affordable Prices",
    desc: "We offer competitive prices with no hidden charges.",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-purple-700" />,
    title: "Huge Book Collection",
    desc: "Thousands of books from different categories and authors.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-purple-700" />,
    title: "Secure & Reliable",
    desc: "Safe payments and trusted delivery system.",
  },
  {
    icon: <Star className="w-10 h-10 text-purple-700" />,
    title: "Trusted by Readers",
    desc: "Loved by book lovers all over the country.",
  },
  {
     icon: <Locate className="w-10 h-10 text-purple-700" />,
    title: "Online Tracking",
    desc: "Keep tabs on your shipments with real-time updates .",
  }
];
const WhyBookCourier = () => {
  return (
        <section className="bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Choose <span className="text-purple-700">Book Courier</span>?
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We make buying books easy, affordable, and reliable for everyone.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default WhyBookCourier;