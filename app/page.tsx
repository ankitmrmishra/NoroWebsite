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
    <section className="bg-black text-white min-h-screen flex flex-col items-center  ">
      {/* Hero Content */}
      <main className="text-center mt-20 px-4 flex justify-center align-middle items-center flex-col">
        <div className="max-w-max mb-4 px-4 py-1 bg-[#FF5F57]/20 rounded-full text-sm font-semibold flex justify-center align-middle items-center gap-2 border border-[#FF5F57]">
          Available Now
          <Circle
            fill="#FF5F57"
            color="#FF5F57"
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
            <button className="px-8 py-2 shadow-[inset_0px_4px_6px_0px_rgba(0,_0,_0,_0.1)] drop-shadow-xl/30 drop-shadow-white min-w-max gap-2 group-hover:relative group-hover:translate-y-1 rounded-[273px] flex   bg-white text-black font-semibold duration-200 group-hover:cursor-pointer ">
              View Plan and Pricing{" "}
              <ArrowRight className="group-hover:-rotate-45 duration-200" />
            </button>
          </div>
        </div>
        <Image
          src="/launchingSoon.svg"
          alt="Noro Work Logo"
          width={80}
          height={40}
          className="w-screen md:px-10 px-4 md:py-10 py-32"
        />
      </main>
    </section>
  );
}
