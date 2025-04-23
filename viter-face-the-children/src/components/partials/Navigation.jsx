import React from "react";
import ActionButton from "../partials/ActionButton";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex gap-5 items-center ">
      <ul className="headerNav flex gap-5 items-center uppercase md:capitalize text-base text-gray-700 ">
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
    </nav>
  );
};

export default Navigation;
