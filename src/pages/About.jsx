import React from "react";

const About = () => {
  return (
    <div className="h-auto bg-[#130022] text-white flex flex-col items-center justify-center text-center p-5 font-sans">
      <div className="flex items-center gap-0 justify-center mb-10">
        <div className="flex items-end mr-2.5">
            <div className="w-[15px] bg-[#ccc] -ml-[2px] shadow-[2px_2px_8px_rgba(139,56,205,1)] h-[20px]"></div>
            <div className="w-[15px] bg-[#ccc] -ml-[2px] shadow-[2px_2px_8px_rgba(139,56,205,1)] h-[40px]"></div>
            <div className="w-[15px] bg-[#ccc] -ml-[2px] shadow-[2px_2px_8px_rgba(139,56,205,1)] h-[60px]"></div>
          </div>
        <h1 className="my-10 text-[#8b38cd] font-bold text-[60px] font-roboto text-shadow-[0_0_1px_#ffffff]">
          About Us
        </h1>
      </div>
      <p className="max-w-[600px] mb-10 text-[20px]">
        Welcome to [Your Company Name], where creativity, innovation, and
        excellence converge. Established with a passion for [describe your
        company’s mission or purpose], we [briefly describe your company’s core
        service/products]. Our dedication to [core value or unique selling
        proposition] sets us apart in [your industry or market].
      </p>
      <h2 className="my-10 text-[#8b38cd] font-bold text-[60px] font-roboto text-shadow-[0_0_1px_#ffffff]">
        Our Mission
      </h2>
      <p className="max-w-[600px] mb-10 text-[20px]">
        At [Your Company Name], our mission is to [state your company’s mission
        in relation to solving customer problems or achieving goals].
      </p>
      <h2 className="my-10 text-[#8b38cd] font-bold text-[60px] font-roboto text-shadow-[0_0_1px_#ffffff]">
        What Do We Do?
      </h2>
      <p className="max-w-[600px] mb-10 text-[20px]">
        We specialize in [briefly describe your core services or products]. Our
        team of [number of employees or experts] brings together expertise in
        [mention specific skills or specialties]. Whether you’re looking to
        [describe key service benefits or outcomes], we tailor solutions that
        meet your unique needs.
      </p>
      <h2 className="my-10 text-[#8b38cd] font-bold text-[60px] font-roboto text-shadow-[0_0_1px_#ffffff]">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-2 gap-6 mt-5">
        <div className="bg-[#8b38cd]/10 text-white font-normal h-[178px] text-[20px] p-5 rounded-lg flex justify-center items-center text-center rounded-br-[50px]">
          Expertise
        </div>
        <div className="rounded-bl-[50px] bg-[#8b38cd]/10 text-white font-normal h-[178px] text-[20px] p-5 rounded-lg flex justify-center items-center text-center">
          Creativity
        </div>
        <div className="rounded-tr-[50px] bg-[#8b38cd]/10 text-white font-normal h-[178px] text-[20px] p-5 rounded-lg flex justify-center items-center text-center">
          Customer Centric
        </div>
        <div className="rounded-tl-[50px] bg-[#8b38cd]/10 text-white font-normal h-[178px] text-[20px] p-5 rounded-lg flex justify-center items-center text-center">
          Quality Assurance
        </div>
      </div>
      <h2 className="my-10 text-[#8b38cd] font-bold text-[60px] font-roboto text-shadow-[0_0_1px_#ffffff]">
        Our Team
      </h2>
      <p className="max-w-[600px] mb-10 text-[20px]">
        Meet the driving force behind [Your Company Name]. Our diverse team of
        professionals is dedicated to [mention key team values or goals].
        Together, we strive to [describe the impact your team aims to make in
        your industry or community].
      </p>
    </div>
  );
};

export default About;
