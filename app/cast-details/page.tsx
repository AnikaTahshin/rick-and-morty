import Image from "next/image";
import React from "react";

const CastDetailsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-15.5 mt-8 bg-gray-600">
      <Image src={"/assets/title.png"} height={200} width={200} alt="logo" />

      <div className="flex flex-col md:flex-row items-center justify-around rounded-[8px]">
        <div>
          <h1 className="uppercase text-[#14D9E5]">rick sanchez</h1>
          <div
            className="border-[0.76px] p-4"
            style={{
              borderImage: "linear-gradient(to right, #9DFE00, #14D9E5) 1",
              borderImageSlice: 1,
            }}
          >
            <Image
              className="rounded-[8px]"
              src={"/assets/cast.png"}
              height={180}
              width={180}
              alt="cast"
            />
          </div>
        </div>

        <div
          className="border-l-[0.76px] md:h-40 m-16"
          style={{
            borderImage: "linear-gradient(to right, #9DFE00, #14D9E5) 1",
            borderImageSlice: 1,
          }}
        ></div>

        <div className="flex flex-col justify-between">
          <div className="flex flex-row items-center justify-between gap-3">
            <div
              className="border-[0.76px] p-4"
              style={{
                borderImage: "linear-gradient(to right, #9DFE00, #14D9E5) 1",
                borderImageSlice: 1,
              }}
            >
              <Image src={"/assets/heart.png"} height={20} width={20} alt="" />
              <p className="text-[#FFFFFF]">Status</p>
              <h2 className="text-[#FFFFFF]">Alive</h2>
            </div>

            <div
              className="border-[0.76px] p-4"
              style={{
                borderImage: "linear-gradient(to right, #9DFE00, #14D9E5) 1",
                borderImageSlice: 1,
              }}
            >
              <Image
                src={"/assets/species.png"}
                height={20}
                width={20}
                alt=""
              />
              <p className="text-[#FFFFFF]">Species</p>
              <h2 className="text-[#FFFFFF]">Human</h2>
            </div>

            <div
              className="border-[0.76px] p-4"
              style={{
                borderImage: "linear-gradient(to right, #9DFE00, #14D9E5) 1",
                borderImageSlice: 1,
              }}
            >
              <Image src={"/assets/gender.png"} height={20} width={20} alt="" />
              <p className="text-[#FFFFFF]">Gender</p>
              <h2 className="text-[#FFFFFF]">Male</h2>
            </div>
            {/* <Image src={"/assets/species.png"} height={20} width={20} alt='' />
          <Image src={"/assets/gender.png"} height={20} width={20} alt='' /> */}
          </div>

          <div
            className="border-[0.76px] p-2 mt-3"
            style={{
              borderImage: "linear-gradient(to right, #9DFE00, #14D9E5) 1",
              borderImageSlice: 1,
            }}
          >
            <Image src={"/assets/earth.png"} height={20} width={20} alt="" />
            <p className="text-[#FFFFFF]">Origin</p>
            <h2 className="text-[#FFFFFF]">Earth (C-137)</h2>

            <div className="float-right">
              <Image src={"/assets/link.png"} height={12} width={12} alt="" />
            </div>
          </div>

          <div
            className="border-[0.76px] p-2 mt-3"
            style={{
              borderImage: "linear-gradient(to right, #9DFE00, #14D9E5) 1",
              borderImageSlice: 1,
            }}
          >
            <Image src={"/assets/location.png"} height={20} width={20} alt="" />
            <p className="text-[#FFFFFF]">Last Known Location</p>
            <h2 className="text-[#FFFFFF]">Citadel of Ricks</h2>

            <div className="float-right">
              <Image src={"/assets/link.png"} height={12} width={12} alt="" />
            </div>
          </div>

          <div
            className="border-[0.76px] p-2 mt-3"
            style={{
              borderImage: "linear-gradient(to right, #9DFE00, #14D9E5) 1",
              borderImageSlice: 1,
            }}
          >
            <Image src={"/assets/episodes.png"} height={20} width={20} alt="" />
            <p className="text-[#FFFFFF]">Episode(s)</p>
            <ul className="list-disc list-inside text-white ml-4 overflow-auto h-[100px]">
              <li>Pilot</li>
              <li>Lawnmower Dog</li>
              <li>Anatomy Park</li>
              <li>Lawnmoaner</li>
              <li>M. Night Shaym-Aliens!</li>
              <li>Meeseeks and Destroy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastDetailsPage;
