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

const Banner = () => {
  return (
    <div className="mt-10 mx-auto w-full  px-4 py-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="rounded-2xl overflow-hidden"
      >

        {/* SLIDE 1 */}
        <SwiperSlide>
          <div className="relative w-full h-96 md:h-[500px]">
            <img
              src={bannerImg1}
              alt="bannerImg1"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center mt-14 ">
        
              <Link to="/allbooks" className="mt-4 bg-purple-700 text-xl text-white px-8 py-5 rounded-lg font-bold hover:bg-purple-900  transition">
               All Books
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <img
            src={bannerImg2}
            alt="bannerimg2"
            className="w-full h-96 md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center mt-14 ">
        
              <Link to="/allbooks" className="mt-4 bg-purple-700 text-xl text-white px-8 py-5 rounded-lg font-bold hover:bg-purple-900  transition">
               All Books
              </Link>
            </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
          <img
            src={bannerImg3}
            alt="bannerImg3"
            className="w-full h-96 md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center mt-14 ">
        
              <Link to="/allbooks" className="mt-4 bg-purple-700 text-xl text-white px-8 py-5 rounded-lg font-bold hover:bg-purple-900  transition">
               All Books
              </Link>
            </div>
        </SwiperSlide>

        {/* SLIDE 4 */}
        <SwiperSlide>
          <img
            src={bannerImg4}
            alt="bannerImg4"
            className="w-full h-96 md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center mt-14 ">
        
              <Link to="/allbooks" className="mt-4 bg-purple-700 text-xl text-white px-8 py-5 rounded-lg font-bold hover:bg-purple-900  transition">
               All Books
              </Link>
            </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )

}

export default Banner;
