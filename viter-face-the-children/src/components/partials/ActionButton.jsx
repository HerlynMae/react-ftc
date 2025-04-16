import React from "react";

const ActionButton = ({ text }) => {
  return (
    <>
      <button className="bg-primary text-xs py-2 px-4 text-white rounded-md hover:bg-sky-600">
        {text}
      </button>
    </>
  );
};

export default ActionButton;
