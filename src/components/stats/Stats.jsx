import React from "react";

function Stats() {
  return (
    <div className="relative w-full bg-blue-600">
      <img
        src="/statBg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.16] z-0"
      />
      <div className="w-[1170px] mx-auto flex justify-between py-12 text-white">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-[40px] font-bold">89,7656+</h1>
          <p className="text-center">Live jobs</p>
        </div>
        <div className="flex flex-col gap-1.5">
          <h1 className="text-[40px] font-bold">89,7656+</h1>
          <p className="text-center">Live jobs</p>
        </div>
        <div className="flex flex-col gap-1.5">
          <h1 className="text-[40px] font-bold">89,7656+</h1>
          <p className="text-center">Live jobs</p>
        </div>
        <div className="flex flex-col gap-1.5">
          <h1 className="text-[40px] font-bold">89,7656+</h1>
          <p className="text-center">Live jobs</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
