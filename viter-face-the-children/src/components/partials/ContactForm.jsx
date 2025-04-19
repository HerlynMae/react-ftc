import React from "react";

const ContactForm = () => {
  return (
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
      <div className="relative mb-5">
        <label>Subject</label>
        <input type="text" />
        <p>Required</p>
      </div>
      <div className="relative ">
        <label>Message</label>
        <textarea className="resize-none  h-52"></textarea>
        <p className="py-0">Required</p>
      </div>
      <button className="bg-secondary text-xs py-2 px-4 text-white rounded-md hover:text-gray-700 mt-10">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
