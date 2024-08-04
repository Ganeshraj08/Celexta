import React from "react";

const Congrats = () => {
  return (
    <div className="bg-background pt-6 pb-16 px-6">
      <div className="my-4 ml-6 text-sm text-white font-normal md:text-lg ">
        <h3>COURSES &gt; SYLLABUS &gt; LECTURE &gt; FINAL PROJ</h3>
      </div>
      <div className="flex flex-col ml-12 py-5 mr-10 gap-5 border-b-2 border-purple">
        <h2 className="text-4xl font-bold text-primary text-center">Congratulations!</h2>
        <p className="text-white font-semibold text-lg text-center">
          You Have completed all the modules of the course.
        </p>
        <p className="text-white font-semibold text-lg text-center">
          Submit the Final project and receive certificate
        </p>
      </div>
      <div className="flex flex-col ml-12 mr-10">
        <h2 className="text-4xl mt-5 mb-5 text-primary font-bold text-center">MINI PROJECT</h2>
        <h4 className="text-white font-bold text-lg">Name</h4>
        <h6 className=" text-white font-weight-400  text-xl mb-5 leading-normal">
          VFundamental Principles: Understand the foundational principles of
          design, including layout, typography, color theory, and composition.
          These principles form the basis of effective visual communication.
        </h6>
      
        
        
      </div>
      <div className="ml-12 mt-6 flex items-center ">
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
  );
};

export default Congrats;
