import React from 'react';

const TrustedPartners = () => {
    
    const partners = [
        { id: 1, name: "Fast Ship", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
        { id: 2, name: "Logistics Pro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { id: 3, name: "Safe Delivery", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
        { id: 4, name: "Global Mail", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { id: 5, name: "Rapid Book", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    ];
    

    return (
        <section className="py-10 bg-gray-100 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 mb-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    Our Trusted Partners
                </h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-lg mx-auto">
                    We collaborate with world-class logistics and technology companies to ensure your books reach you safely.
                </p>
            </div>

            {/* Animation Wrapper */}
            <div className="relative flex overflow-x-hidden group">
                {/* First set of logos */}
                <div className="flex animate-marquee whitespace-nowrap items-center py-4">
                    {partners.map((partner, index) => (
                        <div key={`p1-${index}`} className="mx-8 w-32 md:w-48 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100">
                            <img 
                                src={partner.logo} 
                                alt={partner.name} 
                                className="h-10 md:h-14 w-auto object-contain dark:brightness-200 dark:contrast-50 dark:hover:contrast-100 dark:hover:brightness-100" 
                            />
                        </div>
                    ))}
                </div>

                {/* Duplicate set of logos for seamless infinite scroll */}
                <div className="flex animate-marquee whitespace-nowrap items-center py-4">
                    {partners.map((partner, index) => (
                        <div key={`p2-${index}`} className="mx-8 w-32 md:w-48 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100">
                            <img 
                                src={partner.logo} 
                                alt={partner.name} 
                                className="h-10 md:h-14 w-auto object-contain dark:brightness-200 dark:contrast-50 dark:hover:contrast-100 dark:hover:brightness-100" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedPartners;