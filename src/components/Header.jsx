import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-14">
        <div className="font-bold ">GPT-3</div>
        <ul className="gap-10 hidden lg:flex">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#whatisgpt">What is GPT?</a>
          </li>
          <li>
            <a href="#openai">OpenAI</a>
          </li>
          <li>
            <a href="#casestudies">Case Studies</a>
          </li>
          <li>
            <a href="#library">Library</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-6">
        <button className="">Sign in</button>
        <button className="bg-tertiary py-3 px-8 rounded-md">Sign up</button>
      </div>
    </div>
  );
};

export default Header;
