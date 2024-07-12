import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ imageSrc, subtitle, className, heading }) => {
  return (
    <div className={` md:w-[30%] flex flex-col justify-center items-center rounded-md overflow-hidden shadow-lg gradient transform transition duration-300 hover:scale-105 p-8 hover:rotate-1 max-sm:w-[80%] ${className}`}>
      {imageSrc && <img className="w-full" src={imageSrc} alt="Card" />}
      <div className="px-6 py-4">
        {heading && <div>{heading}</div>}
        <div className="font-[300] text-xl italic text-white font-poppins max-sm:text-center">{subtitle}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  imageSrc: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  className: PropTypes.string, // Ensure className prop is defined as a string
  heading: PropTypes.string
};

export default Card;
