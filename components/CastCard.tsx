"use client";
import { Character, getCastData, getCastDetails } from "@/service/api.service";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
interface CastCardProps {
  castData: Character[];
}

const CastCard: React.FC<CastCardProps> = ({ castData }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const handleCastDetails = async (id: number) => {
    router.push(`/character/${id}`);
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * itemsPerPage < castData.length) {
      setCurrentPage(currentPage + 1);
    } else {
      // Reset to first page when reaching the end
      setCurrentPage(0);
    }
  };

  const getCurrentItems = () => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return castData.slice(start, end);
  };
  return (
    <>
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
          {getCurrentItems().map((cast, index) => (
            <div
              key={cast.id}
              onClick={() => handleCastDetails(cast.id)}
              className="relative max-w-sm cursor-pointer"
            >
              <svg
                className="absolute inset-0 w-full h-auto pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id={`grad-${index}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#9DFE00" />
                    <stop offset="100%" stopColor="#14D9E5" />
                  </linearGradient>
                </defs>
                <polygon
                  points="0.5,0.5 99.5,0.5 99.5,85 85,99.5 0.5,99.5"
                  fill="none"
                  stroke={`url(#grad-${index})`}
                  strokeWidth="1"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              <div
                className="relative overflow-hidden rounded-[8px] p-10"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
                }}
              >
                <div className="w-[150px]">
                  <Image
                    className="w-full h-auto block rounded-[8px]"
                    height={100}
                    width={100}
                    src={cast?.image}
                    alt={cast?.name}
                  />
                </div>
                <div className="m-3">
                  <p className="font-normal text-[#FFFFFF] dark:text-gray-400">
                    {cast?.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Image
          className="absolute -bottom-28 right-0 translate-y-[-50%] cursor-pointer"
          src={"/assets/arrow.png"}
          height={30}
          width={30}
          alt="arrow"
          onClick={handleNextPage}
          priority
        />
      </div>
    </>
  );
};

export default CastCard;
