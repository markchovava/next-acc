import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function MembershipRegister() {
  return (
    <>
        <section className='py-[4rem]'>
            <div className='w-[90%] mx-auto bg-white drop-shadow-md p-[1.6rem]'>
                <h3 className='text-[2rem] font-medium pb-8 text-center'>Membership Registration Form</h3>
                <h4 className='text-[1.6rem] font-light mb-2'>
                    Personal Information
                </h4>
                <div className='flex lg:flex-row flex-col items-center justify-start lg:gap-6 gap-4 mb-4'>
                    <div className='lg:w-[50%] w-[100%]'>
                        <p className='font-light mb-1'>First Name:</p>
                        <input type='text'
                            placeholder='Enter your First Name...' 
                            className='w-[100%] font-light rounded-lg p-3 outline-none border border-slate-300' />
                    </div>
                    <div className='lg:w-[50%] w-[100%]'>
                        <p className='font-light mb-1'>Last Name:</p>
                        <input type='text' 
                            placeholder='Enter your Last Name...' 
                            className='w-[100%] font-light rounded-lg p-3 outline-none border border-slate-300' />
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col items-center justify-start lg:gap-6 gap-4 mb-4'>
                    <div className='lg:w-[50%] w-[100%]'>
                        <p className='font-light mb-1'>Email:</p>
                        <input type='text'
                            placeholder='Enter your Email...' 
                            className='w-[100%] font-light rounded-lg p-3 outline-none border border-slate-300' />
                    </div>
                    <div className='lg:w-[50%] w-[100%]'>
                        <p className='font-light mb-1'>Phone:</p>
                        <input type='text' 
                            placeholder='Enter your Phone Number...' 
                            className='w-[100%] font-light rounded-lg p-3 outline-none border border-slate-300' />
                    </div>
                </div>

                <h4 className='text-[1.6rem] font-light mb-2'>
                    Profession
                </h4>
                <div className='flex lg:flex-row flex-col items-center justify-start lg:gap-6 gap-4 mb-4'>
                    <div className='lg:w-[50%] w-[100%]'>
                        <p className='font-light mb-1'>Job Title:</p>
                        <input type='text'
                            placeholder='Enter your First Name...' 
                            className='w-[100%] font-light rounded-lg p-3 outline-none border border-slate-300' />
                    </div>
                    <div className='lg:w-[50%] w-[100%]'>
                        <p className='font-light mb-1'>Cmpany Name:</p>
                        <input type='text' 
                            placeholder='Enter your Last Name...' 
                            className='w-[100%] font-light rounded-lg p-3 outline-none border border-slate-300' />
                    </div>
                </div>

                <h4 className='text-[1.6rem] font-light mb-2'>
                    Membership
                </h4>
                <div className=' mb-4'>   
                    <p className='font-light mb-1'>Job Title:</p>
                    <select type='text'
                        placeholder='Enter your First Name...' 
                        className='w-[100%] font-light rounded-lg p-3 outline-none border border-slate-300'>
                        <option value=''>Select an option.</option>
                        <option value=''>Platinum</option>
                        <option value=''>Gold</option>
                        <option value=''>Standard</option>
                    </select>
                </div>

                {/*  */}
                <div className='flex items-center justify-center pt-4 pb-6'>
                    <button className='group text-lg px-12 py-4 flex items-center justify-center gap-2 rounded-xl text-white hover:drop-shadow-lg bg-gradient-to-br from-yellow-500 to-yellow-800 '>
                        Submit
                        <FaArrowRightLong className='group-hover:translate-x-1 transition-all ease-in-out' />
                    </button>
                </div>
                
            </div>
        </section>
    </>
  )
}
