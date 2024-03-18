import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#031B34] text-center px-[10%] z-50">
      <div className="text-gradient text-3xl md:text-5xl lg:text-6xl font-semibold pt-24 px-[10%]">
        Do you want to step in to the future before others
      </div>
      <button className="px-5 py-3 bg-transparent border my-8">
        Request Early Access
      </button>
      <div className="text-left grid gap-10 py-10 grid-flow-row md:grid-flow-col md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="text-3xl font-semibold mb-3">GPT-3</div>
          <div className="text-sm">
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </div>
        </div>
        <div>
          <div className="mb-5 font-medium">Links</div>
          <ul className="font-thin *:mb-3">
            <li>Overons</li>
            <li>Social Media</li>
            <li>Counters</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <div className="mb-5 font-medium">Company</div>
          <ul className="font-thin *:mb-3">
            <li>Terms &amp; Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <div className="mb-5 font-medium">Get in touch</div>
          <ul className="font-thin *:mb-3">
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
          </ul>
        </div>
      </div>
      <div className="text-xs pb-5">
        &copy; 2021 GPT-3. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
