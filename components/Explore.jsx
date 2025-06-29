'use client';
import Link from "next/link";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { LuBath } from "react-icons/lu";
import { IoBedOutline } from "react-icons/io5";
import { RxDimensions } from "react-icons/rx";
import classes from '../style/explore.module.css'
import { usePathname } from "next/navigation";
const Explore = () => {
    const path = usePathname()
  return (
    <div className={`expl my-[100px] flex flex-col justify-center`}>
      <div className={`h-[100px] flex flex-col justify-between items-center max-md:h-full`}>
        <h2 className={`text-[40px] font-semibold max-sm:text-[32px]`}>
          Explore Featured Rentals
        </h2>
        <div className="links flex gap-[100px]">
          <Link href="/" className={`text-[18px] font-semibold
            ${path==='/'?classes.nav_link:undefined}
            `}>
            Daily
          </Link>
          <Link href="/" className={`text-[18px] font-semibold
            ${path==='/'?classes.nav_link:undefined}
            `}>
            Monthly
          </Link>
        </div>
      </div>
      {/* ------------------------------------------------------ */}
      <div className="real_estates my-[50px] flex gap-[20px] flex-wrap justify-center">
      {/* ---------------------------card--------------------------- */}

       <div
          className={`estate w-[413px]
            max-sm:w-full
            max-md:w-[300px]
            h-[519px] flex flex-col gap-[12px] px-[16px] pt-[16px] pb-[32px] bg-white rounded-md`}
        >
          <div className={`img h-[360px] overflow-hidden relative rounded-md`}>
            <Image fill src="/villa.png" alt="Villa" />
          </div>
          <div className={`location flex gap-[6px] items-center text-[1rem] font-inter`}>
            <CiLocationOn className="text-[1.3rem]"/>
            23 sunnyvale Rd
          </div>
          <span className="text-gray-500">( Pet-Friendly ) </span>
          <div className={`price flex justify-between items-center text-[18px] 
            max-md:text-[16px]
            font-semibold`}>
            <p>Mountainview Villa</p>
            <p>450,000 Egp</p>
          </div>
          <div className={`estate_cont flex items-center gap-[16px] text-gray-500
            max-md:gap-[8px]
            `}>
           <p className="flex items-center gap-[8px]  max-md:gap-[5px] max-md:p-[3px] pr-[15px] border-r-[1px] border-r-gray-500"> <LuBath /> 3 Baths</p>
           <p className="flex items-center gap-[8px]  max-md:gap-[5px] max-md:p-[3px] pr-[15px] border-r-[1px] border-r-gray-500"> <IoBedOutline /> 6 Beds</p>
            <p className="flex items-center gap-[8px] max-md:gap-[5px] max-md:p-[3px] "><RxDimensions /> 160 m <sup>2</sup></p>
          </div>
        </div>
         {/* ---------------------------card--------------------------- */}

        <div
          className={`estate w-[413px]
            max-sm:w-full
            max-md:w-[300px]
            h-[519px] flex flex-col gap-[12px] px-[16px] pt-[16px] pb-[32px] bg-white rounded-md`}
        >
          <div className={`img h-[360px] overflow-hidden relative rounded-md`}>
            <Image fill src="/villa.png" alt="Villa" />
          </div>
          <div className={`location flex gap-[6px] items-center text-[1rem] font-inter`}>
            <CiLocationOn className="text-[1.3rem]"/>
            23 sunnyvale Rd
          </div>
          <span className="text-gray-500">( Pet-Friendly ) </span>
          <div className={`price flex justify-between items-center text-[18px] 
            max-md:text-[16px]
            font-semibold`}>
            <p>Mountainview Villa</p>
            <p>450,000 Egp</p>
          </div>
          <div className={`estate_cont flex items-center gap-[16px] text-gray-500
            max-md:gap-[8px]
            `}>
           <p className="flex items-center gap-[8px]  max-md:gap-[5px] max-md:p-[3px] pr-[15px] border-r-[1px] border-r-gray-500"> <LuBath /> 3 Baths</p>
           <p className="flex items-center gap-[8px]  max-md:gap-[5px] max-md:p-[3px] pr-[15px] border-r-[1px] border-r-gray-500"> <IoBedOutline /> 6 Beds</p>
            <p className="flex items-center gap-[8px] max-md:gap-[5px] max-md:p-[3px] "><RxDimensions /> 160 m <sup>2</sup></p>
          </div>
        </div>
         {/* ---------------------------card--------------------------- */}

      <div
          className={`estate w-[413px]
            max-sm:w-full
            max-md:w-[300px]
            h-[519px] flex flex-col gap-[12px] px-[16px] pt-[16px] pb-[32px] bg-white rounded-md`}
        >
          <div className={`img h-[360px] overflow-hidden relative rounded-md`}>
            <Image fill src="/villa.png" alt="Villa" />
          </div>
          <div className={`location flex gap-[6px] items-center text-[1rem] font-inter`}>
            <CiLocationOn className="text-[1.3rem]"/>
            23 sunnyvale Rd
          </div>
          <span className="text-gray-500">( Pet-Friendly ) </span>
          <div className={`price flex justify-between items-center text-[18px] 
            max-md:text-[16px]
            font-semibold`}>
            <p>Mountainview Villa</p>
            <p>450,000 Egp</p>
          </div>
          <div className={`estate_cont flex items-center gap-[16px] text-gray-500
            max-md:gap-[8px]
            `}>
           <p className="flex items-center gap-[8px]  max-md:gap-[5px] max-md:p-[3px] pr-[15px] border-r-[1px] border-r-gray-500"> <LuBath /> 3 Baths</p>
           <p className="flex items-center gap-[8px]  max-md:gap-[5px] max-md:p-[3px] pr-[15px] border-r-[1px] border-r-gray-500"> <IoBedOutline /> 6 Beds</p>
            <p className="flex items-center gap-[8px] max-md:gap-[5px] max-md:p-[3px] "><RxDimensions /> 160 m <sup>2</sup></p>
          </div>
        </div>
         {/* ---------------------------card--------------------------- */}

        <div
          className={`estate w-[413px]
            max-sm:w-full
            max-md:w-[300px]
            h-[519px] flex flex-col gap-[12px] px-[16px] pt-[16px] pb-[32px] bg-white rounded-md`}
        >
          <div className={`img h-[360px] overflow-hidden relative rounded-md`}>
            <Image fill src="/villa.png" alt="Villa" />
          </div>
          <div className={`location flex gap-[6px] items-center text-[1rem] font-inter`}>
            <CiLocationOn className="text-[1.3rem]"/>
            23 sunnyvale Rd
          </div>
          <span className="text-gray-500">( Pet-Friendly ) </span>
          <div className={`price flex justify-between items-center text-[18px] 
            max-md:text-[16px]
            font-semibold`}>
            <p>Mountainview Villa</p>
            <p>450,000 Egp</p>
          </div>
          <div className={`estate_cont flex items-center gap-[16px] text-gray-500
            max-md:gap-[8px]
            `}>
           <p className="flex items-center gap-[8px]  max-md:gap-[5px] max-md:p-[3px] pr-[15px] border-r-[1px] border-r-gray-500"> <LuBath /> 3 Baths</p>
           <p className="flex items-center gap-[8px]  max-md:gap-[5px] max-md:p-[3px] pr-[15px] border-r-[1px] border-r-gray-500"> <IoBedOutline /> 6 Beds</p>
            <p className="flex items-center gap-[8px] max-md:gap-[5px] max-md:p-[3px] "><RxDimensions /> 160 m <sup>2</sup></p>
          </div>
        </div>
         {/* ---------------------------card--------------------------- */}

        <div
          className={`estate w-[413px]
            max-sm:w-full
            max-md:w-[300px]
            h-[519px] flex flex-col gap-[12px] px-[16px] pt-[16px] pb-[32px] bg-white rounded-md`}
        >
          <div className={`img h-[360px] overflow-hidden relative rounded-md`}>
            <Image fill src="/villa.png" alt="Villa" />
          </div>
          <div className={`location flex gap-[6px] items-center text-[1rem] font-inter`}>
            <CiLocationOn className="text-[1.3rem]"/>
            23 sunnyvale Rd
          </div>
          <span className="text-gray-500">( Pet-Friendly ) </span>
          <div className={`price flex justify-between items-center text-[18px] 
            max-md:text-[16px]
            font-semibold`}>
            <p>Mountainview Villa</p>
            <p>450,000 Egp</p>
          </div>
          <div className={`estate_cont flex items-center gap-[16px] text-gray-500
            max-md:gap-[8px]
            `}>
           <p className="flex items-center gap-[8px]  max-md:gap-[5px] max-md:p-[3px] pr-[15px] border-r-[1px] border-r-gray-500"> <LuBath /> 3 Baths</p>
           <p className="flex items-center gap-[8px]  max-md:gap-[5px] max-md:p-[3px] pr-[15px] border-r-[1px] border-r-gray-500"> <IoBedOutline /> 6 Beds</p>
            <p className="flex items-center gap-[8px] max-md:gap-[5px] max-md:p-[3px] "><RxDimensions /> 160 m <sup>2</sup></p>
          </div>
        </div>
         {/* ---------------------------card--------------------------- */}

         <div
          className={`estate w-[413px]
            max-sm:w-full
            max-md:w-[300px]
            h-[519px] flex flex-col gap-[12px] px-[16px] pt-[16px] pb-[32px] bg-white rounded-md`}
        >
          <div className={`img h-[360px] overflow-hidden relative rounded-md`}>
            <Image fill src="/villa.png" alt="Villa" />
          </div>
          <div className={`location flex gap-[6px] items-center text-[1rem] font-inter`}>
            <CiLocationOn className="text-[1.3rem]"/>
            23 sunnyvale Rd
          </div>
          <span className="text-gray-500">( Pet-Friendly ) </span>
          <div className={`price flex justify-between items-center text-[18px] 
            max-md:text-[16px]
            font-semibold`}>
            <p>Mountainview Villa</p>
            <p>450,000 Egp</p>
          </div>
          <div className={`estate_cont flex items-center gap-[16px] text-gray-500
            max-md:gap-[8px]
            `}>
           <p className="flex items-center gap-[8px]  max-md:gap-[5px] max-md:p-[3px] pr-[15px] border-r-[1px] border-r-gray-500"> <LuBath /> 3 Baths</p>
           <p className="flex items-center gap-[8px]  max-md:gap-[5px] max-md:p-[3px] pr-[15px] border-r-[1px] border-r-gray-500"> <IoBedOutline /> 6 Beds</p>
            <p className="flex items-center gap-[8px] max-md:gap-[5px] max-md:p-[3px] "><RxDimensions /> 160 m <sup>2</sup></p>
          </div>
        </div>
      {/* ------------------------- */}
      </div>
         <Link href='/' className="text-gray-500 text-[18px] mx-auto border-b-2 ">See All</Link>

      {/* ------------------------- */}
    </div>
  );
};

export default Explore;
