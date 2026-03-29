import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Books Sold" },
  { value: "5K+", label: "Happy Customers" },
  { value: "64", label: "District Coverage" },
  { value: "99%", label: "Delivery Success" },
];

const Stats = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 bg-gradient-to-r from-cyan-600 to-purple-700 dark:from-slate-900 dark:to-purple-950 mt-12 mb-12 text-white rounded-[3rem] shadow-2xl relative overflow-hidden transition-all duration-500">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full translate-y-32 -translate-x-32 blur-3xl"></div>

      <div className="text-center mb-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-4"
        >
          Our Achievements
        </motion.h2>
        <p className="mt-4 px-4 text-cyan-100 dark:text-gray-400 text-lg max-w-2xl mx-auto font-medium">
          The numbers that reflect our dedication to making book shipping seamless and reliable.
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative w-full overflow-hidden py-10">
        <motion.div
          className="flex gap-20 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...stats, ...stats, ...stats].map((item, i) => (
            <div
              key={i}
              className="group flex flex-col items-center justify-center min-w-[250px] transition-transform hover:scale-110"
            >
              <h3 className="text-6xl md:text-7xl font-black mb-3 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                {item.value}
              </h3>
              <div className="h-1 w-12 bg-cyan-400 rounded-full mb-3 group-hover:w-20 transition-all duration-300"></div>
              <p className="text-lg font-bold tracking-widest uppercase text-cyan-100/80">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
