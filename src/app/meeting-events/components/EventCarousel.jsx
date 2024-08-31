"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation,Scrollbar, A11y} from 'swiper/modules';
import Link from 'next/link';
import { useState } from 'react';
import { formatDate } from '@/libs/formatDate';
import { trimString } from '@/libs/trimString';





export default function EventCarousel({ dbData }) {
    console.log(dbData);
    const [data, setData] = useState(dbData?.data)

    return (
        data.length > 0 && 
        <>
        <section className='w-[100%] pt-[4rem] pb-[2rem]'>
            <div className='w-[90%] mx-auto '>
                {/*  */}
                <section className='hidden lg:block '>
                    <div className='w-[100%] flex items-center justify-between pb-4'>
                        <h6 className="text-[2.5rem] font-medium">
                            Events
                        </h6>
                        <Link href='#'>
                            <span className='text-green-700 hover:underline hover:text-slate-800 transition-all ease-in-out'>
                                View More</span>
                        </Link>
                    </div>
                    <Swiper 
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        effect="fade"
                        spaceBetween={30}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className='card__transparent' >

                       {data.map((i, key) => (
                            <SwiperSlide key={key} className=' bg-white rounded-xl overflow-hidden drop-shadow hover:drop-shadow-md'>
                                <div className='w-[100%] drop-shadow-md text-white flex flex-col items-center justify-center aspect-[5/3] bg-gradient-to-br from-green-600 to-cyan-700'>
                                        <p className='tracking-[0.5rem] pb-4'>{formatDate(i.date)}</p>
                                        <h3 className='text-4xl font-bold text-center'>
                                            {trimString(i.name, 30)}</h3>
                                </div>
                                <div className='w-[100%] aspect-[5/1] py-4 flex flex-col items-center justify-center'>
                                    <p className='text-center bg-white font-semibold text-lg pb-3'>
                                        {i.duration}
                                    </p>
                                    <button className='text-white rounded-xl bg-gradient-to-br from-green-600 to-cyan-700 hover:bg-gradient-to-br hover:to-green-600 hover:from-cyan-700 py-2 px-6 mb-3'>
                                        Book to Attend
                                    </button>
                                </div>
                            </SwiperSlide>      

                       ))}
                        <SwiperSlide className=' bg-white rounded-xl overflow-hidden drop-shadow hover:drop-shadow-md'>
                           <div className='w-[100%] drop-shadow-md text-white flex flex-col items-center justify-center aspect-[5/3] bg-gradient-to-br from-green-600 to-cyan-700'>
                                <p className='tracking-[0.5rem] pb-4'>11 October 2024</p>
                                <h3 className='text-4xl font-bold text-center'>
                                    Big Event of the Year 2024</h3>
                           </div>
                           <div className='w-[100%] aspect-[5/1] py-4 flex flex-col items-center justify-center'>
                            <p className='text-center bg-white font-semibold text-lg pb-3'>
                                All Day
                            </p>
                            <button className='text-white rounded-xl bg-gradient-to-br from-green-600 to-cyan-700 hover:bg-gradient-to-br hover:to-green-600 hover:from-cyan-700 py-2 px-6 mb-3'>
                                Book to Attend
                            </button>
                           </div>
                        </SwiperSlide>      
                        <SwiperSlide className=' bg-white rounded-xl overflow-hidden drop-shadow hover:drop-shadow-md'>
                           <div className='w-[100%] drop-shadow-md text-white flex flex-col items-center justify-center aspect-[5/3] bg-gradient-to-br from-green-600 to-cyan-700'>
                                <p className='tracking-[0.5rem] pb-4'>11 October 2024</p>
                                <h3 className='text-4xl font-bold text-center'>
                                    Big Event of the Year 2024</h3>
                           </div>
                           <div className='w-[100%] aspect-[5/1] py-4 flex flex-col items-center justify-center'>
                            <p className='text-center bg-white font-semibold text-lg pb-3'>
                                All Day
                            </p>
                            <button className='text-white rounded-xl bg-gradient-to-br from-green-600 to-cyan-700 hover:bg-gradient-to-br hover:to-green-600 hover:from-cyan-700 py-2 px-6 mb-3'>
                                Book to Attend
                            </button>
                           </div>
                        </SwiperSlide>       
                        <SwiperSlide className=' bg-white rounded-xl overflow-hidden drop-shadow hover:drop-shadow-md'>
                           <div className='w-[100%] drop-shadow-md text-white flex flex-col items-center justify-center aspect-[5/3] bg-gradient-to-br from-green-600 to-cyan-700'>
                                <p className='tracking-[0.5rem] pb-4'>11 October 2024</p>
                                <h3 className='text-4xl font-bold text-center'>
                                    Big Event of the Year 2024</h3>
                           </div>
                           <div className='w-[100%] aspect-[5/1] py-4 flex flex-col items-center justify-center'>
                            <p className='text-center bg-white font-semibold text-lg pb-3'>
                                All Day
                            </p>
                            <button className='text-white rounded-xl bg-gradient-to-br from-green-600 to-cyan-700 hover:bg-gradient-to-br hover:to-green-600 hover:from-cyan-700 py-2 px-6 mb-3'>
                                Book to Attend
                            </button>
                           </div>
                        </SwiperSlide>    
                       
                       
                       
                       
                        
                        
                    </Swiper>
                </section>
                {/*  */}
                <section className='lg:hidden block '>
                    <div className='w-[100%] flex items-center justify-between pb-4'>
                        <h6 className="text-[2.5rem] font-medium">
                            Title
                        </h6>
                        <Link href='#'>
                            <span className=''>View More</span>
                        </Link>
                    </div>
                    <Swiper 
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        effect="fade"
                        spaceBetween={30}
                        slidesPerView={1.5}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className='card__transparent' >
                       
                            <SwiperSlide className=' bg-white overflow-hidden hover:drop-shadow-md'>
                                <div className='relative group w-[100%] rounded-lg overflow-hidden aspect-[10/7] bg-slate-400 mb-3'>
                                    <img src='/assets/img/10_7/01.jpg' 
                                        className='absolute w-[100%] h-[100%] object-cover group-hover:scale-105 transition-all ease-in-out' />
                
                                    <div className='absolute bottom-0 left-0 w-[100%] h-[50%] bg-gradient-to-b from-transparent to-black opacity-75 text-white'>
                                    </div>
                                    <div className='absolute bottom-0 left-0 w-[100%] h-[50%] text-white text-[1.7rem] font-medium flex items-end px-3 pb-4'>
                                        <Link href={`#`} >
                                            Name
                                        </Link>
                                        
                                    </div>
                                </div>
                            </SwiperSlide>      
                            <SwiperSlide className=' bg-white overflow-hidden hover:drop-shadow-md'>
                                <div className='relative group w-[100%] rounded-lg overflow-hidden aspect-[10/7] bg-slate-400 mb-3'>
                                    <img src='/assets/img/10_7/02.jpg' 
                                        className='absolute w-[100%] h-[100%] object-cover group-hover:scale-105 transition-all ease-in-out' />
                                    <div className='absolute bottom-0 left-0 w-[100%] h-[50%] bg-gradient-to-b from-transparent to-black opacity-75 text-white'>
                                    </div>
                                    <div className='absolute bottom-0 left-0 w-[100%] h-[50%] text-white text-[1.7rem] font-medium flex items-end px-3 pb-4'>
                                        <Link href={`#`}>
                                            Name
                                        </Link>
                                        
                                    </div>
                                </div>
                            </SwiperSlide>      
                            <SwiperSlide className=' bg-white overflow-hidden hover:drop-shadow-md'>
                                <div className='relative group w-[100%] rounded-lg overflow-hidden aspect-[10/7] bg-slate-400 mb-3'>
                                    <img src='/assets/img/10_7/03.jpg' 
                                        className='absolute w-[100%] h-[100%] object-cover group-hover:scale-105 transition-all ease-in-out' />
                                    <div className='absolute bottom-0 left-0 w-[100%] h-[50%] bg-gradient-to-b from-transparent to-black opacity-75 text-white'>
                                    </div>
                                    <div className='absolute bottom-0 left-0 w-[100%] h-[50%] text-white text-[1.7rem] font-medium flex items-end px-3 pb-4'>
                                        <Link href={`#`} className='link__two'>
                                            Name
                                        </Link>
                                        
                                    </div>
                                </div>
                            </SwiperSlide>      
                            <SwiperSlide className=' bg-white overflow-hidden hover:drop-shadow-md'>
                                <div className='relative group w-[100%] rounded-lg overflow-hidden aspect-[10/7] bg-slate-400 mb-3'>
                                    <img src='/assets/img/10_7/04.jpg' 
                                        className='absolute w-[100%] h-[100%] object-cover group-hover:scale-105 transition-all ease-in-out' />
                                    <div className='absolute bottom-0 left-0 w-[100%] h-[50%] bg-gradient-to-b from-transparent to-black opacity-75 text-white'>
                                    </div>
                                    <div className='absolute bottom-0 left-0 w-[100%] h-[50%] text-white text-[1.7rem] font-medium flex items-end px-3 pb-4'>
                                        <Link href={`#`} className='link__two'>
                                            Name
                                        </Link>
                                        
                                    </div>
                                </div>
                            </SwiperSlide>      
                            <SwiperSlide className=' bg-white overflow-hidden hover:drop-shadow-md'>
                                <div className='relative group w-[100%] rounded-lg overflow-hidden aspect-[10/7] bg-slate-400 mb-3'>
                                    <img src='/assets/img/10_7/02.jpg' className='absolute w-[100%] h-[100%] object-cover group-hover:scale-105 transition-all ease-in-out' />
                
                                    <div className='absolute bottom-0 left-0 w-[100%] h-[50%] bg-gradient-to-b from-transparent to-black opacity-75 text-white'>
                                    </div>
                                    <div className='absolute bottom-0 left-0 w-[100%] h-[50%] text-white text-[1.7rem] font-medium flex items-end px-3 pb-4'>
                                        <Link href={`#`} className='link__two'>
                                            Name
                                        </Link>
                                        
                                    </div>
                                </div>
                            </SwiperSlide>      
                            <SwiperSlide className=' bg-white overflow-hidden hover:drop-shadow-md'>
                                <div className='relative group w-[100%] rounded-lg overflow-hidden aspect-[10/7] bg-slate-400 mb-3'>
                                    <img 
                                        src='/assets/img/10_7/01.jpg' 
                                        className='absolute w-[100%] h-[100%] object-cover group-hover:scale-105 transition-all ease-in-out' />
                
                                    <div className='absolute bottom-0 left-0 w-[100%] h-[50%] bg-gradient-to-b from-transparent to-black opacity-75 text-white'>
                                    </div>
                                    <div className='absolute bottom-0 left-0 w-[100%] h-[50%] text-white text-[1.7rem] font-medium flex items-end px-3 pb-4'>
                                        <Link href={`#`} className='link__two'>
                                            Name
                                        </Link>
                                        
                                    </div>
                                </div>
                            </SwiperSlide>      
                        
                    </Swiper>
                </section>
                
            </div>
        </section>
        </>
    )
}
