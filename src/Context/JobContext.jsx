// import React, { createContext, useState } from "react";
// import JobData from "../data/job";

// export const JobContext = createContext();

// export const JobProvider = ({ children }) => {
//   const [jobs, setJobs] = useState(JobData);
//   const [loading, setLoading] = useState(false);

//   return (
//     <JobContext.Provider value={{ jobs, loading }}>
//       {children}
//     </JobContext.Provider>
//   );
// };

// JobContext.js
// import React, { createContext, useState, useMemo } from "react";
// import JobData from "../data/job";

// export const JobContext = createContext();

// export const JobProvider = ({ children }) => {
//   const [jobs] = useState(JobData); // data কখনো change হবে না, তাই শুধু read-only
//   const [loading] = useState(false);

//   // ✅ Filter State: কোন job_type ইউজার চেক করেছে
//   const [selectedJobTypes, setSelectedJobTypes] = useState([]);

//   // ✅ Handle checkbox toggle
//   const toggleJobType = (type) => {
//     setSelectedJobTypes((prev) =>
//       prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
//     );
//   };

//   // ✅ Filtered job list
//   const filteredJobs = useMemo(() => {
//     if (selectedJobTypes.length === 0) return jobs;

//     return jobs.filter((job) => selectedJobTypes.includes(job.job_type));
//   }, [jobs, selectedJobTypes]);

//   return (
//     <JobContext.Provider
//       value={{
//         jobs,
//         loading,
//         selectedJobTypes,
//         toggleJobType,
//         filteredJobs,
//       }}
//     >
//       {children}
//     </JobContext.Provider>
//   );
// };

// JobContext.js
import React, { createContext, useState, useMemo } from "react";
import JobData from "../data/job";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs] = useState(JobData);
  const [loading] = useState(false);

  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState([]); // ✅ Final filters for applying

  // Checkbox toggle handler
  const toggleJobType = (type) => {
    setSelectedJobTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  // Apply filters button handler
  const applyJobTypeFilter = () => {
    setAppliedFilters(selectedJobTypes);
  };

  // Filtered jobs using useMemo
  const filteredJobs = useMemo(() => {
    if (appliedFilters.length === 0) return jobs;
    return jobs.filter((job) => appliedFilters.includes(job.job_type));
  }, [jobs, appliedFilters]);

  return (
    <JobContext.Provider
      value={{
        jobs,
        loading,
        selectedJobTypes,
        toggleJobType,
        applyJobTypeFilter,
        filteredJobs,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
