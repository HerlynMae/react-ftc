import React from "react";

const Footer = () => {
  return (
    <footer className="md:py-2 bg-primary text-white">
      <div className="container">
        <div className="flex justify-between items-center gap-5">
          <p className="md:text-sm text-[10px]">© 2024 Face The Children</p>
          <a className="md:text-sm text-[10px]" href="#">
            Philippine Frontline Ministries
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
