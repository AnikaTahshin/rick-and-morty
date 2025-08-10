import Image from "next/image";
import React from "react";

const CastCard = () => {
  return (
    <>
        <h1>Meet the cast</h1>

    <div className="border-2 rounded-[12px] max-w-[250px] max-h-[250px] flex items-start justify-center flex-col custom-clip">
    <Image src={'/assets/cast.png'} height={200} width={200} alt="" className="rounded-[12px]" />
    <p>Morty Smith</p>

  </div>
    </>
  );
};

export default CastCard;
