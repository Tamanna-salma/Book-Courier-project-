import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Books Sold" },
  { value: "5K+", label: "Happy Customers" },
  { value: "64", label: "District Coverage" },
  { value: "99%", label: "Delivery Success" },
];

const Stats = () => {
  return (
    <section className="py-16 bg-zinc-400 mt-4 mb-4 text-white overflow-hidden">
    
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Our Achievements</h2>
        <p className="mt-2 px-4 text-white/80">
          Here's why Book Courier is trusted by thousands of book lovers.
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {[...stats, ...stats].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center min-w-[200px]"
            >
              <h3 className="text-4xl font-bold">{item.value}</h3>
              <p className="mt-2 text-sm">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
