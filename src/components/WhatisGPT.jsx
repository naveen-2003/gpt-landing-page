import React from "react";
import Description from "./Description";
import { topic, description, GPTfeatures } from "../assets/data/data.js";
import ellipse2 from "../assets/images/ellipse2.svg";
import ellipse3 from "../assets/images/ellipse3.svg";

const WhatisGPT = () => {
  return (
    <div className="bg-[#042C54] py-12 px-14 relative">
      <img className="absolute top-0 left-0" src={ellipse2} />
      <img className="absolute right-0 bottom-0" src={ellipse3} />
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-8 md:grid md:grid-flow-col md:gap-32 ">
          <Description topic={topic} description={description} />
        </div>
        <div className=" grid grid-flow-col gap-32 items-center">
          <div className="text-gradient text-4xl leading-snug font-semibold">
            The possibilities are beyond your imagination
          </div>
          <div className=" hidden md:block text-end text-[#FF8A71]">
            Explore The Library
          </div>
        </div>
        <div>
          <div className="grid grid-flow-row md:grid-flow-col gap-10 ">
            {GPTfeatures.map((feature) => (
              <div key={feature.id} className="flex flex-col gap-10">
                <Description
                  topic={feature.topic}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="absolute "> */}
      {/* </div> */}
    </div>
  );
};

export default WhatisGPT;
