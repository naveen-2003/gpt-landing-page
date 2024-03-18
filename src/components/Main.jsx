import React from "react";
import Hero from "./Hero";
import Partners from "./Partners";
import WhatisGPT from "./WhatisGPT";
import Features from "./Features";
import CTA from "./CTA";
import Blogs from "./Blogs";

const Main = () => {
  return (
    <>
      <div className="px-[10%] *:z-50">
        <Hero />
        <Partners />
        <WhatisGPT />
        <Features />
        <CTA />
        <Blogs />
      </div>
    </>
  );
};

export default Main;
