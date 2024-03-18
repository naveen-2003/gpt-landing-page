import React from "react";
import { features } from "../assets/data/data";
import Description from "./Description";
import featureImage from "../assets/images/feature-img.png";

const Features = () => {
  return (
    <>
      <div className="flex flex-col gap-24 md:flex-row mt-32">
        <div className="md:max-w-[36%] z-50">
          <div className="text-gradient text-4xl font-semibold">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </div>
          <div className="text-[#FF8A71] mt-5">
            Request Early Access to Get Started
          </div>
        </div>
        <div className="grid gap-10 ">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="grid gap-y-5 md:grid-flow-col md:gap-10"
            >
              <Description
                topicStyle={
                  "text-xl font-semibold max-w-[200px] mt-1 md:w-[160px] lg:w-full"
                }
                topic={feature.topic}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 mt-10">
        <div className="hidden md:block">
          <img src={featureImage} alt="A Women wearing HMT" />
        </div>
        <div className="flex flex-col justify-end md:pb-20  gap-8">
          <div className="text-gradient text-4xl font-semibold leading-snug">
            The possibilities are beyond your imagination
          </div>
          <div className="text-secondary">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </div>
          <div className="text-[#FF8A71]">
            Request Early Access to Get Started
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
