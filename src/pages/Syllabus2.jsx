import React from 'react';
import PuzzleCard from '../components/PuzzleCard';
import PuzzelCard_2 from '../components/PuzzelCard_2';

const Syllabus = [
    { label: 'Fundamendal Principles' },
    { label: 'Software Proficiency' },
    { label: 'Visual Communication' },
    { label: 'Typography' },
];
const details=[
  {text:'Understand the foundational principles of design, including layout, typography, color theory, and composition. These principles form the basis of effective visual communication.'},
  {text:'Gain proficiency in industry-standard graphic design software such as Adobe Photoshop, Illustrator, and InDesign. Learn how to use these tools to create and manipulate images, illustrations, and layouts..'},
  {text:'Learn how to effectively communicate messages and ideas visually through design elements such as images, icons, typography, and color. Understand how design choices influence perception and engagement.'},
  {text:'Master the art and science of typography, including selecting fonts, spacing, hierarchy, and readability. Learn how to use typography creatively to enhance design aesthetics and convey meaning.'}

]

const Syllabus2 = () => {
    return (
        <div className='bg-background overflow-y-hidden'>
          <div className=' m-auto w-[90%] mt-20 text-center font-poppins'>
          <h1 className='text-purple text-4xl font-bold text-start ml-5 mb-5 max-sm:text-xl max-sm:text-center'>What do you Learn from This Course?</h1>
            <div className='flex flex-wrap max-sm:flex-col'>
                {Syllabus.map((item, index) => (
                    <PuzzleCard key={index} title={item.label} />
                ))}
            </div>
            <div className='flex flex-wrap max-sm:flex-col'>
              {details.map((text)=>(
                <PuzzelCard_2 text={text.text}/>
              ))}                
              
            </div>
            <button className='gradient px-10 rounded-md py-3 text-white m-auto my-16'>REGISTER</button>
         
        </div>
        </div>
    );
};

export default Syllabus2;
