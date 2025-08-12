// import React, { useContext, useState, useMemo } from "react";
// import { JobContext } from "../../../Context/JobContext";
// import Search from "../../shared/Search";

// import { RxCross2 } from "react-icons/rx";
// import JobItem from "../../shared/JobItem";
// import Banner from "../../shared/banner/Banner";
// import { ChevronDown, ChevronUp, Filter } from "lucide-react";
// import FeatureCard from "../../shared/featured/FeaturedCard";

// export default function JobSearch() {
//   const {
//     jobs,
//     filteredJobs,
//     selectedJobTypes,
//     toggleJobType,
//     applyJobTypeFilter,
//     selectedCategories,
//     toggleCategory,
//     applyCategoryFilter,
//     applyFilters,
//   } = useContext(JobContext);

//   const jobTypeCounts = jobs.reduce((acc, job) => {
//     const type = job.job_type;
//     acc[type] = (acc[type] || 0) + 1;
//     return acc;
//   }, {});

//   const categoryCounts = jobs.reduce((acc, job) => {
//     const category = job.category;
//     acc[category] = (acc[category] || 0) + 1;
//     return acc;
//   }, {});

//   const datePostedOptions = [
//     "Last 24 hours (69)",
//     "Last 7 days (05)",
//     "Last 14 days (67)",
//     "Last 21 days (09)",
//     "Last 30 days (19)",
//     "Any time (14)",
//   ];

//   const [isJobTypeOpen, setIsJobTypeOpen] = useState(true);
//   const [isCategoryOpen, setIsCategoryOpen] = useState(true);
//   const [isDatePostedOpen, setIsDatePostedOpen] = useState(true);
//   const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

//   const jobTypes = Object.entries(jobTypeCounts);
//   const categories = Object.entries(categoryCounts);

//   // Pagination Logic
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;
//   const indexOfLastJob = currentPage * itemsPerPage;
//   const indexOfFirstJob = indexOfLastJob - itemsPerPage;
//   const currentJobs = useMemo(() => {
//     return filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
//   }, [filteredJobs, indexOfFirstJob, indexOfLastJob]);

//   const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

//   const nextPage = () => {
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   };

//   const prevPage = () => {
//     setCurrentPage((prev) => Math.max(prev - 1, 1));
//   };

//   return (
//     <div className="w-full flex flex-col -mb-20">
//       <Banner
//         title="Search your Dream Job"
//         description={
//           <>
//             Discover your next career opportunity at globally <br />
//             renowned organizations.
//           </>
//         }
//       >
//         <Search bgColor="transparent" btnColor="black" />
//       </Banner>

//       <div className="w-full flex flex-col lg:flex-row gap-8 lg:px-0">
//         {/* Desktop Sidebar (hidden on mobile/tablet) */}
//         <div className="hidden lg:block w-full lg:w-[375px] bg-gray-100 pt-[40px] lg:pt-[80px] px-6 lg:pl-[135px] lg:pr-[24px]">
//           <h3 className="text-xl font-semibold pb-8 lg:pb-[40px]">Filter by</h3>

//           {/* Active Filters */}
//           <div>
//             <h4 className="font-medium text-lg">Active filters</h4>
//             <div className="flex flex-wrap gap-3 mt-5 mb-10 lg:mt-[20px] lg:mb-[40px]">
//               {[...selectedJobTypes, ...selectedCategories].map(
//                 (label, idx) => (
//                   <p
//                     key={idx}
//                     className="flex text-gray-600 bg-white p-1 pl-2 rounded justify-center items-center"
//                   >
//                     {label}
//                     <span className="bg-gray-100 w-6 h-6 rounded flex justify-center items-center ml-2 text-gray-400">
//                       <RxCross2 size={20} />
//                     </span>
//                   </p>
//                 )
//               )}
//             </div>
//           </div>

//           {/* Date Posted with toggle */}
//           <div>
//             <div
//               className="flex justify-between items-center cursor-pointer"
//               onClick={() => setIsDatePostedOpen(!isDatePostedOpen)}
//             >
//               <h4 className="font-medium text-lg">Date posted</h4>
//               <button
//                 aria-label={
//                   isDatePostedOpen
//                     ? "Collapse date posted"
//                     : "Expand date posted"
//                 }
//                 className="focus:outline-none"
//                 type="button"
//               >
//                 {isDatePostedOpen ? (
//                   <ChevronUp size={20} className="text-blue-600" />
//                 ) : (
//                   <ChevronDown size={20} className="text-blue-600" />
//                 )}
//               </button>
//             </div>
//             {isDatePostedOpen && (
//               <div className="flex flex-wrap gap-3 mt-5 mb-10">
//                 {datePostedOptions.map((label, idx) => (
//                   <label
//                     key={idx}
//                     className="flex items-center space-x-2 cursor-pointer"
//                   >
//                     <input
//                       type="checkbox"
//                       className="accent-blue-600 w-4 h-4"
//                     />
//                     <span className="text-[#515B6F] text-base">{label}</span>
//                   </label>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Job Type with toggle */}
//           <div>
//             <div
//               className="flex justify-between items-center cursor-pointer"
//               onClick={() => setIsJobTypeOpen(!isJobTypeOpen)}
//             >
//               <h4 className="font-medium text-lg">Job type</h4>
//               <button
//                 aria-label={
//                   isJobTypeOpen ? "Collapse job types" : "Expand job types"
//                 }
//                 className="focus:outline-none"
//                 type="button"
//               >
//                 {isJobTypeOpen ? (
//                   <ChevronUp size={20} className="text-blue-600" />
//                 ) : (
//                   <ChevronDown size={20} className="text-blue-600" />
//                 )}
//               </button>
//             </div>
//             {isJobTypeOpen && (
//               <div className="flex flex-wrap gap-3 mt-5 mb-10">
//                 {jobTypes.map(([type, count], idx) => (
//                   <label
//                     key={idx}
//                     className="flex items-center space-x-2 cursor-pointer"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={selectedJobTypes.includes(type)}
//                       onChange={() => toggleJobType(type)}
//                       className="accent-blue-600 w-4 h-4"
//                     />
//                     <span className="text-[#515B6F] text-base">
//                       {type} ({count})
//                     </span>
//                   </label>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Categories with toggle */}
//           <div>
//             <div
//               className="flex justify-between items-center cursor-pointer"
//               onClick={() => setIsCategoryOpen(!isCategoryOpen)}
//             >
//               <h4 className="font-medium text-lg">Categories</h4>
//               <button
//                 aria-label={
//                   isCategoryOpen ? "Collapse categories" : "Expand categories"
//                 }
//                 className="focus:outline-none"
//                 type="button"
//               >
//                 {isCategoryOpen ? (
//                   <ChevronUp size={20} className="text-blue-600" />
//                 ) : (
//                   <ChevronDown size={20} className="text-blue-600" />
//                 )}
//               </button>
//             </div>
//             {isCategoryOpen && (
//               <div className="flex flex-wrap gap-3 mt-5 mb-10">
//                 {categories.map(([category, count], idx) => (
//                   <label
//                     key={idx}
//                     className="flex items-center space-x-2 cursor-pointer"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={selectedCategories.includes(category)}
//                       onChange={() => toggleCategory(category)}
//                       className="accent-blue-600 w-4 h-4"
//                     />
//                     <span className="text-[#515B6F] text-base">
//                       {category} ({count})
//                     </span>
//                   </label>
//                 ))}
//               </div>
//             )}
//           </div>

//           <button
//             onClick={applyFilters}
//             className="text-base text-white bg-[#0A65CC] px-8 py-2 mb-10 rounded"
//           >
//             Apply Filter
//           </button>
//         </div>

//         {/* Jobs List */}
//         <div className="w-full flex-1 pt-[40px] lg:pt-[80px] px-6 lg:ps-[40px] lg:pr-[135px]">
//           {/* Header for Job List (Responsive) */}
//           <div className="flex flex-col md:flex-row justify-between  w-full gap-4">
//             <div>
//               <h2 className="text-2xl font-semibold">All Jobs</h2>
//               <p className="text-base text-gray-600 font-normal mt-2">
//                 Filtered {filteredJobs.length} jobs
//               </p>
//             </div>
//             <div className="flex justify-between gap-4">
//               <div className="flex items-center">
//                 <h2>Sorted by:</h2>
//                 <div className="pl-2 w-max">
//                   <select className="w-auto bg-transparent">
//                     <option value="date">Date</option>
//                     <option value="7Days">Last 7 Days</option>
//                   </select>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setIsMobileFilterOpen(true)}
//                 className="lg:hidden bg-[#0A65CC] text-white px-4 py-2 rounded-lg flex items-center gap-2"
//               >
//                 <Filter size={20} />
//                 <span>Filter</span>
//               </button>
//             </div>
//           </div>

//           <div className="mt-8 flex flex-col gap-6">
//             {currentJobs.length > 0 ? (
//               currentJobs.map((job) => <JobItem key={job.id} job={job} />)
//             ) : (
//               <p>No jobs found.</p>
//             )}
//           </div>

//           {/* Pagination Navigation */}
//           <div className="flex justify-center items-center mt-10 space-x-4">
//             <button
//               onClick={prevPage}
//               disabled={currentPage === 1}
//               className={`px-4 py-2 rounded-md ${
//                 currentPage === 1
//                   ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                   : "bg-[#0A65CC] text-white"
//               }`}
//             >
//               Previous
//             </button>
//             <span className="text-lg font-semibold text-gray-700">
//               Page {currentPage} of {totalPages}
//             </span>
//             <button
//               onClick={nextPage}
//               disabled={currentPage === totalPages}
//               className={`px-4 py-2 rounded-md ${
//                 currentPage === totalPages
//                   ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                   : "bg-[#0A65CC] text-white"
//               }`}
//             >
//               Next
//             </button>
//           </div>
//         </div>

//         {/* Mobile Filter Sidebar (for small screens) */}
//         <div
//           className={`fixed inset-y-0 right-0 z-[60] bg-white w-full max-w-xs transform ${
//             isMobileFilterOpen ? "translate-x-0" : "translate-x-full"
//           } transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto shadow-lg`}
//         >
//           <div className="p-6">
//             <div className="flex justify-between items-center pb-4 border-b">
//               <h3 className="text-xl font-semibold">Filter by</h3>
//               <button onClick={() => setIsMobileFilterOpen(false)}>
//                 <RxCross2 size={24} className="text-gray-500" />
//               </button>
//             </div>

//             <div className="mt-4">
//               {/* Active Filters */}
//               <div>
//                 <h4 className="font-medium text-lg">Active filters</h4>
//                 <div className="flex flex-wrap gap-3 mt-5 mb-10">
//                   {[...selectedJobTypes, ...selectedCategories].map(
//                     (label, idx) => (
//                       <p
//                         key={idx}
//                         className="flex text-gray-600 bg-gray-100 p-1 pl-2 rounded justify-center items-center"
//                       >
//                         {label}
//                         <span className="bg-white w-6 h-6 rounded flex justify-center items-center ml-2 text-gray-400">
//                           <RxCross2 size={20} />
//                         </span>
//                       </p>
//                     )
//                   )}
//                 </div>
//               </div>

//               {/* Date Posted with toggle */}
//               <div>
//                 <div
//                   className="flex justify-between items-center cursor-pointer"
//                   onClick={() => setIsDatePostedOpen(!isDatePostedOpen)}
//                 >
//                   <h4 className="font-medium text-lg">Date posted</h4>
//                   <button
//                     aria-label={
//                       isDatePostedOpen
//                         ? "Collapse date posted"
//                         : "Expand date posted"
//                     }
//                     className="focus:outline-none"
//                     type="button"
//                   >
//                     {isDatePostedOpen ? (
//                       <ChevronUp size={20} className="text-blue-600" />
//                     ) : (
//                       <ChevronDown size={20} className="text-blue-600" />
//                     )}
//                   </button>
//                 </div>
//                 {isDatePostedOpen && (
//                   <div className="flex flex-col gap-3 mt-5 mb-10">
//                     {datePostedOptions.map((label, idx) => (
//                       <label
//                         key={idx}
//                         className="flex items-center space-x-2 cursor-pointer"
//                       >
//                         <input
//                           type="checkbox"
//                           className="accent-blue-600 w-4 h-4"
//                         />
//                         <span className="text-[#515B6F] text-base">
//                           {label}
//                         </span>
//                       </label>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Job Type with toggle */}
//               <div>
//                 <div
//                   className="flex justify-between items-center cursor-pointer"
//                   onClick={() => setIsJobTypeOpen(!isJobTypeOpen)}
//                 >
//                   <h4 className="font-medium text-lg">Job type</h4>
//                   <button
//                     aria-label={
//                       isJobTypeOpen ? "Collapse job types" : "Expand job types"
//                     }
//                     className="focus:outline-none"
//                     type="button"
//                   >
//                     {isJobTypeOpen ? (
//                       <ChevronUp size={20} className="text-blue-600" />
//                     ) : (
//                       <ChevronDown size={20} className="text-blue-600" />
//                     )}
//                   </button>
//                 </div>
//                 {isJobTypeOpen && (
//                   <div className="flex flex-col gap-3 mt-5 mb-10">
//                     {jobTypes.map(([type, count], idx) => (
//                       <label
//                         key={idx}
//                         className="flex items-center space-x-2 cursor-pointer"
//                       >
//                         <input
//                           type="checkbox"
//                           checked={selectedJobTypes.includes(type)}
//                           onChange={() => toggleJobType(type)}
//                           className="accent-blue-600 w-4 h-4"
//                         />
//                         <span className="text-[#515B6F] text-base">
//                           {type} ({count})
//                         </span>
//                       </label>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Categories with toggle */}
//               <div>
//                 <div
//                   className="flex justify-between items-center cursor-pointer"
//                   onClick={() => setIsCategoryOpen(!isCategoryOpen)}
//                 >
//                   <h4 className="font-medium text-lg">Categories</h4>
//                   <button
//                     aria-label={
//                       isCategoryOpen
//                         ? "Collapse categories"
//                         : "Expand categories"
//                     }
//                     className="focus:outline-none"
//                     type="button"
//                   >
//                     {isCategoryOpen ? (
//                       <ChevronUp size={20} className="text-blue-600" />
//                     ) : (
//                       <ChevronDown size={20} className="text-blue-600" />
//                     )}
//                   </button>
//                 </div>
//                 {isCategoryOpen && (
//                   <div className="flex flex-col gap-3 mt-5 mb-10">
//                     {categories.map(([category, count], idx) => (
//                       <label
//                         key={idx}
//                         className="flex items-center space-x-2 cursor-pointer"
//                       >
//                         <input
//                           type="checkbox"
//                           checked={selectedCategories.includes(category)}
//                           onChange={() => toggleCategory(category)}
//                           className="accent-blue-600 w-4 h-4"
//                         />
//                         <span className="text-[#515B6F] text-base">
//                           {category} ({count})
//                         </span>
//                       </label>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>

//             <button
//               onClick={() => {
//                 applyFilters();
//                 setIsMobileFilterOpen(false);
//               }}
//               className="text-base text-white bg-[#0A65CC] px-8 py-3 w-full rounded mt-6"
//             >
//               Apply Filter
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useContext, useState, useMemo, useEffect } from "react";
import { JobContext } from "../../../Context/JobContext";
import Search from "../../shared/Search";

import { RxCross2 } from "react-icons/rx";
import JobItem from "../../shared/JobItem";
import Banner from "../../shared/banner/Banner";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";

export default function JobSearch() {
  const {
    jobs,
    filteredJobs,
    selectedJobTypes,
    toggleJobType,
    selectedCategories,
    toggleCategory,
    applyFilters,
  } = useContext(JobContext);

  const jobTypeCounts = jobs.reduce((acc, job) => {
    const type = job.job_type;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  const categoryCounts = jobs.reduce((acc, job) => {
    const category = job.category;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const datePostedOptions = [
    "Last 24 hours (69)",
    "Last 7 days (05)",
    "Last 14 days (67)",
    "Last 21 days (09)",
    "Last 30 days (19)",
    "Any time (14)",
  ];

  const [isJobTypeOpen, setIsJobTypeOpen] = useState(true);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isDatePostedOpen, setIsDatePostedOpen] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const jobTypes = Object.entries(jobTypeCounts);
  const categories = Object.entries(categoryCounts);

  // Pagination Logic
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 10;
  // const indexOfLastJob = currentPage * itemsPerPage;
  // const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  // const currentJobs = useMemo(() => {
  //   return filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  // }, [filteredJobs, indexOfFirstJob, indexOfLastJob]);

  // const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  // // ✅ এই useEffect হুকটি পুনরায় যোগ করুন
  // useEffect(() => {
  //   setCurrentPage(1);
  // }, [filteredJobs]);

  // const nextPage = () => {
  //   setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  // };

  // const prevPage = () => {
  //   setCurrentPage((prev) => Math.max(prev - 1, 1));
  // };

  return (
    <div className="w-full flex flex-col -mb-20">
      <Banner
        title="Search your Dream Job"
        description={
          <>
            Discover your next career opportunity at globally <br />
            renowned organizations.
          </>
        }
      >
        <Search bgColor="transparent" btnColor="black" />
      </Banner>

      <div className="w-full flex flex-col lg:flex-row gap-8 lg:px-0">
        {/* Desktop Sidebar (hidden on mobile/tablet) */}
        <div className="hidden lg:block w-full lg:w-[375px] bg-gray-100 pt-[40px] lg:pt-[80px] px-6 lg:pl-[135px] lg:pr-[24px]">
          <h3 className="text-xl font-semibold pb-8 lg:pb-[40px]">Filter by</h3>

          {/* Active Filters */}
          <div>
            <h4 className="font-medium text-lg">Active filters</h4>
            <div className="flex flex-wrap gap-3 mt-5 mb-10 lg:mt-[20px] lg:mb-[40px]">
              {[...selectedJobTypes, ...selectedCategories].map(
                (label, idx) => (
                  <p
                    key={idx}
                    className="flex text-gray-600 bg-white p-1 pl-2 rounded justify-center items-center"
                  >
                    {label}
                    <span className="bg-gray-100 w-6 h-6 rounded flex justify-center items-center ml-2 text-gray-400">
                      <RxCross2 size={20} />
                    </span>
                  </p>
                )
              )}
            </div>
          </div>

          {/* Date Posted with toggle */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsDatePostedOpen(!isDatePostedOpen)}
            >
              <h4 className="font-medium text-lg">Date posted</h4>
              <button
                aria-label={
                  isDatePostedOpen
                    ? "Collapse date posted"
                    : "Expand date posted"
                }
                className="focus:outline-none"
                type="button"
              >
                {isDatePostedOpen ? (
                  <ChevronUp size={20} className="text-blue-600" />
                ) : (
                  <ChevronDown size={20} className="text-blue-600" />
                )}
              </button>
            </div>
            {isDatePostedOpen && (
              <div className="flex flex-wrap gap-3 mt-5 mb-10">
                {datePostedOptions.map((label, idx) => (
                  <label
                    key={idx}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="accent-blue-600 w-4 h-4"
                    />
                    <span className="text-[#515B6F] text-base">{label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Job Type with toggle */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsJobTypeOpen(!isJobTypeOpen)}
            >
              <h4 className="font-medium text-lg">Job type</h4>
              <button
                aria-label={
                  isJobTypeOpen ? "Collapse job types" : "Expand job types"
                }
                className="focus:outline-none"
                type="button"
              >
                {isJobTypeOpen ? (
                  <ChevronUp size={20} className="text-blue-600" />
                ) : (
                  <ChevronDown size={20} className="text-blue-600" />
                )}
              </button>
            </div>
            {isJobTypeOpen && (
              <div className="flex flex-wrap gap-3 mt-5 mb-10">
                {jobTypes.map(([type, count], idx) => (
                  <label
                    key={idx}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedJobTypes.includes(type)}
                      onChange={() => toggleJobType(type)}
                      className="accent-blue-600 w-4 h-4"
                    />
                    <span className="text-[#515B6F] text-base">
                      {type} ({count})
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Categories with toggle */}
          <div>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <h4 className="font-medium text-lg">Categories</h4>
              <button
                aria-label={
                  isCategoryOpen ? "Collapse categories" : "Expand categories"
                }
                className="focus:outline-none"
                type="button"
              >
                {isCategoryOpen ? (
                  <ChevronUp size={20} className="text-blue-600" />
                ) : (
                  <ChevronDown size={20} className="text-blue-600" />
                )}
              </button>
            </div>
            {isCategoryOpen && (
              <div className="flex flex-wrap gap-3 mt-5 mb-10">
                {categories.map(([category, count], idx) => (
                  <label
                    key={idx}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="accent-blue-600 w-4 h-4"
                    />
                    <span className="text-[#515B6F] text-base">
                      {category} ({count})
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={applyFilters}
            className="text-base text-white bg-[#0A65CC] px-8 py-2 mb-10 rounded"
          >
            Apply Filter
          </button>
        </div>

        {/* Jobs List */}
        <div className="w-full flex-1 pt-[40px] lg:pt-[80px] px-6 lg:ps-[40px] lg:pr-[135px]">
          {/* Header for Job List (Responsive) */}
          <div className="flex flex-col md:flex-row justify-between w-full gap-4">
            <div>
              <h2 className="text-2xl font-semibold">All Jobs</h2>
              <p className="text-base text-gray-600 font-normal mt-2">
                Filtered {filteredJobs.length} jobs
              </p>
            </div>
            <div className="flex justify-between gap-4">
              <div className="flex items-center">
                <h2>Sorted by:</h2>
                <div className="pl-2 w-max">
                  <select className="w-auto bg-transparent">
                    <option value="date">Date</option>
                    <option value="7Days">Last 7 Days</option>
                  </select>
                </div>
              </div>
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden bg-[#0A65CC] text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <Filter size={20} />
                <span>Filter</span>
              </button>
            </div>
          </div>

          {/* <div className="mt-8 flex flex-col gap-6">
            {currentJobs.length > 0 ? (
              currentJobs.map((job) => <JobItem key={job.id} job={job} />)
            ) : (
              <p>No jobs found.</p>
            )}


          </div> */}

          <div className="mt-8 flex flex-col gap-6">
            {/* {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => <JobItem key={job.id} job={job} />)
            ) : (
              <p>No jobs found.</p>
            )} */}
            <JobItem />
          </div>

          {/* Pagination Navigation */}
          {/* {totalPages > 1 && (
            <div className="flex justify-center items-center mt-10 space-x-4">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md ${
                  currentPage === 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#0A65CC] text-white"
                }`}
              >
                Previous
              </button>
              <span className="text-lg font-semibold text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-md ${
                  currentPage === totalPages
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#0A65CC] text-white"
                }`}
              >
                Next
              </button>
            </div>
          )} */}
        </div>

        {/* Mobile Filter Sidebar (for small screens) */}
        <div
          className={`fixed inset-y-0 right-0 z-[60] bg-white w-full max-w-xs transform ${
            isMobileFilterOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto shadow-lg`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center pb-4 border-b">
              <h3 className="text-xl font-semibold">Filter by</h3>
              <button onClick={() => setIsMobileFilterOpen(false)}>
                <RxCross2 size={24} className="text-gray-500" />
              </button>
            </div>

            <div className="mt-4">
              {/* Active Filters */}
              <div>
                <h4 className="font-medium text-lg">Active filters</h4>
                <div className="flex flex-wrap gap-3 mt-5 mb-10">
                  {[...selectedJobTypes, ...selectedCategories].map(
                    (label, idx) => (
                      <p
                        key={idx}
                        className="flex text-gray-600 bg-gray-100 p-1 pl-2 rounded justify-center items-center"
                      >
                        {label}
                        <span className="bg-white w-6 h-6 rounded flex justify-center items-center ml-2 text-gray-400">
                          <RxCross2 size={20} />
                        </span>
                      </p>
                    )
                  )}
                </div>
              </div>

              {/* Date Posted with toggle */}
              <div>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setIsDatePostedOpen(!isDatePostedOpen)}
                >
                  <h4 className="font-medium text-lg">Date posted</h4>
                  <button
                    aria-label={
                      isDatePostedOpen
                        ? "Collapse date posted"
                        : "Expand date posted"
                    }
                    className="focus:outline-none"
                    type="button"
                  >
                    {isDatePostedOpen ? (
                      <ChevronUp size={20} className="text-blue-600" />
                    ) : (
                      <ChevronDown size={20} className="text-blue-600" />
                    )}
                  </button>
                </div>
                {isDatePostedOpen && (
                  <div className="flex flex-col gap-3 mt-5 mb-10">
                    {datePostedOptions.map((label, idx) => (
                      <label
                        key={idx}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="accent-blue-600 w-4 h-4"
                        />
                        <span className="text-[#515B6F] text-base">
                          {label}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Job Type with toggle */}
              <div>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setIsJobTypeOpen(!isJobTypeOpen)}
                >
                  <h4 className="font-medium text-lg">Job type</h4>
                  <button
                    aria-label={
                      isJobTypeOpen ? "Collapse job types" : "Expand job types"
                    }
                    className="focus:outline-none"
                    type="button"
                  >
                    {isJobTypeOpen ? (
                      <ChevronUp size={20} className="text-blue-600" />
                    ) : (
                      <ChevronDown size={20} className="text-blue-600" />
                    )}
                  </button>
                </div>
                {isJobTypeOpen && (
                  <div className="flex flex-col gap-3 mt-5 mb-10">
                    {jobTypes.map(([type, count], idx) => (
                      <label
                        key={idx}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedJobTypes.includes(type)}
                          onChange={() => toggleJobType(type)}
                          className="accent-blue-600 w-4 h-4"
                        />
                        <span className="text-[#515B6F] text-base">
                          {type} ({count})
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Categories with toggle */}
              <div>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                >
                  <h4 className="font-medium text-lg">Categories</h4>
                  <button
                    aria-label={
                      isCategoryOpen
                        ? "Collapse categories"
                        : "Expand categories"
                    }
                    className="focus:outline-none"
                    type="button"
                  >
                    {isCategoryOpen ? (
                      <ChevronUp size={20} className="text-blue-600" />
                    ) : (
                      <ChevronDown size={20} className="text-blue-600" />
                    )}
                  </button>
                </div>
                {isCategoryOpen && (
                  <div className="flex flex-col gap-3 mt-5 mb-10">
                    {categories.map(([category, count], idx) => (
                      <label
                        key={idx}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleCategory(category)}
                          className="accent-blue-600 w-4 h-4"
                        />
                        <span className="text-[#515B6F] text-base">
                          {category} ({count})
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => {
                applyFilters();
                setIsMobileFilterOpen(false);
              }}
              className="text-base text-white bg-[#0A65CC] px-8 py-3 w-full rounded mt-6"
            >
              Apply Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
