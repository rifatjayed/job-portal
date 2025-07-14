// import React from "react";

// function Stats() {
//   return (
//     <div className="relative w-full bg-blue-600">
//       <img
//         src="/statBg.png"
//         alt=""
//         className="absolute inset-0 w-full h-full object-cover opacity-[0.16] z-0"
//       />
//       <div className="w-[1170px] mx-auto flex justify-between py-12 text-white">
//         <div className="flex flex-col gap-1.5">
//           <h1 className="text-[40px] font-bold">89,7656+</h1>
//           <p className="text-center">Live jobs</p>
//         </div>
//         <div className="flex flex-col gap-1.5">
//           <h1 className="text-[40px] font-bold">89,7656+</h1>
//           <p className="text-center">Live jobs</p>
//         </div>
//         <div className="flex flex-col gap-1.5">
//           <h1 className="text-[40px] font-bold">89,7656+</h1>
//           <p className="text-center">Live jobs</p>
//         </div>
//         <div className="flex flex-col gap-1.5">
//           <h1 className="text-[40px] font-bold">89,7656+</h1>
//           <p className="text-center">Live jobs</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Stats;

import React from "react";

function Stats() {
  return (
    <div className="relative w-full bg-blue-600">
      <img
        src="/statBg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.16] z-0"
      />
      <div className="relative z-10 max-w-[1170px] mx-auto flex flex-wrap justify-between gap-y-8 px-4 py-12 text-white">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-1.5 w-full sm:w-1/2 md:w-1/4 text-center"
            >
              <h1 className="text-[32px] md:text-[40px] font-bold">89,7656+</h1>
              <p>Live jobs</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Stats;
