"use client";

import React from "react";
import { getCastDetails } from "@/service/api.service";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CastDetailsResponse } from "@/service/types";
import { ClipLoader } from "react-spinners";

const CastDetailsPage = () => {
  const params = useParams();
  const [character, setCharacter] = useState<
    CastDetailsResponse["data"]["character"] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchDetails = async () => {
    try {
      if (params.id) {
        const response = await getCastDetails(Number(params.id));
        setCharacter(response?.data?.character);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching character:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <ClipLoader
            color={"#191D29"}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-15.5 bg-[#191D29]">
          <Image
            src={"/assets/title.png"}
            className="mt-4 md:mb-15"
            height={200}
            width={200}
            alt="logo"
          />

          <div className="flex flex-col md:flex-row items-center justify-around rounded-[8px]">
            <div className="flex items-center justify-center flex-col">
              <h1 className="uppercase text-[#14D9E5] text-[28px] font-semibold">
                {character?.name}
              </h1>
              <div
                className="border-[0.76px] p-5 mt-8"
                style={{
                  borderImage: "linear-gradient(to right, #9DFE00, #14D9E5) 1",
                  // borderImageSlice: 1,
                }}
              >
                {character?.image && (
                  <Image
                    className="rounded-[8px]"
                    src={character?.image}
                    height={180}
                    width={180}
                    alt={character?.name || "cast"}
                  />
                )}
              </div>
            </div>

            <div
              className="border-l-[0.76px] md:h-40 mx-30"
              style={{
                borderImage: "linear-gradient(to right, #9DFE00, #14D9E5) 1",
                borderImageSlice: 1,
              }}
            ></div>

            <div className="flex flex-col justify-between mt-4">
              <div className="flex flex-row items-center justify-between gap-3">
                <div
                  className="border-[0.76px] p-4 md:w-[100px]"
                  style={{
                    borderImage:
                      "linear-gradient(to right, #9DFE00, #14D9E5) 1",
                    borderImageSlice: 1,
                  }}
                >
                  <Image
                    src={"/assets/heart.png"}
                    height={20}
                    width={20}
                    alt=""
                  />
                  <p className="text-[#FFFFFF] text-[10px]">
                    Status{" "}
                    <span className="text-[20px] block">
                      {character?.status}
                    </span>
                  </p>
                </div>

                <div
                  className="border-[0.76px] p-4 md:w-[100px]"
                  style={{
                    borderImage:
                      "linear-gradient(to right, #9DFE00, #14D9E5) 1",
                    borderImageSlice: 1,
                  }}
                >
                  <Image
                    src={"/assets/species.png"}
                    height={20}
                    width={20}
                    alt=""
                  />

                  <p className="text-[#FFFFFF] text-[10px]">
                    Species{" "}
                    <span className="text-[20px] block">
                      {character?.species}
                    </span>
                  </p>
                </div>

                <div
                  className="border-[0.76px] p-4 md:w-[100px]"
                  style={{
                    borderImage:
                      "linear-gradient(to right, #9DFE00, #14D9E5) 1",
                    borderImageSlice: 1,
                  }}
                >
                  <Image
                    src={"/assets/gender.png"}
                    height={20}
                    width={20}
                    alt=""
                  />

                  <p className="text-[#FFFFFF] text-[10px]">
                    Gender{" "}
                    <span className="text-[20px] block">
                      {character?.gender}
                    </span>
                  </p>
                </div>
                {/* <Image src={"/assets/species.png"} height={20} width={20} alt='' />
          <Image src={"/assets/gender.png"} height={20} width={20} alt='' /> */}
              </div>

              <div
                className="border-[0.76px] p-2 md:p-4 mt-3"
                style={{
                  borderImage: "linear-gradient(to right, #9DFE00, #14D9E5) 1",
                  borderImageSlice: 1,
                }}
              >
                <Image
                  src={"/assets/earth.png"}
                  height={20}
                  width={20}
                  alt=""
                />
                <p className="text-[#FFFFFF] text-[10px] my-2">
                  Origin{" "}
                  <span className="text-[20px] block">
                    {character?.origin?.name}
                  </span>
                </p>

                <div className="float-right">
                  <Image
                    src={"/assets/link.png"}
                    height={12}
                    width={12}
                    alt=""
                  />
                </div>
              </div>

              <div
                className="border-[0.76px] p-4 mt-3"
                style={{
                  borderImage: "linear-gradient(to right, #9DFE00, #14D9E5) 1",
                  borderImageSlice: 1,
                }}
              >
                <Image
                  src={"/assets/location.png"}
                  height={20}
                  width={20}
                  alt=""
                />
                <p className="text-[#FFFFFF] text-[10px] my-2">
                  Last Known Location{" "}
                  <span className="text-[20px] block">
                    {character?.location?.name}
                  </span>
                </p>

                <div className="float-right">
                  <Image
                    src={"/assets/link.png"}
                    height={12}
                    width={12}
                    alt=""
                  />
                </div>
              </div>

              <div
                className="border-[0.76px] p-4 mt-3"
                style={{
                  borderImage: "linear-gradient(to right, #9DFE00, #14D9E5) 1",
                  borderImageSlice: 1,
                }}
              >
                <Image
                  src={"/assets/episodes.png"}
                  height={20}
                  width={20}
                  alt=""
                />
                <p className="text-[#FFFFFF] text-[10px] my-2">Episode(s)</p>

                <ul className="list-disc list-inside text-white ml-4 overflow-auto h-[100px]">
                  {character?.episode.map((ep) => (
                    <li key={ep?.id}>{ep?.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CastDetailsPage;
