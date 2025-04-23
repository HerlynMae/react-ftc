import React from "react";

const TeamCard = ({ img, name, role, email }) => {
  return (
    <div className="">
      <img src={img} alt="team-img" />
      <div className="text-center">
        <h3 className="text-lg text-primary font-semibold mt-4">{name}</h3>
        <p className="text-gray-700 italic text-xs py-1">{role}</p>
        <a href="#" className="text-primary  text-xs">
          {email}
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
