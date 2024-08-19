import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaCaretRight, FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from 'react-icons/io5';

export default function Footer() {
  return (
    <>
        <section className='w-[100%] text-white bg-gradient-to-br from-yellow-700 to-orange-800'>
            <div className='mx-auto pt-[4rem] pb-[2rem] w-[90%] grid lg:grid-cols-4 grid-cols-2 lg:gap-4 gap-8'>
                <div className='w-[100%]'>
                    <h3 className='font-medium text-xl tracking-wider mb-2'>
                        About Africa Capital Club</h3>
                    <ul className='ml-2'>
                        <li className='group'>
                            <Link href='#' className='flex items-center justify-start gap-2 group-hover:translate-x-1 transition-all ease-in-out'>
                                <FaCaretRight className='group-hover:translate-x-1 transition-all ease-in-out' /> 
                                About Us </Link></li>
                        <li className='group'>
                            <Link href='#' className='flex items-center justify-start gap-2 group-hover:translate-x-1 transition-all ease-in-out'>
                                <FaCaretRight className='group-hover:translate-x-1 transition-all ease-in-out' /> 
                                Privacy</Link></li>
                        <li className='group'>
                            <Link href='#' className='flex items-center justify-start gap-2 group-hover:translate-x-1 transition-all ease-in-out'>
                                <FaCaretRight className='group-hover:translate-x-1 transition-all ease-in-out' /> 
                                Cookies</Link></li>
                        <li className='group'>
                            <Link href='#' className='flex items-center justify-start gap-2 group-hover:translate-x-1 transition-all ease-in-out'>
                                <FaCaretRight className='group-hover:translate-x-1 transition-all ease-in-out' /> 
                                Terms</Link></li>
                    </ul>
                </div>
                <div className='w-[100%]'>
                    <h3 className='font-medium text-xl tracking-wider mb-2'>
                        Resources</h3>
                    <ul className='ml-2'>
                        <li className='group'>
                            <Link href='#' className='flex items-center justify-start gap-2 group-hover:translate-x-1 transition-all ease-in-out'>
                                <FaCaretRight className='group-hover:translate-x-1 transition-all ease-in-out' /> 
                                Member News </Link></li>
                        <li className='group'>
                            <Link href='#' className='flex items-center justify-start gap-2 group-hover:translate-x-1 transition-all ease-in-out'>
                                <FaCaretRight className='group-hover:translate-x-1 transition-all ease-in-out' /> 
                                Industry News</Link></li>
                        <li className='group'>
                            <Link href='#' className='flex items-center justify-start gap-2 group-hover:translate-x-1 transition-all ease-in-out'>
                                <FaCaretRight className='group-hover:translate-x-1 transition-all ease-in-out' /> 
                                Afri-Spective Blog</Link></li>
                    </ul>
                </div>
                <div className='w-[100%]'>
                    <h3 className='font-medium text-xl tracking-wider mb-2'>
                        +263 782210021</h3>
                    <h3 className='font-medium text-xl tracking-wider mb-2'>
                        info@email.com</h3>
                    <p>
                        Africa Capital Club <br />
                        1 Piers Ave <br />
                        CBD, Harare <br />
                        Zimbabwe
                    </p>
                </div>
                <div className='w-[100%]'>
                    <div className='flex flex-col justify-center items-center mb-2'>
                        <div className='aspect-[1/1] w-[6.5rem]'>
                            <Image src='/assets/logo/small.png' height={300} width={300} alt='Logo' />
                        </div>
                        <div>
                            <h2 className='uppercase text-[1.6rem] font-medium'>
                                Africa Capital Club</h2>
                            <p className='text-lg tracking-wide'>Affiliated to Pan-Africa Parliament</p>
                        </div>
                    </div>
                    <div className='flex text-slate-800 items-center justify-center gap-3 text-3xl'>
                        <Link href='#' className='hover:scale-110 transition-all ease-in-out'>
                            <FaFacebook style={{fill: 'white'}} /></Link>
                        <Link href='#' className='hover:scale-110 transition-all ease-in-out'>
                            <IoLogoInstagram style={{fill: 'white'}} /></Link>
                        <Link href='#' className='hover:scale-110 transition-all ease-in-out'>
                            <FaYoutube style={{fill: 'white'}} /></Link>
                        <Link href='#' className='hover:scale-110 transition-all ease-in-out'>
                            <FaWhatsapp style={{fill: 'white'}} /></Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}


