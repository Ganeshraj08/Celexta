import React from 'react';

const Certificate = () => {
  return (
    <div className='bg-background text-white pt-6 pb-16  overflow-auto'>
      <div className='text-lg font-medium mb-4 ml-7 max-sm:text-xl'>
          <h3>COURSES &gt; SYLLABUS &gt; LECTURE &gt; FINAL PROJ &gt; CERTFICATE</h3>
        </div>
      <div className='mx-auto max-w-4xl'>
        
        <div className='flex flex-col items-center justify-center'>
          <div className='text-primary font-bold text-4xl mb-8 text-center md:text-4xl max-sm:text-md'>
            <h3>Congratulations on</h3>
            <h3>completing the course!</h3>
          </div>
          <p className='text-3xl mb-8 text-center max-sm:text-xl'>
            Here is Your Certificate
          </p>
          <div className='bg-[rgb(217,217,217)]/30 w-3/4 h-96 mb-8 mx-auto'>

          </div>
          <button className='bg-primary hover:bg-purple-700 text-white font-bold py-3 px-6 rounded'>
            Download Certificate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
