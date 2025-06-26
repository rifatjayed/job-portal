import React from "react";
import CategoryCard from "./CategoryCard";

function Category() {
  return (
    <div className="w-[1170px] flex flex-col justify-center items-center gap-12">
      <div className="title w-[600px] flex flex-col justify-center items-center gap-6">
        <h1 className="text-3xl font-bold">Browse Jobs by Category </h1>
        <p className="text-center">
          Explore employment opportunities categorized by industry,
          specialization, or field of expertise
        </p>
      </div>
      <div className="sections flex gap-7.5 flex-wrap">
        <CategoryCard
          logo="/category.png"
          name="Software Dev."
          jobsPosted="1,000+ jobs posted"
        />
        <CategoryCard
          logo="/category.png"
          name="Software Dev."
          jobsPosted="1,000+ jobs posted"
        />
        <CategoryCard
          logo="/category.png"
          name="Software Dev."
          jobsPosted="1,000+ jobs posted"
        />
        <CategoryCard
          logo="/category.png"
          name="Software Dev."
          jobsPosted="1,000+ jobs posted"
        />
        <CategoryCard
          logo="/category.png"
          name="Software Dev."
          jobsPosted="1,000+ jobs posted"
        />
        <CategoryCard
          logo="/category.png"
          name="Software Dev."
          jobsPosted="1,000+ jobs posted"
        />
        <CategoryCard
          logo="/category.png"
          name="Software Dev."
          jobsPosted="1,000+ jobs posted"
        />
        <CategoryCard
          logo="/category.png"
          name="Software Dev."
          jobsPosted="1,000+ jobs posted"
        />
      </div>
      <div className="px-9 py-3 bg-blue-600 text-white rounded">See All</div>
    </div>
  );
}

export default Category;
