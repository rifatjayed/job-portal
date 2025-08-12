// import React, { useState } from "react";
// import CourseCard from "./CourseCard";

// function Courses() {
//   const tabs = ["All", "One day", "Weekly", "Monthly", "Online"];
//   const [activeTab, setActiveTab] = useState("All");

//   const tabBaseClasses =
//     "hover:px-4 hover:py-0.5 hover:rounded-4xl cursor-pointer transition-all hover:bg-white hover:text-black";

//   return (
//     <div className="w-full max-w-[1170px] mx-auto flex flex-col items-center gap-12 px-4 sm:px-0">
//       {/* Header */}
//       <div className="head w-full max-w-[800px] flex flex-col items-center gap-6 text-center">
//         <div className="title text-[32px] sm:text-[40px] font-bold leading-tight">
//           Courses for your Career
//         </div>
//         <div className="text-base leading-relaxed">
//           Explore our curated selection of career-oriented courses designed to
//           enhance your professional skills and propel your career forward
//         </div>

//         <div className=" overflow-x-auto">
//           <div className="min-w-max flex gap-2 sm:gap-4 px-4 py-3 bg-blue-600 rounded-4xl text-sm sm:text-base">
//             {tabs.map((tab, index) => (
//               <React.Fragment key={tab}>
//                 <div
//                   onClick={() => setActiveTab(tab)}
//                   className={`px-4 py-1 rounded-full cursor-pointer whitespace-nowrap transition-all duration-200 ease-in-out ${
//                     activeTab === tab
//                       ? "bg-white text-black"
//                       : "bg-blue-600 text-white hover:bg-white hover:text-black"
//                   }`}
//                 >
//                   {tab}
//                 </div>

//                 {index !== tabs.length - 1 && (
//                   <span className="hidden sm:inline text-white select-none">
//                     |
//                   </span>
//                 )}
//               </React.Fragment>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Cards */}
//       <div className="cards w-full flex flex-wrap justify-center sm:justify-between gap-6 sm:gap-[30px]">
//         {Array.from({ length: 6 }).map((_, index) => (
//           <CourseCard
//             key={index}
//             image="/courseImage.png"
//             schedule="Weekly"
//             sesssions="20"
//             duration="5 hour"
//             title="Marketing, social and statistical analysis"
//             pricing="Paid"
//             instructorImage="/avatar.png"
//             instructorName="Kuddus Ali"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Courses;

import React, { useState } from "react";
import CourseCard from "./CourseCard";
import courseData from "../../../data/courseData";

function Courses() {
  // const tabs = ["All", "One day", "Weekly", "Monthly", "Online"];
  // const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Weekly", "Monthly", "Six Month", "Hourly", "Yearly"];
  const [activeTab, setActiveTab] = useState("All");

  const filteredCourses =
    activeTab === "All"
      ? courseData
      : courseData.filter((course) => course.type === activeTab);

  return (
    <div className="w-full max-w-[1170px] mx-auto flex flex-col items-center gap-12 px-4 sm:px-0">
      {/* Header */}
      <div className="head w-full max-w-[800px] flex flex-col items-center gap-6 text-center">
        <div className="title text-[32px] sm:text-[40px] font-bold leading-tight">
          Courses for your Career
        </div>
        <div className="text-base leading-relaxed">
          Explore our curated selection of career-oriented courses designed to
          enhance your professional skills and propel your career forward
        </div>

        {/* Responsive Tab Section */}
        <div className="w-full overflow-x-auto no-scrollbar flex">
          <div className="min-w-max flex gap-2 sm:gap-4 px-4 py-3 bg-blue-600 rounded-4xl text-sm sm:text-base mx-auto">
            {tabs.map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1 rounded-full cursor-pointer whitespace-nowrap transition-all duration-200 ease-in-out ${
                  activeTab === tab
                    ? "bg-white text-black"
                    : "bg-blue-600 text-white hover:bg-white hover:text-black"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="cards w-full flex flex-wrap justify-center gap-6 sm:gap-[30px]">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            image={course.image}
            schedule={course.type}
            sessions={course.sessions} // Note: Your original code had 'sesssions'
            duration={course.duration}
            title={course.title}
            pricing={course.priceType}
            instructorImage="/avatar.png" // Placeholder as it's not in data
            instructorName={course.instructor}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
