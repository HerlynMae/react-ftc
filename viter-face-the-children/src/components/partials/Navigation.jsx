import React from "react";
import ActionButton from "../partials/ActionButton";
import { NavLink } from "react-router-dom";

const Navigation = ({ isOpen }) => {
  return (
    <nav className="flex gap-5 items-center py-2">
      {/* desktop */}
      <ul className="headerNav hidden md:flex gap-5 items-center uppercase md:capitalize text-base text-gray-700 ">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/faq"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/strategy"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Strategy
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/sponsor"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Sponsor child
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/donation"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <ActionButton text={"Donate"} />
          </NavLink>
        </li>
      </ul>
      {/* mobile */}
      <ul
        className={`headerNav md:hidden flex flex-col md:flex-row gap-5 items-center uppercase md:capitalize text-base text-gray-700 transition-all duration-300 ease-in-out bg-lightGray  fixed top-[5rem] 
    text-center justify-start h-screen w-full py-5
   ${
     isOpen
       ? " right-0 duration-500 ease-in-out"
       : " right-[-100%] duration-500 ease-in-out md:flex"
   }`}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/faq"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            FAQ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/strategy"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Strategy
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sponsor"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Sponsor child
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/donation"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <ActionButton text={"Donate"} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
