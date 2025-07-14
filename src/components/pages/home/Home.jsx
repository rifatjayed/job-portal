import React from "react";
// import Navbar from "../../shared/navbar/Navbar";
import Hero from "../../shared/Hero";
import Category from "../../shared/category/Category";
import Specialized from "../../shared/specialized/Specialized";
import Featured from "../../shared/featured/Featured";
import Courses from "../../shared/course/Course";
import Stats from "../../stats/Stats";

export default function Home() {
  return (
    <>
      <Hero></Hero>

      <Category></Category>

      <Specialized></Specialized>
      <Featured></Featured>
      <Stats></Stats>
      <Courses></Courses>
    </>
  );
}
