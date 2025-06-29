import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
const About = () => {
  return (
    <div >
    <div className={`relative mt-[200px]`}>
          <div
        className={`w-full max-w-[1280px] h-[208px] flex justify-between
      absolute top-[-100px] right-0 left-0 mx-auto z-10
      max-md:flex-wrap
         `}
      >
        <h1 className={`text-[60px] font-worksans leading-[70px]`}>About Us</h1>
        <p
          className={`w-full max-w-[621px]  h-[176px] text-inter text-[18px] leading-[32px] text-justify`}
        >
          At <span className="font-semibold">VENVL</span>, we believe that real
          estate is more than just a building...it's the beginning of a life, an
          investment, or a dream come true. We're a modern real estate platform
          that connects you with the best real estate opportunities in the
          market, whether you're looking for a dream home, an office for your
          business, or a successful investment. We leverage local expertise and
          a forward-thinking vision to provide you with a comfortable and safe
          experience, supported by a dedicated team that pays attention to the
          smallest details.
        </p>
      </div>
      {/* --------------------------------- */}
      <div className={`relative w-full h-[733px] overflow-hidden `}>
        <div
          className={`bg-[url('/about_bg2.png')] bg-cover w-full h-[733px] absolute top-[100px] left-0  z-0`}
        ></div>
        <div
          className={`bg-[url('/about_bg.png')] bg-contain absolute left-0 bottom-0  z-20 w-full h-[372px]
            max-md:bg-cover
            `}
        ></div>
      </div>
      {/* ----------------------------- */}
      <div className={`w-full h-[306px] flex flex-col gap-[40px] justify-center items-center
        max-md:h-full
        `}>
        <h1 className={`text-[60px] font-worksans`}>Values</h1>

        <div className={` w-full max-w-[1280px] flex justify-around
            max-md:flex-wrap max-md:gap-[16px]
            `}>
          <div className={`w-[116px] h-[126px] flex flex-col justify-between items-center`}>
            <div className={`img w-[88px] h-[88px] bg-black flex justify-center items-center shadow-[-8px_-8px_0px_#B0B0B0]`}>
              <Image alt='Transparency' src="/transparency.svg" width={40} height={40} />
            </div>
            <span className={`text-[18px] font-inter`}>Transparency</span>
          </div>
          <div className={`w-[116px] h-[126px] flex flex-col justify-between items-center`}>
            <div className={`img w-[88px] h-[88px] bg-black flex justify-center items-center shadow-[-8px_-8px_0px_#B0B0B0]`}>
              <Image alt='Professionalism' src="/school-tie.svg" width={40} height={40} />
            </div>
            <span className={`text-[18px] font-inter`}>Professionalism</span>
          </div>
          <div className={`w-[116px] h-[126px] flex flex-col justify-between items-center`}>
            <div className={`img w-[88px] h-[88px] bg-black flex justify-center items-center shadow-[-8px_-8px_0px_#B0B0B0]`}>
              <Image alt='Innovation' src="/ai-innovation-03.svg" width={40} height={40} />
            </div>
            <span className={`text-[18px] font-inter`}>Innovation</span>
          </div>
          <div className={`w-[101px] h-[148px] flex flex-col justify-between items-center`}>
            <div className={`img w-[88px] h-[88px] bg-black flex justify-center items-center shadow-[-8px_-8px_0px_#B0B0B0]`}>
              <Image alt='Customer Satisfaction' src="/favourite.svg" width={40} height={40} />
            </div>
              <span className={`text-[18px] font-inter`}>Customer Satisfaction</span>
          </div>
        </div>
      </div>
    </div>
      {/* ----------------------------------- */}
      <Footer/>
    </div>
  );
};

export default About;



