import Link from 'next/link'
import React from 'react'
import { MdOutlineChevronRight } from 'react-icons/md'
import QRCodeList from './components/QRCodeList'
import { checkAuthAction } from '@/actions/authActions';
import { redirect } from 'next/dist/server/api-utils';




export default async function page() {
  const result = await checkAuthAction();
  if(result?.message == 'Unauthenticated.'){
    redirect('/login'); 
  }

  return (
    <>
    {/* BREADCRUMBS */}
    <section className='w-[100%]'>
        <ul className='mx-auto py-1 w-[90%] border-y border-slate-300 flex items-center justify-start gap-1'>
            <li><Link href={`/`}>Home</Link></li>
            <li><MdOutlineChevronRight /></li>
            <li><Link href={`/admin`}>Admin</Link></li>
            <li><MdOutlineChevronRight /></li>
            <li><Link href={`/admin/qrcode`} className='font-semibold'>QR Code List</Link></li>
        </ul>
    </section>

    {/* PAGE TITLE */}
    <section className='w-[100%]'>
      <div className='w-[90%] mx-auto flex items-center justify-center'>
        <h6 className='text-center text-[3rem] pt-[3rem] pb-[2rem] text-transparent bg-gradient-to-br bg-clip-text from-slate-500 to-slate-700'>
          QR Code List</h6>
      </div>
    </section>

    <QRCodeList />

    
    </>
  )
}
