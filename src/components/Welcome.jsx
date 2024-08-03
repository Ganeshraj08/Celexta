import React from 'react';

const Welcome = () => {
  return (
    <div className="bg-hard text-white w-full flex flex-col md:flex-row justify-between items-center py-2 px-4 md:px-6 lg:px-8 overflow-x-auto">
      
      <div className="flex-1 text-center">
        <h2 className="text-xl font-bold md:text-2xl lg:text-2xl pl-5">
          Welcome to Celexa Admin Panel
        </h2>
      </div>
      
      <div className="flex items-center mt-2 md:mt-0">
        <div className="text-right mr-4 flex flex-col items-end">
          <p className="font-bold">James Beauford</p>
          <p className="text-sm">jamesbeauford@gmail.com</p>
        </div>
        <div className="w-10 h-10 bg-gray-400 rounded-full flex-shrink-0"></div>
      </div>
    </div>
  );
};

export default Welcome;
