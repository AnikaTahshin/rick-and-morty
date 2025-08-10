"use client";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[#191D29] p-1 md:p-7">
        <Image
          src={"/assets/title.png"}
          height={200}
          width={200}
          alt="logo"
          className="p-2 mt-8 "
        />

        <div className="flex flex-col items-center justify-center mt-4 md:mt-12">
          <h1 className="text-[40px] md:text-[80px] lg:text-[128px] font-bold uppercase italic text-white md:relative">
            <Image
              className="
            inline-block absolute 
    top-22 -left-1 rotate-[43.58deg] blur-[0.96px]
    h-[52.43px] w-[52.43px]  
    md:-top-11 md:-left-28 md:blur-[3.13px]
    md:h-[214.6px] md:w-[214.6px]   
            "
              src={"/assets/bubble.png"}
              height={214.6}
              width={214.6}
              alt="bubble"
            />
            The
            <Image
              src={"/assets/portal.png"}
              height={100}
              width={220}
              className="inline-block object-contain mb-8 p-4"
              // md:m-5 pb-5 md:pb-10 h-[44.22px] w-[68.62px] md:h-[100px] md:w-[220px]
              alt="portal"
            />
            <span className="bg-gradient-to-r from-[#9DFE00]  to-[#14D9E5] bg-clip-text text-transparent not-italic">
              Rick &
            </span>
            <span className="block bg-gradient-to-r from-[#9DFE00]  to-[#14D9E5] bg-clip-text text-transparent not-italic">
              MORTY <span className="inline-block text-white italic">WIKI</span>
            </span>
          </h1>
          <div className="absolute -right-4 bottom-35 md:right-0 md:-bottom-20 lg:right-20 lg:bottom-30 bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] w-[63.82px] h-[105.19px] md:w-[170.86px] md:h-[281.59px] rounded-[71.14px] flex items-center justify-center rotate-[25.82deg] drop-shadow-[0_0_15px_#9DFE00]">
            <Image
              className="inline-block rotate-[-25deg] scale-180  p-2 h-[66.9px] w-[119] md:h-[90px] md:w-[125px] lg:h-[179.08px] lg:w-[318.91px] object-contain"
              src="/assets/gun.png"
              height={179.08}
              width={318.91}
              alt="gun"
              // priority
            />
          </div>

          <div className="flex flex-col-reverse md:flex-row items-start md:items-center md:justify-center gap-4 mt-8">
            <div className="flex flex-row items-center justify-center gap-2 bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] p-2 ml-6 md:p-4 md:m-1 rounded-[100px]">
              <Image
                src={"/assets/watch.png"}
                height={20}
                width={20}
                className="object-contain"
                alt=""
              />
              <button
                className="text-[#FBF8F3] font-semibold text-[14px] md:text-[18px]"
                type="button"
              >
                Watch Now
              </button>
            </div>

            <p className="text-[#14D9E5] w-[75%] md:w-[50%] lg:w-[33%] text-[8px] md:text-[14px] font-semibold lg:ml-5">
              Brilliant but boozy scientist Rick hijacks his fretful teenage
              grandson, Morty, for wild escapades in other worlds and alternate
              dimensions.
            </p>
          </div>
        </div>


      </div>


    </>
  );
};

export default HomePage;
