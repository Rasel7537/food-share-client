/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/Cpv7JvVf/pic-1.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <motion.h1
             initial={{scale:0}}
             animate = {{scale:1, transition:{duration:5}}}
            
            className="mb-5 text-5xl font-bold">
              {/* Spare food, save a smile. */}
              One meal can make a memory.
            </motion.h1>
            <p className="mb-5">
              Don't let good food go to waste — let it bring a smile to a hungry
              child. Your extra meal can be their only meal — share with love.
            </p>

            <button className="btn btn-outline btn-warning">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
