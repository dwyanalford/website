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
          <div className="projects-container flex flex-wrap w-full p-2 lg:pb-12 sm:shadow-lg hover:shadow-xl">
            <div className='projects-item-1 lg:p-6 lg:flex-1 mx-auto rounded-xl'>
              <div className='projects-summary mx-auto max-w-2xl pl-4 custom-shadow-left-white'>
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

            <div className="projects-item-2 w-full lg:flex-1 rounded-xl">
              <div className='pro-container rounded-xl mx-auto max-w-2xl pt-5'>
                {project.videoId ? (
                  <VideoPlayer videoId={project.videoId} caption={project.caption} />
                ) : (
                  <Image
                    src={project.backupImage}
                    alt="Backup Image"
                    className='mx-auto'
                    width={560} 
                    height={315}
                  />

                  
                  
                )}
                
                  
                  <div className='technologies-bg p-2 rounded-xl custom-shadow-top-white max-w-xl mx-auto mt-6'> 
                  <p className='pt-6 font-semibold max-w-lg mx-auto rounded-sm pb-6'>Video: {project.caption}</p>
                    <h3 className='p-2 pl-5 pt-10'>Technologies Used:</h3>
                    <h4 className='pl-5 text-xl font-semibold'>{project.technologies}</h4>
                    <div className='p-2 text-center pt-5 pb-5 mt-4'>
                      <a className='button blue-button' href={project.link}>VIEW CODE BASE ON GITHUB</a>
                    </div>
                </div>
              </div>
            </div>
            <style jsx>{`
            .projects-item-2 {
              // background-color: #6d7272;
              
            }
            .pro-container {
              // background-color: #c9d1d3;
              // background-color: #b7bdbf;
              // background-color: #000;
            }

            .pro-container:hover {
              // background-color: #b7bdbf;
            }
            .technologies-bg {
              // background-color: #ffffff;
              background-color: #c9d1d3;
            }           
                
            `}</style> 
          </div>
        </section>
      ))}
    </>
  );
};

export default Projects;
