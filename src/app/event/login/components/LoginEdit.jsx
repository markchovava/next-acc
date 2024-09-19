"use client";
import { baseURL } from '@/api/baseURL';
import { setAuthCookie } from '@/cookie/authCookieClient';
import { setRoleCookie } from '@/cookie/roleCookieClient';
import { toastifyDarkBounce } from '@/libs/toastify';
import { tokenAuth } from '@/tokens/tokenAuth';
import { tokenRole } from '@/tokens/tokenRole';
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { toast } from 'react-toastify';




export default function LoginEdit() {
  const router = useRouter();
  const { setAuthToken } = tokenAuth()
  const { setRoleToken } = tokenRole()
  const [data, setData] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [errMsg, setErrMsg] = useState({});
  const handleInput = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const postData = async () => {
      if(!data.email) {
        const message = 'Email is required.';
        setErrMsg({email: message});
        toast.warn(message, toastifyDarkBounce)
        setIsSubmit(false);
        return;
      }
      if(!data.password) {
        const message = 'Password is required.';
        setErrMsg({password: message});
        toast.warn(message, toastifyDarkBounce);
        setIsSubmit(false);
        return;
      }
      /*  */
      const formData = {
        email: data.email,
        password: data.password,
        name: data.name,
      };
      /*  */
      try{
        const result = await axios.post(`${baseURL}login`, formData)
        .then((response) => {
          if(response.data.status == 0){
            const message = response.data.message;
            setErrMsg({email: message});
            toast.warn(message, toastifyDarkBounce);
            setIsSubmit(false);
            return;
          }
          if(response.data.status == 2){
            const message = response.data.message;
            setErrMsg({password: message});
            toast.warn(message, toastifyDarkBounce);
            setIsSubmit(false);
            return;
          }
          if(response.data.status == 1){
            toast.success(response.data.message, toastifyDarkBounce);
            /* ROLE */
            setRoleToken(response.data.role_level);
            setRoleCookie(response.data.role_level)
            /* AUTH */
            setAuthToken(response.data.auth_token);
            setAuthCookie(response.data.auth_token);
            setIsSubmit(false);    
            router.push('/event/checkout'); 
            setTimeout(() => {
              window.location.reload();
          }, 2000);
          }
        
        })
        } catch (error) {
            console.error(`Error: ${error}`);
            setIsSubmit(false); 
      }
  }

  useEffect(() => {
    isSubmit == true && postData();
  }, [isSubmit]);




  return (
    <>
        <section className='w-[100%] py-[5rem]'>
            <div className='mx-auto lg:w-[50%] w-[80%] bg-white drop-shadow-md p-[1.6rem]'>
                <h3 className='text-[2rem] mb-6 text-center text-yellow-600'>Login Form</h3>
                <div className='w-[100%] mb-4'>
                    <p className='mb-2 font-light'>Email:</p>
                    <input 
                        type='text' 
                        name='email'
                        onChange={handleInput}
                        placeholder='Enter your email here...'
                        className='w-[100%] p-4 outline-none border border-slate-300 rounded-lg' />
                    {errMsg.email &&
                      <small className='text-red-600'>
                        {errMsg.email}
                      </small>
                    }
                </div>
                <div className='w-[100%] mb-4'>
                    <p className='mb-2 font-light'>Password:</p>
                    <input 
                        type='password' 
                        name='password'
                        onChange={handleInput}
                        placeholder='Enter Password here...'
                        className='w-[100%] p-4 outline-none border border-slate-300 rounded-lg' />
                    {errMsg.password &&
                      <small className='text-red-600'>
                        {errMsg.password}
                      </small>
                    }
                </div>
                <div className='w-[100%] mb-6 flex items-center justify-end'>
                   <Link href='#' className='font-light text-green-700 underline hover:no-underline transition-all ease-in-out'>
                    Forgot password?
                   </Link>
                </div>
                <div className='w-[100%] mb-4'>
                   <button onClick={() => setIsSubmit(true)} className='w-[100%] rounded-lg py-4 text-white transition-all ease-in-out bg-gradient-to-br from-yellow-500 to-yellow-700 hover:bg-gradient-to-br hover:to-yellow-500 hover:from-yellow-700 hover:drop-shadow-md'>
                    {isSubmit == true ? 'Processing' : 'Submit'}
                   </button>
                </div>
                <div className='w-[100%] pt-2 pb-6 flex items-center justify-center font-light text-yellow-600'>
                  Or Login with
                </div>
                <div className='w-[100%] mb-4'>
                   <button className='w-[100%] bg-white flex items-center justify-center gap-1 rounded-lg py-4 transition-all ease-in-out border-2 border-slate-300 hover:drop-shadow-md'>
                    <FaGoogle className='text-blue-600 text-xl' /> 
                    <span className='text-slate-700 font-light'>
                        Login with Google.</span>
                   </button>
                </div>
                <div className='w-[100%] py-4 flex items-center justify-center gap-2 font-light'>
                  Don't have an account? 
                  <Link href='/membership/register' className='text-green-600 underline hover:no-underline transition-all ease-in-out'>
                    Register here</Link>
                </div>
            </div>
        </section>
    </>
  )
}
