import React, { useContext } from "react";
import { JobContext } from "../../../Context/JobContext";
import FeatureCard from "./FeaturedCard";

function Featured() {
  const { jobs } = useContext(JobContext);
  const firstSixJobs = jobs.slice(0, 6);
  return (
    <div className="w-full max-w-[1170px] mx-auto flex flex-col gap-10 my-20 px-4 sm:px-0">
      <h1 className="title text-3xl font-bold text-right">Featured Job</h1>
      <div className="cards flex flex-wrap justify-center  items-center gap-[30px]">
        {firstSixJobs.map((job) => (
          <FeatureCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default Featured;
