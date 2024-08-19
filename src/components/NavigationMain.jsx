"use client";
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";


export default function NavigationMain() {
  return (
    <div className='hidden lg:block'>
        <section id='top__links' className='bg-white drop-shadow-md'>
            <div className='mx-auto w-[90%] py-2 flex items-center justify-between'>
                <div className='flex text-slate-800 items-center justify-start gap-3 text-xl'>
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
        <section className='bg-white mx-auto w-[90%] py-3 flex items-center justify-between'>
            <div className='flex justify-start items-center'>
                <div className='aspect-[1/1] w-[6.5rem]'>
                    <Image src='/assets/logo/small.png' height={300} width={300} alt='Logo' />
                </div>
                <div>
                    <h2 className='uppercase text-[2rem] text-yellow-700 font-medium'>
                        Africa Capital Club</h2>
                    <p className='text-lg tracking-wide'>Affiliated to Pan-Africa Parliament</p>
                </div>
            </div>

            <nav className=''>
                <ul className='flex items-center justify-start gap-4 text-lg'>
                    <li className='hover:text-green-800 transition-all ease-in-out'>
                        <Link href='/' className='hover:text-green-800 transition-all ease-in-out'>
                        Home</Link></li>
                    <li className='hover:text-green-800 transition-all ease-in-out'>
                        <Link href='/about' >
                        About us</Link></li>
                    <li className='hover:text-green-800 transition-all ease-in-out'>
                        <Link href='oppotunity' >
                        Opportunites</Link></li>
                    <li className='hover:text-green-800 transition-all ease-in-out'>
                        <span className='cursor-pointer flex items-center justify-center gap-1 hover:text-green-800 transition-all ease-in-out'>
                        Meetings & Events <FaChevronDown /></span>
                    </li>
                    <li className='hover:text-green-800 transition-all ease-in-out'>
                        <Link href='/membership'>
                        Memberships</Link></li>
                    <li className='hover:text-green-800 transition-all ease-in-out'>
                        <Link href='/contact'>Contact Us</Link></li>
                </ul>
            </nav>
        </section>
    </div>
  )
}
