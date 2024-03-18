import React from "react";

const CTA = () => {
  return (
    <div className="px-8 py-10 my-24 gradient rounded-lg flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between items-center">
      <div>
        <div className="text-xs text-[#0E0E0E]">
          Request Early Access to Get Started
        </div>
        <div className="text-black text-2xl font-semibold">
          Register today & start exploring the endless possiblities.
        </div>
      </div>
      <div>
        <button className="bg-black px-10 py-3 text-nowrap rounded-full font-medium">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CTA;
