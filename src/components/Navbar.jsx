// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/icons/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-blackColor max-md:flex-col max-md:items-start text-text p-4 flex gap-10 items-center font-poppins">
      <img src={logo} alt="Celexta" width={100} />
      
      <div className="space-x-10 max-md:space-x-0 max-md:ml-2 max-md:flex max-md:flex-col  text-xl ">
        <Link to="/" className="hover:text-primary">
          Home
        </Link>
        <Link to="/service" className="hover:text-primary">
          Service
        </Link>
        <Link to="/courses" className="hover:text-primary">
          Courses
        </Link>
        <Link to="/about-us" className="hover:text-primary">
          About Us
        </Link>
        <Link to="/contact-us" className="hover:text-primary">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
