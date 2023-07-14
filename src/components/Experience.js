// components/Experience.js
import experienceData from '@/data/experienceData';
import Image from 'next/image';

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
        <div key={index} className="content">
          <div className="content-container lg:gap-2">
            <div className="w-full bg-center bg-cover pl-3 md:flex-1 lg:p-4">
              <h1 className='font-bold text-2xl pb-2 pt-6 border-t border-blue-300'>{exp.title}</h1>
              <h2 className='font-semibold text-xl pb-2'>Company: {exp.company}</h2>
              <h4 className='text-lg pb-4'>{exp.workDates}</h4>
              <h4 className='pb-6'>Type of work:&nbsp;{exp.workType}</h4>
              <h3 className='pb-3 pt-2'>Tasks:</h3>
              <ul>
                {exp.tasks.map((task, index) => (
                  <li key={index} className='mb-3'>{task}</li>
                ))}
              </ul>
            </div>
            <div className="w-full md:flex-1">
              <Image
                src={exp.imgSrc}
                alt={exp.alt}
                className='mx-auto w-full pt-3'
                width={400} 
                height={100}
              />
              <div className=''>
                <a href={exp.website} className='' target="_blank" rel="noopener noreferrer">
                  {exp.websiteTitle}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Experience;
