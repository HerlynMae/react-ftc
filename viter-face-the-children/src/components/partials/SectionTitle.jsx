import React from "react";

const SectionTitle = ({ title, desc }) => {
  return (
    <div className="title">
      <span className="uppercase text-sm text-secondary">{title}</span>
      <h2 className=" text-xl lg:text-4xl font-semibold text-primary">
        {desc}
      </h2>
    </div>
  );
};

export default SectionTitle;
