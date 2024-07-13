// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blackColor max-md:flex-col text-text p-4 flex justify-between items-center font-poppins">
      <div className="text-2xl font-bold">CELEXTA</div>
      <div className="space-x-4 ">
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
