import React from "react";
import { dot } from "../assets";

const Card_3 = ({ content, className }) => {
  return (
    <div
      className={`flex   items-center  gap-2 text-white  font-poppins  ${className}`}
    >
      <img src={dot} />
      <p>{content}</p>
    </div>
  );
};

export default Card_3;
