import React, { useContext } from "react";
import { JobContext } from "../../../Context/JobContext";
import Search from "../../shared/Search";

import { RxCross2 } from "react-icons/rx";
import JobItem from "../../shared/JobItem";
import Banner from "../../shared/banner/Banner";
import FeatureCard from "../../shared/featured/FeaturedCard";

export default function JobSearch() {
  const {
    jobs,
    filteredJobs,
    selectedJobTypes,
    toggleJobType,
    applyJobTypeFilter,
  } = useContext(JobContext);

  const jobTypeCounts = jobs.reduce((acc, job) => {
    const type = job.job_type;

    if (acc[type]) {
      acc[type]++;
    } else {
      acc[type] = 1;
    }

    return acc;
  }, {}); // Output: { "Remote": 6, "Full-time": 9, ... }

  const jobTypes = Object.entries(jobTypeCounts); // [["Remote", 6], ["Full-time", 9], ...]

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

      <div className="w-full flex flex-col lg:flex-row gap-8  lg:px-0">
        {/* Sidebar */}
        <div className="w-full lg:w-[375px] bg-gray-100 pt-[40px] lg:pt-[80px] px-6 lg:pl-[135px] lg:pr-[24px]">
          <h3 className="text-xl font-semibold pb-8 lg:pb-[40px]">Filter by</h3>

          {/* Active Filters */}
          <div>
            <h4 className="font-medium text-lg">Active filters</h4>
            <div className="flex flex-wrap gap-3 mt-5 mb-10 lg:mt-[20px] lg:mb-[40px]">
              {["Last 30 days", "Internship", "Trade", "Managing Director"].map(
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

          {/* Date Posted */}
          <div>
            <h4 className="font-medium text-lg">Date posted</h4>
            <div className="flex flex-wrap gap-3 mt-5 mb-10">
              {[
                "Last 24 hours (69)",
                "Last 7 days (05)",
                "Last 14 days (67)",
                "Last 21 days (09)",
                "Last 30 days (19)",
                "Any time (14)",
              ].map((label, idx) => (
                <label key={idx} className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                  <span className="text-[#515B6F] text-base">{label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Job Type */}
          <div>
            <h4 className="font-medium text-lg">Job type</h4>
            <div className="flex flex-wrap gap-3 mt-5 mb-10">
              {jobTypes.map(([type, count], idx) => (
                <label key={idx} className="flex items-center space-x-2">
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
          </div>

          <button
            onClick={applyJobTypeFilter}
            className="text-base text-white bg-[#0A65CC] px-8 py-2 mb-10 rounded"
          >
            Apply Filter
          </button>
        </div>

        {/* Jobs List */}
        <div className="w-full flex-1 pt-[40px] lg:pt-[80px] px-6 lg:ps-[40px] lg:pr-[135px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
            <div>
              <h2 className="text-2xl font-semibold">All Jobs</h2>
              <p className="text-base text-gray-600 font-normal mt-2">
                Filtered{filteredJobs.length} jobs
              </p>
            </div>
            <div className="flex items-center">
              <h2>Sorted by:</h2>
              <div className="pl-2 w-max">
                <select className="w-auto bg-transparent">
                  <option value="date">Date</option>
                  <option value="7Days">Last 7 Days</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            {/* {jobs.map((job) => (
              <JobItem key={job.id} job={job} /> */}
            {filteredJobs.map((job) => (
              <JobItem key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>

      {/* Feature Section */}
      {/* <div className="w-full flex justify-center items-center bg-black">
        <div className="w-full max-w-[1170px] flex flex-wrap gap-6 mt-10 pb-10 px-4">
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
      </div> */}
    </div>
  );
}
