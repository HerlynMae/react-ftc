import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const ChildCard = ({ child, onSponsorClick }) => {
  const navigate = useNavigate();

  return (
    <div className="card w-[265px]">
      <div className="relative">
        <img
          className="w-[265px] h-[365px] object-cover"
          src={child.image}
          alt="child-img"
        />
        <div className="flex justify-between items-center absolute bottom-0 w-full p-2 bg-black/25 text-white">
          <div>
            <h3>{child.name}</h3>
            <button
              onClick={() =>
                navigate(`/resident-child-info/${child.residentChildInfoId}`)
              }
              className="text-secondary hover:text-orange-500"
            >
              View Info
            </button>
          </div>
          <button
            onClick={() => onSponsorClick(child)}
            className="flex items-center gap-3 bg-primary text-xs py-2 px-3 text-white rounded-md hover:bg-sky-600"
          >
            Sponsor <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="bg-secondary/60 w-full p-2">
        <p className="z-30 font-semibold text-base text-white">
          {child.percent}%- Sponsored
        </p>
      </div>
    </div>
  );
};

export default ChildCard;
