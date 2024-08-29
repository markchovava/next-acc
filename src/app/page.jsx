import AfricaMap from "@/components/AfricaMap";
import Carousel from "@/components/Carousel";
import SlideMain from "@/components/SlideMain";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  
  return (
    <>
      <SlideMain />
      <AfricaMap />

      {/*  */}
      <section className="w-[100%] pt-[6rem] pb-[4rem]">
        <div className="mx-auto w-[90%]">
          <h3 className="lg:text-[2.5rem] text-[1.8rem] lg:w-[80%] w-[90%] leading-tight mb-4">
            Unlocking the potential of private capital’s transformative role in building a prosperous Africa.
          </h3>
          <div className="grid lg:grid-cols-2 text-xl grid-cols-1 lg:gap-4 gap-8">
            <div className="">
              As The African Private Capital Association, we are committed to championing and 
              enabling private capital investment in Africa. We play a significant role as an effective 
              change agent for the industry by educating, equipping and connecting members and key 
              stakeholders with independent industry research, advocacy, best-practice professional 
              development programmes, and unparalleled networking opportunities.
            </div>
            <div className="">
              <ul>
                <li>
                  <Link href='#' className="group hover:bg-slate-50 flex items-center justify-between border-y border-slate-300 py-2 px-3">
                    <span>Benefits of Membership</span>
                    <FaArrowRightLong className="group-hover:translate-x-1 transition-all ease-in-out"/>
                  </Link>
                </li>
                <li>
                  <Link href='#' className="group hover:bg-slate-50 flex items-center justify-between border-y border-slate-300 py-2 px-3">
                    <span>Investment Opportunities</span>
                    <FaArrowRightLong className="group-hover:translate-x-1 transition-all ease-in-out"/>
                  </Link>
                </li>
                <li>
                  <Link href='#' className="group hover:bg-slate-50 flex items-center justify-between border-y border-slate-300 py-2 px-3">
                    <span>Explore Our Events & Training Opportunities</span>
                    <FaArrowRightLong className="group-hover:translate-x-1 transition-all ease-in-out"/>
                  </Link>
                </li>
                <li>
                  <Link href='#' className="group hover:bg-slate-50 flex items-center justify-between border-y border-slate-300 py-2 px-3">
                    <span>Discover Opportunities</span>
                    <FaArrowRightLong className="group-hover:translate-x-1 transition-all ease-in-out"/>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="w-[100%] pt-[2rem] pb-[6rem]">
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
        </div>
      </section>

      <TestimonialCarousel />

      {/*  */}
      <Carousel />
    </>
  );
}


