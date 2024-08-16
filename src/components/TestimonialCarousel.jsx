"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { BsArrowRight } from "react-icons/bs";



export default function TestimonialCarousel() {
  return (
    <div className='w-[100%] relative z-0'>
        <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        navigation
        effect
        pagination={{
          clickable: true,
        }}
        speed={1500}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: true,
        }}
        className='text-white'
        slidesPerView={1} >
        {/* CAROUSEL */}
        <SwiperSlide className='w-[100vw] lg:aspect-[5/1] aspect-[2/1] overflow-hidden bg-gradient-to-br from-yellow-700 to-red-700'>
          <div 
            className='mx-auto w-[90%] h-[100%] relative flex flex-col items-center justify-center'>
              <p className='text-[1.4rem] mb-2'>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quae totam harum 
                iste quasi rem hic excepturi ducimus tempore quaerat."
              </p>
              <p className='italic text-yellow-200'>Lorem ipsum dolor sit.</p>
            
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-[100vw] lg:aspect-[5/1] aspect-[2/1] overflow-hidden bg-gradient-to-br from-yellow-700 to-red-700'>
          <div 
            className='mx-auto w-[90%] h-[100%] relative flex flex-col items-center justify-center'>
              <p className='text-[1.4rem] mb-2'>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quae totam harum 
                iste quasi rem hic excepturi ducimus tempore quaerat."
              </p>
              <p className='italic text-yellow-200'>Lorem ipsum dolor sit.</p>
            
          </div>
        </SwiperSlide>
        <SwiperSlide className='w-[100vw] lg:aspect-[5/1] aspect-[2/1] overflow-hidden bg-gradient-to-br from-yellow-700 to-red-700'>
          <div 
            className='mx-auto w-[90%] h-[100%] relative flex flex-col items-center justify-center'>
              <p className='text-[1.4rem] mb-2'>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quae totam harum 
                iste quasi rem hic excepturi ducimus tempore quaerat."
              </p>
              <p className='italic text-yellow-200'>Lorem ipsum dolor sit.</p>
            
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}
