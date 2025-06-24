import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={`w-full h-[377px] bg-black text-white flex justify-center items-center
            max-xl:h-full max-xl:flex-wrap px-[100px]
            max-xl:px-[10px]
    
    `}>
      <div
        className={`w-full h-[252px] border-b-2 border-white
            max-xl:h-full

            `}
      >
        <div className={`h-[210px] flex justify-between 
            max-xl:h-full max-xl:flex-wrap max-xl:justify-center
            
            `}>
          <div className={`w-full max-w-[433px] flex flex-col gap-[48px]
            `}>
           <div>
             <h1 className={`text-[48px] font-bold`}>VENVL</h1>
            <p className={`text-[18px]`}>
              Trusted real estate company helping clients find, rent, or buy
              homes across the region with ease and confidence
            </p>
           </div>
            <div className={`icons flex gap-[10px]`}>
              <FaFacebook />
              <IoLogoTwitter />
              <FaLinkedin />
              <FaInstagramSquare />
            </div>
          </div>
          {/* ---------------------------- */}
          <div className={`flex justify-between w-full max-w-[606px]
            max-xl:gap-[30px] max-xl:flex-wrap max-xl:justify-center max-xl:mt-[20px]
            
            `}>
            <div className={`flex flex-col gap-[24px]`}>
              <span className={`text-[18px] font-semibold`}>About</span>
              <div className={`flex flex-col gap-[16px]`}>
                <Link className="text-[16px] text-gray-200" href="/">About Us</Link>
                <Link className="text-[16px] text-gray-200" href="/">Our Vision</Link>
                <Link className="text-[16px] text-gray-200" href="/">Our Mission</Link>
                <Link className="text-[16px] text-gray-200" href="/">Contact Information</Link>
                <Link className="text-[16px] text-gray-200" href="/">Social Media (Icons)</Link>
              </div>
            </div>
            <div className={`flex flex-col gap-[24px]`}>
              <span className={`text-[18px] font-semibold`}>Quick Links</span>
              <div className={`flex flex-col gap-[16px]`}>
                <Link className="text-[16px] text-gray-200" href="/">Properties on Display</Link>
                <Link className="text-[16px] text-gray-200" href="/">Book a Viewing Appointment</Link>
                <Link className="text-[16px] text-gray-200" href="/">Frequently Asked Questions</Link>
                <Link className="text-[16px] text-gray-200" href="/">Terms and Conditions</Link>
                <Link className="text-[16px] text-gray-200" href="/">Privacy Policy</Link>
              </div>
            </div>
            <div className={`flex flex-col gap-[24px]`}>
              <span className={`text-[18px] font-semibold`}>Help</span>
              <div className={`flex flex-col gap-[16px]`}>
                <Link className="text-[16px] text-gray-200" href="/">Contact</Link>
                <Link className="text-[16px] text-gray-200" href="/">FAQ</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
