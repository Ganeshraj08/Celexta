import React from "react";
import { modules, syllabusContent } from "../constants";
import Accordion from "../components/Accordion";

const Syllabus = () => {
  return (
    <section className="p-10 my-10 mx-10 max-sm:mx-5">
      <h1 className="text-dark text-3xl font-poppins font-semibold max-sm:text-[13px]">
        What do you Learn from This Course?
      </h1>
      <p className="text-white w-[90%] my-10 font-poppins text-xl leading-9 max-sm:w-full max-sm:text-sm">
        Learning graphic design equips you with a diverse skill set and
        knowledge base that prepares you for various creative and professional
        opportunities. Here’s what you can expect to learn:
      </p>

      <ol className="list-decimal list-inside text-white">
        {syllabusContent.map((text, index) => (
          <li
            key={index}
            className="text-white my-10 mx-5 w-[80%] font-poppins leading-7 text-xl font-extralight max-sm:w-full max-sm:mx-1 max-sm:text-sm"
          >
            {text.text}
          </li>
        ))}
      </ol>
      <div>
        <h2 className="text-dark font-poppins text-4xl font-semibold max-sm:my-5">
          Syllabus
        </h2>
        <Accordion items={modules} accordionStyle="mx-3 max-sm:m-auto" />
      </div>
    </section>
  );
};

export default Syllabus;
