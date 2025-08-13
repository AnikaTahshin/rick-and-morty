"use client";

import { GetServerSideProps } from "next";
import React from "react";
import { getCastDetails } from "@/service/api.service";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { CastDetailsResponse } from "@/service/types";

const CastDetailsPage = () => {
  const params = useParams();
  const [character, setCharacter] = useState<
    CastDetailsResponse["data"]["character"] | null
  >(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        if (params.id) {
          const response = await getCastDetails(Number(params.id));
          setCharacter(response.data.character);
        }
      } catch (error) {
        console.error("Error fetching character:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [params.id]);

  if (loading) {
    return <div className="text-white text-center p-10">Loading...</div>;
  }

  if (!character) {
    return (
      <div className="text-white text-center p-10">Character not found</div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-15.5 mt-8 bg-[#191D29]">
      <Image src={"/assets/title.png"} height={200} width={200} alt="logo" />

      <div className="flex flex-col md:flex-row items-center justify-around rounded-[8px]">
        <div>
          <h1 className="uppercase text-[#14D9E5]">{character?.name}</h1>
          <div
            className="border-[0.76px] p-4"
            style={{
              borderImage: "linear-gradient(to right, #9DFE00, #14D9E5) 1",
              borderImageSlice: 1,
            }}
          >
            <Image
              className="rounded-[8px]"
              src={character?.image}
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
              <h2 className="text-[#FFFFFF]">{character?.status}</h2>
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
              <h2 className="text-[#FFFFFF]">{character?.species}</h2>
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
              <h2 className="text-[#FFFFFF]">{character?.gender}</h2>
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
            <h2 className="text-[#FFFFFF]">{character?.origin?.name}</h2>

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
            <h2 className="text-[#FFFFFF]">{character?.location?.name}</h2>

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
              {character.episode.map((ep) => (
                <li key={ep?.id}>{ep?.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastDetailsPage;
