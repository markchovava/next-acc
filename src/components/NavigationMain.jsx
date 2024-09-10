"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { axiosClientAPI } from '@/api/axiosClientAPI';
import { useRouter } from 'next/navigation';
import { tokenAuth } from '@/tokens/tokenAuth';
import { tokenRole } from '@/tokens/tokenRole';
import { removeAuthCookie } from '@/cookie/authCookieClient';
import { removeRoleCookie } from '@/cookie/roleCookieClient';

/* toastify */
import { toast } from 'react-toastify';
import { toastifyDarkBounce } from '@/libs/toastify';



export default function NavigationMain() {
    const router = useRouter();
    const { getAuthToken, removeAuthToken } = tokenAuth();
    const { removeRoleToken } = tokenRole();
    const [isLogout, setIsLogout] = useState(false);
    const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getAuthToken()}`
    }}
     /* LOGOUT */
     async function postLogout() {
        try{
        const result = await axiosClientAPI.get(`logout`, config)
            .then((response) => {
            if(response.data.status == 1) {
                removeAuthToken();
                removeRoleToken();
                removeAuthCookie();
                removeRoleCookie();
                setIsLogout(false);
                toast.success(response.data.message, toastifyDarkBounce)
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
                router.push(`/login`);
            }
            })
        } catch (error) {
            console.error(`Error: ${error}`)
            console.error(`Error Message: ${error.message}`);
            console.error(`Error Response: ${error.response}`);
            setIsLogout(false) 
        } 
    } 

    useEffect(() => { 
        isLogout == true && postLogout();
    }, [isLogout]);
    

  return (
    <div className='hidden lg:block'>
        {/* NAV TOP */}
        <section id='top__links' className='bg-white drop-shadow-md'>
            <div className='mx-auto w-[90%] py-2 flex items-center justify-between'>
                <div className='flex items-center justify-start gap-3 '>
                    <div className='flex items-center justify-start gap-1'>
                        <FaPhoneAlt style={{fill: 'darkgreen'}} />
                        <span className='font-light'>00971 4447 4669</span>
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
                <Link href='/'>
                <div className='flex justify-start items-center py-3 gap-2'>
                    <div className='aspect-[1/1] w-[6.5rem]'>
                        <img src='/assets/logo/small.png' className='w-[100%] h-[100%] object-fill' alt='Logo' />
                    </div>
                    <div>
                        <h2 className='uppercase text-[2.4rem] text-[#3f724a] font-medium'>
                            Africa Capital Club</h2>
                        <p className='text-lg tracking-wide'>Africa Economic & Investment Promotion Hub</p>
                    </div>
                </div>
                </Link>
                <div className='flex items-center justify-end gap-2'>
                    {getAuthToken() ?
                    <>
                    <button 
                        onClick={() => setIsLogout(true)}  
                        className='border border-green-700 text-green-700 hover:bg-gradient-to-br hover:border-0 hover:from-green-300 hover:to-green-800 hover:text-white px-10 py-4'>
                        Logout
                    </button>
                    </>
                    :
                    <>
                    <Link 
                        href='/login' 
                        className='border border-slate-600 text-slate-600 hover:bg-gradient-to-br hover:from-slate-300 hover:to-slate-800 hover:text-white px-10 py-4'>
                        Login
                    </Link>
                    <Link 
                        href='/register' 
                        className='text-white border px-10 py-4 transition-all ease-in-out bg-gradient-to-br from-yellow-300 to-yellow-700 hover:bg-gradient-to-br hover:to-yellow-500 hover:from-yellow-700'>
                        Register
                    </Link>
                    </>
                    }
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
