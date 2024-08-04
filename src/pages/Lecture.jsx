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
          <div className="font-medium text-xl bg-[rgba(217,217,217,0.1)] px-6 py-2.5">
          <h5 className="text-base  px-6 py-2.5 sm:text-lg mb-2">&lt;Video Description&gt;</h5>
          <p className="px-6 py-2.5 text-base sm:text-lg sm:font-semibold">
          We specialize in [briefly describe your core services or products]. Our team of [number of employees or experts] brings together expertise in [mention specific skills or specialties]. Whether you’re looking to [describe key service benefits or outcomes], we tailor solutions that meet your unique needs.

          </p>
          </div>
        
          <div className="text-center">
          <button 
          style={{
            borderTopLeftRadius:"10px",
            borderBottomRightRadius:"10px",
          }}
          className="cursor-pointer bg-[rgba(217,217,217,0.1)] px-5 py-3 border border-transparent  text-[20px] mt-12">Assesment 1</button>
          <h5 className="text-[#A947F6] mt-8">
          Here, The Assessment is based on all the topics you have completed in this Module.
          </h5>
          </div>
        </div>
        <div className="mt-12 mx-20 w-[90]">
          <h2 className="text-[#8C52FF] font-bold text-2xl mb-5">Assignment - Module n</h2>
          <h5 className="text-white mb-5 font-semibold text-xl">Name of the Assignment</h5>
          <h5 className="text-[21px] leading-[32px] font-normal">
            Fundamental Principles: Understand the foundational principles of
            design, including layout, typography, color theory, and composition.
            These principles form the basis of effective visual communication.
          </h5>
          
        </div>
        <div className="mx-20 mt-6 flex items-center ">
      <h6 className="text-white font-weight-500 text-sm  w-2/3 px-4 py-4 mb-5 bg-[rgb(217,217,217)]/10 rounded-md md:text-xl">
          Paste the link of the assignment here
        </h6>
        <button
        className="rounded-md bg-purple ml-12 mr-10 px-3 py-3  text-white text-base font-weight-400 cursor-pointer"
        >
         Submit
          </button>
      </div>
      <div className="mt-5 flex justify-between">
      <button
        className="rounded-full bg-white ml-12 mr-10 p-3  text-pink text-sm font-semibold cursor-pointer md:text-base md:p-2"
        >
          &lt;&lt; Previous
          </button>
          <button
        className="rounded-full bg-white ml-12 mr-10 p-3  text-pink text-sm font-semibold cursor-pointer md:text-base md:p-2"
        >
           Next &gt;&gt;
          </button>
      </div>
      </div>
    </div>
  );
};

export default Lecture;
