"use client"
import { MapData } from '@/data/MapData'
import React from 'react'



export default function AfricaMap() {
  


  return (
    <>
      <section id='africa__map' className='w-[100%] text-lg bg-gradient-to-br from-yellow-200 to-yellow-800'>
        <div
          className='mx-auto w-[90vw] lg:h-[39rem] h-auto pt-[6rem] overflow-hidden flex lg:flex-row flex-col items-center lg:justify-between'>
          <div className='lg:w-[40%] w-[100%] p-8 lg:mb-0 mb-[4rem]'>
              <h4 className='text-[3rem] font-medium mb-3'>Map of Africa</h4>
              <p className='text-[#3f724a] italic mb-2'>Click a Country on the map to get more info.</p>
              <h5 className='font-bold text-lg mb-2 '> KEY</h5>
              <section className='text-sm'>
                <div className='w-[100%] flex items-center justify-start font-semibold border border-[#3f724a]'>
                  <div className='w-[30%] border-r border-[#3f724a] p-2'>COLOR</div>
                  <div className='w-[70%] p-2'>DESCRIPTION</div>
                </div>
                <div className='w-[100%] flex items-center justify-start border border-[#3f724a]'>
                  <div className='w-[30%] border-r border-[#3f724a] p-2'>Orange</div>
                  <div className='w-[70%] p-2'>Information related to investment projects has already been secured.</div>
                </div>
                <div className='w-[100%] flex items-center justify-start border border-[#3f724a]'>
                  <div className='w-[30%] border-r border-[#3f724a] p-2'>Green</div>
                  <div className='w-[70%] p-2'>Active engagement ongoing or highly potential for investments</div>
                </div>
              </section>
            </div>
          <div className="W-[60%] lg:scale-125 scale-90 object-contain pulse" dangerouslySetInnerHTML={{ __html: MapData }} />
        </div>
      </section>
    </>
  )
}
