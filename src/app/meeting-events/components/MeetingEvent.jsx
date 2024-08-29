import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

export default function MeetingEvent() {
  return (
    <>
    {/* EVENTS */}
    <section className="w-[100%] pt-[6rem] pb-[6rem]">
        <div className="mx-auto w-[90%]">
          <h3 className="lg:text-[2.5rem] text-[1.8rem] lg:w-[80%] w-[90%] leading-tight mb-3">
            The latest events, research and member updates
          </h3>
        </div>
        <div className="mx-auto w-[90%] grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-8">
          {/*  */}
          <div className="group w-[100%] p-4 bg-white drop-shadow-md">
            <div className="w-[100%] aspect-[2/1] overflow-hidden mb-4">
              <Image
                width={900} 
                height={450} 
                objectFit="cover"
                src='/assets/img/slide/01.jpg' 
                className="group-hover:scale-105 transition-all ease-in-out"
                alt='Image' />
            </div>
            <p className="text-md mb-3">12 April 2024</p>
            <p className="mb-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, 
              corrupti adipisci perferendis fugit nostrum consequatur dolorum neque, 
              ipsam accusamus pariatur aut atque, asperiores mollitia deleniti ea culpa 
              quo ipsa quae.
            </p>

            <div className="flex mb-4">
              <Link href='#' className="group px-6 py-4 border border-slate-400 flex items-center justify-center gap-2 hover:bg-slate-400 hover:text-white">
                Click More. <FaArrowRightLong className="group-hover:translate-x-1 transition-all duration-200 ease-in-out" /></Link>
            </div>
          </div>
          {/*  */}
          <div className="group w-[100%] p-4 bg-white drop-shadow-md">
            <div className="w-[100%] aspect-[2/1] overflow-hidden mb-4">
              <Image
                width={900} 
                height={450} 
                objectFit="cover"
                src='/assets/img/slide/02.jpg' 
                className="group-hover:scale-105 transition-all ease-in-out"
                alt='Image' />
            </div>
            <p className="text-md mb-3">12 April 2024</p>
            <p className="mb-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, 
              corrupti adipisci perferendis fugit nostrum consequatur dolorum neque, 
              ipsam accusamus pariatur aut atque, asperiores mollitia deleniti ea culpa 
              quo ipsa quae.
            </p>
            <div className="flex mb-4">
              <Link href='#' className="group px-6 py-4 border border-slate-400 flex items-center justify-center gap-2">
                Click More. <FaArrowRightLong className="group-hover:translate-x-1 transition-all ease-in-out" /></Link>
            </div>
          </div>
          {/*  */}
          <div className="group w-[100%] p-4 bg-white drop-shadow-md">
            <div className="w-[100%] aspect-[2/1] overflow-hidden mb-4">
              <Image
                width={900} 
                height={450} 
                objectFit="cover"
                src='/assets/img/slide/02.jpg' 
                className="group-hover:scale-105 transition-all ease-in-out"
                alt='Image' />
            </div>
            <p className="text-md mb-3">12 April 2024</p>
            <p className="mb-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, 
              corrupti adipisci perferendis fugit nostrum consequatur dolorum neque, 
              ipsam accusamus pariatur aut atque, asperiores mollitia deleniti ea culpa 
              quo ipsa quae.
            </p>

            <div className="flex mb-4">
              <Link href='#' className="group px-6 py-4 border border-slate-400 flex items-center justify-center gap-2">
                Click More. <FaArrowRightLong className="group-hover:translate-x-1 transition-all ease-in-out" /></Link>
            </div>
          </div>
          {/*  */}
          <div className="group w-[100%] p-4 bg-white drop-shadow-md">
            <div className="w-[100%] aspect-[2/1] overflow-hidden mb-4">
              <Image
                width={900} 
                height={450} 
                objectFit="cover"
                src='/assets/img/slide/01.jpg' 
                className="group-hover:scale-105 transition-all ease-in-out"
                alt='Image' />
            </div>
            <p className="text-md mb-3">12 April 2024</p>
            <p className="mb-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, 
              corrupti adipisci perferendis fugit nostrum consequatur dolorum neque, 
              ipsam accusamus pariatur aut atque, asperiores mollitia deleniti ea culpa 
              quo ipsa quae.
            </p>

            <div className="flex mb-4">
              <Link href='#' className="group px-6 py-4 border border-slate-400 flex items-center justify-center gap-2">
                Click More. <FaArrowRightLong className="group-hover:translate-x-1 transition-all ease-in-out" /></Link>
            </div>
          </div>
          {/*  */}
          <div className="group w-[100%] p-4 bg-white drop-shadow-md">
            <div className="w-[100%] aspect-[2/1] overflow-hidden mb-4">
              <Image
                width={900} 
                height={450} 
                objectFit="cover"
                src='/assets/img/slide/05.jpg' 
                className="group-hover:scale-105 transition-all ease-in-out"
                alt='Image' />
            </div>
            <p className="text-md mb-3">12 April 2024</p>
            <p className="mb-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, 
              corrupti adipisci perferendis fugit nostrum consequatur dolorum neque, 
              ipsam accusamus pariatur aut atque, asperiores mollitia deleniti ea culpa 
              quo ipsa quae.
            </p>

            <div className="flex mb-4">
              <Link href='#' className="group px-6 py-4 border border-slate-400 flex items-center justify-center gap-2">
                Click More. <FaArrowRightLong className="group-hover:translate-x-1 transition-all ease-in-out" /></Link>
            </div>
          </div>
          {/*  */}
          <div className="group w-[100%] p-4 bg-white drop-shadow-md">
            <div className="w-[100%] aspect-[2/1] overflow-hidden mb-4">
              <Image
                width={900} 
                height={450} 
                objectFit="cover"
                src='/assets/img/slide/03.jpg' 
                className="group-hover:scale-105 transition-all ease-in-out"
                alt='Image' />
            </div>
            <p className="text-md mb-3">12 April 2024</p>
            <p className="mb-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, 
              corrupti adipisci perferendis fugit nostrum consequatur dolorum neque, 
              ipsam accusamus pariatur aut atque, asperiores mollitia deleniti ea culpa 
              quo ipsa quae.
            </p>

            <div className="flex mb-4">
              <Link href='#' className="group px-6 py-4 border border-slate-400 flex items-center justify-center gap-2">
                Click More. <FaArrowRightLong className="group-hover:translate-x-1 transition-all ease-in-out" /></Link>
            </div>
          </div>
          {/*  */}
          <div className="group w-[100%] p-4 bg-white drop-shadow-md">
            <div className="w-[100%] aspect-[2/1] overflow-hidden mb-4">
              <Image
                width={900} 
                height={450} 
                objectFit="cover"
                src='/assets/img/slide/04.jpg' 
                className="group-hover:scale-105 transition-all ease-in-out"
                alt='Image' />
            </div>
            <p className="text-md mb-3">12 April 2024</p>
            <p className="mb-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, 
              corrupti adipisci perferendis fugit nostrum consequatur dolorum neque, 
              ipsam accusamus pariatur aut atque, asperiores mollitia deleniti ea culpa 
              quo ipsa quae.
            </p>

            <div className="flex mb-4">
              <Link href='#' className="group px-6 py-4 border border-slate-400 flex items-center justify-center gap-2">
                Click More. <FaArrowRightLong className="group-hover:translate-x-1 transition-all ease-in-out" /></Link>
            </div>
          </div>
          {/*  */}
          <div className="group w-[100%] p-4 bg-white drop-shadow-md">
            <div className="w-[100%] aspect-[2/1] overflow-hidden mb-4">
              <Image
                width={900} 
                height={450} 
                objectFit="cover"
                src='/assets/img/slide/03.jpg' 
                className="group-hover:scale-105 transition-all ease-in-out"
                alt='Image' />
            </div>
            <p className="text-md mb-3">12 April 2024</p>
            <p className="mb-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, 
              corrupti adipisci perferendis fugit nostrum consequatur dolorum neque, 
              ipsam accusamus pariatur aut atque, asperiores mollitia deleniti ea culpa 
              quo ipsa quae.
            </p>

            <div className="flex mb-4">
              <Link href='#' className="group px-6 py-4 border border-slate-400 flex items-center justify-center gap-2">
                Click More. <FaArrowRightLong className="group-hover:translate-x-1 transition-all ease-in-out" /></Link>
            </div>
          </div>
        </div>

        {/* PAGINATION */}
        <div className='mx-auto w-[90%] flex items-center justify-end gap-3 pt-[2rem]'>
          
            <button 
                className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-yellow-500 to-slate-800'>
                <FaArrowLeftLong className='text-slate-600 group-hover:-translate-x-2 duration-200 transition-all ease-in-out ' /> 
                Prev
            </button>
            <button
                className='group flex items-center justify-center gap-2 text-transparent bg-gradient-to-br bg-clip-text from-yellow-500 to-slate-800'>
                Next <FaArrowRightLong className='text-slate-600 group-hover:translate-x-2 duration-200 transition-all ease-in-out' />
            </button>
        </div>

    </section>
    </>
  )
}
