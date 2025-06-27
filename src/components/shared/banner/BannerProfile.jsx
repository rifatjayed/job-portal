import React from "react";

import GearIcon from "../../../assets/gears.svg?react";

function BannerProfile() {
  return (
    <div className="relative w-full h-[458px] flex justify-between">
      <img
        src="/typing.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-72 -z-2"
      />
      <div className="absolute flex justify-center items-center w-[180px] h-[200px] rounded bg-sky-100 left-[135px] -bottom-[70px]">
        <div className="w-30 h-30 flex justify-center items-center  rounded-full bg-[linear-gradient(to_bottom,_#262261,_#90278E)]">
          <GearIcon />
        </div>
      </div>
      <div className="absolute inset-0 bg-blue-700 opacity-90 -z-2"></div>
      <div className="w-[340px] text-[56px] font-bold text-white ml-[135px] pt-[116px]">
        Fill Up The Application
      </div>
      <div className="w-1/2 object-cover">
        <img
          src="/pc.png"
          alt=""
          className="relative w-full h-full object-cover z-10"
        />
      </div>
    </div>
  );
}

export default BannerProfile;
