import React, { useRef,useEffect } from "react";
import { dot, icon } from "../assets";
import { accordion, coursesList, courseDesign } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import img1 from "/src/assets/icons/Group 7.png";
import design1 from "../assets/images/design1.png";
import design2 from "../assets/images/design2.png";
import design3 from "../assets/images/design3.png";
import design4 from "../assets/images/design4.png";
const CoursesPage = () => {
  const prevRefs = useRef([]);
  const nextRefs = useRef([]);

  useEffect(() => {
    prevRefs.current = prevRefs.current.slice(0, coursesList.length);
    nextRefs.current = nextRefs.current.slice(0, coursesList.length);
  }, [coursesList.length]);
  return (
    <section className="w-full bg-background">
      <div className="container pb-10">
        <div className="flex justify-center items-center gap-1">
          <img src={img1} alt="icon" className="max-md:w-20" />
          <h1 className="filter-shadow  leading-[130.13px] md:text-[69px] text-3xl  text-primary font-[500] font">
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
      {coursesList.map((list, index) => (
          <div key={list.title}>
            <h1 className="filter-shadow ml-5 text-white font-poppins font-[500] text-xl my-3 tracking-wide">{list.title}</h1>
            <div className="relative w-[95%] m-auto max-sm:w-[100%]">
              <Swiper
                breakpoints={{
                  340: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  700: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                }}
                freeMode={true}
                navigation={{
                  nextEl: nextRefs.current[index],
                  prevEl: prevRefs.current[index],
                }}
                modules={[FreeMode, Navigation]}
                className="w-full"
                onSwiper={(swiper) => {
                  swiper.params.navigation.prevEl = prevRefs.current[index];
                  swiper.params.navigation.nextEl = nextRefs.current[index];
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
              >
                {list.courses.map((course) => (
                  <SwiperSlide key={course.label}>
                    <div className="flex flex-col gap-6 group relative text-white rounded-lg px-6 py-8 ">
                      <li className="flex items-start gap-4 justify-start text-white my-8 w-full rounded-md px-5 py-8 bg-gradient-to-b from-white/[0.15] to-[#656262]/[0.15] max-sm:w-full max-sm:my-3">
                        <div className="mt-2">
                          <img src={dot} alt="icon" className="w-20 h-4" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold leading-10">
                            {course.label}
                          </h3>
                          <p>{course.description}</p>
                        </div>
                      </li>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div
                ref={(el) => (prevRefs.current[index] = el)}
                className="swiper-button-prev absolute top-1/2 transform -translate-y-1/2 left-1 w-7 h-7 bg-black bg-opacity-50 text-purple flex items-center justify-center rounded-full cursor-pointer z-10"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 19l-7-7 7-7"></path>
                </svg>
              </div>
              <div
                ref={(el) => (nextRefs.current[index] = el)}
                className="swiper-button-next absolute top-1/2 transform -translate-y-1/2 right-1 w-7 h-7 bg-black bg-opacity-50 text-purple flex items-center justify-center rounded-full cursor-pointer z-10"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        ))}

      </div>

      <h2 className="text-center filter-shadow text-dark font-poppins font-[500] md:text-2xl text-base my-10 tracking-wide">
        What will you learn from this courses
      </h2>
      <div className="container pb-10">
        <div className=" w-3/4 mx-auto grid grid-cols-2 gap-3 px-4 b ">
          <img
            src={design1}
            className="h-32 ml-2 sm:ml-10 md:m-0 md:h-64 md:ml-1 md:pl-7 justify-self-end"
          />
          <img
            src={design2}
            className="h-32 mr-3 sm:mr-14 md:m-0 md:h-64 md:mr-2 justify-self-start "
          />
          <img
            src={design3}
            className="h-32 ml-2 sm:ml-14 md:m-0 md:h-64 md:ml-14 md:pl-7 justify-self-end"
          />
          <img src={design4} className="h-32 md:m-0 md:h-64 justify-self-start" />
        </div>
      </div>
      <h2 className="text-center filter-shadow text-dark font-poppins font-[500] md:text-2xl text-base my-10 tracking-wide">
        How our courses are different from other courses?
      </h2>
      <div className="container pb-10 ">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 w-[80%] m-auto text-white max-sm:w-[100%]">
          {courseDesign.map((list) => (
            <div className="bg-purple flex gap-4  rounded-md justify-between items-center p-4">
              <h5 className="text-xs sm:text-sm">{list.title}</h5>
              <img
                src={list.image}
                className="h-10 w-10 lg:h-32 lg:w-32 rounded-full border-white"
              />
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CoursesPage;
