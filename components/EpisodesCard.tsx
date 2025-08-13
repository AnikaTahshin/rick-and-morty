import { getAllEpisodes } from "@/service/api.service";
import { Episode } from "@/service/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const EpisodesCard = () => {
  

  const [episode, setEpisode] = useState<Episode[]>([])
async function episodeData() {
    try {
      const data = await getAllEpisodes();
      setEpisode(data?.data?.episodes?.results)
      console.log("see episodes", data?.data?.episodes?.results)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
      episodeData();
    }, []);
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 relative">
        {episode.map((ep, index) => (
          <div key={index} className="relative">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 300 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id={`grad-${index}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#14D9E5" />
                  <stop offset="100%" stopColor="#9DFE00" />
                </linearGradient>
              </defs>
              <polygon
                points="2,2 298,2 298,80 260,98 2,98"
                fill="none"
                stroke={`url(#grad-${index})`}
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>

            <div className="max-w-[360px]">
              <div className="relative px-4 py-3 text-white w-full lg:">
                <p className="text-xs">{ep.episode}</p>
                <p className="text-lg font-medium">{ep.name}</p>
              </div>
            </div>
          </div>
        ))}
        



         <Image
                           className="absolute bottom-4 right-0 translate-y-[-50%] cursor-pointer"
                           src={"/assets/arrow.png"}
                           height={30}
                           width={30}
                           alt="arrow"
                           
                         />
      </div>
    </>
  );
};

export default EpisodesCard;
