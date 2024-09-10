"use client"
import { tokenAuth } from '@/tokens/tokenAuth'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'



export default function MemberOption({ dbData }) {
    const [data, setData] = useState(dbData?.data)
    const { getAuthToken } = tokenAuth()



  return (
    data?.length > 0 &&
    <>
    <section className='w-[100%] pt-[4rem] pb-[6rem]'>
        <h3 className=' text-center text-[2rem] font-medium mb-6 text-yellow-700'>
            Membership Options</h3>
        <div className='mx-auto w-[90%] grid lg:grid-cols-3 grid-cols-1 gap-8 text-lg mb-[2rem]'>
           {/*  */}
           {data.map((i, key) => (
                <div key={key} className='w-[100%] p-[1.6rem] bg-white drop-shadow-md'>
                    <h3 className='mb-4 text-[1.6rem] leading-tight'>{i.name}</h3>
                    <div className='article font-light mb-3' dangerouslySetInnerHTML={{ __html: i.description }}></div>
                    <p className='p-3 bg-gradient-to-br from-gray-100 to-gray-300 text-center text-3xl'>
                        {'$' + i.fee?.toFixed(2)}
                    </p>
                </div>
           ))}
          
        </div>
        {/*  */}
        <div className='flex items-center justify-center '>
            {getAuthToken() ?
            <Link href='/membership/add' className='group text-lg px-10 py-5 flex items-center justify-center gap-2 rounded-lg text-white hover:drop-shadow-lg bg-gradient-to-br from-yellow-500 to-yellow-800 '>
                Become a member
                <FaArrowRightLong className='group-hover:translate-x-1 transition-all ease-in-out' />
            </Link>
            : 
            <Link href='/membership/login' className='group text-lg px-10 py-5 flex items-center justify-center gap-2 rounded-lg text-white hover:drop-shadow-lg bg-gradient-to-br from-yellow-500 to-yellow-800 '>
                Login to become a Member
                <FaArrowRightLong className='group-hover:translate-x-1 transition-all ease-in-out' />
            </Link>
            }
        </div>
    </section>
    </>
  )
}
 