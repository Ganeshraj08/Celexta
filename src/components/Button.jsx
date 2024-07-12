// Button.js

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, disabled, className, children }) => {
  
  const btnClassName = `bg-dark font-poppins font-normal  px-4 py-3 hover:bg-purple rounded-xl text-white px-4 py-2 rounded ${className}`;

  return (
    <button className={btnClassName} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  className: ''
};

export default Button;
