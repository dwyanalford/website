// components/Experience.js
import experienceData from '@/data/experienceData';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

const Experience = () => {
  // Sort experience data by workDates in descending order (most recent job first)
  const sortedExperienceData = experienceData.sort((a, b) => {
    const aYear = parseInt(a.workDates.slice(-4));
    const bYear = parseInt(b.workDates.slice(-4));
    return bYear - aYear;
  });
  
  return (
    <>
      {sortedExperienceData.map((exp, index) => (
        <section key={index} className="flex w-full p-2 lg:p-10">
          <div className="experience-container flex flex-wrap w-full p-4 sm:shadow-lg hover:shadow-xl">
            <div className="lg:flex-1 mx-auto p-4">
              <div className="experience-text p-8 mx-auto rounded-lg max-w-lg md:max-w-2xl lg:max-w-lg">
                <h1 className='font-bold text-2xl pb-2 pt-6'>{exp.title}</h1>
                <h2 className='font-semibold text-xl pb-2'>Company: {exp.company}</h2>
                <h4 className='text-lg pb-4'>{exp.workDates}</h4>
                <h4 className='pb-6'>Type of work:&nbsp;<span className='grey-highlight'>{exp.workType}</span></h4>
                <h3 className='pb-3 pt-2'>Tasks:</h3>
                <p className='flex flex-col mb-2'>
                  {exp.tasks.map((task, index) => (
                    <p key={index} className='mb-6'>
                    <FaCheck className='text-green-500 inline-block mr-1'/> {task}
                  </p>
                  
                  
                  ))}
                </p>
              </div>
            </div>
            <div className="w-full lg:flex-1 p-2 rounded-lg">
              <div className="rounded-lg overflow-hidden max-w-xl mx-auto lg:mt-[120px] xl:mt-[75px] shadow-lg hover:shadow-xl">
                <Image
                  src={exp.imgSrc}
                  alt={exp.alt}
                  className='h-auto w-auto mx-auto hover:opacity-80'
                  width={400} 
                  height={100}
                />
              </div>
              <div className='mt-5 lg:mt-[50px] text-center'>
                <a href={exp.website} className='button blue-button' target="_blank" rel="noopener noreferrer">
                  {exp.websiteTitle}
                </a>
              </div>
            </div>
          </div>
          <style jsx>{`
        @media (min-width: 1024px) { 
          .experience-image-container {
            background-image: url(${exp.imgSrc});
            background-repeat: no-repeat;
            linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
          }
        }
      `}</style> 
        </section>
      ))}
    </>
  );
};

export default Experience;
