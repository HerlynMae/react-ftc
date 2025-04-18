import React from "react";

const SectionTitle = ({ title, desc }) => {
  return (
    <div className="title">
      <span className="uppercase text-sm text-secondary text-balance">
        {title}
      </span>
      <h2 className=" text-lg lg:text-3xl text-balance font-semibold text-primary leading-snug">
        {desc}
      </h2>
    </div>
  );
};

export default SectionTitle;
