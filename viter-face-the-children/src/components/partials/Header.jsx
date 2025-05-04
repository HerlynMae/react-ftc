import React, { useState } from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuFunction = () => {
    setMenuOpen((open) => !open);
  };

  return (
    <header className="fixed w-full z-50 drop-shadow-sm">
      <div className="py-2 bg-primary text-white">
        <div className="flex justify-end gap-5 text-xs max-w-md lg:max-w-7xl w-full mx-auto px-3">
          <a href="#">Visit Philippine Frontline Ministries</a>
          <Link to={"/login"}>Login</Link>
        </div>
      </div>

      <div className="py-1 px-3 bg-lightGray shadow-sm">
        <div className="flex justify-between items-center max-w-md md:max-w-7xl w-full mx-auto px-3">
          <img src="/img/ftc_svg_logo.svg" alt="logo" />

          <Navigation isOpen={menuOpen} />

          <div
            className={`toggleMenu ${menuOpen ? "open" : ""}`}
            onClick={toggleMenuFunction}
          >
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
