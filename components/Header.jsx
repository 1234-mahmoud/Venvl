'use client';
import { useState } from "react";
import Link from "next/link";
import { HiOutlineViewList } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-[1280px] mx-auto mt-[24px] h-[56px] flex justify-between items-center relative px-4">
      {/* Logo */}
      <div className="logo">
        <h1 className="font-bold font-worksans text-[48px]">VENVL</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="nav w-full max-w-[590px] justify-between items-center hidden md:flex">
        <Link href="/" className="font-semibold font-inter text-[18px]">Home</Link>
        <Link href="/" className="font-semibold font-inter text-[18px]">About</Link>
        <Link href="/" className="font-semibold font-inter text-[18px]">Featured</Link>
        <Link href="/" className="font-semibold font-inter text-[18px]">Contact Us</Link>
      </nav>

      {/* Desktop Utilities */}
      <div className="utili hidden md:flex gap-[40px] ">
        <select>
          <option value="">Arabic</option>
          <option value="">English</option>
        </select>
        <button className="w-[87px] h-[36px] bg-black text-white font-inter text-[14px] rounded-md">Register</button>
      </div>

      {/* Hamburger Icon - Mobile */}
      <div className="md:hidden z-50">
        <button onClick={() => setIsOpen(true)}>
         <HiOutlineViewList className="w-[40px] h-[40px]"/>

        </button>
      </div>

      {/* Sidebar + Backdrop */}
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-[250px]"}`}
      >
        <div className="p-4 flex flex-col gap-4 mt-[60px]">
          <Link href="/" className="font-semibold font-inter text-[18px]" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/" className="font-semibold font-inter text-[18px]" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/" className="font-semibold font-inter text-[18px]" onClick={() => setIsOpen(false)}>Featured</Link>
          <Link href="/" className="font-semibold font-inter text-[18px]" onClick={() => setIsOpen(false)}>Contact Us</Link>
          
          <select>
            <option value="">Arabic</option>
            <option value="">English</option>
          </select>
          <button className="w-[87px] h-[36px] bg-black text-white font-inter text-[14px] rounded-md">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
