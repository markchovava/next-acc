import Link from 'next/link'
import React from 'react'
import { MdOutlineChevronRight } from 'react-icons/md'
import EventOrderView from './components/EventOrderView'



export default function page({ params: {id}}) {

  
  return (
    <>

    {/* HEADER */}
    <section 
        style={{backgroundImage: `url('/assets/img/5_1/03.jpg')`}} 
        className='w-[100%] lg:aspect-[5/1] aspect-[5/2] relative bg-fixed bg-cover bg-no-repeat'>
        <div className='w-[100%] h-[100%] absolute top-0 left-0 opacity-25 bg-gradient-to-br from-slate-700 to-black'></div>
        <div className='w-[100%] h-[100%] lg:text-[5rem] text-[3.8rem] text-center leading-none font-medium flex items-center justify-center text-white drop-shadow-md'>
          View Event
        </div>
    </section>
    {/* BREADCRUMBS */}
    <section className='w-[100%]'>
        <ul className='mx-auto py-1 w-[90%] border-y border-slate-300 flex items-center justify-start gap-1'>
            <li><Link href={`/`}>Home</Link></li>
            <li><MdOutlineChevronRight /></li>
            <li><Link href={`/event/event-order`}>My Events List</Link></li>
            <li><MdOutlineChevronRight /></li>
            <li><Link href={`/event/event-order/${id}`} className='font-semibold'>View Event</Link></li>
        </ul>
    </section>

    {/*  */}
    <EventOrderView id={id} />
    </>
  )
}
