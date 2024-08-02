import React from "react";
import Polygon3 from "../assets/icons/Polygon3.png";
import Close from "../assets/icons/Close.png";
const UserProfile = () => {
  return (
    <div className=" h-full w-full bg-gradient-to-r from-purpleStart to-purpleEnd flex justify-center items-center mx-auto ">
      <div className="h-11/12 w-[97%] backdrop-blur-md bg-blur m-1 p-2 rounded-lg my-3 ">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex flex-1 flex-col mr-3">
            <div className="w-full flex justify-between mr-2 mt-2 mb-2 ">
              <h2 className="text-white text-2xl ">User Profile</h2>
              <a href="#" className="text-white flex items-center gap-1">
                <img src={Polygon3} className="w-4 h-4 m" />
                Personal Details
              </a>
            </div>
            <div className="w-full items-center flex gap-4 mt-4 mx-3">
              <div className="rounded-full bg-gray-200 w-16 h-16"></div>
              <h1 className="text-white text-xl mt-2">John Smith</h1>
            </div>
            <div className="flex items-center ml-8 pl-12">
              <div className="w-full flex flex-col gap-4 mt-4 ">
                <div className="flex flex-col">
                  <label className="text-white mb-1 ml-3">College</label>
                  <input
                    type="text"
                    className="p-2 ml-3 rounded-full w-3/4 bg-gradient-to-r from-purpleStart to-purpleEnd  text-white text-[11px] sm:text-base"
                    placeholder="Name of the College"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white mb-1 ml-3">
                    Year and Department
                  </label>
                  <input
                    type="text"
                    
                    className="p-2 ml-3 rounded-full w-3/4 bg-gradient-to-r from-purpleStart to-purpleEnd text-white text-[11px] sm:text-base"
                    placeholder="Name of the Year and Department"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white mb-1 ml-3">Email</label>
                  <input
                    type="email"
                    className="p-2 ml-3 rounded-full w-3/4 bg-gradient-to-r from-purpleStart to-purpleEnd text-white text-[11px] sm:text-base"
                    placeholder="Email id"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white mb-1 ml-3">Linked In</label>
                  <input
                    type="text"
                    className="p-2 ml-3 rounded-full w-3/4 bg-gradient-to-r from-purpleStart to-purpleEnd text-white text-[11px] sm:text-base"
                    placeholder="Name of the Account"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white mb-1 ml-3">Linked In</label>
                  <input
                    type="text"
                    className="p-2 ml-3 rounded-full w-3/4 bg-gradient-to-r from-purpleStart to-purpleEnd text-white text-[11px] sm:text-base"
                    placeholder="Name of the Account"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1  flex-col border-t-2 border-pink sm:border-l-2 sm:border-t-0 sm:border-pink">
            <div className="mt-3 mr-6 ml-10 px-4 ">
              <div className="flex justify-between ">
                <div className="flex flex-col gap-1 text-white ">
                  <div className="flex gap-1 items-center">
                    <h5>Course Details</h5>
                    <img src={Polygon3} className="w-4 h-4" />
                  </div>
                  <p>(on process)</p>
                </div>

                <img src={Close} className="h-4 w-4 cursor-pointer" />
              </div>
              <div className="flex flex-col gap-5 mt-5 border-b-2 border-pink pb-5">
                <div className="flex flex-col gap-2">
                  <label className="text-white">Course</label>
                  <input
                  type="text"
                    className="w-2/3 rounded-lg text-pink placeholder-pink p-2"
                    placeholder="Name of the Course"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white">Date of Enrollment</label>
                  <div className="space-x-5 space-y-5">
                  <input
                  type="text"
                    className="w-2/3 rounded-lg text-pink placeholder-pink p-2"
                    placeholder="Jan 20,2024"
                  />
                  <button
                  className="bg-pink px-2 py-3 rounded-md text-white text-md cursor-pointer"
                  >view More</button>
                  </div>
                  
                </div>
                
              </div>
            </div>
            <div className="text-white flex flex-col mt-3 mr-6 ml-10 px-4">
            <div className="flex flex-col gap-1 text-white mb-2">
                  <div className="flex gap-1 items-center">
                    <h5>Course Details</h5>
                    <img src={Polygon3} className="w-4 h-4" />
                  </div>
                  <p>(completed)</p>
                </div>
            </div>
            <div className="w-10/12 flex items-center mx-auto">
                <div className="w-full h-11/12 rounded-lg bg-white">
                        <div className="flex flex-col gap-5 overflow-y-scroll mb-2">
                        <div className="flex justify-between px-4 mt-2">
                                <li className="text-pink text-base">Course Name</li>
                                <button className="bg-pink rounded-md p-2 text-white">view More</button>
                            </div>
                            <div className="flex justify-between px-4">
                                <li className="text-pink text-base">Course Name</li>
                                <button className="bg-pink rounded-md p-2 text-white">view More</button>
                            </div>
                            <div className="flex justify-between px-4">
                                <li className="text-pink text-base">Course Name</li>
                                <button className="bg-pink rounded-md p-2 text-white">view More</button>
                            </div>
                            <div className="flex justify-between px-4">
                                <li className="text-pink text-base">Course Name</li>
                                <button className="bg-pink rounded-md p-2 text-white">view More</button>
                            </div>
                        </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
