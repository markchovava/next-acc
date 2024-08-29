"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import Image from 'next/image';
import {  FaPhoneAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaWhatsapp, FaYoutube } from 'react-icons/fa6';
import { IoLogoInstagram } from 'react-icons/io5';



export default function NavigationMainResponsive() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='lg:hidden block'>
            <section id='top__links' className='bg-white drop-shadow-md'>
                <div className='mx-auto w-[90%] py-3 flex items-center justify-between gap-3'>
                    <div className='flex items-center justify-start gap-3'>
                        <div className='flex items-center justify-start gap-1'>
                            <FaPhoneAlt style={{fill: 'darkgreen'}} />
                            <span className='font-light'>+263 782 210021</span>
                        </div>
                    </div>
                    <div className='flex items-center justify-end gap-2 text-xl'>
                        <Link href='#'>
                            <FaFacebook 
                            className='hover:scale-110 transition-all ease-in-out' 
                            style={{fill: 'blue'}} />
                        </Link>
                        <Link href='#'>
                            <IoLogoInstagram 
                            className='hover:scale-110 transition-all ease-in-out' 
                            style={{fill: 'purple'}} />
                        </Link>
                        <Link href='#'>
                            <FaYoutube 
                            className='hover:scale-110 transition-all ease-in-out' 
                            style={{fill: 'red'}} />
                        </Link>
                        <Link href='#'>
                            <FaWhatsapp 
                            className='hover:scale-110 transition-all ease-in-out' 
                            style={{fill: 'green'}} />
                        </Link>
                    </div>
                </div>
            </section>

           {/* MID TOP */}
            <section className='w-[100%] h-auto py-3'>
                <div className='mx-auto w-[90%] flex md:flex-row flex-col items-center justify-between'>
                    <div className='flex justify-start items-center py-3'>
                        <div className='aspect-[1/1] w-[6.5rem]'>
                            <Image src='/assets/logo/small.png' height={300} width={300} alt='Logo' />
                        </div>
                        <div>
                            <h2 className='uppercase text-[1.8rem] text-yellow-700 font-medium'>
                                Africa Capital Club</h2>
                            <p className='text-lg tracking-wide'>Affiliated to Pan-Africa Parliament</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-end gap-2'>
                        <Link href='/login' className='border border-slate-600 text-slate-600 hover:bg-gradient-to-br hover:from-slate-300 hover:to-slate-800 hover:text-white px-10 py-4'>
                            Login</Link>
                        <Link href='/register' className='text-white border px-10 py-4 transition-all ease-in-out bg-gradient-to-br from-yellow-300 to-yellow-700 hover:bg-gradient-to-br hover:to-yellow-500 hover:from-yellow-700'>
                            Register</Link>
                    </div>
                </div>
            </section>


            {/* NAVIGATION */}
            <section className='bg-white mx-auto w-[100%] flex flex-col items-center justify-between'>
               
                <div className='mx-auto w-[90%] flex items-center justify-end py-4'>
                    <button onClick={() => setIsOpen(!isOpen)} >
                        { isOpen == true 
                        ? <AiOutlineClose className='text-xl' /> 
                        : <GiHamburgerMenu className='text-xl font-semibold'/>
                        }
                    </button>
                </div>
                { isOpen == true &&
                <ul className='w-[100%] flex flex-col items-center justify-start text-lg'>
                    <li className='w-[100%]'>
                        <Link href='/' 
                            className='hover:bg-slate-100 py-2 hover:text-green-800 text-center transition-all ease-in-out flex items-center justify-center'>
                        Home</Link>
                    </li>
                    <li className='w-[100%]'>
                        <Link href='/about' className='hover:bg-slate-100 py-2 hover:text-green-800 text-center transition-all ease-in-out flex items-center justify-center' >
                        About us</Link>
                    </li>
                    <li className='w-[100%]'>
                        <Link href='country' className='hover:bg-slate-100 py-2 hover:text-green-800 text-center transition-all ease-in-out flex items-center justify-center'>
                        Countries</Link>
                    </li>
                    <li className='w-[100%]'>
                        <Link href='/opportunity' className='hover:bg-slate-100 py-2 hover:text-green-800 text-center transition-all ease-in-out flex items-center justify-center'>
                        Opportunites</Link>
                    </li>
                    <li className='w-[100%]'>
                        <span className='cursor-pointer hover:bg-slate-100 py-2 hover:text-green-800 text-center transition-all ease-in-out flex items-center justify-center'>
                        Meetings & Events <FaChevronDown /></span>
                    </li>
                    <li className='w-[100%]'>
                        <Link href='/membership' className='hover:bg-slate-100 py-2 hover:text-green-800 text-center transition-all ease-in-out flex items-center justify-center'>
                        Memberships</Link>
                    </li>
                    <li className='w-[100%]'>
                        <Link href='/partner' className='hover:bg-slate-100 py-2 hover:text-green-800 text-center transition-all ease-in-out flex items-center justify-center'>
                        Partners</Link>
                    </li>
                    <li className='w-[100%]'>
                        <Link href='/contact' className='hover:bg-slate-100 py-2 hover:text-green-800 text-center transition-all ease-in-out flex items-center justify-center'>
                        Contact Us</Link>
                    </li>
                </ul>
                }
              
            </section>
        </div>
      )
}
