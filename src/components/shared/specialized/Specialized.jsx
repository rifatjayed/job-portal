// import React from "react";
// import SpecializedCard from "./SpecializedCard";

// function Specialized() {
//   return (
//     <div className="bg-gray-100 py-20 w-full">
//       <div className="bg-gray-100 w-[1170px] flex flex-col gap-10 mx-auto">
//         <h1 className="title text-3xl font-bold">Specialized Skilled Job</h1>
//         <div className="cards flex flex-wrap gap-y-5 gap-x-[30px]">
//           {Array.from({ length: 12 }).map((_, index) => (
//             <SpecializedCard
//               key={index}
//               logo="/category.png"
//               title="dentist"
//               count="204"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Specialized;

import React from "react";
import SpecializedCard from "./SpecializedCard";

function Specialized() {
  return (
    <div className="bg-gray-100 py-20 w-full">
      <div className="w-full max-w-[1170px] mx-auto flex flex-col gap-10 px-4 sm:px-0">
        <h1 className="title text-3xl font-bold">Specialized Skilled Job</h1>
        <div className="cards flex flex-wrap gap-y-5 gap-x-[30px]">
          {Array.from({ length: 12 }).map((_, index) => (
            <SpecializedCard
              key={index}
              logo="/category.png"
              title="dentist"
              count="204"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Specialized;
