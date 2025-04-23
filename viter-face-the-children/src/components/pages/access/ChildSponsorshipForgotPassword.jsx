import React from "react";
import { Link } from "react-router-dom";

const ChildSponsorshipForgotPassword = () => {
  return (
    <section className="translate-y-24 md:translate-y-36">
      <div className="container">
        <div className="flex flex-col justify-center items-center w-96 mx-auto p-6">
          <img src="./img/ftc_svg_logo.svg" alt="logo" className="w-[19rem]" />
          <div className="w-full">
            <h4 className="uppercase mt-12 mb-5 text-lg text-gray-700 font-semibold">
              FORGOT PASSWORD
            </h4>
            <form>
              <div className="relative mb-6">
                <label>Email</label>
                <input type="text" />
                <p>Required</p>
              </div>

              <button className="bg-primary text-xs w-full py-2 px-4 mt-2 text-white rounded-md border border-primary hover:bg-white hover:text-primary transition duration-200">
                Submit
              </button>
            </form>
            <div className="mt-5 text-xs">
              <ul className="flex items-center gap-1">
                <li>
                  <p className="text-xs text-gray-700">Go back to</p>
                </li>
                <li className="text-primary underline">
                  <Link to={"/login"}>login</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildSponsorshipForgotPassword;
