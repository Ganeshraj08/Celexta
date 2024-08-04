import React from "react";
import { dot, icon } from "../assets";
import { accordion, coursesList,courseDesign } from "../constants";
import Accordion from "../components/Accordion";
import img1 from "/src/assets/icons/Group 7.png"
import design1 from "../assets/images/design1.png"
import design2 from "../assets/images/design2.png"
import design3 from "../assets/images/design3.png"
import design4 from "../assets/images/design4.png"
const CoursesPage = () => {
  return (
    <section className="w-full bg-background">
      <div className="container pb-10">
        <div className="flex justify-center items-center gap-1">
          <img
            src={img1}
            alt="icon"
            className="max-md:w-20"
          />
          <h1 className="filter-shadow  leading-[130.13px] md:text-[69px] text-4xl  text-primary font-[500] font">
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
        <h2 className="text-center filter-shadow   text-dark font-poppins font-[500] md:text-[69px] text-4xl my-6 tracking-wide">
          Courses We Offer
        </h2>
        </div>

        <div className="mx-10 ">
  
  {
    coursesList.map((list)=> (
      <div>
        <h1 className="filter-shadow ml-5  text-white font-poppins font-[500] md:text-xl text-xl my-3 tracking-wide md:ml-5">{list.title}</h1>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4  w-[95%] m-auto text-white max-sm:w-[100%]">
          {list.courses.map((course)=> (
             <li className="flex items-start gap-4 justify-start text-white my-8 bg w-full rounded-md px-5 py-8 gradient-3 max-sm:w-full max-sm:my-3">
             <div className="mt-2">
               <img src={dot} alt="icon" className="w-20 h-4" />
             </div>
             <div>
               <h3 className="text-xl font-semibold leading-10">
                 {course.label}
               </h3>
               <p className="">{course.description}</p>
             </div>
           </li>
          ))}
        </ul>
        </div>
    ))
  }
         </div>
         
        <h2 className="text-center filter-shadow text-dark font-poppins font-[500] md:text-2xl text-4xl my-10 tracking-wide">
          What will you learn from this courses
        </h2>
        <div className="container pb-10">
          <div className=" w-3/4 mx-auto grid grid-cols-2 gap-4 px-4 ">
           
            <img src={design1} className="h-72"  />
            <img src={design2} className="h-72"  />
            <img src={design3} className="h-72"  />
            <img src={design4} className="h-72"  />
           

          </div>
        </div>
        <h2 className="text-center filter-shadow text-dark font-poppins font-[500] md:text-2xl text-4xl my-10 tracking-wide">
        How our courses are different from other courses?
                </h2>
                <div className="container pb-10 ">
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 w-[80%] m-auto text-white max-sm:w-[100%]">
                  {
                    courseDesign.map((list)=> (
                      <div className="bg-purple flex gap-4  rounded-md justify-between items-center p-4">
                            <h5 className="text-xs sm:text-sm">{list.title}</h5>
                            <img src={list.image} className="h-10 w-10 lg:h-32 lg:w-32 rounded-full border-white" />
                      </div>
                    ))
                  }
                  </ul>
                </div>
      
    </section>
  );
};

export default CoursesPage;
