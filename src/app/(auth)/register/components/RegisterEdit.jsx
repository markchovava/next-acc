import Link from 'next/link'
import React from 'react'
import { FaGoogle } from "react-icons/fa";



export default function RegisterEdit() {
  return (
    <>
    <section className='w-[100%] py-[5rem]'>
        <div className='mx-auto lg:w-[50%] w-[80%] bg-white drop-shadow-md p-[1.6rem]'>
            <h3 className='text-[2rem] mb-6 text-center text-yellow-600'>Register Form</h3>
            <div className='w-[100%] mb-4'>
                <p className='mb-2 font-light'>Email:</p>
                <input 
                    type='text'
                    name='email' 
                    placeholder='Enter your email here...'
                    className='w-[100%] p-4 outline-none border border-slate-300 rounded-lg' />
            </div>
            <div className='w-[100%] mb-4'>
                <p className='mb-2 font-light'>Password:</p>
                <input 
                    type='password' 
                    name='password'
                    placeholder='Enter Password here...'
                    className='w-[100%] p-4 outline-none border border-slate-300 rounded-lg' />
            </div>
            <div className='w-[100%] mb-6'>
                <p className='mb-2 font-light'>Confirm Password:</p>
                <input 
                    type='password' 
                    name='password_confirm'
                    placeholder='Enter Confirm Password here...'
                    className='w-[100%] p-4 outline-none border border-slate-300 rounded-lg' />
            </div>
    
            <div className='w-[100%] mb-4'>
               <button className='w-[100%] rounded-lg py-4 text-white transition-all ease-in-out bg-gradient-to-br from-yellow-500 to-yellow-700 hover:bg-gradient-to-br hover:to-yellow-500 hover:from-yellow-700 hover:drop-shadow-md'>
                Submit
               </button>
            </div>
            <div className='w-[100%] pt-2 pb-6 flex items-center justify-center font-light text-yellow-600'>
              Or Register with
            </div>
            <div className='w-[100%] mb-4'>
               <button className='w-[100%] bg-white flex items-center justify-center gap-1 rounded-lg py-4 transition-all ease-in-out border-2 border-slate-300 hover:drop-shadow-md'>
                <FaGoogle className='text-blue-600 text-xl' /> 
                <span className='text-slate-700 font-light'>
                    Register with Google.</span>
               </button>
            </div>
            <div className='w-[100%] py-4 flex items-center justify-center gap-2 font-light'>
              Don't have an account? 
              <Link href='/login' className='text-green-600 underline hover:no-underline transition-all ease-in-out'>
                Login here</Link>
            </div>
        </div>
    </section>
</>
  )
}
