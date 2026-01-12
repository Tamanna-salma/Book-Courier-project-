import { FaHome, FaBuilding, FaHotel, FaWarehouse, FaLandmark, FaTree } from 'react-icons/fa'; // Example Icons

const Categories = () => {
    const categories = [
        { id: 1, name: 'Apartments', icon: <FaBuilding />, count: '120+ Properties' },
        { id: 2, name: 'Villas', icon: <FaHome />, count: '80+ Properties' },
        { id: 3, name: 'Office', icon: <FaWarehouse />, count: '45+ Properties' },
        { id: 4, name: 'Resorts', icon: <FaHotel />, count: '30+ Properties' },
        { id: 5, name: 'Land', icon: <FaTree />, count: '60+ Properties' },
        { id: 6, name: 'Heritage', icon: <FaLandmark />, count: '15+ Properties' },
    ];

    return (
        <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            <div className=" max-w-6xl mx-auto px-4 text-center">
                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
                        Featured Categories
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Explore our wide range of categories tailored to your needs. Find the best deals across the platform.
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((item) => (
                        <div 
                            key={item.id} 
                            className="group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary cursor-pointer"
                        >
                            <div className="text-4xl text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                {item.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                {item.count}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;