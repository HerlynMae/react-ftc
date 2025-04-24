import React, { useState } from "react";
import { MdFamilyRestroom } from "react-icons/md";
import { FaHouseChimney } from "react-icons/fa6";
import Resident from "./Resident";
import NonResident from "./NonResident";

const ChildrenSponsorship = () => {
  const [activeTab, setActiveTab] = useState("tabs1");

  return (
    <section className="pt-52 pb-20 bg-white">
      <div className="container">
        {/* Tabs */}
        <ul className="flex gap-10 pb-2 mb-10 justify-center relative">
          <li>
            <button
              onClick={() => setActiveTab("tabs1")}
              className={`relative flex items-center gap-2 font-semibold ${
                activeTab === "tabs1"
                  ? "text-black after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-orange-500"
                  : "text-gray-400"
              }`}
            >
              <FaHouseChimney size={20} />
              <span>Resident</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("tabs2")}
              className={`relative flex items-center gap-2 font-semibold ${
                activeTab === "tabs2"
                  ? "text-black after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-[2px] after:bg-orange-500"
                  : "text-gray-400"
              }`}
            >
              <MdFamilyRestroom size={20} />
              <span>Non-Resident</span>
            </button>
          </li>
        </ul>

        {/* Content */}
        <div>
          {activeTab === "tabs1" && <Resident />}
          {activeTab === "tabs2" && <NonResident />}
        </div>
      </div>
    </section>
  );
};

export default ChildrenSponsorship;
