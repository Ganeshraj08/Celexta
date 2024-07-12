import React from 'react';

const Card_2 = ({ heading, subTitle, className }) => {
  return (
    <div className={ ` mx-auto flex max-w-[350px] p-6 flex-wrap rounded-md gap-2 text-white gradient-2 font-poppins max-sm:flex-col max-sm:w-[100%] ${className}`}>
      <h2 className='font-[800] text-[20px]'>{heading}</h2>
      <p className='p-1 italic text-[16px] leading-[24px] opacity-[70%]'>{subTitle}</p>
    </div>
  );
};

export default Card_2;
