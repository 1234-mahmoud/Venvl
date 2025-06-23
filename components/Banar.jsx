import Image from "next/image";
import { GoArrowUpLeft } from "react-icons/go";
import classes from '../style/banar.module.css'
const Banar = () => {
  return (
    <div className={`relative`}>
        <div className={`relative h-[576px] ${classes.gradient} rounded-md
    max-xl:h-[380px]
    `}>
      <div
        className={`info w-full max-w-[743px] h-[293px]  flex flex-col justify-between 
            lg:translate-[10px] 
         2xl:translate-[100px] 
            `}
      >
        <div
          className={`txt  
             flex flex-col justify-between
      lg:h-[170px] 2xl:h-[205px]
             `}
        >
          <p
            className={`h-[150px] text-[64px] font-worksans font-bold leading-[75px]
                max-sm:text-[40px] max-sm:leading-[56px]
                max-md:text-[45px] max-md:leading-[60px]
                max-lg:text-[50px] max-lg:leading-[60px]
                max-lg:h-full
                `}
          >
            Find Your Perfect Stay Anywhere, Anytime
          </p>
          <p className={`text-[1rem] font-semibold text-gray-600 `}>
            Explore thousands of handpicked rentals tailored to your lifestyle
          </p>
        </div>
        <button
          className={`flex justify-center items-center gap-[10px] bg-black w-[198px] h-[40px] text-white rounded-md`}
        >
          <GoArrowUpLeft className={`text-[20px]`} /> Start Exploring
        </button>
      </div>
      {/* ------------------------- */}
      <div className={`img max-w-1/2 absolute bottom-0 right-0 `}>
        <Image src="/Photoroom.png" alt="pic" width={640} height={500}/>
      </div>
    </div>
    {/* -------------------------Explore---------------------------------------- */}
    <div className={`explore w-full max-w-[846px] h-[96px] absolute bottom-[-48px] left-1/2 translate-x-[-50%] bg-white rounded-md
        flex justify-between items-center
        text-[20px] font-bold
        max-lg:h-[70px]
        `}>
           <div className={`sel px-[40px] py-[24px]
            flex justify-between w-full max-w-[650px]
            `}>
            <select name="" id="" >
                <option>Location</option>
                <option value="">option1</option>
                <option value="">option2</option>
            </select>
            {/* ---------- */}

             <select name="" id="" >
                <option>Date</option>
                <option value="">option1</option>
                <option value="">option2</option>
            </select>
            {/* ---------- */}

             <select name="" id="" >
                <option>Total People</option>
                <option value="">option1</option>
                <option value="">option2</option>
            </select>
            {/* ---------- */}

           </div>
           <button className={`w-[196px] bg-black text-white h-full rounded-tr-md rounded-br-md`}>Explore Now</button>
    </div>
    </div>
  );
};

export default Banar;














