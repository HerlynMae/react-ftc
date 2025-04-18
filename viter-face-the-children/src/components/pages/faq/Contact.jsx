import React from "react";
import SectionTitle from "../../partials/SectionTitle";
import ActionButton from "../../partials/ActionButton";

const Contact = () => {
  return (
    <section className="bg-lightGray py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:mt-5 max-w-[1100px] mx-auto">
          <div className="  px-4">
            <div className="md:max-w-96">
              <SectionTitle
                title={"Fequently Asked Question"}
                desc={"Can't find what you are looking for?"}
              />
            </div>

            <p className="my-5 text-gray-700 md:max-w-md">
              If your questions is not listed above, you can use the form to
              send directly to us your questions
            </p>
          </div>
          <form className=" ">
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
              <label>Phone</label>
              <input type="text" />
              <p>Required</p>
            </div>
            <div className="relative ">
              <label>Subject</label>
              <textarea className="resize-none  h-36"></textarea>
              <p className="py-0">Required</p>
            </div>
            <button className="bg-secondary text-xs py-2 px-4 text-white rounded-md hover:text-gray-700">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
