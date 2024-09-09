"use client"
import { MapData } from '@/data/MapData'
import React from 'react'



export default function AfricaMap() {
  


  return (
    <>
      <section id='africa__map' className='w-[100%] bg-gradient-to-br from-yellow-200 to-yellow-800'>
        <div
          className='mx-auto w-[90vw] lg:h-[39rem] h-auto pt-[6rem] overflow-hidden flex lg:flex-row flex-col items-center lg:justify-between'>
          <div className='lg:w-[40%] w-[100%] p-8 lg:mb-0 mb-[4rem]'>
              <h4 className='text-[3rem] font-medium'>Map of Africa</h4>
              <p className='text-yellow-800 italic'>Click a Country on the map to get more info.</p>
            </div>
          <div className="W-[60%] lg:scale-125 scale-90 object-contain pulse" dangerouslySetInnerHTML={{ __html: MapData }} />
        </div>
      </section>
    </>
  )
}
