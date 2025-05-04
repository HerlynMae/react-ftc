import React from "react";
import { IoClose } from "react-icons/io5";
import { CiCircleCheck } from "react-icons/ci";

const ModalChildDonation = ({ sectionStyle, handleClose, child }) => {
  return (
    <section
      className={`fixed top-0 left-0 w-full h-full ${sectionStyle}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="container">
        <div className="bg-black/40 fixed inset-0 z-10 grid place-content-center">
          <div className="min-w-[24rem] bg-white z-20 relative">
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
                  <div className="px-3  flex flex-wrap">
                    <div className="relative mt-5 flex items-start w-1/2">
                      <div className="flex items-start pl-0 w-fit ">
                        <span className="relative bottom-2 right-2">
                          <input
                            name="donationAmount"
                            type="radio"
                            className="before:content[''] peer p-1 relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-500 text-secondary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-secondary before:opacity-0 before:transition-opacity checked:border-secondary hover:border-secondary checked:before:bg-secondary hover:before:bg-secondary"
                          />
                          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-3 -translate-x-2/4 text-lightGray bg-secondary rounded-full    hover:text-lightGray peer-hover:bg-secondary peer-hover:rounded-full opacity-0 transition-opacity peer-checked:opacity-100 peer-hover:opacity-100">
                            <CiCircleCheck size={18} />
                          </div>
                        </span>

                        <label className="text-gray-800 text-sm">
                          <span>$</span>20.00
                        </label>
                      </div>
                    </div>
                    <div className="relative mt-5 flex items-start w-1/2">
                      <div className="flex items-start pl-0 w-fit ">
                        <span className="relative bottom-2 right-2">
                          <input
                            name="donationAmount"
                            type="radio"
                            className="before:content[''] peer p-1 relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-500 text-secondary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-secondary before:opacity-0 before:transition-opacity checked:border-secondary hover:border-secondary checked:before:bg-secondary hover:before:bg-secondary"
                          />
                          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-3 -translate-x-2/4 text-lightGray bg-secondary rounded-full    hover:text-lightGray peer-hover:bg-secondary peer-hover:rounded-full opacity-0 transition-opacity peer-checked:opacity-100 peer-hover:opacity-100">
                            <CiCircleCheck size={18} />
                          </div>
                        </span>

                        <label className="text-gray-800 text-sm">
                          <span>$</span>40.00
                        </label>
                      </div>
                    </div>
                    <div className="relative mt-5 flex items-start w-1/2">
                      <div className="flex items-start pl-0 w-fit ">
                        <span className="relative bottom-2 right-2">
                          <input
                            name="donationAmount"
                            type="radio"
                            className="before:content[''] peer p-1 relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-500 text-secondary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-secondary before:opacity-0 before:transition-opacity checked:border-secondary hover:border-secondary checked:before:bg-secondary hover:before:bg-secondary"
                          />
                          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-3 -translate-x-2/4 text-lightGray bg-secondary rounded-full    hover:text-lightGray peer-hover:bg-secondary peer-hover:rounded-full opacity-0 transition-opacity peer-checked:opacity-100 peer-hover:opacity-100">
                            <CiCircleCheck size={18} />
                          </div>
                        </span>

                        <label className="text-gray-800 text-sm">
                          <span>$</span>50.00
                        </label>
                      </div>
                    </div>
                    <div className="relative mt-5 flex items-start w-1/2">
                      <div className="flex items-start pl-0 w-fit ">
                        <span className="relative bottom-2 right-2">
                          <input
                            name="donationAmount"
                            type="radio"
                            className="before:content[''] peer p-1 relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-500 text-secondary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-secondary before:opacity-0 before:transition-opacity checked:border-secondary hover:border-secondary checked:before:bg-secondary hover:before:bg-secondary"
                          />
                          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-3 -translate-x-2/4 text-lightGray bg-secondary rounded-full    hover:text-lightGray peer-hover:bg-secondary peer-hover:rounded-full opacity-0 transition-opacity peer-checked:opacity-100 peer-hover:opacity-100">
                            <CiCircleCheck size={18} />
                          </div>
                        </span>

                        <label className="text-gray-800 text-sm">
                          <span>$</span>80.00
                        </label>
                      </div>
                    </div>
                    <div className="relative mt-5 flex items-start w-1/2">
                      <div className="flex items-start pl-0 w-fit ">
                        <span className="relative bottom-2 right-2">
                          <input
                            name="donationAmount"
                            type="radio"
                            className="before:content[''] peer p-1 relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-500 text-secondary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-secondary before:opacity-0 before:transition-opacity checked:border-secondary hover:border-secondary checked:before:bg-secondary hover:before:bg-secondary"
                          />
                          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-3 -translate-x-2/4 text-lightGray bg-secondary rounded-full    hover:text-lightGray peer-hover:bg-secondary peer-hover:rounded-full opacity-0 transition-opacity peer-checked:opacity-100 peer-hover:opacity-100">
                            <CiCircleCheck size={18} />
                          </div>
                        </span>

                        <label className="text-gray-800 text-sm">
                          <span>$</span>100.00
                        </label>
                      </div>
                    </div>
                    <div className="relative mt-5 flex items-start w-1/2">
                      <div className="flex items-start pl-0 w-fit ">
                        <span className="relative bottom-2 right-2">
                          <input
                            name="donationAmount"
                            type="radio"
                            className="before:content[''] peer p-1 relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-500 text-secondary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-secondary before:opacity-0 before:transition-opacity checked:border-secondary hover:border-secondary checked:before:bg-secondary hover:before:bg-secondary"
                          />
                          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-3 -translate-x-2/4 text-lightGray bg-secondary rounded-full    hover:text-lightGray peer-hover:bg-secondary peer-hover:rounded-full opacity-0 transition-opacity peer-checked:opacity-100 peer-hover:opacity-100">
                            <CiCircleCheck size={18} />
                          </div>
                        </span>

                        <label className="text-gray-800 text-sm">
                          <span>$</span>200.00
                        </label>
                      </div>
                    </div>
                    <div className="relative mt-5 flex items-start w-1/2">
                      <div className="flex items-start pl-0 w-fit ">
                        <span className="relative bottom-2 right-2">
                          <input
                            name="donationAmount"
                            type="radio"
                            className="before:content[''] peer p-1 relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-blue-gray-500 text-secondary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-secondary before:opacity-0 before:transition-opacity checked:border-secondary hover:border-secondary checked:before:bg-secondary hover:before:bg-secondary"
                          />
                          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-3 -translate-x-2/4 text-lightGray bg-secondary rounded-full    hover:text-lightGray peer-hover:bg-secondary peer-hover:rounded-full opacity-0 transition-opacity peer-checked:opacity-100 peer-hover:opacity-100">
                            <CiCircleCheck size={18} />
                          </div>
                        </span>

                        <label className="text-gray-800 whitespace-nowrap text-sm">
                          <span>$</span>300.00 to fully sponsored
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="my-5">
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
    </section>
  );
};

export default ModalChildDonation;
