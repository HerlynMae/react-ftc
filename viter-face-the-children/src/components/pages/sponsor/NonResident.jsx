import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { nonResidentChildInfo } from "./sponsor-data";
import { useNavigate } from "react-router";

const NonResident = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="flex flex-wrap justify-center items-center gap-3">
        {nonResidentChildInfo.map((item) => (
          <div className="card w-[265px]" key={item.nonResidentChildInfoId}>
            <div className="relative">
              <img
                className="w-[265px] h-[365px] object-cover"
                src={item.image}
                alt="child-img"
              />
              <div className="flex justify-between items-center absolute bottom-0 w-full p-2 bg-black/25 text-white">
                <div>
                  <h3>{item.name}</h3>
                  <button
                    onClick={() =>
                      navigate(
                        `/non-resident-child-info/${item.nonResidentChildInfoId}`
                      )
                    }
                    className="text-secondary hover:text-orange-500"
                  >
                    View Info
                  </button>
                </div>
                <button className="flex items-center gap-3 bg-primary text-xs py-2 px-3 text-white rounded-md hover:bg-sky-600">
                  Sponsor <FaArrowRightLong />
                </button>
              </div>
            </div>
            <div className="bg-secondary/60 w-full p-2">
              <p className="z-30 font-semibold text-base text-white">
                {item.percent}%- Sponsored
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NonResident;
