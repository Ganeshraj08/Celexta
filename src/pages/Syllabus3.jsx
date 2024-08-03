
import Card_2 from "../components/Card_2";
import Card_3 from "../components/Card_3";

const info = [
  {
    text: "1.Welcome to [Name of Course]! Get ready to embark on a journey of knowledge and discovery.",
  },
  {
    text: `2.We're thrilled to have you join [Name of Course]. Here's to a rewarding and enriching learning experience ahead!"`,
  },
  {
    text: `3. "Welcome aboard! Get ready to dive into [Name of Course] with enthusiasm and curiosity. Let's make this academic journey memorable together!"e.`,
  },
];

const Syllabus = [
  {
    text: `We specialize in [briefly describe your core services or products]. Our team of [number of employees or experts] brings together expertise in [mention specific skills or specialties]. Whether you’re looking to [describe key service benefits or outcomes], we tailor solutions that meet your unique needs.`,
    title: "Intoduction",
  },
  {
    text: `We specialize in [briefly describe your core services or products]. Our team of [number of employees or experts] brings together expertise in [mention specific skills or specialties]. Whether you’re looking to [describe key service benefits or outcomes], we tailor solutions that meet your unique needs.`,
    title: "Designing Elements and Principles",
  },
  {
    text: `We specialize in [briefly describe your core services or products]. Our team of [number of employees or experts] brings together expertise in [mention specific skills or specialties]. Whether you’re looking to [describe key service benefits or outcomes], we tailor solutions that meet your unique needs.`,
    title: "Color Theory",
  },
];
const topic=[
    {topic:'topic'},
    {topic:'topic'},
    {topic:'topic'},
    
]
const Syllabus3 = () => {
  return (
   <div className="bg-background overflow-y-hidden">
     <div className="w-[90%]  m-auto my-7 font-poppins ">
      <h5 className="text-purple font-bold text-2xl my-10" >Hi Name</h5>
      <ol>
        {info.map((text) => (
          <li className="text-white leading-[2]">{text.text}</li>
        ))}
      </ol>
      <h5 className="text-purple font-bold text-2xl my-10">Syllabus</h5>
      <div className="flex gap-5 max-sm:flex-col flex-wrap">
        {Syllabus.map((text) => (
          <Card_2
            subTitle={text.text}
            heading={text.title}
            className={"bg-purple"}
          />
        ))}
      </div>
      <div className="flex gap-10 w-[100%] my-6 max-sm:flex-col ">
       {topic.map((text)=>(
        <Card_3 title={text.topic}/>
       ))}
      </div>
      <h5 className="text-purple font-bold text-2xl my-10">Mini Project</h5>
      <div className="flex max-sm:flex-col ">
        <p className="text-white w-[50%] max-sm:w-full my-4">After completing all the modules you need to submit a Mini Project to complete the course successfully!</p>
       <button className="bg-white p-3 rounded-3xl my-2 ">View Details</button>
      </div>
    </div>

   </div>
  );
};

export default Syllabus3;
