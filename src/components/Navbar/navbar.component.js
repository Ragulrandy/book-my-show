import React from "react";
import Bookmyshow from "./BookMyShow.svg";
import { BiChevronRight, BiSearch, BiChevronDown, BiMenu } from "react-icons/bi";

const NavSm = () => {
  return(
    <>
    <div className="text-white flex items-center justify-between">
    <div>
    <h3 className="text-xl font-bold">It All Starts Here!</h3>
    <spam className="text-gray-400 text-xs flex items-center">
    Bhubaneswar
     <BiChevronRight />
    </spam>
    </div>
    <div className="w-8 h-8">
    <BiSearch className="w-full h-full" />
    </div>
    </div>
    </>
  )
};
const NavMd = () => {
   return(
     <div className="w-full flex items-center bg-white gap-2 px-3 py-2 rounded-md">
     <BiSearch />
     <input type="search" className="w-full focus:outline-none" placeholder="search for movies, events, plays, sports and activities" />
     </div>
   )
};
const NavLg = () => {
  return(
    <>
    <div className="container mx-auto px-4 flex items-center justify-between">

    <div className="flex item-center w-1/2">
    <div className=" h-12 ">
    <img
    src={Bookmyshow}
    alt="logo"
    className="h-full w-full"/>
    </div>
    <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-md">
    <BiSearch />
    <input type="search" className="w-full focus:outline-none" placeholder="search for movies, events, plays, sports and activities" />
    </div>
    </div>

    <div className="flex item-center gap-3">
    <spam className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
    Bhubaneswar
     <BiChevronDown />
    </spam>
    <button className="bg-red-600 text-white text-sm rounded px-2 py-1">
    sign in
    </button>
    <div className="w-8 h-8 text-white">
    <BiMenu className="w-full h-full"/>
    </div>
    </div>

    </div>
    </>
  )
};

const Navbar = () => {
  return(
    <>
    <nav className="bg-navCol-800 px-4 py-2">
    <div className="md:hidden">{
      //mobile screen
      <NavSm />
    }</div>

    <div className="hidden lg:hidden md:flex">{
      //tablet screen
      <NavMd />
    }</div>

    <div className="hidden lg:flex">{
      //desktop screen
      <NavLg />
    }</div>
    </nav>
    </>
  )

};

export default Navbar;
