//components/Projects.js
import Image from 'next/image';
import projectsData from '@/data/projectsData.js';
import VideoPlayer from '@/components/VideoPlayer';

const Projects = () => {
  return (
    <>
      {projectsData.map((project, index) => (
        <div key={index} className="content">
          <div className="content-container lg:gap-2">
            <div className='projects-item w-full p-6 md:flex-1'>
              <h1 className='font-bold p-3 text-2xl'>
                {project.title}<br></br>
                <span className='bg-green-400 text-sm ml-[20px] p-2'>
                  {project.type}
                </span>
              </h1>
              {project.descriptions.map((description, index) => (
                <p className='p-3' key={index}>{description}</p>
              ))}
              {project.responsibilities.length > 0 && (
                <>
                  <h3 className='p-2 mt-[30px]'>Responsibilities:</h3>
                  {project.responsibilities.map((responsibility, index) => (
                    <ul key={index}>
                      <li className='p-4'>{responsibility}</li>
                    </ul>
                  ))}
                </>
              )}
            </div>

            <div className="projects-item p-6 w-full md:flex-1 bg-white">
              {project.videoSrc ? (
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

              <h3 className='p-2 text-center'>Technologies Used:</h3>
              <h4 className='p-2 text-center'>{project.technologies}</h4>
              <div className='p-2 text-center'>
                <a className='' href={project.link}>VIEW CODE BASE ON GITHUB</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Projects;
