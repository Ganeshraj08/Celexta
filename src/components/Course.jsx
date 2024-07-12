import React from "react";

const Course = ({ heading, className }) => {
  return (
    <div
      className={`  
 max-w-[213.38px ] h-[
128.03px] p-20 flex-wrap rounded-md gap-2 text-white gradient-2 font-poppins max-sm:flex-col max-sm:w-[100%] ${className}`}
    >
      <h2 className="font-[300] text-[20px]">{heading}</h2>
    </div>
  );
};

export default Course;
