"use client"
import { axiosClientAPI } from '@/api/axiosClientAPI';
import { removeAuthCookie } from '@/cookie/authCookieClient';
import { removeRoleCookie } from '@/cookie/roleCookieClient';
import { toastifyDarkBounce } from '@/libs/toastify';
import { tokenAuth } from '@/tokens/tokenAuth';
import { tokenRole } from '@/tokens/tokenRole';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { toast } from 'react-toastify';



export default function NavTop() {
    const router = useRouter();
    const { getAuthToken, removeAuthToken } = tokenAuth();
    const { removeRoleToken } = tokenRole();
    const [isLogout, setIsLogout] = useState(false);
    const [isActive, setIsActive] = useState({
        zero: false,
        one: false,
        two: false,
        three: false,
        four: false,
        five: false,
        six: false,
        seven: false,
        eight: false,
        nine: false,
        ten: false,
        eleven: false,
    })
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
    <section className="hidden lg:block w-[100%] text-white bg-green-800 relative z-50">
        <div className="w-[94%] mx-auto px-3 py-2 flex justify-between items-center">
            {/* ADMINISTRATION LINKS */}
            <ul className="flex items-center justify-start gap-4">
                {/* SETTINGS */}
                <li className="relative z-20">
                    <button 
                        onClick={() => setIsActive({one: !isActive.one})} 
                        className="flex items-center justify-start gap-1">
                        Settings <FaAngleDown /> 
                    </button>
                    <ul className={`absolute z-100 ${isActive.one == true ? 'block' : 'hidden'} rounded-b-lg overflow-hidden drop-shadow-md top-[130%] transition-all ease-in-out duration-150 left-[-0.5rem] w-[10rem] border border-white bg-green-800`}>
                        <li className='w-[100%] hover:bg-green-900 px-3 py-1'>
                            <Link href='/admin/app-info' className=''>App Info</Link>
                        </li>
                        <li className='w-[100%] hover:bg-green-900 px-3 py-1'>
                            <Link href='/admin/role' className=''>Roles</Link>
                        </li>
                    </ul>
                </li>
                {/* USERS */}
                <li className="relative z-20">
                    <button 
                        onClick={() => setIsActive({two: !isActive.two})} 
                        className="flex items-center justify-start gap-1">
                        Users <FaAngleDown /> </button>
                    <ul className={`absolute z-100 ${isActive.two == true ? 'block' : 'hidden'} rounded-b-lg overflow-hidden drop-shadow-md top-[130%] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-green-800`}>
                        <li className='w-[100%] hover:bg-green-900 px-3 py-2'>
                            <Link href='/admin/user/add' className=''>Add Users</Link>
                        </li>
                        <li className='w-[100%] hover:bg-green-900 px-3 py-2'>
                            <Link href='/admin/user' className=''>User List</Link>
                        </li>
                    </ul>
                </li>
                {/* MEMBERSHIPS */}
                <li className="relative z-20">
                    <button 
                        onClick={() => setIsActive({ten: !isActive.ten})} 
                        className="flex items-center justify-start gap-1">
                        Memberships <FaAngleDown /> </button>
                    <ul className={`absolute z-100 ${isActive.ten == true ? 'block' : 'hidden'} rounded-b-lg overflow-hidden drop-shadow-md top-[130%] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-green-800`}>
                        <li className='w-[100%] hover:bg-green-900 px-3 py-2'>
                            <Link href='/admin/membership/add' className=''>Add Memberships</Link>
                        </li>
                        <li className='w-[100%] hover:bg-green-900 px-3 py-2'>
                            <Link href='/admin/membership' className=''>Membership List</Link>
                        </li>
                    </ul>
                </li>
                {/* MEMBERS */}
                <li className="relative z-20">
                    <button 
                        onClick={() => setIsActive({eleven: !isActive.eleven})} 
                        className="flex items-center justify-start gap-1">
                        Members <FaAngleDown /> </button>
                    <ul className={`absolute z-100 ${isActive.eleven == true ? 'block' : 'hidden'} rounded-b-lg overflow-hidden drop-shadow-md top-[130%] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-green-800`}>
                        <li className='w-[100%] hover:bg-green-900 px-3 py-2'>
                            <Link href='/admin/member/member-order' className=''>Member Payments</Link>
                        </li>
                    </ul>
                </li>
                {/* COUNTRY */}
                <li className="relative z-20">
                    <button 
                        onClick={() => setIsActive({three: !isActive.three})} 
                        className="flex items-center justify-start gap-1">
                        Country <FaAngleDown /> </button>
                    <ul className={`absolute z-100 ${isActive.three == true ? 'block' : 'hidden'} rounded-b-lg overflow-hidden drop-shadow-md top-[130%] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-green-800`}>
                        <li className='w-[100%] hover:bg-green-900 px-3 py-2'>
                            <Link href='/admin/country/add' className=''>Add Country</Link>
                        </li>
                        <li className='w-[100%] hover:bg-green-900 px-3 py-2'>
                            <Link href='/admin/country' className=''>Countries List</Link>
                        </li>
                    </ul>
                </li>
                {/* SECTOR */}
                <li className="relative z-20">
                    <button 
                        onClick={() => setIsActive({four: !isActive.four})} 
                        className="flex items-center justify-start gap-1">
                        Sectors <FaAngleDown /> </button>
                    <ul className={`absolute z-100 ${isActive.four == true ? 'block' : 'hidden'} rounded-b-lg overflow-hidden drop-shadow-md top-[130%] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-green-800`}>
                        <li className='w-[100%] hover:bg-green-900 px-3 py-2'>
                            <Link href='/admin/sector/add' className=''>Add Sector</Link>
                        </li>
                        <li className='w-[100%] hover:bg-green-900 px-3 py-2'>
                            <Link href='/admin/sector' className=''>Sector List</Link>
                        </li>
                    </ul>
                </li>
                {/* OPPORTUNITY */}
                <li className="relative z-20">
                    <button
                        onClick={() => setIsActive({five: !isActive.five})} 
                        className="flex items-center justify-start gap-1">
                        Opportunity <FaAngleDown /> </button> 
                    <ul className={`absolute z-100 ${isActive.five == true ? 'block' : 'hidden'} rounded-b-lg overflow-hidden drop-shadow-md top-[130%] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-green-800`}>
                        <li className='w-[100%] hover:bg-green-900 px-3 py-2'>
                            <Link href='/admin/opportunity/add' className=''>Add Opportunity</Link>
                        </li>
                        <li className='w-[100%] hover:bg-green-900 px-3 py-2'>
                            <Link href='/admin/opportunity' className=''>Opportunities List</Link>
                        </li>
                    </ul>
                </li>
                {/* EVENT */}
                <li className="relative z-20">
                    <button
                        onClick={() => setIsActive({eight: !isActive.eight})} 
                        className="flex items-center justify-start gap-1">
                        Event <FaAngleDown /> </button> 
                    <ul className={`absolute z-100 ${isActive.eight == true ? 'block' : 'hidden'} rounded-b-lg overflow-hidden drop-shadow-md top-[130%] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-green-800`}>
                        <li className='w-[100%] hover:bg-green-900 px-3 py-2'>
                            <Link href='/admin/event/add' className=''>Add Event</Link>
                        </li>
                        <li className='w-[100%] hover:bg-green-900 px-3 py-2'>
                            <Link href='/admin/event' className=''>Events List</Link>
                        </li>
                    </ul>
                </li>
                {/* NEWS */}
                <li className="relative z-20">
                    <button
                        onClick={() => setIsActive({nine: !isActive.nine})} 
                        className="flex items-center justify-start gap-1">
                        News <FaAngleDown /> </button> 
                    <ul className={`absolute z-100 ${isActive.nine == true ? 'block' : 'hidden'} rounded-b-lg overflow-hidden drop-shadow-md top-[130%] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-green-800`}>
                        <li className='w-[100%] hover:bg-green-900 px-3 py-2'>
                            <Link href='/admin/news/add' className=''>Add News</Link>
                        </li>
                        <li className='w-[100%] hover:bg-green-900 px-3 py-2'>
                            <Link href='/admin/news' className=''>News List</Link>
                        </li>
                    </ul>
                </li>
               
            </ul>
            
            <ul className="flex items-center justify-start gap-4">
                {/* PROFILE */}
                <li className="relative z-20">
                    <button
                        onClick={() => setIsActive({seven: !isActive.seven})} 
                        className="flex items-center justify-start gap-1">
                        Profile <FaAngleDown /> </button> 
                    <ul className={`absolute z-120 ${isActive.seven == true ? 'block' : 'hidden'} rounded-b-lg overflow-hidden drop-shadow-md top-[130%] transition-all ease-in-out duration-150 right-[-0.5rem]  w-[10rem] border border-white bg-green-800`}>
                        <li className='w-[100%] hover:bg-green-900 px-3 py-2'>
                            <Link href='/admin/profile' className=''>Profile</Link>
                        </li>
                        <li className='w-[100%] hover:bg-green-900 px-3 py-2'>
                            <Link href='/admin/password' className=''>Password</Link>
                        </li>
                        <li className='w-[100%] hover:bg-green-900 px-3 py-2'>
                            <button 
                            onClick={() => setIsLogout(true)} 
                            className=''>
                                Logout
                            </button>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        
    </section>
  )
}
