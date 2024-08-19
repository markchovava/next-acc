import Carousel from '@/components/Carousel';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import Link from 'next/link';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


export default function Membership() {
  return (
    <>
    {/*  */}
    <section className='w-[100%] pt-[4rem] pb-[6rem]'>
        <div className='mx-auto w-[90%]'>
            <section className='w-[100%] mb-[1.5rem] bg-gradient-to-br from-slate-100 to-gray-200 text-slate-900 p-[2rem] drop-shadow-md'>
                <h3 className='text-[2rem]'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, sunt sequi. Laboriosam illo quis labore!
                </h3>
            </section>

            <section className='w-[100%] grid lg:grid-cols-2 grid-cols-1 gap-8'>
                <div className='bg-gradient-to-br from-green-500 to-green-800 text-white p-[2rem] drop-shadow-md'>
                    <h3 className='text-[1.6rem] font-medium mb-2'>Lorem ipsum dolor sit.</h3>
                    <p className='font-light'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt incidunt tempora, quia numquam ab, eaque 
                        inventore quasi libero perspiciatis ut corrupti quas officia non, cupiditate temporibus sint sapiente voluptate 
                        rerum!
                    </p>
                </div>
                <div className='bg-gradient-to-br from-slate-100 to-gray-200 text-slate-900 p-[2rem] drop-shadow-md'>
                    <h3 className='text-[1.6rem] font-medium mb-2'>
                        Lorem ipsum dolor sit.</h3>
                    <p className='font-light'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt incidunt tempora, quia numquam ab, eaque 
                        inventore quasi libero perspiciatis ut corrupti quas officia non, cupiditate temporibus sint sapiente voluptate 
                        rerum!
                    </p>
                </div>
                <div className='bg-gradient-to-br from-slate-100 to-gray-200 text-slate-900 p-[2rem] drop-shadow-md'>
                    <h3 className='text-[1.6rem] font-medium'>
                        Lorem ipsum dolor sit.</h3>
                    <p className='font-light'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt incidunt tempora, quia numquam ab, eaque 
                        inventore quasi libero perspiciatis ut corrupti quas officia non, cupiditate temporibus sint sapiente voluptate 
                        rerum!
                    </p>
                </div>
                <div className='bg-gradient-to-br from-yellow-500 to-yellow-700 text-white p-[2rem] drop-shadow-md'>
                    <h3 className='text-[1.6rem] font-medium'>
                        Lorem ipsum dolor sit.</h3>
                    <p className='font-light'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt incidunt tempora, quia numquam ab, eaque 
                        inventore quasi libero perspiciatis ut corrupti quas officia non, cupiditate temporibus sint sapiente voluptate 
                        rerum!
                    </p>
                </div>
            </section>
        </div>
    </section>

    <section className='w-[100%] pb-[6rem]'>
        <h3 className=' text-center text-[2rem] font-medium mb-6 text-yellow-700'>
            Membership Options</h3>
        <div className='mx-auto w-[90%] grid lg:grid-cols-3 grid-cols-1 gap-8 text-lg mb-[1rem]'>
           {/*  */}
            <div className='w-[100%] p-[1.6rem] bg-white drop-shadow-md'>
                <h3 className='mb-4 text-[1.6rem] leading-tight'>Standard Membership</h3>
                <p className='font-light'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eaque quidem velit adipisci voluptatibus porro fuga amet,
                     aspernatur perspiciatis iste est maiores sint consequatur 
                     aperiam cumque voluptates libero impedit exercitationem 
                     architecto!
                </p>
            </div>
           {/*  */}
            <div className='w-[100%] p-[1.6rem] bg-white drop-shadow-md'>
                <h3 className='mb-4 text-[1.6rem] leading-tight'>Silver Membership</h3>
                <p className='font-light'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eaque quidem velit adipisci voluptatibus porro fuga amet,
                     aspernatur perspiciatis iste est maiores sint consequatur 
                     aperiam cumque voluptates libero impedit exercitationem 
                     architecto!
                </p>
            </div>
           {/*  */}
            <div className='w-[100%] p-[1.6rem] bg-white drop-shadow-md'>
                <h3 className='mb-4 text-[1.6rem] leading-tight'>Platinum Membership</h3>
                <p className='font-light'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eaque quidem velit adipisci voluptatibus porro fuga amet,
                     aspernatur perspiciatis iste est maiores sint consequatur 
                     aperiam cumque voluptates libero impedit exercitationem 
                     architecto!
                </p>
            </div>

            <div className='w-[100%]'></div>
        </div>
        {/*  */}
        <div className='flex items-center justify-center '>
            <Link href='/membership/register' className='group text-lg px-10 py-5 flex items-center justify-center gap-2 rounded-lg text-white hover:drop-shadow-lg bg-gradient-to-br from-yellow-500 to-yellow-800 '>
                Become a member
                <FaArrowRightLong className='group-hover:translate-x-1 transition-all ease-in-out' />
            </Link>
        </div>
    </section>

    <TestimonialCarousel />

    <Carousel />
    </>
  )
}
