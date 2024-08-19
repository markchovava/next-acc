"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";



export default function NavigationMainResponsive() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='lg:hidden block'>
            <section id='top__links' className='bg-white drop-shadow-md'>
                <div className='mx-auto w-[90%] py-3 flex items-center justify-between gap-3'>
                    <div className='flex text-slate-800 items-center justify-start gap-3 text-2xl'>
                        <Link href='#'><FaFacebook style={{fill: 'blue'}} /></Link>
                        <Link href='#'><IoLogoInstagram style={{fill: 'purple'}} /></Link>
                        <Link href='#'><FaYoutube style={{fill: 'red'}} /></Link>
                        <Link href='#'><FaWhatsapp style={{fill: 'green'}} /></Link>
                    </div>
                    <div className='flex items-center justify-end gap-2'>
                        <Link href='#' className='text-green-800 text-medium'>Login</Link> or
                        <Link href='#' className='text-blue-800 text-medium'>Register</Link>
                    </div>
                </div>
            </section>

           
            {/* NAVIGATION */}
            <section className='bg-white mx-auto w-[100%] flex flex-col items-center justify-between'>
                <div className='flex justify-start items-center py-3'>
                    <div className='aspect-[1/1] w-[6.5rem]'>
                        <Image src='/assets/logo/small.png' height={300} width={300} alt='Logo' />
                    </div>
                    <div>
                        <h2 className='uppercase text-[2rem] text-yellow-700 font-medium'>
                            Africa Capital Club</h2>
                        <p className='text-lg tracking-wide'>Affiliated to Pan-Africa Parliament</p>
                    </div>
                </div>

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
                        <Link href='oppotunity' className='hover:bg-slate-100 py-2 hover:text-green-800 text-center transition-all ease-in-out flex items-center justify-center'>
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
                        <Link href='/contact' className='hover:bg-slate-100 py-2 hover:text-green-800 text-center transition-all ease-in-out flex items-center justify-center'>
                        Contact Us</Link>
                    </li>
                </ul>
                }
              
            </section>
        </div>
      )
}
