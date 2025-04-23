import React from "react";
import { Link } from "react-router-dom";

const ChildSponsorshipLogin = () => {
  return (
    <section className="translate-y-24 md:translate-y-44">
      <div className="container">
        <div className="flex flex-col justify-center items-center w-96 mx-auto p-6">
          <img src="./img/ftc_svg_logo.svg" alt="logo" className="w-[18rem]" />
          <div className="w-full">
            <h4 className="uppercase mt-8 mb-5 text-lg text-gray-700 font-semibold">
              LOGIN
            </h4>
            <form>
              <div className="relative mb-6">
                <label>Email</label>
                <input type="text" />
                <p>Required</p>
              </div>
              <div className="relative mb-6">
                <label>Password</label>
                <input type="password" />
                <p>Required</p>
              </div>
              <button className="bg-primary text-xs w-full py-2 px-4 mt-2 text-white rounded-md border border-primary hover:bg-white hover:text-primary transition duration-200">
                Login
              </button>
            </form>
            <div className="mt-5 text-xs">
              <ul className="flex items-center gap-1 mb-2">
                <li>
                  <p className="text-xs text-gray-700">Need an Account</p>
                </li>
                <li className="text-primary underline">
                  <Link to={"/create-password"}>Create an Account</Link>
                </li>
              </ul>
              <ul className="flex items-center gap-1">
                <li>
                  <p className="text-xs text-gray-700">
                    Did you forget your password?
                  </p>
                </li>
                <li className="text-primary underline">
                  <Link to={"/forgot-password"}>Forgot password</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildSponsorshipLogin;
