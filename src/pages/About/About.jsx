import React from "react";

import "./About.css";

const About = () => {
  return (
    <div className="about-us">
      <div className="header-container">
        <div className="rectangles">
          <div className="rectangle rectangle-1"></div>
          <div className="rectangle rectangle-2"></div>
          <div className="rectangle rectangle-3"></div>
        </div>
        <h1>About Us</h1>
      </div>
      <p>
        Welcome to [Your Company Name], where creativity, innovation, and
        excellence converge. Established with a passion for [describe your
        company’s mission or purpose], we [briefly describe your company’s core
        service/products]. Our dedication to [core value or unique selling
        proposition] sets us apart in [your industry or market].
      </p>
      <h2>Our Mission</h2>
      <p>
        At [Your Company Name], our mission is to [state your company’s mission
        in relation to solving customer problems or achieving goals].
      </p>
      <h2>What Do We Do?</h2>
      <p>
        We specialize in [briefly describe your core services or products]. Our
        team of [number of employees or experts] brings together expertise in
        [mention specific skills or specialties]. Whether you’re looking to
        [describe key service benefits or outcomes], we tailor solutions that
        meet your unique needs.
      </p>
      <h2>Why Choose Us</h2>
      <div className="reasons">
        <div
          className="reason"
          style={{
            borderBottomRightRadius: "50px 50px",
          }}
        >
          Expertise
        </div>
        <div
          className="reason"
          style={{
            borderBottomLeftRadius: "50px 50px",
          }}
        >
          Creativity
        </div>
        <div
          className="reason"
          style={{
            borderTopRightRadius: "50px 50px",
          }}
        >
          Customer Centric
        </div>
        <div
          className="reason"
          style={{
            borderTopLeftRadius: "50px 50px",
          }}
        >
          Quality Assurance
        </div>
      </div>
      <h2>Our Team</h2>
      <p>
        Meet the driving force behind [Your Company Name]. Our diverse team of
        professionals is dedicated to [mention key team values or goals].
        Together, we strive to [describe the impact your team aims to make in
        your industry or community].
      </p>
    </div>
  );
};

export default About;
