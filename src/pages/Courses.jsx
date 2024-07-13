import React from "react";
import { dot, icon } from "../assets";
import { accordion, coursesList } from "../constants";
import Accordion from "../components/Accordion";

const CoursesPage = () => {
  return (
    <section className="w-full bg-background">
      <div className="container pb-10">
        <div className="flex justify-center items-end gap-1">
          <img src="/src/assets/icons/Group 7.png" alt="icon" />
          <h1 className="filter-shadow text-[69px] leading-[130.13px]  mb-4 text-primary font-[500] font">
            Courses
          </h1>
        </div>
        <p className="text-center text-white w-[70%] m-auto my-10 font-poppins font-medium max-sm:w-[100%] max-sm:text-start">
          Welcome to [Your Company Name], where creativity, innovation, and
          excellence converge. Established with a passion for [describe your
          company’s mission or purpose], we [briefly describe your company’s
          core services or products]. Our dedication to [core value or unique
          selling proposition] sets us apart in [your industry or market].
        </p>
        <h2 className="text-center filter-shadow   text-dark font-poppins font-[500] text-5xl my-6 tracking-wide">
          List of Courses
        </h2>

        <ul className="max-md:grid-cols-1 gap-4 grid grid-cols-2 w-[80%] m-auto text-white max-sm:w-[100%] ">
          {coursesList.map((list) => (
            <li className="flex  bg-opac items-start gap-4 justify-start text-white m-auto my-8 bg w-[80%] rounded-md px-5 py-8 gradient-3 max-sm:w-[100%] max-sm:my-3">
              <div className="mt-2 ">
                <img src={dot} alt="icon" />
              </div>
              <div>
                <h3 className="text-xl font-semiblod leading-10">{list.label}</h3>
                <p className="italic">{list.description}</p>
              </div>
            </li>
          ))}
        </ul>
        <h2 className="text-center filter-shadow text-dark font-poppins font-[500] text-5xl my-10 tracking-wide">
          Overview
        </h2>
        <div>
          <Accordion items={accordion} />
        </div>
      </div>
    </section>
  );
};

export default CoursesPage;
