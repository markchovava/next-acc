"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";



export default function NavTopResponsive() {
    const [isToggle, setIsToggle] = useState(false)
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
        twelve: false,
        thirteen: false,
    });


    
  return (
    <section className="lg:hidden block w-[100%] text-white bg-green-700">
         <div className="mx-auto w-[94%] flex items-center justify-end">
            <button onClick={() => setIsToggle(!isToggle)} className="my-4">
                {isToggle == true 
                ? <IoMdClose className="text-white text-xl" />
                : <GiHamburgerMenu className="text-white" />
                }
            </button>
        </div>
        {isToggle && 
        <div className="w-[94%] mx-auto px-3 py-2 flex flex-col justify-center items-center gap-6">
            {/* ADMINISTRATION LINKS */}
            <ul className="w-[100vw] flex flex-col items-center justify-center gap-4">
                {/* SETTINGS */}
                <li className={`${isActive.one == true ? 'bg-green-800' : '' } relative z-20 w-[100%] flex flex-col items-center justify-center`}>
                    <button 
                        onClick={() => setIsActive({one: !isActive.one})} 
                        className={`flex items-center justify-start gap-2 py-2`}>
                        Settings <FaAngleDown /> 
                    </button>
                    <ul className={`relative ${isActive.one == true ? 'block' : 'hidden'} nav__topUl`}>
                        <li className='w-[100vw] flex items-center justify-center hover:bg-green-950 px-3 py-2'>
                            <Link href='/admin/role' className=''>Roles</Link>
                        </li>
                    </ul>
                </li>
                {/* USERS */}
                <li className={`${isActive.two == true ? 'bg-green-800' : '' } relative z-20 w-[100%] flex flex-col items-center justify-center`}>
                    <button 
                        onClick={() => setIsActive({two: !isActive.two})} 
                        className="flex items-center justify-start gap-2 pt-2">
                        Users <FaAngleDown /> 
                    </button>
                    <ul className={`relative ${isActive.two == true ? 'block' : 'hidden'} nav__topUl`}>
                        <li className='w-[100vw] flex items-center justify-center  hover:bg-green-950 px-3 py-2'>
                            <Link href='/admin/app-info' className=''>App Info</Link>
                        </li>
                        <li className='w-[100vw] flex items-center justify-center hover:bg-green-950 px-3 py-2'>
                            <Link href='/admin/role' className=''>Roles</Link>
                        </li>
                    </ul>
                </li>
                {/* MEMBERSHIP */}
                <li className={`${isActive.ten == true ? 'bg-green-800' : '' } relative z-20 w-[100%] flex flex-col items-center justify-center`}>
                    <button 
                        onClick={() => setIsActive({ten: !isActive.ten})} 
                        className="flex items-center justify-start gap-2 pt-2">
                        Memberships <FaAngleDown /> 
                    </button>
                    <ul className={`relative ${isActive.ten == true ? 'block' : 'hidden'} nav__topUl`}>
                        <li className='w-[100vw] flex items-center justify-center  hover:bg-green-950 px-3 py-2'>
                            <Link href='/admin/membership/add' className=''>Add Membership</Link>
                        </li>
                        <li className='w-[100vw] flex items-center justify-center hover:bg-green-950 px-3 py-2'>
                            <Link href='/admin/membership' className=''>Memberships List</Link>
                        </li>
                        <li className='w-[100vw] flex items-center justify-center hover:bg-green-950 px-3 py-2'>
                            <Link href='/admin/membership/order' className=''>Member Subscriptions</Link>
                        </li>
                    </ul>
                </li>
                {/* COUNTRY */}
                <li className={`${isActive.three == true ? 'bg-green-800' : '' } relative z-20 w-[100%] flex flex-col items-center justify-center`}>
                    <button 
                        onClick={() => setIsActive({three: !isActive.three})} 
                        className="flex items-center justify-start gap-1 pt-2">
                        Country <FaAngleDown /> 
                    </button>
                    <ul className={`relative ${isActive.three == true ? 'block' : 'hidden'} nav__topUl`}>
                        <li className='w-[100vw] flex items-center justify-center  hover:bg-green-950 px-3 py-2'>
                            <Link href='/admin/country/add' className=''>Add Country</Link>
                        </li>
                        <li className='w-[100vw] flex items-center justify-center hover:bg-green-950 px-3 py-2'>
                            <Link href='/admin/country' className=''>Countries List</Link>
                        </li>
                    </ul>
                </li>
                {/* SECTOR */}
                <li className={`${isActive.four == true ? 'bg-green-800' : '' } relative z-20 w-[100%] flex flex-col items-center justify-center`}>
                    <button 
                        onClick={() => setIsActive({four: !isActive.four})} 
                        className="flex items-center justify-start gap-1 pt-2">
                        Sector <FaAngleDown /> 
                    </button>
                    <ul className={`relative ${isActive.four == true ? 'block' : 'hidden'} nav__topUl`}>
                        <li className='w-[100vw] flex items-center justify-center  hover:bg-green-950 px-3 py-2'>
                            <Link href='/admin/sector/add' className=''>Add Sector</Link>
                        </li>
                        <li className='w-[100vw] flex items-center justify-center hover:bg-green-950 px-3 py-2'>
                            <Link href='/admin/sector' className=''>Sectors List</Link>
                        </li>
                    </ul>
                </li>
                {/* OPPORTUNITY */}
                <li className={`${isActive.five == true ? 'bg-green-800' : ''} relative z-20 w-[100%] flex flex-col items-center justify-center`}>
                    <button 
                        onClick={() => setIsActive({five: !isActive.five})} 
                        className="flex items-center justify-start gap-2 pt-2">
                        Opportunity <FaAngleDown /> 
                    </button>
                    <ul className={`relative ${isActive.five == true ? 'block' : 'hidden'} nav__topUl`}>
                        <li className='w-[100vw] flex items-center justify-center  hover:bg-green-950 px-3 py-2'>
                            <Link href='/admin/opportunity/add' className=''>Add Opportunity</Link>
                        </li>
                        <li className='w-[100vw] flex items-center justify-center hover:bg-green-950 px-3 py-2'>
                            <Link href='/admin/opportunty/add' className=''>Opportunities List</Link>
                        </li>
                    </ul>
                </li>
                {/* EVENTS & NEWS */}
                <li className={`${isActive.eight == true ? 'bg-green-800' : ''} relative z-20 w-[100%] flex flex-col items-center justify-center`}>
                    <button 
                        onClick={() => setIsActive({eight: !isActive.eight})} 
                        className="flex items-center justify-start gap-1 pt-2">
                        Events & News <FaAngleDown /> 
                    </button>
                    <ul className={`relative ${isActive.eight == true ? 'block' : 'hidden'} nav__topUl`}>
                        <li className='w-[100vw] flex items-center justify-center  hover:bg-green-950 px-3 py-2'>
                            <Link href='/admin/news' className=''>News List</Link>
                        </li>
                        <li className='w-[100vw] flex items-center justify-center  hover:bg-green-950 px-3 py-2'>
                            <Link href='/admin/event' className=''>Events List</Link>
                        </li>
                        <li className='w-[100vw] flex items-center justify-center  hover:bg-green-950 px-3 py-2'>
                            <Link href='/admin/event/payment' className=''>Events Payments</Link>
                        </li>
                       
                    </ul>
                </li>
                {/* INVESTMENTS */}
                <li className={`${isActive.nine == true ? 'bg-green-800' : ''} relative z-20 w-[100%] flex flex-col items-center justify-center`}>
                    <button 
                        onClick={() => setIsActive({nine: !isActive.nine})} 
                        className="flex items-center justify-start gap-1 pt-2">
                        Investments <FaAngleDown /> 
                    </button>
                    <ul className={`relative ${isActive.nine == true ? 'block' : 'hidden'} nav__topUl`}>
                        <li className='w-[100vw] flex items-center justify-center  hover:bg-green-950 px-3 py-2'>
                            <Link href='/admin/investment' className=''>Investments List</Link>
                        </li>
                    </ul>
                </li>
                {/* TESTIMONIALS */}
                <li className={`${isActive.twelve == true ? 'bg-green-800' : ''} relative z-20 w-[100%] flex flex-col items-center justify-center`}>
                    <button 
                        onClick={() => setIsActive({twelve: !isActive.twelve})} 
                        className="flex items-center justify-start gap-1 pt-2">
                        Testimonials <FaAngleDown /> 
                    </button>
                    <ul className={`relative ${isActive.twelve == true ? 'block' : 'hidden'} nav__topUl`}>
                        <li className='w-[100vw] flex items-center justify-center  hover:bg-green-950 px-3 py-2'>
                            <Link href='/admin/testimonial/add' className=''>Add Testimonial</Link>
                        </li>
                        <li className='w-[100vw] flex items-center justify-center hover:bg-green-950 px-3 py-2'>
                            <Link href='/admin/testimonial' className=''>Testimonials List</Link>
                        </li>
                    </ul>
                </li>
                {/* PARTNERS */}
                <li className={`${isActive.thirteen == true ? 'bg-green-800' : ''} relative z-20 w-[100%] flex flex-col items-center justify-center`}>
                    <button 
                        onClick={() => setIsActive({thirteen: !isActive.thirteen})} 
                        className="flex items-center justify-start gap-1 pt-2">
                        Partners <FaAngleDown /> 
                    </button>
                    <ul className={`relative ${isActive.thirteen == true ? 'block' : 'hidden'} nav__topUl`}>
                        <li className='w-[100vw] flex items-center justify-center  hover:bg-green-950 px-3 py-2'>
                            <Link href='/admin/partner/add' className=''>Add Partner</Link>
                        </li>
                        <li className='w-[100vw] flex items-center justify-center hover:bg-green-950 px-3 py-2'>
                            <Link href='/admin/partner' className=''>Partners List</Link>
                        </li>
                    </ul>
                </li>              
            </ul>
            
            <ul className="flex items-center justify-start gap-4">
                {/* PROFILE */}
                <li className={`${isActive.seven == true ? 'bg-green-700' : ''} relative z-20 w-[100%] flex flex-col items-center justify-center`}>
                    <button 
                        onClick={() => setIsActive({seven: !isActive.seven})} 
                        className="flex items-center justify-start gap-2 py-2">
                        Profile <FaAngleDown /> 
                    </button>
                    <ul className={`relative ${isActive.seven == true ? 'block' : 'hidden'} nav__topUl`}>
                        <li className='w-[100vw] flex items-center justify-center  hover:bg-green-950 px-3 py-2'>
                            <Link href='/admin/profile' className=''>Profile</Link>
                        </li>
                        <li className='w-[100vw] flex items-center justify-center hover:bg-green-950 px-3 py-2'>
                            <Link href='/admin/password' className=''>Edit Password</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        }
    </section>
  )
}
