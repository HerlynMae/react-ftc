import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <section className="bg-gradient-to-t from-white to to-blue-500 h-screen flex flex-col gap-4 pt-40 text-center text-white">
      <div className="container">
        <div className="">
          <h1 className="text-white text-8xl font-semibold">404</h1>
          <h3 className="text-2xl font-semibold">Page not found</h3>
          <p>
            Unfortunately, the desired page cannot be accessed at the moment.
          </p>
          <p>Please check your URL</p>
          <div className="max-w-sm mx-auto grid place-content-center">
            <button className="group gap-1 flex items-center bg-white py-2 px-6 rounded-md text-blue-500 font-semibold mt-3">
              <FaLongArrowAltLeft />
              <p className="group-hover:ml-4 duration-100 ease-in-out text-sm leading-snug tracking-tighter">
                Go back
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
