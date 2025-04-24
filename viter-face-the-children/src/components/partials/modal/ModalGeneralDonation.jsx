import React from "react";
import { IoClose } from "react-icons/io5";

const ModalGeneralDonation = ({ sectionStyle, handleClose, child }) => {
  return (
    <section
      className={`fixed top-0 left-0 w-full h-full ${sectionStyle}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="container">
        <div
          className="backDrop bg-black/40 fixed w-full h-full left-0 top-0 z-1 grid place-content-center
        "
        >
          <div className="">
            <div className="min-w-[24rem] mx-auto bg-white">
              <div className="flex justify-between items-center p-3 bg-primary text-white font-semibold">
                <h4>Sponsor {child?.name}</h4>
                <button onClick={handleClose}>
                  <IoClose />
                </button>
              </div>
              <div className=" p-3 mt-2">
                <h5 className="text-gray-700 font-semibold sm leading-snug tracking-tighter">
                  Choose amount
                </h5>
                <div className="">
                  <form className="text-gray-700">
                    <div className="my-5">
                      <div className="relative mb-5">
                        <label>*Designation</label>
                        <select className="">
                          <option value="">--</option>
                          <option value="">General donation</option>
                        </select>
                        <p>Required</p>
                      </div>
                      <div className="relative mb-5">
                        <label>Amount</label>
                        <input type="text" />
                        <p>Required</p>
                      </div>
                      <div className="relative mb-5">
                        <label>*Frequency</label>
                        <select className="">
                          <option value="">--</option>
                          <option value="">One-Time</option>
                          <option value="">Monthly</option>
                        </select>
                        <p>Required</p>
                      </div>
                      <div className="relative mb-5">
                        <label>Remarks</label>
                        <textarea className="  h-28"></textarea>
                        <p className="py-0">Required</p>
                      </div>
                      <div className="relative mb-5">
                        <label>Email</label>
                        <input type="text" />
                        <p>Required</p>
                      </div>
                      <button className="bg-primary text-xs w-full py-2 px-4 text-white rounded-md border border-primary hover:bg-white hover:text-primary transition duration-200">
                        Proceed
                      </button>
                    </div>
                  </form>
                </div>
                <div className="text-gray-700  max-w-52 ml-auto">
                  <p className="text-xs ">Donate with your credit card.</p>
                  <img
                    className="w-52"
                    src="./img/payment.png"
                    alt="card-payment"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModalGeneralDonation;
