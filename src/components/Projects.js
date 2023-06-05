//components/projects.js
import projectsData from '@/data/projectsData.js';
import VideoPlayer from '@/components/VideoPlayer';
import styles from '@/styles/Projects.module.css';

const Projects = () => {
    return (
      <section className="dynamicContent">
       
          {projectsData.map((project, index) => (
            <div key={index}>
              <h2>
                {project.title}
                <span className={`button-highlights ${project.buttonColor}`}>{project.type}</span>
              </h2>
              {project.descriptions.map((description, index) => (
                <p key={index}>{description}</p>
              ))}
              <h3>Technologies Used:</h3>
              <p className={styles.technologiesUsed}><code>{project.technologies}</code></p>
              <a className="button-blue" href={project.link}>VIEW FULL CODE BASE</a>
              {project.videoSrc && (
                
                  <VideoPlayer
                    videoSrc={project.videoId}
                    caption={project.caption}
                  />
                
              )}
            </div>
          ))}
      </section>
    );
};

export default Projects;
