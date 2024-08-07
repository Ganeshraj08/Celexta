import React from "react";
import Phone from "../assets/icons/Phone.png";
import PlaceMarker from "../assets/icons/PlaceMarker.png";
import Envelope from "../assets/icons/Envelope.png";
const Contact = () => {
  return (
    <div className="h-auto bg-background w-full  overflow-hidden">
      <div className="flex items-baseline mt-10 gap-0 justify-center mb-10 md:items-center ">
        <div className="flex items-end mr-2.5">
          <div className="w-[15px] bg-[#ccc] -ml-[2px] shadow-[2px_2px_8px_rgba(139,56,205,1)] h-[60px]"></div>
          <div className="w-[15px] bg-[#ccc] -ml-[2px] shadow-[2px_2px_8px_rgba(139,56,205,1)] h-[40px]"></div>
          <div className="w-[15px] bg-[#ccc] -ml-[2px] shadow-[2px_2px_8px_rgba(139,56,205,1)] h-[20px]"></div>
        </div>
        <h1 className="my-7 text-[#8b38cd] font-bold text-[30px] font-roboto text-shadow-[0_0_1px_#ffffff] md:text-[60px]">
          Contact Us
        </h1>
      </div>
      <div className="flex flex-col gap-0 mx-0 pb-4 px-3 items-center justify-center w-full sm:flex-row sm:mx-20 md:px-20">
        <div className=" mx-auto mb-4 mt-12 sm:w-[35%]">
        <h3 className="font-weight-400 text-base text-white text-center mb-4 rounded-sm">
            Reach us out!
          </h3>
          <div className="  bg-darkgradient overflow-hidden  shadow-custom-white rounded-xl">
            <div className="w-full h-40 mb-10 sm:mb-0"></div>
            <h6 className="text-center text-sm text-white mb-4">
              Live map location
            </h6>
            <div className=" bg-primary mx-2.5 rounded-sm mb-10 flex-col sm:mb-2 md:mb-2 lg:mb-8 md:flex-row">
              <div className="flex flex-col flex-1 p-2 ">
                <div className="flex gap-2 items-center justify-center">
                  <img
                    src={PlaceMarker}
                    alt="Place Marker"
                    height={30}
                    width={30}
                  />
                  <div>
                    <h6 className="text-white text-sm">
                      24, main road north street
                    </h6>
                    <h6 className="text-white text-sm">South Chennai</h6>
                    <h6 className="text-white text-sm">Chennai - 28</h6>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center p-4">
                <div className="flex gap-2 items-center">
                  <img src={Phone} alt="Phone Icon" height={30} width={30} />
                  <h6 className="text-white text-sm font-weight-300">
                    998877665544
                  </h6>
                </div>
                  <div className="flex gap-2 items-center">
                  <img
                    src={Envelope}
                    alt="Envelope Icon"
                    height={30}
                    width={30}
                  />
                  <h6 className="text-white text-sm font-weight-300">
                    clexta@gmail.com
                  </h6>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 ">
          <h3 className="font-weight-400 text-base text-white text-center mb-4 rounded-sm">
            Contact Us Through This
          </h3>
          <div className="w-full mx-auto rounded-xl bg-customgradient sm:w-[50%]  h-[430px] ">
            <form className="flex flex-col">
              <div className=" my-3 ml-8  w-3/4 ">
                <label htmlFor="Name" className="text-sm text-white mb-4">
                  Enter Your Name
                </label>
                <input
                  className="inp block w-full py-2.3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-background focus:outline-none focus:ring-0 focus:text-white focus:border-background peer sm:py-0 "
                  type="text"
                  maxLength={50}
                />
                <label htmlFor="email" className="text-sm text-white mb-4">
                  Enter Your Email
                </label>
                <input
                  className="inp block w-full py-2.3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-background focus:outline-none focus:ring-0 focus:text-white focus:border-background peer sm:py-0 "
                  type="email"
                  maxLength={50}
                />
                <label htmlFor="email" className="text-sm text-white mb-4">
                  Enter Your Ph-Number
                </label>
                <input
                  className="block w-full py-2.3 px-0 text-lg text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:focus:border-background focus:outline-none focus:ring-0 focus:text-white focus:border-background peer sm:py-0 "
                  type="text"
                  maxLength={50}
                />
                <label htmlFor="email" className="text-sm text-white mb-4">
                  Service Required
                </label>
                <textarea
                  type="text"
                  className="block w-full p-4 text-white border border-transparent rounded-sm bg-whitebg text-sm focus:ring-blue-500 focus:border-none outline-none  dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:p-2"
                />
                <label htmlFor="email" className="text-sm text-white mb-4">
                  Your Enquiry
                </label>
                <textarea
                  type="text"
                  className="block w-full p-4 text-white border border-transparent rounded-sm bg-whitebg text-sm focus:ring-blue-500 focus:border-none outline-none  dark:focus:ring-blue-500 dark:focus:border-blue- sm:p-2"
                />
              </div>
              <div className="flex justify-center mx-auto mb-4">
                <button
                  type="submit"
                  className="bg-pink px-2 py-3 rounded-lg text-white text-sm cursor-pointer sm:px-2 sm:py-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
