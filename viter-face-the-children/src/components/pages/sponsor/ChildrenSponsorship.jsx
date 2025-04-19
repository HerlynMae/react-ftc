import React from "react";
import { MdFamilyRestroom } from "react-icons/md";
import { FaArrowRightLong, FaHouseChimney } from "react-icons/fa6";
import Resident from "./Resident";
import NonResident from "./NonResident";

const tabs = document.querySelectorAll(".childTab");
const tabContents = document.querySelectorAll(".childItem");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveTab(tab);
  });
});

function setActiveTab(selectedTab) {
  // remove active
  tabs.forEach((tab) => tab.classList.remove("active"));
  tabContents.forEach((content) => content.classList.remove("active"));

  // add active
  selectedTab.classList.add("active");
  const targetContent = document.querySelector(`#${selectedTab.id}-detail`);
  if (targetContent) {
    targetContent.classList.add("active");
  }
}

const ChildrenSponsorship = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="">
          {/* tabs */}
          <ul className="flex gap-10 pb-2 mb-10 justify-center">
            <li>
              <button
                className="childTab flex gap-2 items-center text-md  font-semibold text-gray-700 active"
                id="tabs-1"
              >
                <FaHouseChimney size={20} />
                <p>Resident</p>
              </button>
            </li>
            <li>
              <button
                className="childTab flex gap-2 items-center text-md  font-semibold text-gray-700"
                id="tabs-2"
              >
                <MdFamilyRestroom size={20} />
                <p>Non-Resident</p>
              </button>
            </li>
          </ul>
          {/* content */}
          <div className="">
            <div className="childItem active" id="tabs-1-detail">
              <Resident />
            </div>
            <div className="childItem" id="tabs-2-detail">
              <NonResident />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildrenSponsorship;
