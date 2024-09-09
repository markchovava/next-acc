"use client";
import { baseURL } from '@/api/baseURL';
import { formatDate } from '@/libs/formatDate';
import React, { useState } from 'react'


export default function NewsView({ dbData }) {
    const [data, setData] = useState(dbData?.data);


  return (
    <>
    <section className='w-[100%] pt-[4rem] pb-[2rem]'>
        <div className='w-[80%] mx-auto'>
            <div className='mx-auto w-[100%] mb-4 aspect-[5/3] rounded-xl overflow-hidden'>
            <img src={baseURL + data.image} className='w-[100%] h-[100%] object-cover' />
            </div>
            <div className='w-[90%] mx-auto'>
                <h3 className='text-[2.4rem] leading-none mb-4'>
                    {data.title}
                </h3>
                <p className='mb-3 italic text-green-700'>{formatDate(data.updated_at)}</p>
                <div 
                    className='article text-lg font-light' 
                    dangerouslySetInnerHTML={{ __html: data.description }}></div>
            </div>
        </div>
    </section>
    </>
  )
}
