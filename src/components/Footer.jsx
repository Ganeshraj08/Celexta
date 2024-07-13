// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-tertiary text-text p-9 font-poppins">
      <div className="flex-col flex items-center">
        <h4 className="font-bold  footer-head ">Contact Us</h4>
        <div className="flex justify-around max-md:flex-col max-md:gap-5  items-start w-full my-9">
          <div className="text-2xl font-[250]">
            <ul>
              <li className=" font-bold cursor-pointer">Website</li>
              <li className="hover:text-black cursor-pointer">Home</li>
              <li className="hover:text-black  cursor-pointer">Services</li>
              <li className="hover:text-black cursor-pointer">Courses</li>
              <li className="hover:text-black cursor-pointer">Contact Us</li>
            </ul>
          </div>
          <div className="text-2xl font-[250]">
            <h4 className="font-bold">Help Center/Community</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-black">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-4">&copy; ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
