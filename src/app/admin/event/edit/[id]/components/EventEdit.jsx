"use client"
import { axiosClientAPI } from '@/api/axiosClientAPI';
import Loader from '@/components/Loader';
import { toastifyDarkBounce } from '@/libs/toastify';
import { tokenAuth } from '@/tokens/tokenAuth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';




export default function EventEdit({ id }) {
  const router = useRouter();
  const [data, setData] = useState();
  const [description, setDescription] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const { getAuthToken } = tokenAuth();
  const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        'Authorization': `Bearer ${getAuthToken()}`
  }};

  const handleInput = (e) => {
    setData({...data, [e.target.name]: e.target.value })
  }


   /* GET DATA */
   async function getData() {
    try{
      const result = await axiosClientAPI.get(`event/${id}`, config)
      .then((response) => {
        const res = response.data.data;
        setData(res)
        setDescription(res.description)
      })
    } catch (error) {
      console.error(`Error: ${error}`)
    }   
  }  

  const postData = async () => {
    const formData = {
      name: data?.name,
      description: description,
      date: data?.date,
      duration: data?.duration,
      priority: data?.priority,
      slug: data?.slug,
      status: data?.status,
    }

    try{
        const result = await axiosClientAPI.post(`event/${id}`, formData, config)
        .then((response) => {
            if(response.data.status == 1){
              toast.success(response.data.message, toastifyDarkBounce);
              setIsSubmit(false);
              router.push(`/admin/event/${id}`);
            }
        });    
        } catch (error) {
            console.error(`Error: ${error}`);
            console.error(`Error Message: ${error.message}`);
            console.error(`Error Response: ${error.response}`);
            setIsSubmit(false);
        }

  }

  useEffect(() => { getData(); }, []);

  useEffect(() => {
      isSubmit === true && postData();
  }, [isSubmit]);


  if(!data) { return (<Loader />)}


  return (
    <>
    <section className='w-[100%] pb-[6rem]'>
      <div className='w-[90%] mx-auto'>
        {/* LINK */}
        <div className='flex items-center justify-end mb-6'>
          <Link 
            href={`/admin/event/${id}`} 
            className='px-8 py-3 transition-all ease-in-out rounded-xl text-white bg-gradient-to-br from-yellow-300 to-yellow-700 hover:bg-gradient-to-br hover:to-yellow-300 hover:from-yellow-700' >
            View
          </Link>
        </div>
        {/*  */}
        <div className='w-[100%] mb-4'>
          <p className='mb-1'>Name:</p>
          <input 
              type='text' 
              name='name'
              value={data?.name}
              onChange={handleInput}
              placeholder='Enter Name here...' 
              className='w-[100%] py-3 px-4 rounded-lg outline-none border border-slate-300' />

        </div>
        {/* PRIORITY */}
        <div className='w-[100%} grid grid-cols-2 gap-6 mb-4'>
          <div className='w-[100%]'>
            <p className='mb-2'>Priority:</p>
            <select
              name='priority'
              onChange={handleInput}
              value={data?.priority}
              className='w-[100%] p-3 rounded-lg outline-none border border-slate-300'>
              <option value=''>Select an option.</option>
              {[...Array(12)].map((i, key) => (
                <option key={key} value={key+1}>{key+1}</option>
              ))}
            </select>
          </div>
          <div className='w-[100%]'>
            <p className='mb-1'>Slug:</p>
            <input 
              type='text' 
              name='slug'
              value={data?.slug}
              onChange={handleInput}
              placeholder='Enter Slug here...' 
              className='w-[100%] py-3 px-4 rounded-lg outline-none border border-slate-300' />
          </div>
        </div>
       
        {/* STATUS */}
        <div className='w-[100%] mb-4'>
          <p className='mb-1'>Status:</p>
          <select 
              name='status'
              onChange={handleInput}
              placeholder='Enter  here...' 
              className='w-[100%] py-3 px-4 rounded-lg outline-none border border-slate-300'>
              <option value=''>Select an option.</option>
              <option value='Upcoming' selected={data?.status == 'Upcoming' && 'selected'}>Upcoming</option>
              <option value='Completed' selected={data?.status == 'Completed' && 'selected'}>Completed</option>
          </select>

        </div>
        {/*  */}
        <div className='w-[100%] grid grid-cols-2 gap-6 mb-4'>
          <div className='w-[100%]'>
            <p className='mb-1'>Date:</p>
            <input 
              type='date' 
              name='date'
              value={data?.date}
              onChange={handleInput}
              placeholder='Enter Date here...' 
              className='w-[100%] py-3 px-4 rounded-lg outline-none border border-slate-300' />
          </div>
          <div className='w-[100%]'>
            <p className='mb-1'>Duration:</p>
            <select 
              name='duration'
              onChange={handleInput} 
              className='w-[100%] py-3 px-4 rounded-lg outline-none border border-slate-300'>
                <option value=''>Select an option</option>
                <option value='All Day' selected={data.duration == 'All Day' && 'selected'}>All Day</option>
                <option value='Half Day' selected={data.duration == 'Half Day' && 'selected'}>Half Day</option>
                <option value='To be decided' selected={data.duration == 'To be decided' && 'selected'}>To be decided</option>
            </select>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className='w-[100%] mb-4'>
            <p className='mb-1'>Description:</p>
            <div className='w-[100%] h-[10rem] mb-12'>
            <ReactQuill theme="snow" 
                className='h-[100%] w-[100%]' value={description} 
                onChange={setDescription} />
            </div>
        </div>
       
        

       
        <div className='flex items-center justify-center py-[1rem]'>
          <button onClick={() => setIsSubmit(true)} className='btn__primary'>
            {isSubmit == true ? 'Processing' : 'Submit'}
          </button>
        </div>
      </div>
    </section>
    </>
  )
}
