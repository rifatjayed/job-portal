import React from "react";

import Search from "../../shared/Search";

import { RxCross2 } from "react-icons/rx";
import JobItem from "../../shared/JobItem";
import Banner from "../../shared/banner/Banner";
import FeatureCard from "../../shared/featured/FeaturedCard";

export default function JobSearch() {
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
      {/* <div className="w-full flex gap-8">
        <div className="w-[375px] bg-gray-100 pl-[135px] pt-[80px] pr-[24px]">
          <h3 className="text-xl font-semibold pb-[40px]">Filter by</h3>

          <div>
            <h4 className="font-medium text-lg">Active filters</h4>
            <div className="flex flex-wrap gap-3 mt-[20px] mb-[40px]">
              <p className="flex text-gray-600 bg-white p-1 pl-2 rounded justify-center items-center ">
                Last 30 days
                <span className="bg-gray-100 w-6 h-6 rounded flex justify-center items-center ml-2 text-gray-400">
                  <RxCross2 size={20} />
                </span>
              </p>
              <p className="flex text-gray-600 bg-white p-1 pl-2 rounded justify-center items-center ">
                Internship
                <span className="bg-gray-100 w-6 h-6 rounded flex justify-center items-center ml-2 text-gray-400">
                  <RxCross2 size={20} />
                </span>
              </p>
              <p className="flex text-gray-600 bg-white p-1 pl-2 rounded justify-center items-center ">
                Trade{" "}
                <span className="bg-gray-100 w-6 h-6 rounded flex justify-center items-center ml-2 text-gray-400">
                  <RxCross2 size={20} />
                </span>
              </p>
              <p className="flex text-gray-600 bg-white p-1 pl-2 rounded justify-center items-center ">
                Managing Director
                <span className="bg-gray-100 w-6 h-6 rounded flex justify-center items-center ml-2 text-gray-400">
                  <RxCross2 size={20} />
                </span>
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-lg">Date posted</h4>
            <div className="flex flex-wrap gap-3 mt-[20px] mb-[40px]">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                <span className="text-[#515B6F] text-base ms-[16px]">
                  Last 24 hours (69)
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                <span className="text-[#515B6F] text-base ms-[16px]">
                  Last 7 days (05)
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                <span className="text-[#515B6F] text-base ms-[16px]">
                  Last 14 days (67)
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                <span className="text-[#515B6F] text-base ms-[16px]">
                  Last 21 days (09)
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                <span className="text-[#515B6F] text-base ms-[16px]">
                  Last 30 days (19)
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                <span className="text-[#515B6F] text-base ms-[16px]">
                  Any time (14)
                </span>
              </label>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-lg">Job type</h4>
            <div className="flex flex-wrap gap-3 mt-[20px] mb-[40px]">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                <span className="text-[#515B6F] text-base ms-[16px]">
                  Full-time (09)
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                <span className="text-[#515B6F] text-base ms-[16px]">
                  Part-Time (15)
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                <span className="text-[#515B6F] text-base ms-[16px]">
                  Remote (06)
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                <span className="text-[#515B6F] text-base ms-[16px]">
                  Temporary (15)
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                <span className="text-[#515B6F] text-base ms-[16px]">
                  Internship (11)
                </span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                <span className="text-[#515B6F] text-base ms-[16px]">
                  Contract base (06)
                </span>
              </label>
            </div>
          </div>

          <button className="text-base text-white bg-[#0A65CC] px-[32px] py-[8px] mb-[40px] rounded">
            Apply Filter
          </button>
        </div>
        <div className="flex-1 ps-[40px] pt-[80px] pr-[135px]">
          <div className="flex justify-between items-center w-full">
            <div>
              <h2 className="text-2xl font-semibold">All Jobs</h2>
              <p className="text-base text-gray-600 font-normal mt-2">
                Filtered 9865 jobs
              </p>
            </div>
            <div className="flex ">
              <h2>Sorted by : </h2>
              <div className="pl-2 w-max">
                <select className="w-auto bg-transparent">
                  <option value="date">Date</option>
                  <option value="7Days">Last 7Days</option>
                </select>
              </div>
            </div>
          </div>
          {Array.from({ length: 6 }).map((_, index) => (
            <JobItem key={index} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center bg-black">
        <div className="w-[1170px] flex flex-wrap gap-7.5 mt-20 pb-10">
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
              {[
                "Full-time (09)",
                "Part-Time (15)",
                "Remote (06)",
                "Temporary (15)",
                "Internship (11)",
                "Contract base (06)",
              ].map((label, idx) => (
                <label key={idx} className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-blue-600 w-4 h-4" />
                  <span className="text-[#515B6F] text-base">{label}</span>
                </label>
              ))}
            </div>
          </div>

          <button className="text-base text-white bg-[#0A65CC] px-8 py-2 mb-10 rounded">
            Apply Filter
          </button>
        </div>

        {/* Jobs List */}
        <div className="w-full flex-1 pt-[40px] lg:pt-[80px] px-6 lg:ps-[40px] lg:pr-[135px]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
            <div>
              <h2 className="text-2xl font-semibold">All Jobs</h2>
              <p className="text-base text-gray-600 font-normal mt-2">
                Filtered 9865 jobs
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
            {Array.from({ length: 6 }).map((_, index) => (
              <JobItem key={index} />
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
