"use client";
import { axiosClientAPI } from '@/api/axiosClientAPI';
import React, { useEffect, useState } from 'react'
import { tokenAuth } from '@/tokens/tokenAuth';
import UserQrCode from './UserQrCode';
import Loader from '@/components/Loader';



export default function QrCodeView({ id }) {
  const [qrData, setQrData] = useState();
  const { getAuthToken } = tokenAuth();
  const config = {
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getAuthToken()}`
  }};
  /* GET QR DATA */
  async function getQrData() {
    try{
        const result = await axiosClientAPI.get(`qrcode/${id}`, config)
        .then((response) => {
            setQrData(response.data.data)
        })
    } catch (error) {
        console.error(`Error: ${error}`);
        console.error(`Error Message: ${error.message}`);
        console.error(`Error Response: ${error.response}`);
    }   
  }

  useEffect(() => {
    getQrData();
  }, []);
  

  if(!qrData) {return <Loader />}


  return (
    <section className='w-[100vw]'>
      <div className='mx-auto w-[80%] p-6 bg-white drop-shadow-2xl text-lg mb-[4rem]'>
        {/* CODE */}
        <div className='flex md:flex-row flex-col md:items-center justify-start gap-2 mb-4'>
          <div className='md:w-[15%] font-light'>Code</div>
          <div className='md:w-[85%]'>{qrData?.code}</div>
        </div>
        {/* USER */}
        <div className='flex md:flex-row flex-col md:items-center justify-start gap-2 mb-4'>
          <div className='md:w-[15%] font-light'>User</div>
          <div className='md:w-[85%]'>{qrData?.user?.name ? qrData?.user?.name : 'Nod added'}</div>
        </div>
        {/* STATUS */}
        <div className='flex md:flex-row flex-col md:items-center justify-start gap-2 mb-4'>
          <div className='md:w-[15%] font-light'>Status</div>
          <div className='md:w-[85%]'>
            <span className='px-2 py-1 rounded-xl text-white bg-gradient-to-br from-cyan-500 to-green-800'>
            {qrData?.status}
            </span>
          </div>
        </div>
        {/* USER */}
        <div className='flex md:flex-row flex-col items-start justify-start gap-2 mb-4'>
          <div className='md:w-[15%] font-light pt-1'>QR Code</div>
          <div className='md:w-[85%]'>
              {qrData?.code &&
                <UserQrCode dbData={qrData?.code} />
              }
          </div>
        </div>
      </div>
    </section>
  )
}
