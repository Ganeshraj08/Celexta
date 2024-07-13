import React, { useState } from "react";
import PropTypes from "prop-types";
import { arrow } from "../assets";

const Accordion = ({ items, accordionStyle }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={` max-w-[800px] mx-auto my-10 ${accordionStyle}`}>
      {items.map((item, index) => (
        <div key={index} className="rounded-xl mb-5">
          <button
            className="  rounded-lg flex justify-between font-[400] items-center w-full max-sm:text-[16px] text-[20px] text-left px-5 py-4 gradient-4 text-white hover:bg-orange-200 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.title}</span>
            <img
              src={arrow}
              alt="Arrow"
              className={`max-sm:h-4 max-sm:w-4 h-7 w-7 transition-transform ${
                activeIndex === index ? "transform rotate-180" : ""
              }`}
            />
          </button>
          {activeIndex === index && (
            <div className="px-4 py-2">
              <p className="text-gray-700">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  accordionStyle: PropTypes.string,
};

export default Accordion;
