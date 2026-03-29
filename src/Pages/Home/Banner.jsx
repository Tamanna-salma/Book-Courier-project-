import React from 'react'
import bannerImg1 from '../../assets/img1.webp';
import bannerImg2 from '../../assets/img4.webp';
import bannerImg3 from '../../assets/img5.webp';
import bannerImg4 from '../../assets/img6.webp';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const Banner = () => {
  const slides = [
    { img: bannerImg1, label: "Your Favorite Books, Delivered." },
    { img: bannerImg2, label: "Explore a World of Knowledge." },
    { img: bannerImg3, label: "Fast & Secure Book Shipping." },
    { img: bannerImg4, label: "Affordable Rates for Every Reader." },
  ];

  return (
    <section className="mt-8 mx-auto w-full px-4 py-4 transition-colors duration-300">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="rounded-[2.5rem] overflow-hidden shadow-2xl group border border-gray-100 dark:border-slate-800"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
              <img
                src={slide.img}
                alt={`banner-slide-${index}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent dark:from-slate-950 dark:via-slate-900/60 transition-colors duration-500"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-7xl font-bold text-cyan-500 mb-6 drop-shadow-2xl max-w-4xl leading-tight"
                >
                  {slide.label}
                </motion.h1>
                <div className="flex gap-4 justify-center">
                  <Link to="/allbooks" className="bg-cyan-600 hover:bg-cyan-700 text-white text-lg md:text-xl px-10 py-4 rounded-2xl font-black transition-all shadow-xl shadow-cyan-600/30 active:scale-95">
                    Shop Now
                  </Link>
                  <Link to="/about" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-lg md:text-xl px-10 py-4 rounded-2xl font-black transition-all border border-white/30">
                    Our Story
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
