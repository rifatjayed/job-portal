import React from "react";

function FeatureCard({ job }) {
  // console.log(job);
  return (
    <div className="card w-[370px] h-[190px] flex flex-col gap-6 px-4 py-3 bg-gradient-to-r from-blue-600/16 to-blue-600/2 rounded hover:text-white hover:bg-blue-600 group">
      <div className="top flex flex-col gap-2">
        <h6 className="text-[20px] font-semibold">{job.job_title}</h6>
        <div className="flex items-center gap-2">
          <p className="bg-gray-100 px-1 py-.5 rounded-sm text-base text-red-600">
            {job.job_type}
          </p>
          <p className="text-sm">Salary: {job.salary_range}</p>
        </div>
      </div>
      <div className="bottom flex items-center ">
        {/* <div>
          <img className="pr-1" src={logo} alt="logo" />
        </div> */}
        <div className="flex flex-col">
          <h6 className="text-[18px] font-medium">{job.company}</h6>
          <p className="text-sm">{job.location}</p>
        </div>
        <div className="ml-auto self-end px-3.5 py-0.5 text-white bg-blue-600 rounded-sm cursor-pointer group-hover:text-blue-600 group-hover:bg-white">
          Apply
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;
