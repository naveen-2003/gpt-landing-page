import React from "react";

const Description = ({ topic, description, topicStyle }) => {
  return (
    <>
      <div className="z-50">
        <div className="w-[38px] h-[3px] gradient " />
        <div className={topicStyle ? topicStyle : `text-2xl font-bold mt-3  `}>
          {topic}
        </div>
      </div>
      <div className="text-secondary z-50">{description}</div>
    </>
  );
};

export default Description;
