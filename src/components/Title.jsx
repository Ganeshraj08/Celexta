import React from "react";
import PropTypes from "prop-types";
import { rectangle } from "../assets";

const Title = ({ level, className, children }) => {
  const Tag = `h${level}`;

  const titleClassName = `font-medium my-12 items-center flex gap-3 font-poppines text-[102px] text-dark px-5 max-sm:text-[35px] max-sm:text-center ${className}]`;

  return (
    <div className={titleClassName}>
      <img src={rectangle} className="h-[50%] " />
      <Tag>{children}</Tag>
    </div>
  );
};

Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  className: PropTypes.string, //
  children: PropTypes.node.isRequired,
};

Title.defaultProps = {
  level: 1,
  className: "",
};

export default Title;
