import React, { useEffect, useState } from "react";

import { logo, menu ,close} from "../assets";
import { Nav } from "../constants";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  const [toogle, setToogle] = useState(false);
  const [active, setActive] = useState("Home");
  const [stickyBar, setStickyBar] = useState(false);

  return (
    <nav className="w-full bg-black">
      <div
        className="mx-auto flex px-2  justify-between  custom-margin  z-10
     items-center "
      >
        <img src={logo} alt="logo" className="w-[90px] max-md:w-[70px] " />
        <ul
          className="sm:flex items-center justify-end list-none
          cursor-pointer hidden  "
        >
          {Nav.map((links, index) => (
            <li
              key={index}
              className={`cursor-pointer font-poppins font-normal 
                text-[16px] text-white ${
                  index === Nav.length - 1 ? "mr-0" : "mr-10"
                }`}
            >
              <Link
                to={links.id}
                onClick={() => setActive(links.label)}
                className={`${active === links.label ? "active" : " "}`}
              >
                {links.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="max-sm:hidden">
        <Link
              to="/register"
              className="bg-white cursor-pointer px-4 py-2 rounded-md text-purple mr-10"
            >
              Sign up
            </Link>
          
            <Link
              to="/login"
              className="bg-pink/95 cursor-pointer px-4 py-2 rounded-md text-white mr-10"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-pink/95 cursor-pointer px-4 py-2 rounded-md text-white mr-10"
            >
              Register
            </Link>

        </div>

        <div className="sm:hidden flex  flex-1 justify-end items-center">
          <img
            src={toogle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28-px] max-md:w-5 object-contain
          "
            onClick={() => setToogle((prev) => !prev)}
          />
          <div
            className={`${toogle ? "flex" : "hidden"}
           absolute top-20 right-0 left-0 my-4 mx-4 p-6 
            min-w-[140px] rounded-xl bg-secondary sidebar z-10`}
          >
            <ul
              className="flex items-center  list-none
          cursor-pointer flex-col m-auto"
            >
              {Nav.map((links, index) => (
                <li
                  key={index}
                  className={`cursor-pointer font-poppins font-normal 
                text-[16px] text-white  ${
                  index === Nav.length - 1 ? "mb-0" : "mb-10"
                }`}
                >
                  <Link
                    to={links.id}
                    onClick={() => setActive(links.label)}
                    className={`${active === links.label ? "active" : " "}`}
                  >
                    {links.label}
                  </Link>
                </li>
              ))}
              <div className="my-6 space-x-4">
              <Link
                    to="/register"
                    className="bg-white cursor-pointer px-4 py-2 rounded-md text-primary mr-15"
                  >
                   Sign up
                  </Link>
                 
                  <Link
                    to="/login"
                    className="bg-pink/95 cursor-pointer px-4 py-2 rounded-md text-white mr-15"
                  >
                    Login
                  </Link>
                 
                  
                
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
