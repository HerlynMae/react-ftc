import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-primary text-white">
      <div className="container">
        <div className="flex justify-between items-center gap-5">
          <p className=" text-[10px]">© 2024 Face The Children</p>
          <a className=" text-[10px]" href="#">
            Philippine Frontline Ministries
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
