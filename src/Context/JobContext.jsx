// import React, { createContext, useState, useMemo } from "react";
// import JobData from "../data/job";

// export const JobContext = createContext();

// export const JobProvider = ({ children }) => {
//   const [jobs] = useState(JobData);
//   const [loading] = useState(false);

//   const [selectedJobTypes, setSelectedJobTypes] = useState([]);
//   const [appliedFilters, setAppliedFilters] = useState([]); // ✅ Final filters for applying

//   // Checkbox toggle handler
//   const toggleJobType = (type) => {
//     setSelectedJobTypes((prev) =>
//       prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
//     );
//   };

//   // Apply filters button handler
//   const applyJobTypeFilter = () => {
//     setAppliedFilters(selectedJobTypes);
//   };

//   // Filtered jobs using useMemo
//   const filteredJobs = useMemo(() => {
//     if (appliedFilters.length === 0) return jobs;
//     return jobs.filter((job) => appliedFilters.includes(job.job_type));
//   }, [jobs, appliedFilters]);

//   return (
//     <JobContext.Provider
//       value={{
//         jobs,
//         loading,
//         selectedJobTypes,
//         toggleJobType,
//         applyJobTypeFilter,
//         filteredJobs,
//       }}
//     >
//       {children}
//     </JobContext.Provider>
//   );
// };

import React, { createContext, useState, useMemo } from "react";
import JobData from "../data/job";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs] = useState(JobData);
  const [loading] = useState(false);

  // Job Type Filtering
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [appliedJobTypeFilters, setAppliedJobTypeFilters] = useState([]);

  const toggleJobType = (type) => {
    setSelectedJobTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const applyJobTypeFilter = () => {
    setAppliedJobTypeFilters(selectedJobTypes);
  };

  // Job Category Filtering
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [appliedCategoryFilters, setAppliedCategoryFilters] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const applyCategoryFilter = () => {
    setAppliedCategoryFilters(selectedCategories);
  };

  // Filtered jobs using useMemo
  const filteredJobs = useMemo(() => {
    let result = jobs;

    // Apply job type filters
    if (appliedJobTypeFilters.length > 0) {
      result = result.filter((job) =>
        appliedJobTypeFilters.includes(job.job_type)
      );
    }

    // Apply category filters
    if (appliedCategoryFilters.length > 0) {
      result = result.filter((job) =>
        appliedCategoryFilters.includes(job.category)
      );
    }

    return result;
  }, [jobs, appliedJobTypeFilters, appliedCategoryFilters]);

  return (
    <JobContext.Provider
      value={{
        jobs,
        loading,
        selectedJobTypes,
        toggleJobType,
        applyJobTypeFilter,
        selectedCategories,
        toggleCategory,
        applyCategoryFilter,
        filteredJobs,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

// import React, { createContext, useState, useEffect } from "react";
// import JobData from "../data/job"; // your job data file

// export const JobContext = createContext();

// export const JobProvider = ({ children }) => {
//   const [jobs, setJobs] = useState(JobData);
//   const [filteredJobs, setFilteredJobs] = useState(JobData);

//   // Filters
//   const [selectedJobTypes, setSelectedJobTypes] = useState([]);
//   const [selectedCategories, setSelectedCategories] = useState([]);

//   // Extract unique categories from job data
//   const categories = Array.from(new Set(jobs.map((job) => job.category)));

//   // Toggle job type
//   const toggleJobType = (type) => {
//     setSelectedJobTypes((prev) =>
//       prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
//     );
//   };

//   // Toggle category
//   const toggleCategory = (category) => {
//     setSelectedCategories((prev) =>
//       prev.includes(category)
//         ? prev.filter((c) => c !== category)
//         : [...prev, category]
//     );
//   };

//   // Apply Filters
//   const applyJobTypeFilter = () => {
//     let filtered = jobs;

//     if (selectedJobTypes.length > 0) {
//       filtered = filtered.filter((job) =>
//         selectedJobTypes.includes(job.job_type)
//       );
//     }

//     if (selectedCategories.length > 0) {
//       filtered = filtered.filter((job) =>
//         selectedCategories.includes(job.category)
//       );
//     }

//     setFilteredJobs(filtered);
//   };

//   // Optional: Automatically apply filter on checkbox change
//   // useEffect(() => {
//   //   applyJobTypeFilter();
//   // }, [selectedJobTypes, selectedCategories]);

//   return (
//     <JobContext.Provider
//       value={{
//         jobs,
//         filteredJobs,
//         selectedJobTypes,
//         toggleJobType,
//         applyJobTypeFilter,
//         categories,
//         selectedCategories,
//         toggleCategory,
//       }}
//     >
//       {children}
//     </JobContext.Provider>
//   );
// };
