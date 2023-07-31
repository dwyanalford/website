//components/Projects.js
import Image from 'next/image';
import projectsData from '@/data/projectsData.js';
import VideoPlayer from '@/components/VideoPlayer';
import { FaCheck } from 'react-icons/fa';

const Projects = () => {
  return (
    <>
      {projectsData.map((project, index) => (
        <section key={index} className="flex w-full mb-5 xl:p-6 lg:mt-9">
          <div className="projects-container flex flex-wrap w-full gap-3 p-2 lg:mb-7 sm:shadow-lg hover:shadow-xl">
            <div className='projects-item-1 lg:p-6 lg:flex-1 mx-auto'>
              <div className='projects-summary lg:p-6 mx-auto max-w-2xl'>
                <h1 className='font-bold p-3 text-2xl'>
                  {project.title}
                  <span className='grey-highlight text-base ml-4'>
                    {project.type}
                  </span>
                </h1>
                {project.descriptions.map((description, index) => (
                  <p className='p-3' key={index}>{description}</p>
                ))}
                {project.responsibilities.length > 0 && (
                  <>
                    <h3 className='p-2 mt-[30px]'>Work completed:</h3>
                    {project.responsibilities.map((responsibility, index) => (
                      <ul key={index}>
                        <li className='p-4'><FaCheck className='text-green-500 inline-block mr-1'/>{responsibility}</li>
                      </ul>
                    ))}
                  </>
                )}
              </div>
            </div>

            <div className="projects-item-2 lg:p-4 w-full lg:flex-1">
              <div className='p-3'>
                {project.videoId ? (
                  <VideoPlayer videoSrc={project.videoId} caption={project.caption} />
                ) : (
                  <Image
                    src={project.backupImage}
                    alt="Backup Image"
                    className='mx-auto'
                    width={560} 
                    height={315}
                  />
                  
                )}

                <h3 className='p-2 text-center pt-8 pb-5'>Technologies Used:</h3>
                <h4 className='p-2 text-center pb-5 text-xl font-semibold'>{project.technologies}</h4>
                <div className='p-2 text-center pt-5 pb-8'>
                  <a className='button blue-button' href={project.link}>VIEW CODE BASE ON GITHUB</a>
                </div>
              </div>
            </div>
            <style jsx>{`
                
            `}</style> 
          </div>
        </section>
      ))}
    </>
  );
};

export default Projects;
