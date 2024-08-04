import React from "react";

const CurrentCourse = () => {
  return (
    <div className="flex  flex-col items-center justify-center bg-background text-white p-4">
      <div className="w-[90%] max-w-[2000px] bg-purple-900  rounded-lg shadow-lg">
        <div className="flex gap-6 items-center mb-6">
          <h2 className="text-2xl font-bold">Course Details</h2>
          <button className="text-pink-500 focus:outline-none">&#9660;</button>
        </div>
        <p className="text-white text-lg">( On Process )</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-9 md:gap-x-10 mt-4">
          <div>
            <label className="block ">Course</label>
            <input
              type="text"
              value="Name of the Course"
              readOnly
              className="w-full  text-pink rounded-[50px] p-2 mt-2"
            />
          </div>
          <div>
            <label className="block">Module ( On Process )</label>
            <input
              type="text"
              value="Module 1"
              readOnly
              className="w-full text-white bg-pink rounded-[50px] p-2 mt-2"
            />
          </div>
          <div>
            <label className="block ">Date of enrollment</label>
            <input
              type="text"
              value="Jan 20, 2024"
              readOnly
              className="w-full  text-pink  rounded-[50px] p-2 mt-2"
            />
          </div>
          <div>
            <label className="block">No. of modules remaining</label>
            <input
              type="text"
              value="09"
              readOnly
              className="w-full bg-pink px-2 text-white rounded-[50px] p-2 mt-2"
            />
          </div>
          <div>
            <label className="block">Duration</label>
            <input
              type="text"
              value="90 days"
              readOnly
              className="w-full text-pink rounded-[50px] p-2 mt-2"
            />
          </div>
          <div className="row-span-3">
            <label className="block text-white">Scores</label>
            <div className="bg-white   p-4 rounded-[20px] mt-2">
              <h3 className="text-lg text-violet-500 mb-4">
                Assessment Scores
              </h3>
              <div className="overflow-y-auto max-h-40">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="flex gap-40 xitems-center mb-2">
                    <span className="text-pink font-bold">Module {i + 1}</span>
                    <span className="text-pink font-bold">00</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex mx-[10%] max-sm:flex-col max-sm:gap-10 items-center justify-between ">
            <div className="flex flex-col items-center">
              <span className="text-2xl border-[9px] border-b-pink border-r-pink md:p-10 p-6 rounded-[50%]">
                0.00%
              </span>
              <span className="">Score ( Recent module )</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl border-[9px] border-b-pink border-r-pink md:p-10 p-6 rounded-[50%]">
                0.00%
              </span>
              <span className="">Total Score</span>
            </div>
          </div>
          <div className="col-span-2 flex justify-end mb-10">
            <button className="bg-pink c text-white py-2 px-4 rounded-lg focus:outline-none">
              Download certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentCourse;
