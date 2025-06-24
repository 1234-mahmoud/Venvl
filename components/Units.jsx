"use client";

import { useState } from "react";
import classes from "../style/units.module.css";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Link from "next/link";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { LuBath } from "react-icons/lu";
import { IoBedOutline } from "react-icons/io5";
import { RxDimensions } from "react-icons/rx";
import { BiSortAlt2 } from "react-icons/bi";

const Units = () => {
  const [rangeValue, setRangeValue] = useState([20, 250]);
  const [activeRoom, setActiveRoom] = useState(null);
  const roomOptions = ["1", "2", "3", "+4"];

  return (
    <div className="my-[50px] w-full max-w-[1280px] mx-auto bg-amber-100">
      {/* ------------------------------- Search & Filters ------------------------------- */}
      <div className="flex flex-col gap-[20px]">
        <div className="search flex gap-[12px]">
          <input
            type="search"
            className="w-full h-[56px] bg-white rounded-4xl focus:outline-0 indent-10"
            placeholder="Search..."
          />
          <button className="w-[56px] h-[56px] rounded-full bg-white">X</button>
        </div>

        <div className="explore w-full max-w-[846px] h-[96px] mx-auto bg-white rounded-md flex justify-between items-center text-[20px] font-bold max-sm:h-[130px] max-sm:flex-wrap max-lg:h-[70px]">
          <div className="sel px-[40px] py-[24px] flex justify-between w-full max-w-[650px] max-md:px-[10px]">
            <select>
              <option>Location</option>
              <option>option1</option>
              <option>option2</option>
            </select>
            <select>
              <option>Date</option>
              <option>option1</option>
              <option>option2</option>
            </select>
            <select>
              <option>Total People</option>
              <option>option1</option>
              <option>option2</option>
            </select>
          </div>
          <button className="w-[196px] bg-black text-white h-full rounded-tr-md rounded-br-md max-sm:h-[70px] max-sm:w-full">
            Explore Now
          </button>
        </div>
      </div>

      {/* ------------------------------- Side Filter && units ------------------------------- */}

      <div className={`flex bg-green-700 gap-[16px] my-[40px]
        max-md:flex-col
        `}>
        {/* ----------------------------side filter----------------- */}
        <div className={`w-[335px]  bg-blue-300 
            max-md:w-full
            `}>
          <div className={`w-[311px] mx-auto
            max-md:w-full max-md:px-[20px]
            
            `}>
            <div className="w-full mx-auto pt-[20px] pb-[30px] flex justify-between items-center">
              <h1 className="text-[24px] font-bold font-sanswork">Filters</h1>
              <button className="text-gray-500">Clear all</button>
            </div>

            <div className="w-full mx-auto h-[203px] overflow-y-scroll flex flex-col gap-[16px]">
              <p className="text-[16px] font-semibold font-inter">
                Property Type
              </p>
              {["Villa", "Floor", "Ground", "Detached House", "Apartment"].map(
                (type) => (
                  <label
                    key={type}
                    className="flex items-center gap-[8px]"
                    htmlFor={type}
                  >
                    <input
                      className="rounded-sm accent-gray-700"
                      id={type}
                      type="checkbox"
                    />
                    {type}
                  </label>
                )
              )}
            </div>

            {/* -------------------- Range Slider -------------------- */}
            <div className="px-[20px] mt-[20px] border-b-[1px] pb-[20px] border-gray-300">
              <p className="mb-2 font-semibold text-[16px]">Property Size</p>
              <RangeSlider
                min={0}
                max={100}
                defaultValue={rangeValue}
                onInput={(value) => setRangeValue(value)}
                className={classes.my_slider}
              />
              <div className="flex justify-between items-center my-[20px]">
                <span
                  className={`w-[83px] h-[38px] bg-gray-400 rounded-md flex justify-center items-center`}
                >
                  {rangeValue[0]} m<sup>2</sup>
                </span>
                <span
                  className={`w-[83px] h-[38px] bg-gray-400 rounded-md flex justify-center items-center`}
                >
                  {rangeValue[1]} m<sup>2</sup>
                </span>
              </div>
            </div>
            {/* -------------------- Rooms -------------------- */}
            <div className="flex gap-[20px] flex-col border-b-[1px] pb-[20px] my-[20px] border-gray-300">
              <p className={`text-[16px] font-semibold`}>Rooms</p>
              <div className="flex gap-[16px]">
                {roomOptions.map((room) => (
                  <span
                    key={room}
                    onClick={() => setActiveRoom(room)}
                    className={`w-[40px] h-[40px] rounded-sm flex justify-center items-center cursor-pointer
              ${
                activeRoom === room
                  ? "bg-black text-white"
                  : "bg-gray-300 text-black"
              }`}
                  >
                    {room}
                  </span>
                ))}
              </div>
            </div>
            {/* --------------features------------------- */}
            <div className="w-full mx-auto my-[30px] h-[203px] overflow-y-scroll flex flex-col gap-[16px]">
              <p className="text-[16px] font-semibold font-inter">Features</p>
              {[
                "Pet-Friendly",
                "Family Friendly",
                "Beachfront",
                "Work-Friendly",
              ].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-[8px]"
                  htmlFor={type}
                >
                  <input
                    className="rounded-sm accent-gray-700"
                    id={type}
                    type="checkbox"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>
        </div>
        {/* ----------------------------------box units---------------------------------------------------- */}
        <div className="flex flex-col">
            {/* -----------sort----------- */}
          <div className={` w-full max-w-[929px] flex justify-between items-center 
            max-md:flex-col
            `}>
            <p>Search results (68)</p>
            <div className={`flex items-center gap-[10px]`}>
              <p className="flex items-center gap-[8px]">
                <BiSortAlt2 />
                Sort by: price(High to Low)
              </p>
              <select name="" id="">
                <option value="">size</option>
                <option value="">price</option>
              </select>
            </div>
          </div>
          {/* -----------------------------------------units-------------------------------------- */}
          <div className="real_estates w-full max-w-[929px] my-[20px] flex gap-[16px] flex-wrap justify-center bg-red-300">
            {/* ---------------------------card--------------------------- */}

            <div
              className={`estate w-full max-w-[299px] h-[428px] flex flex-col gap-[12px] px-[8px] pt-[8px] pb-[16px] bg-white rounded-md`}
            >
              <div
                className={`img h-[302px] overflow-hidden relative rounded-md`}
              >
                <Image fill src="/villa.png" alt="Villa" />
              </div>
              <div
                className={`location flex gap-[6px] items-center text-[1rem] font-inter`}
              >
                <CiLocationOn className="text-[1.3rem]" />
                23 sunnyvale Rd
              </div>
              <span className="text-gray-500">( Pet-Friendly ) </span>
              <div
                className={`price flex justify-between items-center text-[16px] font-semibold`}
              >
                <p>Mountainview Villa</p>
                <p>450,000 Egp</p>
              </div>
              <div
                className={`estate_cont flex items-center gap-[16px] text-gray-500`}
              >
                <p className="text-[12px] flex items-center gap-[8px] pr-[15px] border-r-[1px] border-r-gray-500">
                  {" "}
                  <LuBath className="w-[20px] h-[20px]" /> 3 Baths
                </p>
                <p className="text-[12px] flex items-center gap-[8px] pr-[15px] border-r-[1px] border-r-gray-500">
                  {" "}
                  <IoBedOutline className="w-[20px] h-[20px]" /> 6 Beds
                </p>
                <p className="text-[12px] flex items-center gap-[8px] ">
                  <RxDimensions className="w-[20px] h-[20px]" /> 160 m{" "}
                  <sup>2</sup>
                </p>
              </div>
            </div>

            {/* ---------------------------card--------------------------- */}

            <div
              className={`estate w-full max-w-[299px] h-[428px] flex flex-col gap-[12px] px-[8px] pt-[8px] pb-[16px] bg-white rounded-md`}
            >
              <div
                className={`img h-[302px] overflow-hidden relative rounded-md`}
              >
                <Image fill src="/villa.png" alt="Villa" />
              </div>
              <div
                className={`location flex gap-[6px] items-center text-[1rem] font-inter`}
              >
                <CiLocationOn className="text-[1.3rem]" />
                23 sunnyvale Rd
              </div>
              <span className="text-gray-500">( Pet-Friendly ) </span>
              <div
                className={`price flex justify-between items-center text-[16px] font-semibold`}
              >
                <p>Mountainview Villa</p>
                <p>450,000 Egp</p>
              </div>
              <div
                className={`estate_cont flex items-center gap-[16px] text-gray-500`}
              >
                <p className="text-[12px] flex items-center gap-[8px] pr-[15px] border-r-[1px] border-r-gray-500">
                  {" "}
                  <LuBath className="w-[20px] h-[20px]" /> 3 Baths
                </p>
                <p className="text-[12px] flex items-center gap-[8px] pr-[15px] border-r-[1px] border-r-gray-500">
                  {" "}
                  <IoBedOutline className="w-[20px] h-[20px]" /> 6 Beds
                </p>
                <p className="text-[12px] flex items-center gap-[8px] ">
                  <RxDimensions className="w-[20px] h-[20px]" /> 160 m{" "}
                  <sup>2</sup>
                </p>
              </div>
            </div>

            {/* ---------------------------card--------------------------- */}

            <div
              className={`estate w-full max-w-[299px] h-[428px] flex flex-col gap-[12px] px-[8px] pt-[8px] pb-[16px] bg-white rounded-md`}
            >
              <div
                className={`img h-[302px] overflow-hidden relative rounded-md`}
              >
                <Image fill src="/villa.png" alt="Villa" />
              </div>
              <div
                className={`location flex gap-[6px] items-center text-[1rem] font-inter`}
              >
                <CiLocationOn className="text-[1.3rem]" />
                23 sunnyvale Rd
              </div>
              <span className="text-gray-500">( Pet-Friendly ) </span>
              <div
                className={`price flex justify-between items-center text-[16px] font-semibold`}
              >
                <p>Mountainview Villa</p>
                <p>450,000 Egp</p>
              </div>
              <div
                className={`estate_cont flex items-center gap-[16px] text-gray-500`}
              >
                <p className="text-[12px] flex items-center gap-[8px] pr-[15px] border-r-[1px] border-r-gray-500">
                  {" "}
                  <LuBath className="w-[20px] h-[20px]" /> 3 Baths
                </p>
                <p className="text-[12px] flex items-center gap-[8px] pr-[15px] border-r-[1px] border-r-gray-500">
                  {" "}
                  <IoBedOutline className="w-[20px] h-[20px]" /> 6 Beds
                </p>
                <p className="text-[12px] flex items-center gap-[8px] ">
                  <RxDimensions className="w-[20px] h-[20px]" /> 160 m{" "}
                  <sup>2</sup>
                </p>
              </div>
            </div>

            {/* ---------------------------card--------------------------- */}

            <div
              className={`estate w-full max-w-[299px] h-[428px] flex flex-col gap-[12px] px-[8px] pt-[8px] pb-[16px] bg-white rounded-md`}
            >
              <div
                className={`img h-[302px] overflow-hidden relative rounded-md`}
              >
                <Image fill src="/villa.png" alt="Villa" />
              </div>
              <div
                className={`location flex gap-[6px] items-center text-[1rem] font-inter`}
              >
                <CiLocationOn className="text-[1.3rem]" />
                23 sunnyvale Rd
              </div>
              <span className="text-gray-500">( Pet-Friendly ) </span>
              <div
                className={`price flex justify-between items-center text-[16px] font-semibold`}
              >
                <p>Mountainview Villa</p>
                <p>450,000 Egp</p>
              </div>
              <div
                className={`estate_cont flex items-center gap-[16px] text-gray-500`}
              >
                <p className="text-[12px] flex items-center gap-[8px] pr-[15px] border-r-[1px] border-r-gray-500">
                  {" "}
                  <LuBath className="w-[20px] h-[20px]" /> 3 Baths
                </p>
                <p className="text-[12px] flex items-center gap-[8px] pr-[15px] border-r-[1px] border-r-gray-500">
                  {" "}
                  <IoBedOutline className="w-[20px] h-[20px]" /> 6 Beds
                </p>
                <p className="text-[12px] flex items-center gap-[8px] ">
                  <RxDimensions className="w-[20px] h-[20px]" /> 160 m{" "}
                  <sup>2</sup>
                </p>
              </div>
            </div>

            {/* ---------------------------card--------------------------- */}

            <div
              className={`estate w-full max-w-[299px] h-[428px] flex flex-col gap-[12px] px-[8px] pt-[8px] pb-[16px] bg-white rounded-md`}
            >
              <div
                className={`img h-[302px] overflow-hidden relative rounded-md`}
              >
                <Image fill src="/villa.png" alt="Villa" />
              </div>
              <div
                className={`location flex gap-[6px] items-center text-[1rem] font-inter`}
              >
                <CiLocationOn className="text-[1.3rem]" />
                23 sunnyvale Rd
              </div>
              <span className="text-gray-500">( Pet-Friendly ) </span>
              <div
                className={`price flex justify-between items-center text-[16px] font-semibold`}
              >
                <p>Mountainview Villa</p>
                <p>450,000 Egp</p>
              </div>
              <div
                className={`estate_cont flex items-center gap-[16px] text-gray-500`}
              >
                <p className="text-[12px] flex items-center gap-[8px] pr-[15px] border-r-[1px] border-r-gray-500">
                  {" "}
                  <LuBath className="w-[20px] h-[20px]" /> 3 Baths
                </p>
                <p className="text-[12px] flex items-center gap-[8px] pr-[15px] border-r-[1px] border-r-gray-500">
                  {" "}
                  <IoBedOutline className="w-[20px] h-[20px]" /> 6 Beds
                </p>
                <p className="text-[12px] flex items-center gap-[8px] ">
                  <RxDimensions className="w-[20px] h-[20px]" /> 160 m{" "}
                  <sup>2</sup>
                </p>
              </div>
            </div>

            {/* ---------------------------card--------------------------- */}

            <div
              className={`estate w-full max-w-[299px] h-[428px] flex flex-col gap-[12px] px-[8px] pt-[8px] pb-[16px] bg-white rounded-md`}
            >
              <div
                className={`img h-[302px] overflow-hidden relative rounded-md`}
              >
                <Image fill src="/villa.png" alt="Villa" />
              </div>
              <div
                className={`location flex gap-[6px] items-center text-[1rem] font-inter`}
              >
                <CiLocationOn className="text-[1.3rem]" />
                23 sunnyvale Rd
              </div>
              <span className="text-gray-500">( Pet-Friendly ) </span>
              <div
                className={`price flex justify-between items-center text-[16px] font-semibold`}
              >
                <p>Mountainview Villa</p>
                <p>450,000 Egp</p>
              </div>
              <div
                className={`estate_cont flex items-center gap-[16px] text-gray-500`}
              >
                <p className="text-[12px] flex items-center gap-[8px] pr-[15px] border-r-[1px] border-r-gray-500">
                  {" "}
                  <LuBath className="w-[20px] h-[20px]" /> 3 Baths
                </p>
                <p className="text-[12px] flex items-center gap-[8px] pr-[15px] border-r-[1px] border-r-gray-500">
                  {" "}
                  <IoBedOutline className="w-[20px] h-[20px]" /> 6 Beds
                </p>
                <p className="text-[12px] flex items-center gap-[8px] ">
                  <RxDimensions className="w-[20px] h-[20px]" /> 160 m{" "}
                  <sup>2</sup>
                </p>
              </div>
            </div>

            {/* ---------------------------card--------------------------- */}

            <div
              className={`estate w-full max-w-[299px] h-[428px] flex flex-col gap-[12px] px-[8px] pt-[8px] pb-[16px] bg-white rounded-md`}
            >
              <div
                className={`img h-[302px] overflow-hidden relative rounded-md`}
              >
                <Image fill src="/villa.png" alt="Villa" />
              </div>
              <div
                className={`location flex gap-[6px] items-center text-[1rem] font-inter`}
              >
                <CiLocationOn className="text-[1.3rem]" />
                23 sunnyvale Rd
              </div>
              <span className="text-gray-500">( Pet-Friendly ) </span>
              <div
                className={`price flex justify-between items-center text-[16px] font-semibold`}
              >
                <p>Mountainview Villa</p>
                <p>450,000 Egp</p>
              </div>
              <div
                className={`estate_cont flex items-center gap-[16px] text-gray-500`}
              >
                <p className="text-[12px] flex items-center gap-[8px] pr-[15px] border-r-[1px] border-r-gray-500">
                  {" "}
                  <LuBath className="w-[20px] h-[20px]" /> 3 Baths
                </p>
                <p className="text-[12px] flex items-center gap-[8px] pr-[15px] border-r-[1px] border-r-gray-500">
                  {" "}
                  <IoBedOutline className="w-[20px] h-[20px]" /> 6 Beds
                </p>
                <p className="text-[12px] flex items-center gap-[8px] ">
                  <RxDimensions className="w-[20px] h-[20px]" /> 160 m{" "}
                  <sup>2</sup>
                </p>
              </div>
            </div>

            {/* ---------------------------card--------------------------- */}

            <div
              className={`estate w-full max-w-[299px] h-[428px] flex flex-col gap-[12px] px-[8px] pt-[8px] pb-[16px] bg-white rounded-md`}
            >
              <div
                className={`img h-[302px] overflow-hidden relative rounded-md`}
              >
                <Image fill src="/villa.png" alt="Villa" />
              </div>
              <div
                className={`location flex gap-[6px] items-center text-[1rem] font-inter`}
              >
                <CiLocationOn className="text-[1.3rem]" />
                23 sunnyvale Rd
              </div>
              <span className="text-gray-500">( Pet-Friendly ) </span>
              <div
                className={`price flex justify-between items-center text-[16px] font-semibold`}
              >
                <p>Mountainview Villa</p>
                <p>450,000 Egp</p>
              </div>
              <div
                className={`estate_cont flex items-center gap-[16px] text-gray-500`}
              >
                <p className="text-[12px] flex items-center gap-[8px] pr-[15px] border-r-[1px] border-r-gray-500">
                  {" "}
                  <LuBath className="w-[20px] h-[20px]" /> 3 Baths
                </p>
                <p className="text-[12px] flex items-center gap-[8px] pr-[15px] border-r-[1px] border-r-gray-500">
                  {" "}
                  <IoBedOutline className="w-[20px] h-[20px]" /> 6 Beds
                </p>
                <p className="text-[12px] flex items-center gap-[8px] ">
                  <RxDimensions className="w-[20px] h-[20px]" /> 160 m{" "}
                  <sup>2</sup>
                </p>
              </div>
            </div>

            {/* ------------------------- */}
          </div>
        </div>
      </div>
      {/* -----------pagination-------------- */}
      <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
  <nav
    className="isolate inline-flex flex-wrap gap-3 rounded-md shadow-xs"
    aria-label="Pagination"
  >
    <a
      href="#"
      className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-300 hover:bg-gray-50"
    >
      Prev
    </a>
    <a
      href="#"
      aria-current="page"
      className="z-10 inline-flex items-center rounded-full bg-black px-4 py-2 text-sm font-semibold text-white"
    >
      1
    </a>
    <a
      href="#"
      className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50"
    >
      2
    </a>
    <a
      href="#"
      className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50"
    >
      3
    </a>
    <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300">
      ...
    </span>
    <a
      href="#"
      className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50"
    >
      8
    </a>
    <a
      href="#"
      className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50"
    >
      9
    </a>
    <a
      href="#"
      className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50"
    >
      10
    </a>
    <a
      href="#"
      className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-300 hover:bg-gray-50"
    >
      Next
    </a>
  </nav>
</div>



      {/* ------------------End----------------------------------- */}
    </div>
  );
};

export default Units;
