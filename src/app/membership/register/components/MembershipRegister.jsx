import React from 'react'

export default function MembershipRegister() {
  return (
    <>
        <section className='py-[4rem]'>
            <div className='w-[90%] mx-auto bg-white drop-shadow-md p-[1.6rem]'>
                <h3 className='text-[2rem] font-medium pb-8 text-center'>Membership Registration Form</h3>
                <h4 className='text-[1.6rem] font-light mb-2'>
                    Personal Information
                </h4>
                <div className='flex items-center justify-start gap-6 mb-4'>
                    <div className='w-[50%]'>
                        <p className='font-light mb-1'>Name:</p>
                        <input type='text'
                            placeholder='Enter your First Name...' 
                            className='w-[100%] font-light rounded-lg p-3 outline-none border border-slate-300' />
                    </div>
                    <div className='w-[50%]'>
                        <p className='font-light mb-1'>Name:</p>
                        <input type='text' 
                            placeholder='Enter your Last Name...' 
                            className='w-[100%] font-light rounded-lg p-3 outline-none border border-slate-300' />
                    </div>
                </div>
                <div className='flex items-center justify-start gap-6 mb-4'>
                    <div className='w-[50%]'>
                        <p className='font-light mb-1'>Email:</p>
                        <input type='text'
                            placeholder='Enter your Email...' 
                            className='w-[100%] font-light rounded-lg p-3 outline-none border border-slate-300' />
                    </div>
                    <div className='w-[50%]'>
                        <p className='font-light mb-1'>Phone:</p>
                        <input type='text' 
                            placeholder='Enter your Phone Number...' 
                            className='w-[100%] font-light rounded-lg p-3 outline-none border border-slate-300' />
                    </div>
                </div>

                <h4 className='text-[1.6rem] font-light mb-2'>
                    Profession
                </h4>
                <div className='flex items-center justify-start gap-6 mb-4'>
                    <div className='w-[50%]'>
                        <p className='font-light mb-1'>Job Title:</p>
                        <input type='text'
                            placeholder='Enter your First Name...' 
                            className='w-[100%] font-light rounded-lg p-3 outline-none border border-slate-300' />
                    </div>
                    <div className='w-[50%]'>
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
                        
                    </select>
                   
                </div>
                
            </div>
        </section>
    </>
  )
}
