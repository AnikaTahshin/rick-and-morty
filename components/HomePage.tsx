"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CastCard from "./CastCard";
import { getCastData } from "@/service/api.service";
import type { Character } from "@/service/api.service";
import EpisodesCard from "./EpisodesCard";
import LocationCard from "./LocationCard";
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
      <div className="flex flex-col items-center justify-center p-5 bg-[#191D29]">
        <Image
          className="max-w-full h-auto"
          src={"/assets/title.png"}
          height={200}
          width={200}
          alt="logo"
        />

        <h1 className="text-[40px] lg md:text-[90px] lg:text-[128px] uppercase text-white relative leading-none">
          <div className="absolute rotate-45 -top-5 -left-10 md:-top-12 md:-left-21 lg:-top-7 lg:-left-20 w-[70.6px] md:w-[150.6px] h-auto inline-block">
            <Image
              // className="inline-block absolute -top-3.5 -left-7.5 md:-top-11 md:-left-28 rotate-45 h-[52.43px] w-[52.43px] md:h-[214.6px] max-w-[214.6px] md:w-full"
              src={"/assets/bubble.png"}
              height={214}
              width={214}
              alt=""
              className="max-w-full"
            />
          </div>
          The
          <div className="inline-block w-[68.62px]  h-auto md:w-[150px] lg:w-[220px]  mb-0">
            <Image
              src={"/assets/portal.png"}
              alt=""
              height={145}
              width={220}
              className="max-w-full object-contain"
            />
          </div>
          <span className="bg-gradient-to-r from-[#9DFE00]  to-[#14D9E5] bg-clip-text text-transparent not-italic">
            Rick &
          </span>
          <span className="block bg-gradient-to-r from-[#9DFE00]  to-[#14D9E5] bg-clip-text text-transparent not-italic">
            MORTY <span className="inline-block text-white">WIKI</span>
          </span>
        </h1>
        <div className="absolute right-5 top-70 md:right-10 md:top-60 lg:right-15 lg:top-70 xl:right-50 xl:top-70 bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] w-[63.62px] h-[105.19px] md:w-[140px] md:h-[240.59px] lg:w-[170px] lg:h-[281.59px] rounded-[71.14px] md:flex items-center justify-center rotate-[25.82deg] drop-shadow-[0_0_15px_#9DFE00] ">
          <div className="absolute bottom-10 right-0 md:right-0 md:bottom-25 scale-140">
            <Image
            src="/assets/gun.png"
            className="max-w-full h-auto"
            height={200}
            alt=""
            width={200}
          />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-center gap-4 p-2 md:p-0 mt-8 max-w-[100%]">
          <div className="flex flex-row items-center justify-center gap-1 bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] p-2 rounded-full">
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

          <div className="w-full md:w-[40%]">
            <p className="text-[#14D9E5] text-sm md:text-shadow-md ">
              Brilliant but boozy scientist Rick hijacks his fretful teenage
              grandson, Morty, for wild escapades in other worlds and alternate
              dimensions.
            </p>
          </div>
        </div>

        {/* character section starts */}
        <div className="mt-28">
          <h1 className="text-[24px] text-[#FFFFFF]">Meet the cast</h1>
        <CastCard castData={castData} />

        </div>

        <div className="mt-28">
          <h1 className="text-[24px] text-[#FFFFFF]">Episodes</h1>

          <EpisodesCard />
          <Image
              src={"/assets/star.png"}
              height={20}
              width={20}
              className="object-contain float-right"
              alt=""
            />
        </div>


        <div className="mt-28">
          <Image
              src={"/assets/star.png"}
              height={20}
              width={20}
              className="object-contain"
              alt=""
            />
          <h1 className="text-[24px] text-[#FFFFFF]">Locations</h1>
          

          <LocationCard />
        </div>
      </div>
    </>
  );
};

export default HomePage;
