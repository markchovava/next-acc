import React from 'react'
import OpportunityList from './components/OpportunityList'
import { getCountrySectorOpportunities } from '@/api/getCountryOpportunities';
import { getSector } from '@/api/getSectors';
import { baseURL } from '@/api/baseURL';




export default async function page({ params: {slug, id}}) {
    const sector_id = id;
    const country_slug = slug;
    const [sectorData, opportunityData] = await Promise.all([
        getSector(sector_id), getCountrySectorOpportunities(country_slug, sector_id)
    ]);

   


  return (
    <>
    {/* HEADER */}
    <section 
        style={{backgroundImage: `url('${baseURL + sectorData?.data?.landscape}')`}} 
        className='w-[100%] lg:aspect-[5/1] aspect-[5/2] relative bg-fixed bg-cover bg-no-repeat'>
        <div className='w-[100%] h-[100%] absolute top-0 left-0 opacity-25 bg-gradient-to-br from-slate-700 to-black'></div>
        <div className='w-[100%] h-[100%] lg:text-[5rem] text-[3.8rem] font-medium flex items-center justify-center text-white drop-shadow-md'>
          {sectorData?.data?.name}
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

    <OpportunityList 
        slug={slug} 
        dbData={opportunityData} 
        sectorData={sectorData} 
        country_slug={country_slug} 
        sector_id={sector_id} />
    </>
  )
}
