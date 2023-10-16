"use client";
import React, { useState } from "react";
import Link from "next/link";

import SearchBar from "./SearchBar";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import {BsChevronCompactUp} from "react-icons/bs"
import { BiSearch } from "react-icons/bi";

type Props = {};

const Navbar = (props: Props) => {
    const [showProfile, setShowProfile]=useState<boolean>(false)
    const [showNav, setShowNav]=useState<boolean>(false)
  return (
    <div>
      <div className="flex items-center justify-between py-4 relative">
        <div className="flex items-center  sm:space-x-10 md:space-x-10 lg:space-x-20">
          <div className="font-semibold text-2xl"><Link href={"/"}>ReHostify</Link> </div>
            <nav className="max-md:hidden">
              <ul className="flex items-center lg:space-x-10 space-x-7 opacity-70 text-[15px]">
                <li>
                  <Link className="py-3 inline-block w-full" href={"/"}>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link className="py-3 inline-block w-full" href={"/"}>
                    PRODUCTS
                  </Link>
                </li>
                <li>
                  <Link className="py-3 inline-block w-full" href={"/"}>
                    CATEGORIES
                  </Link>
                </li>
                <li>
                  <Link className="py-3 inline-block w-full" href={"/"}>
                    RENT PRODUCTS
                  </Link>
                </li>
                <li>
                  <Link className="py-3 inline-block w-full" href={"/"}>
                    SWAP HOSTEL
                  </Link>
                </li>
              </ul>
            </nav>
            </div>
          <div className="flex items-center space-x-4">
            <SearchBar />
            <div onClick={()=>setShowProfile(!showProfile)} className="relative cursor-pointer">
              <Image
                src={"/user.jpg"}
                width={35}
                height={35}
                alt="dp"
                className="rounded-full object-cover"
              />
              <div className={`absolute bg-white z-[2] rounded-lg shadow-lg ${showProfile?"":"hidden"}`}>
                <Link href={"/"} className="text-xs p-2">SignIn</Link>
              </div>
            </div>
            <Link href={"/"}>
            <div className="p-2 bg-gray-100 rounded-full">
              <CiShoppingCart size={20} />
            </div>
          </Link>
          <span onClick={()=>setShowNav(!showNav)} className="p-[9px] bg-gray-100 rounded-full md:hidden ">
            <BsChevronCompactUp className={`transition ease-in duration-150 ${showNav ? "rotate-180":"0"}`} />
          </span>
          </div>
        </div>
        <div className={`md:hidden ${showNav ? 'pb-4 px-5':"h-0 invisible opacity-0"}`}>
            <ul className="flex flex-col text-[15px] opacity-75 px-2">
            <li>
                  <Link className="py-3 inline-block w-full" href={"/"}>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link className="py-3 inline-block w-full" href={"/"}>
                    PRODUCTS
                  </Link>
                </li>
                <li>
                  <Link className="py-3 inline-block w-full" href={"/"}>
                    CATEGORIES
                  </Link>
                </li>
                <li>
                  <Link className="py-3 inline-block w-full" href={"/"}>
                    RENT 
                  </Link>
                </li>
                <li>
                  <Link className="py-3 inline-block w-full" href={"/"}>
                    SWAP HOSTEL
                  </Link>
                </li>


            </ul>
            <div  className="flex item-center bg-gray-100 p-2 rounded-lg my-4 py-3">
            <button><BiSearch size={20} className="opacity-50"/></button>
            <input 
            type="text"
            placeholder='Search products name...'
            className='outline-none bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px] w-full'
             /> 

            </div>
        </div>
    </div>
  );
};
export default Navbar;
