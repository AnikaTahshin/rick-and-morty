"use client";
import { Character, getCastData, getCastDetails,  } from "@/service/api.service";
import Image from "next/image";
import { useRouter } from 'next/navigation';
interface CastCardProps {
  castData: Character[];
}

const CastCard: React.FC<CastCardProps> = ({ castData }) => {
    const router = useRouter();

    const handleCastDetails = async (id:number) => {
      // const res = await getCastDetails(id)
      console.log("details the id",id)
     router.push('/cast-details')
    }
  return (
    <>
      
      <div className="relative mt-12">
        <h1 className="absolute left-0 text-[24px] text-[#FFFFFF]">Meet the cast</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-14 ">
          {castData.slice(0, 6).map((cast, index) => (
            <div key={index}
              className="max-w-sm rounded-[12.09px] shadow-sm border-[0.76px] custom-clip cursor-pointer"
              onClick={() => handleCastDetails(cast.id) }
              style={{
                borderImage: "linear-gradient(to right, #9DFE00, #14D9E5) 1",
                borderImageSlice: 1,
              }}
            >
              <img className="rounded-[12.09px] p-1 h-full w-full" src={cast.image} alt="" />
              <div className="m-3">
                <p className=" font-normal text-[#FFFFFF] dark:text-gray-400">
                  {cast.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Image
          className="absolute top-1/2 right-0 translate-y-[-50%] cursor-pointer"
          src={"/assets/arrow.png"}
          height={30}
          width={30}
          alt="arrow"
          onClick={getCastData}
        />
      </div>
    </>
  );
};

export default CastCard;
