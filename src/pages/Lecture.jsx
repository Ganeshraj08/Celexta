import React from "react";
import Playbtnicon from "../assets/icons/Playbtnicon.png";

const Lecture = () => {
  return (
    <div className="bg-[#130022] text-white pb-10">
      <div className="ml-4 py-8 font-normal text-xl leading-5 mb-10">
        <h3>COURSES &gt; SYLLABUS &gt; LECTURE</h3>
      </div>
      <div className="">
        <div className=" flex flex-col items-center justify-center mx-20 w-[84] mb-4">
          <div className="relative h-[500px] w-full bg-[rgba(217,217,217,0.1)]">
            <img src={Playbtnicon} alt="video-icon" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
          </div>
        </div>
        <div className="mx-20">
          <h2 className="text-[#8C52FF] font-bold text-2xl mb-5">Module n &gt; Topic &gt;</h2>
          <h5 className="font-medium text-xl bg-[rgba(217,217,217,0.1)] px-6 py-2.5 h-[250px]">Video Description</h5>
          <button className="cursor-pointer bg-[rgba(139,56,205,1)] px-4 py-2 border border-transparent rounded-xl text-[20px] mt-12">Take Test</button>
        </div>
        <div className="mt-12 mx-20 w-[90]">
          <h2 className="text-[#8C52FF] font-bold text-2xl mb-5">Assignment - Module n</h2>
          <h5 className="text-white mb-5 font-semibold text-xl">Name of the Assignment</h5>
          <h5 className="text-[21px] leading-[32px] font-normal">
            Fundamental Principles: Understand the foundational principles of
            design, including layout, typography, color theory, and composition.
            These principles form the basis of effective visual communication.
          </h5>
          <p className="font-normal text-[22px]  px-[30px] py-[10px] mt-7 bg-[rgb(217,217,217)]/10">
            Paste the link of the assignment here
          </p>
        </div>
        <button className="ml-20 mt-7 bg-[rgba(139,56,205,1)] px-4 py-2 border border-transparent rounded-md text-[20px] cursor-pointer">Mark Complete</button>
      </div>
    </div>
  );
};

export default Lecture;
