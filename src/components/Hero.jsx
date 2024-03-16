import React from "react";
import heroImage from "../assets/images/hero-image.svg";
import userImage from "../assets/images/users-img.jpg";

const Hero = () => {
  return (
    <div className="relative align-middle pb-24">
      <div className=" lg:w-1/2  flex  flex-col gap-8">
        <div className="text-gradient text-3xl md:text-5xl lg:text-6xl font-semibold pt-24">
          Let’s Build Something amazing with GPT-3 OpenAI
        </div>
        <div className="text-secondary">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </div>
        <div className="flex max-w-[400px] lg:max-w-full">
          <input
            className="px-8 py-5 w-28 flex-1 rounded-l-md bg-[#052D56] text-[#3D6184] placeholder:text-[#3D6184]"
            type="text"
            placeholder="Your Email Address"
          />
          <button className="px-8 py-5 text-sm sm:text-base bg-tertiary rounded-r-md font-bold">
            Get Started
          </button>
        </div>
        <div className="flex justify-center flex-wrap gap-y-5 sm:justify-normal">
          <div className="flex">
            {Array.from({ length: 6 }).map((_, index) => (
              <img
                key={index}
                className={`relative w-[34px] h-[34px] object-cover object-center border-2  rounded-full ${
                  index !== 0 && ""
                }`}
                src={userImage}
                alt="User image"
                style={{
                  left: `${index * -10}px`,
                }}
              />
            ))}
            <div
              className={`relative w-[34px] h-[34px] border-2  rounded-full text-black font-bold bg-[#13DED2] text-[8px] -left-[60px] flex items-center justify-center`}
            >
              <span>1.6k+</span>
            </div>
          </div>
          <div className="flex items-center justify-center text-xs ml-[-40px]">
            <span>1,600 people requested access a visit in last 24 hours</span>
          </div>
        </div>
      </div>
      <div className="absolute hidden lg:block -right-20 top-0 bottom-0 w-1/2">
        <img className="h-full" src={heroImage} alt="Hero image" />
      </div>
    </div>
  );
};

export default Hero;
