import React, { Children } from "react";

function Banner({ title, description, children }) {
  return (
    <div className="relative w-full h-[458px]  flex justify-center items-center">
      <img
        src="/Rectangle 2744.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      />
      <div className="absolute inset-0 bg-blue-600 opacity-68"></div>

      <div className="w-[850px]  flex flex-col gap-8 justify-center items-center z-10 text-white">
        <div className="text-[40px] font-bold">{title}</div>
        <div className="text-center ">{description}</div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Banner;
