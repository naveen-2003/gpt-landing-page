import React from "react";

const Blog = ({ image, topic, date }) => {
  return (
    <div className="first:row-span-2 max-w-96">
      <div className="h-2/5">
        <img className="h-full w-full object-cover" src={image} alt="blog" />
      </div>
      <div className="flex flex-col justify-between h-3/5 bg-[#042C54] py-3 px-6">
        <div>
          <div className="text-xs mb-1">{date}</div>
          <div className="xl:text-2xl md:text-xl text-lg font-semibold ">{topic}</div>
        </div>
        <div className="mb-3">Read Full Article</div>
      </div>
    </div>
  );
};

export default Blog;
