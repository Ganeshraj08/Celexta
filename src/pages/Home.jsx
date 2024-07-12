import React from "react";
import { hero_img } from "../assets";
import Button from "../components/Button";
import Title from "../components/Title";
import Card from "../components/Card";
import { courses, design, service, weDo } from "../constants";
import Card_2 from "../components/Card_2";
import Card_3 from "../components/Card_3";
import Course from "../components/Course";

const Home = () => (
  <section className="w-full fade-in bg-background">
    <div className=" bg-hero  cover max-w-full h-[100vh] flex  items-center justify-between lg:p-16 max-sm:flex-col max-sm:p-10 ">
      <div className="text-white  flex flex-col justify-between items-center gap-20 max-sm:gap-9">
        <div className="font-prompt">
          <h1 className="text-[9.375rem] text-outline font-normal max-sm:text-[4rem]">
            CELEXTA
          </h1>
          <p className="text-center   text-[1rem]">
            WHERE DESIGN KNOWS NO BOUNDS
          </p>
        </div>
        <div>
          <p className="w-[630px] font-poppins leading-8 font-normal text-[20px] max-sm:w-full max-sm:text-[15px] px-5">
            Welcome to CELEXTA, where creativity meets expertise. Discover
            professional graphic design services and expert-led courses tailored
            to elevate your projects and skills. Explore our offerings and join
            us in transforming ideas into impactful designs and career success.
          </p>
          <Button className="my-10">Explore Us</Button>
        </div>
      </div>
      <div>
        <img src={hero_img} alt="" />
      </div>
    </div>
    <div className="w-full border-b-4-hard">
      <hr className="border-purple border-[2px] " />
      <div className="container">
        <Title className="border-l-8">What do we do?</Title>
        <p className="text-white max-w-[90%] font-poppins text-xl tracking-normal leading-relaxed max-sm:text-[15px] px-5 ">
          At CELEXTA, we specialize in providing professional graphic design
          services and comprehensive courses designed to empower creativity and
          elevate skills in the field.
        </p>
        <div
          className={`my-16 flex items-center justify-between w-[100%] m-auto max-sm:flex-col gap-5`}
        >
          {design.map((text) => (
            <Card
              key={text.label}
              imageSrc={text.Image}
              subtitle={text.label}
            />
          ))}
        </div>
      </div>
      <hr className="border-purple border-[2px] " />
      <div className="container">
        <Title className="border-l-8">How do we do?</Title>
        <p className="text-white max-w-[90%] font-poppins text-xl tracking-normal leading-relaxed max-sm:text-[15px] px-5 ">
          At CELEXTA, we excel by combining creativity with expertise. Through
          our professional graphic design services and expert-led courses, we
          empower individuals and businesses to achieve their creative and
          professional goals with tailored solutions and impactful learning
          experiences.
        </p>
        <div
          className={`max-w-[2000px] place-content-center mx-auto gap-6  my-10 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 `}
        >
          {weDo.map((text) => (
            <Card_2
              key={text.id}
              heading={text.heading}
              subTitle={text.para}
              className={text.style}
            />
          ))}
        </div>
      </div>
      <hr className="border-purple border-[2px] " />

      <div className="container">
        <Title className="border-l-8">Services</Title>
        <p className="text-white max-w-[90%] font-poppins text-xl tracking-normal leading-relaxed max-sm:text-[15px] px-5">
          At CELEXTA, we offer professional graphic design services to enhance
          your brand's visual identity. Our expert team delivers customized
          solutions that meet your unique needs and elevate your projects to the
          next level of creativity and impact. List of the services we provide
          are below. To know more, Click “ Explore our Services “ button.
        </p>
        <div
          className={`my-16 flex flex-wrap items-center justify-between w-[100%] m-auto`}
        >
          <ul className="max-w-[2000px] mx-auto grid sm:grid-cols-3 grid-cols-1  gap-9 ">
            {service.map((text) => (
              <li className="rounded-lg bg-opac p-[24.7px] flex items-center  text-[15.5px] font-poppins    ">
                <Card_3 content={text.label} />
              </li>
            ))}
          </ul>
          <Button className="my-10 ml-6">Explore our Services</Button>
        </div>
      </div>
      <hr className="border-purple border-[2px] " />

      <div className="container pb-20">
        <Title className="border-l-8">Courses</Title>
        <p className="text-white max-w-[90%] font-poppins text-xl tracking-normal leading-relaxed max-sm:text-[15px]  px-5">
          At CELEXTA, Our courses are designed to empower your creative journey.
          From foundational skills to advanced techniques, our expert-led
          programs help you develop the expertise needed to excel in graphic
          design and beyond.
        </p>
        <div
          className={`my-10 flex items-center justify-start gap-4 w-[100%] m-auto max-sm:flex-col `}
        >
          {courses.map((text) => (
            <Course heading={text.label} />
          ))}
        </div>
        <Button>Visit Courses</Button>
      </div>
    </div>
  </section>
);

export default Home;
