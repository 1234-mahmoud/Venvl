import Image from "next/image";
import classes from "../style/trust.module.css";
const Trust = () => {
  return (
    <div className={` h-[594px] flex flex-col justify-between max-md:h-full`}>
      <h1 className={`text-[40px] font-semibold max-sm:text-[32px] max-md:text-center`}>Why People Trust Us</h1>
      <div
        className={`w-full max-w-[1171px] h-[507px] mx-auto  flex justify-center relative
            max-md:flex-col
            max-lg:h-full 
            `}
      >
        <div
          className={`img w-[285px] h-[367px] overflow-hidden relative left-[150px] bottom-[-100px] z-10
            max-sm:w-[330px]
           max-md:left-0 max-md:z-0
            `}
        >
          <Image src="/estate2.png" alt="" fill />
        </div>
        <div
          className={`img w-full max-w-[721px] h-[436px] overflow-hidden relative 
            
            `}
        >
          <Image src="/estate1.png" alt="" fill />
        </div>
        {/* -------------------badges------------------ */}
        {/* ------badge1---- */}
        <div
          className={`${classes.badge} px-[25px] py-[10px] w-[305px] h-[92px] flex flex-col gap-[8px] rounded-md text-white absolute right-[-50px] top-1/2 translate-y-[-50%]
          max-lg:right-0
          `}
        >
          <p>24/7 Customer Support </p>
          <p>We’re here anytime you need us</p>
          <span className={`text-worksans position absolute right-0 bottom-[-20px] text-[60px] font-extrabold text-white/50
           
            `}>01</span>
        </div>
        {/* ------badge2---- */}
        <div
          className={`${classes.badge} px-[25px] py-[10px] w-[305px] h-[92px] flex flex-col gap-[8px] rounded-md text-white absolute left-0 top-[60px] z-10`}
        >
          <p>Secure Payments </p>
          <p>Your transactions are encrypted and safe</p>
          <span className={`text-worksans position absolute top-[-20px] right-0 z-0 text-[60px] font-extrabold text-white/50`}>02</span>
        </div>
        {/* ------badge3---- */}
        <div
          className={`${classes.badge} px-[25px] py-[10px] w-[305px] h-[92px] flex flex-col gap-[8px] rounded-md text-white absolute bottom-0 z-10`}
        >
          <p>Verified Properties </p>
          <p>We verify all listings for accuracy</p>
          <span className={`text-worksans position absolute right-0 bottom-[-20px] z-0 text-[60px] font-extrabold text-white/50`}>03</span>
        </div>
      </div>
    </div>
  );
};

export default Trust;



