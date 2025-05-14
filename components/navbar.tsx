import { PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className=" w-full md:px-[68px] md:py-[30px] p-2 text-white">
      <div className="w-full h-[80px] flex justify-between items-center  py-10 md:px-10 px-4 rounded-[10px] bg-[#111]">
        <div className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="Noro Work Logo" width={80} height={40} />
        </div>
        <nav className="hidden md:flex space-x-6 text-sm font-semibold">
          <Link href="#work">Work</Link>
          <Link href="#services">Services</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <div className=" rounded-[273px] relative   group  text-black">
          <button className="md:px-8 px-4 py-2 absolute  -top-1 -right-[4px] min-w-max gap-2 group-hover:relative group-hover:translate-y-1 rounded-[273px] flex justify-center align-middle items-center text-sm md:text-xl bg-white text-black font-semibold duration-200 group-hover:cursor-pointer">
            Book A Call <PhoneCall className="size-4" />
          </button>
          <button className="md:px-8 px-4 py-2 h-full group-hover:hidden   rounded-[273px] min-w-max gap-2 flex border border-white text-sm md:text-xl  bg-transparent text-black ">
            Book A Call <PhoneCall className="size-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
