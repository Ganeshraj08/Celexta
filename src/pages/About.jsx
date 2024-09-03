import React, { useState } from "react";

const AboutUs = () => {
  const cards = [
    { name: "James Beaford", title: "Ceo" },
    { name: "Ruby Bell", title: "General manager" },
    { name: "Name", title: "Designation" },
    { name: "Name", title: "Designation" },
    { name: "Name", title: "Designation" },
    { name: "Name", title: "Designation" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      content:
        "Welcome to [Your Company Name], where creativity, innovation, and excellence converge. Established with a passion for [describe your company’s mission or purpose], we [briefly describe your company’s core services or products]. Our dedication to [core value or unique selling proposition] sets us apart in [your industry or market].",
    },
    {
      content:
        "Meet the driving force behind [Your Company Name]. Our diverse team of professionals is dedicated to [mention key team values or goals]. Together, we strive to [describe the impact your team aims to make in your industry or community].",
    },
    {
      content:
        "Welcome to [Your Company Name], where creativity, innovation, and excellence converge. Established with a passion for [describe your company’s mission or purpose], we [briefly describe your company’s core services or products]. Our dedication to [core value or unique selling proposition] sets us apart in [your industry or market].",
    },
    {
      content:
        "Welcome to [Your Company Name], where creativity, innovation, and excellence converge. Established with a passion for [describe your company’s mission or purpose], we [briefly describe your company’s core services or products]. Our dedication to [core value or unique selling proposition] sets us apart in [your industry or market].",
    },
    {
      content:
        "Welcome to [Your Company Name], where creativity, innovation, and excellence converge. Established with a passion for [describe your company’s mission or purpose], we [briefly describe your company’s core services or products]. Our dedication to [core value or unique selling proposition] sets us apart in [your industry or market].",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="bg-background text-white min-h-screen flex flex-col items-center justify-center p-6 max-sm:p-0">
      <div className="flex items-center gap-0 justify-center mb-10">
        <div className="flex items-end mr-2.5 max-sm:hidden">
          <div className="w-[15px] bg-[#ccc] -ml-[2px] shadow-[2px_2px_8px_rgba(139,56,205,1)] h-[20px]"></div>
          <div className="w-[15px] bg-[#ccc] -ml-[2px] shadow-[2px_2px_8px_rgba(139,56,205,1)] h-[40px]"></div>
          <div className="w-[15px] bg-[#ccc] -ml-[2px] shadow-[2px_2px_8px_rgba(139,56,205,1)] h-[60px]"></div>
        </div>
        <h1 className="my-10 text-[#8b38cd] font-bold text-[60px] font-roboto text-shadow-[0_0_1px_#ffffff]">
          About Us
        </h1>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-purpletransparent p-4 rounded-lg ">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              What do we do?
            </h2>
            <p className="p-3 text-base md:text-xl ">
              We specialize in [briefly describe your core services or
              products]. Our team of [number of employees or experts] brings
              together expertise in [mention specific skills or specialties].
              Whether you’re looking to [describe key service benefits or
              outcomes], we tailor solutions that meet your unique needs.
            </p>
          </div>

          <div className="bg-purpletransparent px-4 py-6 rounded-lg row-span-4">
            <h2 className="text-2xl font-semibold mb-4 text-center ">
              Why do you choose US?
            </h2>
            <ul className="list-disc list-inside  flex flex-col items-center justify-center gap-4">
              <li className="w-2/3 p-2 bg-[rgba(139,56,205,0.25)] text-base md:text-xl">
                Customer Centric
              </li>
              <li className="w-2/3 p-2 bg-[rgba(139,56,205,0.25)] text-base md:text-xl">
                Quality
              </li>
              <li className="w-2/3 p-2 bg-[rgba(139,56,205,0.25)] text-base md:text-xl ">
                Expertise
              </li>
              <li className="w-2/3 p-2 bg-[rgba(139,56,205,0.25)] text-base md:text-xl">
                Creativity
              </li>
            </ul>
          </div>

          <div className="bg-purpletransparent p-6 rounded-lg row-span-4">
            <h2 className="text-2xl font-semibold mb-4 text-center ">
              Our Team
            </h2>
            <p className=" font-normal text-base md:text-xl">
              Meet the driving force behind [Your Company Name]. Our diverse
              team of professionals is dedicated to [mention key team values or
              goals]. Together, we strive to [describe the impact your team aims
              to make in your industry or community].
            </p>
          </div>

          <div className="bg-purpletransparent p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Our Mission
            </h2>
            <p className="font-normal text-base md:text-xl">
              At [Your Company Name], our mission is to [state your company’s
              mission in relation to solving customer problems or achieving
              goals].
            </p>
          </div>
        </div>
        <div className="text-center my-14">
          <h2 className="text-3xl font-bold mb-4 text-[#8b38cd]">Our Team</h2>
          <div className=" flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-4">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-purple/30 text-center p-10 rounded-lg "
                >
                  <div className="bg-gray-300 w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full mb-4"></div>
                  <h3 className="text-purple-400 text-lg font-semibold">
                    {card.name}
                  </h3>
                  <p className="text-gray-400">{card.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center my-14">
          <h2 className="text-3xl font-bold mb-4 text-[#8b38cd]">
            Have look into Our WorkShops
          </h2>
        </div>
      </div>
      <div
        id="controls-carousel"
        className=" relative w-full "
        data-carousel="static"
      >
        {/* Carousel wrapper */}
        <div className="w-2/3 mx-auto md:w-11/12 ">
          <div className="relative h-80 overflow-hidden text-sm rounded-lg sm:h-56 md:h-80 flex flex-col justify-center items-center">
            {items.map((item, index) => (
              <div
                key={index}
                className={`absolute w-full sm:w-3/4 sm:h-2/3 flex items-center justify-center bg-lineargradient text-white font-bold text-sm transition-transform duration-700 ease-in-out ${
                  index === currentIndex ? "block" : "hidden"
                }`}
                data-carousel-item={index === currentIndex ? "active" : ""}
              >
                <div className="p-3 overflow-y-auto text-xs md:text-xl  max-w-full">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0  z-30 flex items-center justify-center h-full px-1 cursor-pointer group focus:outline-none md:px-4"
          onClick={handlePrev}
          aria-label="Previous"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-1 cursor-pointer group focus:outline-none md:px-4"
          onClick={handleNext}
          aria-label="Next"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
