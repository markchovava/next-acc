import AfricaMap from "@/components/AfricaMap";
import Carousel from "@/components/Carousel";
import SlideMain from "@/components/SlideMain";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { getNewsByNum } from "@/api/getNews";
import GridNews from "@/components/GridNews";
import { getCountries } from "@/api/getCountries";



export default async function Home() {
    const [newsData, countriesData] = await Promise.all([getNewsByNum(4), getCountries()]);
  

  return (
    <>
      <SlideMain />
      <AfricaMap />

      {/*  */}
      <section className="w-[100%] pt-[6rem] pb-[4rem]">
        <div className="mx-auto w-[90%]">
          <h3 className="lg:text-[2.5rem] text-[1.8rem] lg:w-[80%] w-[90%] leading-tight mb-4">
          Affiliation with the Pan African Parliament
          </h3>
          <div className="grid lg:grid-cols-2 text-xl grid-cols-1 lg:gap-4 gap-8">
            <div className="">
            The Africa Capital Club (ACC) is deeply connected with the Pan African Parliament (PAP), utilizing its legislative authority and broad 
            influence to advance investment and economic development across Africa. As the legislative body of the African Union (AU), the PAP 
            represents all 55 Member States, playing a crucial role in fostering cooperation, integration, and sustainable growth throughout the 
            continent. To further this mission, the PAP appointed Mr. Paul Kamalesh Damji as their Ambassador for Investment Promotion and Business 
            Connectivity in Africa. The ACC acts as a vital tool to achieve the goals of the mandate given by the PAP to Ambassador Damji, promoting 
            investment and business connectivity across Africa. Together, the ACC and PAP are committed to advancing economic progress, supporting 
            entrepreneurship, and ensuring the prosperity of Africa's people.
            </div>
            <div className="">
              <ul className="text-xl">
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
      <GridNews dbData={newsData} />

      <TestimonialCarousel />

      {/*  */}
      <Carousel dbData={countriesData} />
    </>
  );
}


