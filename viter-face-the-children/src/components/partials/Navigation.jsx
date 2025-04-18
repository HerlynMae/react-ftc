import React from "react";
import ActionButton from "../partials/ActionButton";

const Navigation = () => {
  return (
    <nav className="flex gap-5 items-center ">
      <ul className="headerNav flex gap-5 items-center uppercase md:capitalize text-base text-gray-700 ">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Strategy</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Sponsor child</a>
        </li>
        <ActionButton text={"Donate"} />
      </ul>
    </nav>
  );
};

export default Navigation;
