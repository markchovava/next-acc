import React from 'react'
import RegisterEdit from './components/RegisterEdit'
import { MdOutlineChevronRight } from 'react-icons/md'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { checkAuthAction } from '@/actions/authActions'




export default async function page() {
  const result = await checkAuthAction();
  if(result?.message == 'Unauthenticated.'){
    redirect('/opportunity');
  }

  return (
    <>
     {/* HEADER */}
     <section 
        style={{backgroundImage: `url('/assets/img/5_1/02.jpg')`}} 
        className='w-[100%] lg:aspect-[5/1] aspect-[5/2] relative bg-fixed bg-cover bg-no-repeat'>
        <div className='w-[100%] h-[100%] absolute top-0 left-0 opacity-25 bg-gradient-to-br from-slate-700 to-black'></div>
        <div className='w-[100%] h-[100%] text-[5rem] font-medium flex items-center justify-center text-white drop-shadow-md'>
            Register
        </div>
    </section>

    {/* BREADCRUMBS */}
    <section className='w-[100%] bg-white drop-shadow-md py-1'>
        <ul className='mx-auto w-[90%] flex items-center justify-start gap-1'>
            <li><Link href={`/`}>Home</Link></li>
            <li><MdOutlineChevronRight className='font-light' /></li>
            <li><Link href={`/register`} className='font-semibold'>Register</Link></li>
        </ul>
    </section>

    <RegisterEdit />
    </>
  )
}
