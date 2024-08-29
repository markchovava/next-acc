"use client";
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function NavigationMain() {
  return (
    <div className='hidden lg:block'>
        {/* NAV TOP */}
        <section id='top__links' className='bg-white drop-shadow-md'>
            <div className='mx-auto w-[90%] py-2 flex items-center justify-between'>
                <div className='flex items-center justify-start gap-3 '>
                    <div className='flex items-center justify-start gap-1'>
                        <FaPhoneAlt style={{fill: 'darkgreen'}} />
                        <span className='font-light'>+263 782 210021</span>
                    </div>
                </div>
                <div className='flex items-center justify-end gap-2 text-xl'>
                    <Link href='#'><FaFacebook style={{fill: 'blue'}} /></Link>
                    <Link href='#'><IoLogoInstagram style={{fill: 'purple'}} /></Link>
                    <Link href='#'><FaYoutube style={{fill: 'red'}} /></Link>
                    <Link href='#'><FaWhatsapp style={{fill: 'green'}} /></Link>
                </div>
            </div>
        </section>


        {/* MID TOP */}
        <section className='w-[100%] h-auto'>
            <div className='mx-auto w-[90%] flex items-center justify-between'>
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
                <div className='flex items-center justify-end gap-2'>
                    <Link href='/login' className='border border-slate-600 text-slate-600 hover:bg-gradient-to-br hover:from-slate-300 hover:to-slate-800 hover:text-white px-10 py-4'>
                        Login</Link>
                    <Link href='/register' className='text-white border px-10 py-4 transition-all ease-in-out bg-gradient-to-br from-yellow-300 to-yellow-700 hover:bg-gradient-to-br hover:to-yellow-500 hover:from-yellow-700'>
                        Register</Link>
                </div>
            </div>
        </section>
        {/* NAVIGATION */}
        <section className='bg-white mx-auto w-[90%] py-3'>
            <ul className='flex items-center justify-center gap-4 text-lg'>
                <li className='hover:text-green-800 transition-all ease-in-out'>
                    <Link href='/' className='hover:text-green-800 transition-all ease-in-out'>
                    Home</Link>
                </li>
                <li className='hover:text-green-800 transition-all ease-in-out'>
                    <Link href='/about' >
                    About us</Link>
                </li>
                <li className='hover:text-green-800 transition-all ease-in-out'>
                    <Link href='/country' >
                    Countries</Link>
                </li>
                <li className='hover:text-green-800 transition-all ease-in-out'>
                    <Link href='/opportunity' >
                    Opportunites</Link>
                </li>
                <li className='hover:text-green-800 transition-all ease-in-out'>
                    <Link href='/meeting-events'>
                    Meetings & Events</Link>
                </li>
                <li className='hover:text-green-800 transition-all ease-in-out'>
                    <Link href='/membership'>
                    Memberships</Link>
                </li>
                <li className='hover:text-green-800 transition-all ease-in-out'>
                    <Link href='/partner'>
                    Partners</Link>
                </li>
                <li className='hover:text-green-800 transition-all ease-in-out'>
                    <Link href='/contact'>
                        Contact Us</Link>
                </li>
            </ul> 
        </section>
    </div>
  )
}
