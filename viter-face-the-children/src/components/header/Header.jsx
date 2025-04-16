import React from "react";
import Navigation from "./Navigation";

<script src="./src/js/toggleMenu.js"></script>;

const Header = () => {
  return (
    <header className="lg:static fixed w-full">
      <div className="py-2 bg-primary text-white">
        <div className="flex justify-end gap-5 text-xs max-w-md lg:max-w-7xl w-full mx-auto px-3">
          <a href="#">Visit Philippine Frontline Ministries</a>
          <a href="#">Login</a>
        </div>
      </div>
      <div className=" py-3 lg:py-4 px-3 bg-lightGray shadow-sm ">
        <div className="flex justify-between items-center   max-w-md md:max-w-7xl w-full mx-auto px-3">
          <img
            src="./src/assets/ftc_svg_logo.svg"
            alt="logo"
            className="w-52"
          />
          <Navigation />
          <div className="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
