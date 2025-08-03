import React, { createContext, useState } from "react";
import JobData from "../data/job";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  // সরাসরি imported data দিয়ে ইনিশিয়াল স্টেট সেট করলাম
  const [jobs, setJobs] = useState(JobData);
  const [loading, setLoading] = useState(false); // এখন আর লোডিং দরকার নাই

  return (
    <JobContext.Provider value={{ jobs, loading }}>
      {children}
    </JobContext.Provider>
  );
};
