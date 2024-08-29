"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";



export default function NavTop() {
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
    })
  return (
    <section className="hidden lg:block w-[100%] text-white bg-yellow-800 relative z-50">
        <div className="w-[94%] mx-auto px-3 py-2 flex justify-between items-center">
            {/* ADMINISTRATION LINKS */}
            <ul className="flex items-center justify-start gap-4">
                {/* SETTINGS */}
                <li className="relative z-20">
                    <button 
                        onClick={() => setIsActive({one: !isActive.one})} 
                        className="flex items-center justify-start gap-2">
                        Settings <FaAngleDown /> 
                    </button>
                    <ul className={`absolute z-100 ${isActive.one == true ? 'block' : 'hidden'} rounded-b-lg overflow-hidden drop-shadow-md top-[130%] transition-all ease-in-out duration-150 left-[-0.5rem] w-[10rem] border border-white bg-yellow-800`}>
                        <li className='w-[100%] hover:bg-yellow-900 px-3 py-1'>
                            <Link href='/admin/app-info' className=''>App Info</Link>
                        </li>
                        <li className='w-[100%] hover:bg-yellow-900 px-3 py-1'>
                            <Link href='/admin/role' className=''>Roles</Link>
                        </li>
                    </ul>
                </li>
                {/* USERS */}
                <li className="relative z-20">
                    <button 
                        onClick={() => setIsActive({two: !isActive.two})} 
                        className="flex items-center justify-start gap-2">
                        Users <FaAngleDown /> </button>
                    <ul className={`absolute z-100 ${isActive.two == true ? 'block' : 'hidden'} rounded-b-lg overflow-hidden drop-shadow-md top-[130%] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-yellow-800`}>
                        <li className='w-[100%] hover:bg-yellow-900 px-3 py-2'>
                            <Link href='/admin/user/add' className=''>Add Users</Link>
                        </li>
                        <li className='w-[100%] hover:bg-yellow-900 px-3 py-2'>
                            <Link href='/admin/user' className=''>User List</Link>
                        </li>
                    </ul>
                </li>
                {/* COUNTRY */}
                <li className="relative z-20">
                    <button 
                        onClick={() => setIsActive({three: !isActive.three})} 
                        className="flex items-center justify-start gap-2">
                        Country <FaAngleDown /> </button>
                    <ul className={`absolute z-100 ${isActive.three == true ? 'block' : 'hidden'} rounded-b-lg overflow-hidden drop-shadow-md top-[130%] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-yellow-800`}>
                        <li className='w-[100%] hover:bg-yellow-900 px-3 py-2'>
                            <Link href='/admin/country/add' className=''>Add Country</Link>
                        </li>
                        <li className='w-[100%] hover:bg-yellow-900 px-3 py-2'>
                            <Link href='/admin/country' className=''>Countries List</Link>
                        </li>
                    </ul>
                </li>
                {/* SECTOR */}
                <li className="relative z-20">
                    <button 
                        onClick={() => setIsActive({four: !isActive.four})} 
                        className="flex items-center justify-start gap-2">
                        Sectors <FaAngleDown /> </button>
                    <ul className={`absolute z-100 ${isActive.four == true ? 'block' : 'hidden'} rounded-b-lg overflow-hidden drop-shadow-md top-[130%] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-yellow-800`}>
                        <li className='w-[100%] hover:bg-yellow-900 px-3 py-2'>
                            <Link href='/admin/sector/add' className=''>Add Sector</Link>
                        </li>
                        <li className='w-[100%] hover:bg-yellow-900 px-3 py-2'>
                            <Link href='/admin/sector' className=''>Sector List</Link>
                        </li>
                    </ul>
                </li>
                {/* OPPORTUNITY */}
                <li className="relative z-20">
                    <button
                        onClick={() => setIsActive({five: !isActive.five})} 
                        className="flex items-center justify-start gap-2">
                        Opportunity <FaAngleDown /> </button> 
                    <ul className={`absolute z-100 ${isActive.five == true ? 'block' : 'hidden'} rounded-b-lg overflow-hidden drop-shadow-md top-[130%] transition-all ease-in-out duration-150 left-[-0.5rem]  w-[10rem] border border-white bg-yellow-800`}>
                        <li className='w-[100%] hover:bg-yellow-900 px-3 py-2'>
                            <Link href='/admin/opportunity/add' className=''>Add Opportunity</Link>
                        </li>
                        <li className='w-[100%] hover:bg-yellow-900 px-3 py-2'>
                            <Link href='/admin/opportunity' className=''>Opportunities List</Link>
                        </li>
                    </ul>
                </li>
               
            </ul>
            
            <ul className="flex items-center justify-start gap-4">
                {/* PROFILE */}
                <li className="relative z-20">
                    <button
                        onClick={() => setIsActive({seven: !isActive.seven})} 
                        className="flex items-center justify-start gap-2">
                        Profile <FaAngleDown /> </button> 
                    <ul className={`absolute z-120 ${isActive.seven == true ? 'block' : 'hidden'} rounded-b-lg overflow-hidden drop-shadow-md top-[130%] transition-all ease-in-out duration-150 right-[-0.5rem]  w-[10rem] border border-white bg-yellow-800`}>
                        <li className='w-[100%] hover:bg-yellow-900 px-3 py-2'>
                            <Link href='/admin/profile' className=''>Profile</Link>
                        </li>
                        <li className='w-[100%] hover:bg-yellow-900 px-3 py-2'>
                            <Link href='/admin/password' className=''>Password</Link>
                        </li>
                        <li className='w-[100%] hover:bg-yellow-900 px-3 py-2'>
                            <button className=''>Logout</button>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        
    </section>
  )
}
