'use client'
import Link from "next/link";
import { useState } from "react";

const Contact = () => {
  const [focusFields, setFocusFields] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleFocus = (field) => {
    setFocusFields(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field, value) => {
    if (!value) {
      setFocusFields(prev => ({ ...prev, [field]: false }));
    }
  };

  return (
    <div className="relative w-full h-lvh">
      {/* Background image with brightness filter */}
      <div className="absolute inset-0 bg-[url('/contact_bg.png')] bg-cover bg-center filter  z-0" />

      {/* Foreground box */}
      <div className= {`z-10 w-full max-w-[682px] h-full bg-white/40 backdrop-blur-md absolute right-0 top-0 px-[40px] py-[20px]
        max-md:px-0 max-md:backdrop-blur-xs
        `}>
        <div className="w-full max-w-[347px] h-[137px] flex flex-col gap-[16px] max-sm:px-2">
          <h1 className="text-[60px] font-worksans">Contact Us</h1>
          <p className="text-[14px] font-inter">
            We welcome you to contact us at any time, whether you have a
            question, a comment, or need assistance regarding any property
          </p>
        </div>
{/* ------------------------- */}
        <div className="relative my-[50px] mx-auto w-full max-w-[522px] flex flex-col justify-center items-center max-sm:px-2">
          <form className="flex flex-col gap-[40px] w-full max-w-[522px] h-[233px] ">
            {/* Name Input */}
            <div className="relative flex flex-col gap-[8px]">
              {!focusFields.name && (
                <label className="text-gray-600 absolute top-1/2 translate-y-[-50%]">Name</label>
              )}
              <input
                className="border-b-[1px] border-gray-600 h-[51px] focus:outline-0 px-2"
                type="text"
                onFocus={() => handleFocus("name")}
                onBlur={(e) => handleBlur("name", e.target.value)}
              />
            </div>

            {/* Email Input */}
            <div className="relative flex flex-col gap-[8px]">
              {!focusFields.email && (
                <label className="text-gray-600 absolute top-1/2 translate-y-[-50%]">Email</label>
              )}
              <input
                className="border-b-[1px] border-gray-600 h-[51px] focus:outline-0 px-2"
                type="email"
                onFocus={() => handleFocus("email")}
                onBlur={(e) => handleBlur("email", e.target.value)}
              />
            </div>

            {/* Message Input */}
            <div className="relative flex flex-col gap-[8px]">
              {!focusFields.message && (
                <label className="text-gray-600 absolute top-1/2 translate-y-[-50%]">Your message</label>
              )}
              <input
                className="border-b-[1px] border-gray-600 h-[51px] focus:outline-0 px-2"
                type="text"
                onFocus={() => handleFocus("message")}
                onBlur={(e) => handleBlur("message", e.target.value)}
              />
            </div>
          </form>

          <button className="mt-4 bg-black text-white px-4 py-2 rounded w-[158px] h-[54px] absolute bottom-[-100px] right-0">
            Send Message
          </button>
        </div>
        {/* --------------------------- */}

        <div className={`absolute bottom-[100px] w-full max-w-[522px] h-[54px] flex justify-between items-center gap-[20px]
            text-[14px]   max-sm:flex-col max-sm:h-[100px] 
            `}>
            <div className="">
                <div className="flex gap-[30px]">
                    <Link href="/">Facebook</Link>
                    <Link href="/">LinkedIn</Link>
                    <Link href="/">Twitter</Link>
                </div>
                <p>Venvl real-estate @gmail.com</p>
            </div>

            <span>Call:638-833-839</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;





