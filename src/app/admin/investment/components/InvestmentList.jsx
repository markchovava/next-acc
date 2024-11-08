"use client";
import { axiosClientAPI } from '@/api/axiosClientAPI'
import { toastifyDarkBounce } from '@/libs/toastify';
import Loader from '@/components/Loader';
import { tokenAuth } from '@/tokens/tokenAuth'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaArrowLeftLong, FaArrowRightLong, FaEye } from 'react-icons/fa6'
import { MdDeleteForever, MdEdit, MdOutlineAspectRatio } from 'react-icons/md'
import { toast } from 'react-toastify';
import { TbCategoryPlus } from "react-icons/tb";
import { AiOutlineDashboard } from "react-icons/ai";



export default function OpportunityList() {
  const [data, setData] = useState();
  const [meta, setMeta] = useState();
  const [search, setSearch] = useState('')
  const [isSearch, setIsSearch] = useState(false)
  const { getAuthToken } = tokenAuth();
  /* PAGINATION */
  const [nextURL, setNextURL] = useState()
  const [prevURL, setPrevURL] = useState()
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getAuthToken()}`
  }};
  /* PAGINATION DATA */
  async function paginationHandler(url) {
    try{
       const result = await axiosClientAPI.get(url, config)
       .then((response) => {
          setData(response?.data?.data)
          setMeta(response.data?.meta)
          setPrevURL(response?.data?.links?.prev)
          setNextURL(response?.data?.links?.next)
       })
    } catch (error) {
       console.error(`Error: ${error}`)
    }     
  }

  /* GET DATA */
  async function getData() {
    try{
      const result = await axiosClientAPI.get(`investment`, config)
      .then((response) => {
        setData(response?.data?.data)
        setMeta(response.data?.meta)
        setPrevURL(response?.data?.links?.prev)
        setNextURL(response?.data?.links?.next)
      })
    } catch (error) {
      console.error(`Error: ${error}`);
      console.error(`Error Message: ${error.message}`);
      console.error(`Error Response: ${error.response}`);
    }   
  }    

  /* search DATA */
  async function searchData() {
    if(search === ''){
      getData();
      setIsSearch(false);
      return;
    }
    try{
      const result = await axiosClientAPI.get(`investment?search=${search}`, config)
      .then((response) => {
        setData(response?.data?.data)
        setMeta(response?.data?.meta)
        setPrevURL(response?.data?.links?.prev)
        setNextURL(response?.data?.links?.next)
        setIsSearch(false);
      })
    } catch (error) {
      console.error(`Error: ${error}`)
      console.error(`Error Message: ${error.message}`);
      console.error(`Error Response: ${error.response}`);
      setIsSearch(false);
    }   
  } 

  /* DELETE DATA */
  async function deleteData(id) {
    try{
      const result = await axiosClientAPI.delete(`investment/${id}`, config)
      .then((response) => {
        if(response.data.status == 1) {
          toast.success(response.data.message, toastifyDarkBounce);
          getData();
          return;
        }
      })
    } catch (error) {
      console.error(`Error: ${error}`);
      console.error(`Error Message: ${error.message}`);
      console.error(`Error Response: ${error.response}`);
    }   
  }   

  useEffect(() => { 
    getData();
  }, []);

  useEffect(() => { 
    isSearch === true && searchData();
  }, [isSearch]);


  if(!data){ return (<Loader />) }

  return (
    <>
     <section className='w-[100%]'>
          <div className='w-[90%] mx-auto flex items-center justify-between pb-[1rem]'>
            <div className='w-[45%] flex items-center justify-start'>
              <input 
                type='text' 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Enter name here...'
                className='w-[85%] h-[3rem] rounded-l-lg p-3 outline-none border border-slate-300' />
              <button 
                onClick={() => setIsSearch(true)}
                className='w-[15%] h-[3rem] border-y border-r rounded-r-lg text-lg border-slate-300 flex items-center justify-center p-3'>
                {isSearch === true 
                ? <span className='animate-pulse w-[15px] h-[15px] rounded-full bg-slate-900'></span> 
                : <FaSearch />
              }
                
              
              </button>
            </div>
            <div className='flex items-center justify-end gap-6'>
              <div className='text-green-700'>Page: {meta.current_page} of {meta.last_page}</div>
              {/* PAGINATION */}
              <div className='flex items-center justify-end gap-3'>
                  {prevURL &&
                  <button 
                    onClick={() => paginationHandler(prevURL)}
                    className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-slate-500 to-slate-700'>
                    <FaArrowLeftLong className='group-hover:-translate-x-2 duration-200 transition-all ease-in-out text-slate-500' /> 
                      Prev </button>
                  }
                  {nextURL &&
                    <button
                      onClick={(e) => paginationHandler(nextURL)}
                      className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-slate-500 to-slate-700'>
                        Next <FaArrowRightLong className='text-slate-500 group-hover:translate-x-2 duration-200 transition-all ease-in-out' />
                    </button>
                  }
              
                </div>
              {/* <Link href='/admin/opportunity/add' 
                className='px-6 py-3 flex items-center justify-center rounded-xl text-white bg-gradient-to-br from-yellow-300 to-yellow-700 hover:bg-gradient-to-br hover:to-yellow-400 hover:from-yellow-800'>
                Add</Link> */}
            </div>
          </div>
        </section>

        <section className="w-[100%] lg:overflow-hidden overflow-scroll">
          {/* TABLE TITLES */}
          <section className='lg:w-[100%] w-[70rem]'>
            <div className='w-[90%] text-lg py-2 mx-auto flex items-center justify-start font-bold font-white bg-slate-200 '>
              <div className='w-[20%] border-r border-white px-3 py-2'>NAME</div>
              <div className='w-[20%] border-r border-white px-3 py-2'>OPPORTUNITY</div>
              <div className='w-[15%] border-r border-white px-3 py-2'>AMOUNT</div>
              <div className='w-[20%] border-r border-white px-3 py-2'>EXPECTED RETURN</div>
              <div className='w-[15%] border-r border-white px-3 py-2'>STATUS</div>
              <div className='w-[10%] px-3 py-2'>ACTION</div>
            </div>
          </section>
          {/* TABLE DATA */}
          <section className='lg:w-[100%] w-[70rem]'>
            { data.length > 0 ?
              data.map((i, key) => (
                <div key={key} className='w-[90%] text-lg border-x border-b border-slate-300 mx-auto flex items-center justify-start '>
                  <div className='w-[20%] border-r border-blue-300 px-3 py-2'>
                    {i.name}
                  </div>
                  <div className='w-[20%] border-r border-blue-300 px-3 py-2'>
                    {i?.opportunity?.name ? i.opportunity?.name : 'Not added.'}
                  </div>
                  <div className='w-[15%] border-r border-blue-300 px-3 py-2'>
                    {i?.opportunity?.amount ? i?.opportunity?.amount : 'Not added.'}
                  </div>
                  <div className='w-[20%] border-r border-blue-300 px-3 py-2'>
                    {i?.opportunity?.expected_return ? i?.opportunity?.expected_return : 'Not added.'}
                  </div>
                  <div className='w-[15%] border-r border-blue-300 px-3 py-2'>
                    <span className='py-1 px-2 text-white bg-gradient-to-br from-green-600 to-cyan-700 rounded-full'>
                        {i?.status}</span>
                  </div>
                  <div className='w-[10%] px-3 py-2 text-xl flex items-center justify-start gap-4'>
                    <Link title='View Investment' href={`/admin/investment/${i.id}`}> 
                      <FaEye className='hover:text-blue-500 duration-150 hover:scale-110 transition-all ease-in'/> 
                    </Link>
                    <Link title='Edit Investment' href={`/admin/investment/status/edit/${i.id}`}> 
                      <AiOutlineDashboard className='hover:text-green-500 duration-150 hover:scale-110 transition-all ease-in' /> 
                    </Link>                     
                    <button> 
                        <MdDeleteForever 
                          onClick={() => deleteData(i.id)}
                          className='hover:text-red-500 duration-150 hover:scale-110 transition-all ease-in' /> 
                    </button>
                  </div>
                </div>
              ))
            :
              <div className="mx-auto w-[50rem] lg:w-[90%] flex items-center justify-center py-8">
                <h5 className='p-3 text-4xl font-light'>No Data Available...</h5>
              </div>
            }
          </section>
        </section>
      
        {/* PAGINATION */}
        <section className='w-[100%] mt-[2rem] mb-[4rem]'>
          <div className='mx-auto w-[90%] flex items-center justify-end gap-3'>
                {prevURL &&
                  <button 
                    onClick={() => paginationHandler(prevURL)}
                    className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-slate-500 to-slate-700'>
                    <FaArrowLeftLong className='group-hover:-translate-x-2 duration-200 transition-all ease-in-out text-slate-500' /> 
                      Prev 
                  </button>
                }
                {nextURL &&
                <button
                  onClick={() => paginationHandler(nextURL)}
                  className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-slate-500 to-slate-700'>
                    Next <FaArrowRightLong className='group-hover:translate-x-2 duration-200 transition-all ease-in-out text-slate-500' />
                </button>
                }
           
          </div>
        </section>
    </>
  )
}
