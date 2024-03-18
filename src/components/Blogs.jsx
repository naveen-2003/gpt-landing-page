import React from "react";
import { blogs } from "../assets/data/data";
import Blog from "./Blog";

const Blogs = () => {
  return (
    <div className="mb-24">
      <div className="text-gradient text-3xl md:text-5xl lg:text-6xl font-semibold pb-16">
        A lot is happening,
        <br />
        We are blogging about it.
      </div>
      <div className="grid md:grid-flow-col md:grid-rows-3 md:grid-cols-2 lg:grid-flow-col lg:grid-rows-2 lg:grid-cols-3 gap-x-12 gap-y-12 justify-center">
        {blogs.map((blog, index) => {
          return (
            <Blog
              key={index}
              image={blog.image}
              topic={blog.topic}
              date={blog.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
