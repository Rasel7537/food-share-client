import React from "react";
// import Carousel from "./Carousel";
import Hero from "./Hero";
import VolunteersSection from "./volunteersSection";
import CEO from "./CEO";
import OurMission from "./OurMission";
import Review from "./Review";
import FeaturedFoods from "../featuredFoods/FeaturedFoods";
import { useLoaderData } from "react-router";
import ManageFoods from "../manageFoods/ManageFoods";

const Home = () => {
  const foods = useLoaderData();
  console.log(foods);
  return (
    
    <div className="mt-5">

      {/* <Carousel></Carousel> */}
      <Hero></Hero>
      <FeaturedFoods></FeaturedFoods>
      <VolunteersSection></VolunteersSection>
      <CEO></CEO>
      <OurMission></OurMission>
      <Review></Review>
    </div>
  );
};

export default Home;
