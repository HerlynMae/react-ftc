import React from "react";

const AboutCard = ({ number, text }) => {
  return (
    <div className="card">
      <h2 className="text-3xl lg:text-4xl text-secondary font-semibold">
        {number}
      </h2>
      <small className="text-gray-700">{text}</small>
    </div>
  );
};

export default AboutCard;
