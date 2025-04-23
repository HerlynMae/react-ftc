import React from "react";
import { Link } from "react-router-dom";

const ChildSponsorshipCreateAccount = () => {
  return (
    <section className="translate-y-12 md:translate-y-14">
      <div className="container">
        <div className="flex flex-col justify-center items-center w-96 mx-auto p-6">
          <img src="./img/ftc_svg_logo.svg" alt="logo" className="w-[19rem]" />
          <div className="w-full">
            <h4 className=" mt-12 mb-5 text-lg text-gray-700 font-semibold">
              Create a Donor Account
            </h4>
            <form>
              <div className="relative mb-5">
                <label>Name</label>
                <input type="text" />
                <p>Required</p>
              </div>
              <div className="relative mb-5">
                <label>Email</label>
                <input type="text" />
                <p>Required</p>
              </div>
              <div className="relative mb-5">
                <label>Address</label>
                <textarea className="  h-32"></textarea>
                <p className="py-0">Required</p>
              </div>
              <div className="relative mb-5">
                <label>City</label>
                <input type="text" />
                <p>Required</p>
              </div>
              <div className="relative mb-5">
                <label>State/Province</label>
                <input type="text" />
                <p>Required</p>
              </div>
              <div className="relative mb-5">
                <label>Country</label>
                <input type="search" />
                {/* <ul className="absolute z-50 h-36 overflow-y-auto w-full bg-white border border-gray-200 rounded-md rounded-tr-none rounded-tl-none rounded-br-none">
                  {countryData.map((item, key) => {
                    <button
                      className="p-1 pl-3 w-full text-left bg-white hover:bg-dark/5  focus:bg-dark/5  cursor-pointer duration-200"
                      key={key}
                    >
                      {item.name}
                    </button>;
                  })}
                </ul> */}
                <p>Required</p>
              </div>
              <div className="relative mb-5">
                <label>Zip Code</label>
                <input type="text" />
                <p>Required</p>
              </div>
              <button className="bg-primary text-xs w-full py-2 px-4 text-white rounded-md border border-primary hover:bg-white hover:text-primary transition duration-200">
                Register
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

export default ChildSponsorshipCreateAccount;
