// // import React from "react";

// // function CategoryCard({ logo, name, jobsPosted }) {
// //   return (
// //     <div className="card w-full max-w-[270px] h-[94px] flex gap-3 px-4 sm:px-6 py-4 border border-gray-400/40 rounded shadow-lg bg-white">
// //       <div className="logo flex-shrink-0">
// //         <img src={logo} alt="" className="w-12 h-12 object-contain" />
// //       </div>
// //       <div className="flex flex-col justify-center gap-1">
// //         <h2 className="text-base sm:text-lg font-medium">{name}</h2>
// //         <p className="text-blue-700 text-sm sm:text-base font-semibold">
// //           {jobsPosted}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default CategoryCard;

// import React from "react";

// function CategoryCard({ logo, name, jobsPosted }) {
//   return (
//     <div className="card w-full max-w-[270px] h-[94px] flex gap-3 px-4 sm:px-6 py-4 border border-gray-400/40 rounded shadow-lg bg-white">
//       <div className="logo flex-shrink-0">
//         <img src={logo} alt="" className="w-12 h-12 object-contain" />
//       </div>
//       <div className="flex flex-col justify-center gap-1 overflow-hidden">
//         <h2 className="text-base sm:text-lg font-medium break-words line-clamp-1">
//           {name}
//         </h2>
//         <p className="text-blue-700 text-sm sm:text-base font-semibold truncate">
//           {jobsPosted}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default CategoryCard;

import React from "react";

function CategoryCard({ logo, name, jobsPosted }) {
  return (
    <div className="card w-full max-w-[270px] h-[94px] flex gap-3 px-4 sm:px-6 py-4 border border-gray-400/40 rounded shadow-lg bg-white">
      <div className="logo flex-shrink-0">
        <img src={logo} alt="" className="w-12 h-12 object-contain" />
      </div>
      <div className="flex flex-col justify-center gap-1 overflow-hidden">
        {/* Fixed width container so text won't overflow */}
        <h2
          className="text-base sm:text-lg font-medium"
          style={{
            width: "170px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </h2>
        <p
          className="text-blue-700 text-sm sm:text-base font-semibold"
          style={{
            width: "170px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {jobsPosted}
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;
