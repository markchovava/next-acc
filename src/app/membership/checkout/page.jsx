import Link from 'next/link'
import React from 'react'
import { MdOutlineChevronRight } from 'react-icons/md'
import CheckoutEdit from './components/CheckoutEdit'

export default function page() {
  return (
    <>
    {/* HEADER */}
    <section 
        style={{backgroundImage: `url('/assets/img/5_1/04.jpg')`}} 
        className='w-[100%] lg:aspect-[5/1] aspect-[5/2] relative bg-fixed bg-cover bg-no-repeat'>
        <div className='w-[100%] h-[100%] absolute top-0 left-0 opacity-25 bg-gradient-to-br from-slate-700 to-black'></div>
        <div className='w-[100%] h-[100%] lg:text-[4.5rem] text-[3.8rem] text-center leading-none font-medium flex items-center justify-center text-white drop-shadow-md'>
            Membership Checkout
        </div>
    </section>

    {/* BREADCRUMBS */}
    <section className='w-[100%] bg-white drop-shadow-md py-1'>
        <ul className='mx-auto w-[90%] flex items-center justify-start gap-1'>
            <li><Link href={`/`}>Home</Link></li>
            <li><MdOutlineChevronRight /></li>
            <li><Link href={`/membership`}>Membership</Link></li>
            <li><MdOutlineChevronRight /></li>
            <li><Link href={`/memebership/checkout`} className='font-semibold'>Membership Checkout</Link></li>
        </ul>
    </section>


    <CheckoutEdit />


    </>
  )
}
