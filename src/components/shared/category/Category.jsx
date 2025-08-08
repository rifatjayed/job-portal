// import React, { useContext, useMemo } from "react";
// import { JobContext } from "../../../Context/JobContext";
// import CategoryCard from "./CategoryCard";

// function Category() {
//   const { jobs } = useContext(JobContext);

//   // Unique categories with job counts
//   const categories = useMemo(() => {
//     const categoryMap = {};

//     jobs.forEach((job) => {
//       if (categoryMap[job.category]) {
//         categoryMap[job.category] += 1;
//       } else {
//         categoryMap[job.category] = 1;
//       }
//     });

//     return Object.entries(categoryMap).map(([name, count]) => ({
//       name,
//       count,
//     }));
//   }, [jobs]);

//   return (
//     <div className="w-full max-w-[1170px] mx-auto flex flex-col justify-center items-center gap-12 ">
//       {/* Title Section */}
//       <div className="title w-full max-w-[600px] flex flex-col justify-center items-center gap-6 text-center">
//         <h1 className="text-3xl font-bold">Browse Jobs by Category </h1>
//         <p>
//           Explore employment opportunities categorized by industry,
//           specialization, or field of expertise
//         </p>
//       </div>

//       {/* Cards Section */}
//       <div className="sections flex flex-wrap gap-7.5 justify-center">
//         {categories.map((cat, index) => (
//           <CategoryCard
//             key={index}
//             logo="/category.png"
//             name={cat.name}
//             jobsPosted={`${cat.count}+ jobs posted`}
//           />
//         ))}
//       </div>

//       {/* Button */}
//       <div className="px-9 py-3 bg-blue-600 text-white rounded cursor-pointer">
//         See All
//       </div>
//     </div>
//   );
// }

// export default Category;

import React, { useContext, useMemo, useState } from "react";
import { JobContext } from "../../../Context/JobContext";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";

function Category() {
  const { jobs } = useContext(JobContext);
  const [showAll, setShowAll] = useState(false);

  // Unique categories with job counts
  const categories = useMemo(() => {
    const categoryMap = {};
    jobs.forEach((job) => {
      if (categoryMap[job.category]) {
        categoryMap[job.category] += 1;
      } else {
        categoryMap[job.category] = 1;
      }
    });
    return Object.entries(categoryMap).map(([name, count]) => ({
      name,
      count,
    }));
  }, [jobs]);

  // যদি showAll false হয় তাহলে শুধু প্রথম ৬টা দেখাবে
  const visibleCategories = showAll ? categories : categories.slice(0, 8);

  return (
    <div className="w-full max-w-[1170px] mx-auto flex flex-col justify-center items-center gap-12">
      {/* Title Section */}
      <div className="title w-full max-w-[600px] flex flex-col justify-center items-center gap-6 text-center">
        <h1 className="text-3xl font-bold">Browse Jobs by Category</h1>
        <p>
          Explore employment opportunities categorized by industry,
          specialization, or field of expertise
        </p>
      </div>

      {/* Cards Section */}
      <div className="sections flex flex-wrap gap-7.5 justify-center">
        {visibleCategories.map((cat, index) => (
          <Link key={index} to="/jobs">
            <CategoryCard
              key={index}
              logo="/category.png"
              name={cat.name}
              jobsPosted={`${cat.count}+ jobs posted`}
            />
          </Link>
        ))}
      </div>

      {/* Button */}
      {!showAll && categories.length > 8 && (
        <div
          onClick={() => setShowAll(true)}
          className="px-9 py-3 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700"
        >
          See All
        </div>
      )}
    </div>
  );
}

export default Category;
