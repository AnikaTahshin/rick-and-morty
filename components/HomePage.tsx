"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CastCard from "./CastCard";
import { getCastData } from "@/service/api.service";
import type { Character } from "@/service/api.service";
// import { tt_travels } from '../font/font';

const HomePage = () => {
  const [castData, setCastData] = useState<Character[]>([]);

  async function fetchData() {
    try {
      const data = await getCastData();
      setCastData(data?.data?.characters?.results || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  

  return (
    <>
      <div className="flex flex-col items-center justify-center p-5 mt-8 bg-gray-600">
        <Image src={"/assets/title.png"} height={200} width={200} alt="logo" />

        <h1 className="text-[40px] md:text-[128px] uppercase text-white relative leading-none">
          <img
            className="inline-block absolute -top-3.5 -left-7.5 md:-top-11 md:-left-28 rotate-45 h-[52.43px] w-[52.43px] md:h-[214.6px] max-w-[214.6px] md:w-full"
            src={"/assets/bubble.png"}
           
            alt=""
          />
          The
          <img
            src={"/assets/portal.png"}
            className="inline-block object-contain h-[44.22px] w-[68.62px] md:h-[145px] max-w-[220px] md:w-full mb-4 p-1 md:mb-8 md:p-2"
            alt=""
          />
          <span className="bg-gradient-to-r from-[#9DFE00]  to-[#14D9E5] bg-clip-text text-transparent not-italic">
            Rick &
          </span>
          <span className="block bg-gradient-to-r from-[#9DFE00]  to-[#14D9E5] bg-clip-text text-transparent not-italic">
            MORTY <span className="inline-block text-white">WIKI</span>
          </span>
        </h1>
        <div className="absolute right-0 bottom-2 md:right-40 md:bottom-20 bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] w-[63.62px] h-[105.19px] md:w-[170px] md:h-[281.59px] rounded-[71.14px] md:flex items-center justify-center rotate-[25.82deg] drop-shadow-[0_0_15px_#9DFE00] ">
          <img
            className="inline-block rotate-[-25.82deg] mt-3 md:p-4 scale-160 md:scale-220 h-[66.9px] w-[119.13px] md:h-[179.08px] max-w-[318.91px] md:w-full object-contain"
            src="/assets/gun.png"            
            alt="gun"
            
          />
        </div>

        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-center gap-4 mt-8">
          <div className="flex flex-row items-center justify-center gap-2 bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] p-3 m-2 rounded-full">
            <Image
              src={"/assets/watch.png"}
              height={20}
              width={20}
              className="object-contain"
              alt=""
            />
            <button className="text-white font-semibold" type="button">
              Watch Now
            </button>
          </div>

          <p className="text-[#14D9E5] w-[33%]">
            Brilliant but boozy scientist Rick hijacks his fretful teenage
            grandson, Morty, for wild escapades in other worlds and alternate
            dimensions.
          </p>
        </div>

        {/* character section starts */}

        <CastCard castData={castData} />
      </div>
    </>
  );
};

export default HomePage;
