// import React from "react";
// import CategoryCard from "./CategoryCard";

// function Category() {
//   return (
//     <div className="w-[1170px] flex flex-col justify-center items-center gap-12">
//       <div className="title w-[600px] flex flex-col justify-center items-center gap-6">
//         <h1 className="text-3xl font-bold">Browse Jobs by Category </h1>
//         <p className="text-center">
//           Explore employment opportunities categorized by industry,
//           specialization, or field of expertise
//         </p>
//       </div>
//       <div className="sections flex gap-7.5 flex-wrap">
//         <CategoryCard
//           logo="/category.png"
//           name="Software Dev."
//           jobsPosted="1,000+ jobs posted"
//         />
//         <CategoryCard
//           logo="/category.png"
//           name="Software Dev."
//           jobsPosted="1,000+ jobs posted"
//         />
//         <CategoryCard
//           logo="/category.png"
//           name="Software Dev."
//           jobsPosted="1,000+ jobs posted"
//         />
//         <CategoryCard
//           logo="/category.png"
//           name="Software Dev."
//           jobsPosted="1,000+ jobs posted"
//         />
//         <CategoryCard
//           logo="/category.png"
//           name="Software Dev."
//           jobsPosted="1,000+ jobs posted"
//         />
//         <CategoryCard
//           logo="/category.png"
//           name="Software Dev."
//           jobsPosted="1,000+ jobs posted"
//         />
//         <CategoryCard
//           logo="/category.png"
//           name="Software Dev."
//           jobsPosted="1,000+ jobs posted"
//         />
//         <CategoryCard
//           logo="/category.png"
//           name="Software Dev."
//           jobsPosted="1,000+ jobs posted"
//         />
//       </div>
//       <div className="px-9 py-3 bg-blue-600 text-white rounded">See All</div>
//     </div>
//   );
// }

// export default Category;

import React from "react";
import CategoryCard from "./CategoryCard";

function Category() {
  return (
    <div className="w-full max-w-[1170px] mx-auto flex flex-col justify-center items-center gap-12 ">
      {/* Title Section */}
      <div className="title w-full max-w-[600px] flex flex-col justify-center items-center gap-6 text-center">
        <h1 className="text-3xl font-bold">Browse Jobs by Category </h1>
        <p>
          Explore employment opportunities categorized by industry,
          specialization, or field of expertise
        </p>
      </div>

      {/* Cards Section */}
      <div className="sections flex flex-wrap gap-7.5 justify-center">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <CategoryCard
              key={index}
              logo="/category.png"
              name="Software Dev."
              jobsPosted="1,000+ jobs posted"
            />
          ))}
      </div>

      {/* Button */}
      <div className="px-9 py-3 bg-blue-600 text-white rounded cursor-pointer">
        See All
      </div>
    </div>
  );
}

export default Category;
