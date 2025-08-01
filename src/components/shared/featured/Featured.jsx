// import React from "react";
// import FeatureCard from "./FeaturedCard";

// function Featured() {
//   return (
//     <div className="w-[1170px] flex flex-col gap-10 my-20">
//       <h1 class="title text-3xl font-bold text-right">Featured Job</h1>
//       <div class="cards flex flex-wrap gap-7.5">
//         {Array.from({ length: 6 }).map((_, index) => (
//           <FeatureCard
//             key={index}
//             name="Home Doctor"
//             type="Full Time"
//             salary="$1000 - $2000"
//             logo="/company.svg"
//             instituteName="HealthCare Inc."
//             location="New York, USA"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Featured;

import React from "react";
import FeatureCard from "./FeaturedCard";

function Featured() {
  return (
    <div className="w-full max-w-[1170px] mx-auto flex flex-col gap-10 my-20 px-4 sm:px-0">
      <h1 className="title text-3xl font-bold text-right">Featured Job</h1>
      <div className="cards flex flex-wrap justify-center  items-center gap-[30px]">
        {Array.from({ length: 6 }).map((_, index) => (
          <FeatureCard
            key={index}
            name="Home Doctor"
            type="Full Time"
            salary="$1000 - $2000"
            logo="/company.svg"
            instituteName="HealthCare Inc."
            location="New York, USA"
          />
        ))}
      </div>
    </div>
  );
}

export default Featured;
