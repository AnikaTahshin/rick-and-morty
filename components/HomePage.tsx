import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-5 mt-8 bg-gray-600">
        <Image src={"/assets/title.png"} height={200} width={200} alt="" />

        <h1 className="text-[128px] uppercase font-weight-extrabold italic text-white relative">
          <Image
            className="inline-block absolute -top-11 -left-28 rotate-45"
            src={"/assets/bubble.png"}
            height={150}
            width={200}
            alt=""
          />
          The<Image
            src={"/assets/portal.png"}
            height={145}
            width={220}
            className="inline-block object-contain"
            alt=""
          /><span className="bg-gradient-to-r from-[#9DFE00]  to-[#14D9E5] bg-clip-text text-transparent not-italic">
            Rick &</span>
          <span className="block bg-gradient-to-r from-[#9DFE00]  to-[#14D9E5] bg-clip-text text-transparent not-italic">
            MORTY <span className="inline-block text-white">WIKI</span>
          </span>
        </h1>
        <div className="absolute right-40 bottom-20 bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] w-[200px] h-[300px] rounded-[71.14px] flex items-center justify-center transform rotate-[30deg] drop-shadow-[0_0_15px_#9DFE00]">
          <Image
            className="inline-block rotate-[-30deg] scale-180"
            src="/assets/gun.png"
            height={280}
            width={180}
            alt="Rick's gun"
            priority
          />
        </div>

        <div className="flex flex-row items-center justify-center gap-4 mt-8">
          <div className="flex flex-row items-center justify-center gap-2 bg-gradient-to-r from-[#9DFE00] to-[#14D9E5] p-3 m-2 rounded-full">
            
            <Image
            src={"/assets/watch.png"}
            height={20}
            width={20}
            className="object-contain"
            alt=""
          />
          <button
            className="text-white font-semibold"
            type="button"
          >
            Watch Now
          </button>
          </div>
          
          <p className="text-[#14D9E5] w-[33%]">
            Brilliant but boozy scientist Rick hijacks his fretful teenage
            grandson, Morty, for wild escapades in other worlds and alternate
            dimensions.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
