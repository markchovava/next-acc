"use client";
import { formatDate } from '@/libs/formatDate';
import React, { useState } from 'react'



export default function EventView({ dbData }) {
    const [data, setData] = useState(dbData?.data)


  return (
    <>
    <section className='w-[100%] pt-[4rem] pb-[2rem]'>
        <div className='mx-auto w-[90%] grid md:grid-cols-5 grid-cols-1 gap-6'>
            <div className='col-span-3'>
                {/* NAME */}
                <div className='mb-[2rem]'>
                    <p className='mb-1 leading-none'>Name:</p>
                    <p className='leading-none text-[2.6rem] font-light'>{data?.name}</p>
                </div>
                {/* LOCATION */}
                <div className='mb-[2rem]'>
                    <p className='mb-1 leading-none'>Date:</p>
                    <p className='leading-none text-2xl font-light'>{formatDate(data?.date)}</p>
                </div>
                 {/* LOCATION */}
                 <div className='mb-[2rem]'>
                    <p className='mb-1 leading-none'>Location:</p>
                    <p className='leading-none text-2xl font-light'>{data?.location}</p>
                </div>
                 {/* DURATION */}
                 <div className='mb-[2rem]'>
                    <p className='mb-1 leading-none'>Duration:</p>
                    <p className='leading-none text-2xl font-light'>{data?.duration}</p>
                </div>

                 {/* DESCRIPTION */}
                 <div className='mb-[2rem]'>
                    <p className='mb-1 leading-none'>Description:</p>
                    <div className='article text-lg font-light' dangerouslySetInnerHTML={{ __html: data.description }}></div>
                </div>



            </div>

            <div className='col-span-2 bg-white drop-shadow-lg border flex items-center justify-end p-6'>
                <div className='w-[60%] bg-white drop-shadow-lg p-3 rounded-xl'>
                    {/*  */}
                    <div className='w-[100%] flex items-center justify-between gap-2 mb-3'>
                        <div className='font-light'>Joining Fee:</div>
                        <div className=''>$20.00</div>
                    </div>
                    <div className='w-[100%] flex items-center justify-between gap-2 mb-3'>
                        <div className='font-light leading-none'>Number of people:</div>
                        <div className='w-[50%]'>
                            <input 
                            type='number'
                            min={1} 
                            className='rounded-lg w-[100%] outline-none p-2 border border-slate-300' />
                        </div>
                    </div>
                    <div className='w-[100%] mb-2'>
                        <button className='w-[100%] rounded-xl text-center p-2 text-white transition-all ease-in-out bg-gradient-to-br from-green-600 to-cyan-700 hover:bg-gradient-to-br hover:to-green-700 hover:from-cyan-700'>
                            Checkout $12.00
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    </>
  )
}
