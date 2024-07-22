import React from "react";

const Congrats = () => {
  return (
    <div className="bg-background pt-6 pb-16 px-6">
      <div className="my-4 ml-6 text-lg text-white font-normal">
        <h3>COURSES &gt; SYLLABUS &gt; LECTURE &gt; FINAL PROJ</h3>
      </div>
      <div className="flex flex-col ml-12 py-5 mr-10 gap-5 border-b-2 border-purple">
        <h2 className="text-4xl font-bold text-primary">Congratulations!</h2>
        <p className="text-white font-semibold text-lg">
          You Have completed all the modules of the course.
        </p>
        <p className="text-white font-semibold text-lg">
          Submit the Final project and receive certificate
        </p>
      </div>
      <div className="flex flex-col ml-12 mr-10">
        <h2 className="text-4xl mt-5 mb-5 text-primary font-bold">FINAL PRACTICAL WORK </h2>
        <h4 className="text-white font-bold text-lg">Name</h4>
        <h6 className=" text-white font-weight-400  text-xl mb-5 leading-normal">
          VFundamental Principles: Understand the foundational principles of
          design, including layout, typography, color theory, and composition.
          These principles form the basis of effective visual communication.
        </h6>
        <h6 className="text-white font-weight-500 text-xl  w-11/12 px-4 py-4 mb-5 bg-[rgb(217,217,217)]/10 rounded-md">
          Paste the link of the assignment here
        </h6>
        
        
      </div>
      <button
        className="rounded-md bg-purple ml-12 mr-10 px-4 py-4 text-white text-base font-weight-400 cursor-pointer"
        >
          Mark Complete
          </button>
    </div>
  );
};

export default Congrats;
