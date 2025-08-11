import React from "react";

const EpisodesCard = () => {
  return (
    <>
      <div className="relative mt-12">
        <h1 className="absolute left-0 text-[24px] text-[#FFFFFF]">Episodes</h1>
        <div
          className="p-4 mt-12 max-w-sm rounded-[12.09px] shadow-sm border-[0.76px] custom-clip cursor-pointer"
          style={{
            borderImage: "linear-gradient(to right, #9DFE00, #14D9E5) 1",
            borderImageSlice: 1,
          }}
        >
          EpisodesCard
        </div>
      </div>
    </>
  );
};

export default EpisodesCard;
