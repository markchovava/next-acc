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
    });


    
  return (
    <section className="lg:hidden block w-[100%] text-white bg-blue-800">
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
                <li className="relative z-20 w-[100%] flex flex-col items-center justify-center">
                    <button 
                        onClick={() => setIsActive({one: !isActive.one})} 
                        className="flex items-center justify-start gap-2">
                        Settings <FaAngleDown /> 
                    </button>
                    <ul className={`relative ${isActive.one == true ? 'block' : 'hidden'} nav__topUl`}>
                        <li className='w-[100vw] flex items-center justify-center  hover:bg-blue-950 px-3 py-2'>
                            <Link href='/admin/app-info' className=''>App Info</Link>
                        </li>
                        <li className='w-[100vw] flex items-center justify-center hover:bg-blue-950 px-3 py-2'>
                            <Link href='/admin/role' className=''>Roles</Link>
                        </li>
                    </ul>
                </li>
                {/* USERS */}
                <li className="relative z-20 w-[100%] flex flex-col items-center justify-center">
                    <button 
                        onClick={() => setIsActive({two: !isActive.two})} 
                        className="flex items-center justify-start gap-2">
                        Users <FaAngleDown /> 
                    </button>
                    <ul className={`relative ${isActive.two == true ? 'block' : 'hidden'} nav__topUl`}>
                        <li className='w-[100vw] flex items-center justify-center  hover:bg-blue-950 px-3 py-2'>
                            <Link href='/admin/app-info' className=''>App Info</Link>
                        </li>
                        <li className='w-[100vw] flex items-center justify-center hover:bg-blue-950 px-3 py-2'>
                            <Link href='/admin/role' className=''>Roles</Link>
                        </li>
                    </ul>
                </li>
                {/* PRODUCTS */}
                <li className="relative z-20 w-[100%] flex flex-col items-center justify-center">
                    <button 
                        onClick={() => setIsActive({three: !isActive.three})} 
                        className="flex items-center justify-start gap-2">
                        Products <FaAngleDown /> 
                    </button>
                    <ul className={`relative ${isActive.three == true ? 'block' : 'hidden'} nav__topUl`}>
                        <li className='w-[100vw] flex items-center justify-center  hover:bg-blue-950 px-3 py-2'>
                            <Link href='/admin/app-info' className=''>App Info</Link>
                        </li>
                        <li className='w-[100vw] flex items-center justify-center hover:bg-blue-950 px-3 py-2'>
                            <Link href='/admin/role' className=''>Roles</Link>
                        </li>
                    </ul>
                </li>
                {/* Category */}
                <li className="relative z-20 w-[100%] flex flex-col items-center justify-center">
                    <button 
                        onClick={() => setIsActive({four: !isActive.four})} 
                        className="flex items-center justify-start gap-2">
                        Category <FaAngleDown /> 
                    </button>
                    <ul className={`relative ${isActive.four == true ? 'block' : 'hidden'} nav__topUl`}>
                        <li className='w-[100vw] flex items-center justify-center  hover:bg-blue-950 px-3 py-2'>
                            <Link href='/admin/app-info' className=''>App Info</Link>
                        </li>
                        <li className='w-[100vw] flex items-center justify-center hover:bg-blue-950 px-3 py-2'>
                            <Link href='/admin/role' className=''>Roles</Link>
                        </li>
                    </ul>
                </li>
                {/* Sub Category */}
                <li className="relative z-20 w-[100%] flex flex-col items-center justify-center">
                    <button 
                        onClick={() => setIsActive({five: !isActive.five})} 
                        className="flex items-center justify-start gap-2">
                        Sub Category <FaAngleDown /> 
                    </button>
                    <ul className={`relative ${isActive.five == true ? 'block' : 'hidden'} nav__topUl`}>
                        <li className='w-[100vw] flex items-center justify-center  hover:bg-blue-950 px-3 py-2'>
                            <Link href='/admin/category-sub' className=''>Add Sub Category</Link>
                        </li>
                        <li className='w-[100vw] flex items-center justify-center hover:bg-blue-950 px-3 py-2'>
                            <Link href='/admin/category-sub/add' className=''>Sub Categories</Link>
                        </li>
                    </ul>
                </li>
               
                
                
               
             
              
            </ul>
            
            <ul className="flex items-center justify-start gap-4">
                {/* PROFILE */}
                <li className="relative z-20 w-[100%] flex flex-col items-center justify-center">
                    <button 
                        onClick={() => setIsActive({seven: !isActive.seven})} 
                        className="flex items-center justify-start gap-2">
                        Profile <FaAngleDown /> 
                    </button>
                    <ul className={`relative ${isActive.seven == true ? 'block' : 'hidden'} nav__topUl`}>
                        <li className='w-[100vw] flex items-center justify-center  hover:bg-blue-950 px-3 py-2'>
                            <Link href='/admin/app-info' className=''>App Info</Link>
                        </li>
                        <li className='w-[100vw] flex items-center justify-center hover:bg-blue-950 px-3 py-2'>
                            <Link href='/admin/role' className=''>Roles</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        }
    </section>
  )
}
