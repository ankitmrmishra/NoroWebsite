"use client";

import { ArrowRight, Circle, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import { cn } from "@/lib/utils";
const Instrument_Serif_font = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Hero() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-between">
      {/* Navbar */}
      <header className=" w-full md:px-[68px] md:py-[30px] p-2">
        <div className="w-full h-[80px] flex justify-between items-center  py-10 md:px-10 px-4 rounded-[10px] bg-[#111]">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="Noro Work Logo"
              width={80}
              height={40}
            />
          </div>
          <nav className="hidden md:flex space-x-6 text-sm font-semibold">
            <Link href="#work">Work</Link>
            <Link href="#services">Services</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </nav>
          <div className=" rounded-[273px] relative   group  text-black">
            <button className="md:px-8 px-4 py-2 absolute  -top-1 md:-right-[7px] -right-[4px] min-w-max gap-2 group-hover:relative group-hover:translate-y-1 rounded-[273px] flex justify-center align-middle items-center text-sm md:text-xl bg-white text-black font-semibold duration-200 group-hover:cursor-pointer">
              Book A Call <PhoneCall className="size-4" />
            </button>
            <button className="md:px-8 px-4 py-2 h-full group-hover:hidden   rounded-[273px] min-w-max gap-2 flex border border-white text-sm md:text-xl  bg-transparent text-black ">
              Book A Call <PhoneCall className="size-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <main className="text-center md:mt-20 mt-4 px-4 flex justify-center align-middle items-center flex-col">
        <div className="max-w-max mb-4 px-4 py-1 bg-[#32B20E]/20 rounded-full text-sm font-semibold flex justify-center align-middle items-center gap-2 animate-pulse">
          Available Now
          <Circle
            fill="#32B20E"
            color="#32B20E"
            className="size-3 animate-ping"
          />
        </div>
        <h1
          className={cn(
            "text-4xl md:text-8xl font-serif font-semibold leading-tight mb-6",
            Instrument_Serif_font.className
          )}
        >
          We Build Websites That Look Great <br className="hidden md:block" />
          and Work Even Better
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          We blend striking design, modern development, and razor-sharp branding
          to turn wild ideas into unforgettable digital experiences.
        </p>
        <div className="flex justify-center align-middle items-center">
          <div className=" rounded-[273px] relative   group  text-black max-w-max ">
            <button className="px-8 py-2 absolute  -top-1 -right-[7px] min-w-max gap-2 group-hover:relative group-hover:translate-y-1 rounded-[273px] flex   bg-white text-black font-semibold duration-200 group-hover:cursor-pointer">
              View Plan and Pricing{" "}
              <ArrowRight className="group-hover:-rotate-45 duration-200" />
            </button>
            <button className="px-8 py-2 h-full group-hover:hidden   rounded-[273px] min-w-max gap-2 flex border border-white   bg-transparent text-black ">
              View Plan and Pricing <ArrowRight />
            </button>
          </div>
        </div>
      </main>

      {/* Optional Spacer */}
      <div className="h-10" />
      <Image
        src="/launchingSoon.svg"
        alt="Noro Work Logo"
        width={80}
        height={40}
        className="w-screen px-10 md:py-5"
      />
    </section>
  );
}
