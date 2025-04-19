import React from "react";
import { MdFamilyRestroom } from "react-icons/md";
import { FaArrowRightLong, FaHouseChimney } from "react-icons/fa6";
import Resident from "./Resident";
import NonResident from "./NonResident";

const items = document.querySelectorAll(".childTab");
const contents = document.querySelectorAll(".childItem");
//the purpose of this is to put an active in all images at one
// the purpose of this is to put an active in all images at one

items.forEach((item) => {
  item.addEventListener("click", () => {
    removeActiveTab(); //remove active item is just a variable
    item.classList.add("active");
    const activeContent = document.querySelector(`#${item.id}-detail`); // $ it is used as its alias and used it to know the string that needs to be imported in JS and it is shorthand for the getElementByID method
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

//remove active item is just a variable
function removeActiveTab() {
  items.forEach((item) => {
    item.classList.remove("active");
  });
}

function removeActiveContent() {
  contents.forEach((content) => {
    content.classList.remove("active");
  });
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
                className="childTab flex gap-2 items-center text-md  font-semibold text-gray-700"
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
            <div className="childItem" id="tabs-1-detail">
              <Resident />
            </div>
            <div className="childItem" id="tabs-1-detail">
              <NonResident />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildrenSponsorship;
