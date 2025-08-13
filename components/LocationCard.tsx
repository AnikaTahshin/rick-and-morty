"use client"
import { getAllLocation } from "@/service/api.service";
import { Location } from "@/service/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const LocationCard = () => {
  const [location, setLocation] = useState<Location[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  async function locationData() {
    try {
      const data = await getAllLocation();
      setLocation(data?.data?.locations?.results || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleNextPage = () => {
    setStartIndex((prev) => (prev + 1) % location.length);
  };

  const getCurrentItems = () => {
    let visibleItems: Location[] = [];
    for (let i = 0; i < itemsPerPage; i++) {
      visibleItems.push(location[(startIndex + i) % location.length]);
    }
    return visibleItems;
  };

  useEffect(() => {
    locationData();
  }, []);
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 relative mt-5 ">
        {getCurrentItems().map((ep, index) =>
          ep ? (
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

              <div className="max-w-[360px] w-full md:w-[240px] lg:[340px]">
                <div className="relative px-4 py-3 text-white w-full lg:">
                  <p className="text-xs">#{ep.id}</p>
                  <p className="text-lg font-medium">{ep.name}</p>
                </div>
              </div>
            </div>
          ) : null
        )}

        {location.length > 0 && (
          <Image
            className="absolute bottom-4 right-0 translate-y-[-50%] cursor-pointer"
            src={"/assets/arrow.png"}
            height={30}
            width={30}
            alt="arrow"
            onClick={handleNextPage}
          />
        )}
      </div>
    </>
  );
};

export default LocationCard;
