import React from 'react';
import { motion } from 'framer-motion';

const TrustedPartners = () => {
    
    const partners = [
        { id: 1, name: "Fast Ship", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
        { id: 2, name: "Logistics Pro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { id: 3, name: "Safe Delivery", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
        { id: 4, name: "Global Mail", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { id: 5, name: "Rapid Book", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    ];
    

    return (
        <section className="py-20 bg-transparent overflow-hidden transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-black text-gray-800 dark:text-white mb-4">
                    Our <span className="text-cyan-600">Trusted Partners</span>
                </h2>
                <div className="w-16 h-1.5 bg-cyan-600 mx-auto rounded-full mb-6"></div>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    We collaborate with world-class logistics and technology companies to ensure your books reach you safely and efficiently.
                </p>
            </div>

            {/* Animation Wrapper */}
            <div className="relative flex overflow-x-hidden group bg-gray-50/50 dark:bg-slate-900/50 py-12 border-y border-gray-100 dark:border-slate-800">
                {/* First set of logos */}
                <div className="flex animate-marquee whitespace-nowrap items-center min-w-full">
                    {[...partners, ...partners].map((partner, index) => (
                        <div key={`p1-${index}`} className="mx-12 w-32 md:w-48 flex-shrink-0 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500 opacity-40 hover:opacity-100 flex items-center justify-center">
                            <img 
                                src={partner.logo} 
                                alt={partner.name} 
                                className="h-10 md:h-14 w-auto object-contain dark:invert dark:brightness-100 dark:contrast-100" 
                            />
                        </div>
                    ))}
                </div>

                {/* Second set of logos for seamless infinite scroll */}
                <div className="flex animate-marquee whitespace-nowrap items-center min-w-full">
                    {[...partners, ...partners].map((partner, index) => (
                        <div key={`p2-${index}`} className="mx-12 w-32 md:w-48 flex-shrink-0 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500 opacity-40 hover:opacity-100 flex items-center justify-center">
                            <img 
                                src={partner.logo} 
                                alt={partner.name} 
                                className="h-10 md:h-14 w-auto object-contain dark:invert dark:brightness-100 dark:contrast-100" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedPartners;