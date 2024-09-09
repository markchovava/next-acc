"use client"
import { axiosClientAPI } from '@/api/axiosClientAPI';
import Loader from '@/components/Loader';
import { tokenAuth } from '@/tokens/tokenAuth';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'



export default function MembershipView({ id }) {
  const [data, setData] = useState();
  const { getAuthToken } = tokenAuth()
  const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`
  }};

  /* GET DATA */
  async function getData() {
    try{
      const result = await axiosClientAPI.get(`membership/${id}`, config)
      .then((response) => {
        setData(response.data.data)
      })
    } catch (error) {
      console.error(`Error: ${error}`)
    }   
  }  

  useEffect(() => {
    getData()
  }, []);


  if(!data){ return ( <Loader /> ) }

  console.log(data)

  return (
    <>
    <section className='w-[100%] pb-[6rem]'>
      <div className='w-[90%] mx-auto'>
        {/* LINK */}
        <div className='flex items-center justify-end mb-6'>
          <Link 
            href={`/admin/membership/edit/${id}`} 
            className='px-8 py-3 transition-all ease-in-out rounded-xl text-white bg-gradient-to-br from-yellow-300 to-yellow-700 hover:bg-gradient-to-br hover:to-yellow-300 hover:from-yellow-700' >
            Edit
          </Link>
        </div>

        {/* VIEW INFO */}
        <section className='w-[100%] bg-white drop-shadow-md py-[2rem] px-4 text-lg'>
          {/*  */}
          <div className='flex lg:flex-row flex-col lg:items-center justify-start lg:gap-4 gap-2 mb-6'>
            <div className='w-[20%] font-light'>Name:</div>
            <div className='w-[80%]'>
                {data.name}
            </div>
          </div>
          {/*  */}
          <div className='flex lg:flex-row flex-col lg:items-center justify-start lg:gap-4 gap-2 mb-6'>
            <div className='w-[20%] font-light'>Slug:</div>
            <div className='w-[80%]'>
                {data.slug}
            </div>
          </div>
          {/*  */}
          <div className='flex lg:flex-row flex-col lg:items-center justify-start lg:gap-4 gap-2 mb-6'>
            <div className='w-[20%] font-light'>Fee:</div>
            <div className='w-[80%]'>
                {'$' + data?.fee?.toFixed(2)}
            </div>
          </div>
          {/*  */}
          <div className='flex lg:flex-row flex-col lg:items-center justify-start lg:gap-4 gap-2 mb-6'>
            <div className='w-[20%] font-light'>Level:</div>
            <div className='w-[80%]'>
                {data.level}
            </div>
          </div>
          {/*  */}
          <div className='flex lg:flex-row flex-col lg:items-start justify-start lg:gap-4 gap-2 mb-6'>
            <div className='w-[20%] font-light pt-1'>Description:</div>
            <div className='w-[80%]'>
                <div className='article' dangerouslySetInnerHTML={{ __html: data.description }}></div>
            </div>
          </div>
          {/*  */}
          <div className='flex lg:flex-row flex-col lg:items-center justify-start lg:gap-4 gap-2 mb-6'>
            <div className='w-[20%] font-light'>Priority:</div>
            <div className='w-[80%]'>
                {data.priority}
            </div>
          </div>
          {/*  */}
          <div className='flex lg:flex-row flex-col lg:items-center justify-start lg:gap-4 gap-2 mb-6'>
            <div className='w-[20%] font-light'>Author:</div>
            <div className='w-[80%]'>
                {data?.user?.name ? data?.user?.name : data?.user?.email}
            </div>
          </div>



        </section>

      </div>
    </section>
    </>
  )
}