import Link from 'next/link'
import React from 'react'
import { MdOutlineChevronRight } from 'react-icons/md'
import CountryView from './components/CountryView'
import { getCountryOpportunities } from '@/api/getCountryOpportunities';
import { getSectorsAll } from '@/api/getSectors';
import { getCountryBySlug } from '@/api/getCountries';
import { baseURL } from '@/api/baseURL';




export default async function page({ params: {slug} }) {
  const [countryData, opportunityData, sectorData] = await Promise.all([
          getCountryBySlug(slug), getCountryOpportunities(slug), getSectorsAll()]);

          console.log(countryData?.data.name)

  return (
    <>
    {/* HEADER */}
    <section 
        style={{backgroundImage: `url('${baseURL + countryData?.data?.landscape}')`}} 
        className='w-[100%] lg:aspect-[5/1] aspect-[5/2] relative bg-fixed bg-cover bg-no-repeat'>
        <div className='w-[100%] h-[100%] absolute top-0 left-0 opacity-25 bg-gradient-to-br from-slate-700 to-black'></div>
        <div className='w-[100%] h-[100%] lg:text-[5rem] text-[3.8rem] font-medium flex items-center justify-center text-white drop-shadow-md'>
          {countryData?.data?.name}
        </div>
    </section>

    {/* BREADCRUMBS */}
    <section className='w-[100%] '>
        <ul className='mx-auto py-1 border-y border-slate-300 w-[90%] flex items-center justify-start gap-1'>
            <li><Link href={`/`}>Home</Link></li>
            <li><MdOutlineChevronRight /></li>
            <li><Link href={`/country`}>Countries</Link></li>
            <li><MdOutlineChevronRight /></li>
            <li><Link href={`/country/${slug}`} className='font-semibold'>{countryData?.data?.name}</Link></li>
        </ul>
    </section>

    {/*  */}
    <CountryView slug={slug} dbData={opportunityData} sectorData={sectorData} />

    </>
  )
}
