//components/Projects.js
import Image from 'next/image';
import projectsData from '@/data/projectsData.js';
import VideoPlayer from '@/components/VideoPlayer';
import { FaCheck } from 'react-icons/fa';

const Projects = () => {
  return (
    <>
      {projectsData.map((project, index) => (
        <section key={index} className="flex w-full mb-5 xl:p-6">
          <div className="projects-container flex flex-wrap w-full gap-3 p-2 blue">
            <div className='projects-item-1 p-6 lg:flex-1 mx-auto orange'>
              <div className='projects-summary p-6 mx-auto max-w-2xl green'>
                <h1 className='font-bold p-3 text-2xl'>
                  {project.title}<br></br>
                  <span className='bg-green-400 text-sm p-2'>
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

            <div className="projects-item-2 lg:p-4 w-full lg:flex-1 red">
              {project.videoId ? (
                <VideoPlayer videoSrc={project.videoId} caption={project.caption} />
              ) : (
                <Image
                  src={project.backupImage}
                  alt="Backup Image"
                  className='mx-auto'
                  width={400} 
                  height={100}
                />
                
              )}

              <h3 className='p-2 text-center pt-8 pb-5'>Technologies Used:</h3>
              <h4 className='p-2 text-center pb-5'>{project.technologies}</h4>
              <div className='p-2 text-center pt-5 pb-8'>
                <a className='button blue-button' href={project.link}>VIEW CODE BASE ON GITHUB</a>
              </div>
            </div>
            <style jsx>{`
                .projects-item-2 {
                  background-image: url(${project.backdrop});
                  background-repeat: no-repeat;
                  background-size: cover;
                  background-position: center;
                }
            `}</style> 
          </div>
        </section>
      ))}
    </>
  );
};

export default Projects;
