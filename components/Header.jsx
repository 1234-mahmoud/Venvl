"use client";
import { useState } from "react";
import Link from "next/link";
import { HiOutlineViewList } from "react-icons/hi";
import { usePathname } from "next/navigation";
import classes from "../style/header.module.css";
import Image from "next/image";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [register, setRegister] = useState(false);
  const toggle = () => {
    setRegister(!register);
  };
  const path = usePathname();
  return (
    <div
      className={`w-full max-w-[1280px] mx-auto mt-[24px] h-[56px] flex justify-between items-center relative px-4
    
    `}
    >
      {/* Logo */}
      <div className="logo">
        <h1 className="font-bold font-worksans text-[48px] h-full">VENVL</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="nav w-full max-w-[590px] justify-between items-center hidden lg:flex">
        <Link
          href="/"
          className={` font-semibold font-inter text-[18px]
          ${path === "/" ? classes.nav_link : undefined}
          `}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={` font-semibold font-inter text-[18px]
          ${path === "/about" ? classes.nav_link : undefined}
          `}
        >
          About
        </Link>
        <Link
          href="/units"
          className={` font-semibold font-inter text-[18px]
          ${path === "/units" ? classes.nav_link : undefined}
          `}
        >
          Units
        </Link>
        <Link
          href="/contact"
          className={` font-semibold font-inter text-[18px]
          ${path === "/contact" ? classes.nav_link : undefined}
          `}
        >
          Contact Us
        </Link>
      </nav>

      {/* Desktop Utilities */}
      <div className="utili hidden lg:flex gap-[40px]">
        <select>
          <option value="">Arabic</option>
          <option value="">English</option>
        </select>
        {/* -------------- */}

        {!register && (
          <button
            className="w-[87px] h-[36px] bg-black text-white font-inter text-[14px] rounded-md"
            onClick={toggle}
          >
            Register
          </button>
        )}
        {/* ----switch------ */}
        {register && (
          <div
            className={`w-[142px] h-[52px] bg-white rounded-4xl flex gap-[16px] px-2 items-center border-[1px]`}
            onClick={toggle}
          >
            <div className="w-[36px] h-[36px] relative overflow-hidden rounded-full">
              <Image src="/villa.png" alt="user" fill />
            </div>
            <span>Mahmoud</span>
          </div>
        )}
        {/* -------------- */}
      </div>

      {/* Hamburger Icon - Mobile */}
      <div className="lg:hidden z-50">
        <button onClick={() => setIsOpen(true)}>
          <HiOutlineViewList className="w-[40px] h-[40px]" />
        </button>
      </div>

      {/* Sidebar + Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-[250px]"}`}
      >
        <div className="p-4 flex flex-col gap-4 mt-[60px]">
          <Link
            href="/"
            className="font-semibold font-inter text-[18px]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="font-semibold font-inter text-[18px]"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/featured"
            className="font-semibold font-inter text-[18px]"
            onClick={() => setIsOpen(false)}
          >
            Featured
          </Link>
          <Link
            href="/contact"
            className="font-semibold font-inter text-[18px]"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>

          <select>
            <option value="">Arabic</option>
            <option value="">English</option>
          </select>
          <button className="w-[87px] h-[36px] bg-black text-white font-inter text-[14px] rounded-md">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
