import React from "react";
import Navbar from "../../shared/navbar/Navbar";
import Hero from "../../shared/Hero";
import Category from "../../shared/category/Category";
import Specialized from "../../shared/specialized/Specialized";
import Featured from "../../shared/featured/Featured";

export default function Home() {
  return (
    <div>
      <div className="">
        <Hero></Hero>
        <Category></Category>
        <Specialized></Specialized>
        <Featured></Featured>
      </div>
    </div>
  );
}
