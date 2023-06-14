//components/Projects.js
import projectsData from '@/data/projectsData.js';
import VideoPlayer from '@/components/VideoPlayer';
import styles from '@/styles/Projects.module.css';

const Projects = () => {
  return (
    <>
      {projectsData.map((project, index) => (
        <div key={index} className={styles.wrapper}>
          <div className={`${styles.row} borderDiv`}>
            <div className={styles.column}>
              <h1>
                {project.title}
                <span className={`button-highlights ${project.buttonColor}`}>
                  {project.type}
                </span>
              </h1>
              {project.descriptions.map((description, index) => (
                <p key={index}>{description}</p>
              ))}
              {project.responsibilities.length > 0 && (
                <>
                  <h3>Responsibilities:</h3>
                  {project.responsibilities.map((responsibility, index) => (
                    <ul key={index}>
                      <li>{responsibility}</li>
                    </ul>
                  ))}
                </>
              )}
            </div>

            <div className={`${styles.column} ${styles.rightColumn}`}>
              {project.videoSrc ? (
                <VideoPlayer videoSrc={project.videoId} caption={project.caption} />
              ) : (
                <img
                  src={project.backupImage}
                  alt="Backup Image"
                  className={styles.backupImage}
                  style={{ height: 'auto', width: '100%' }}
                />
              )}

              <h3 className={styles.centered}>Technologies Used:</h3>
              <h4 className={styles.centered}>{project.technologies}</h4>
              <div className={styles.buttonContainer}>
                <a className={`button-blue ${styles.centered}`} href={project.link}>VIEW CODE BASE ON GITHUB</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Projects;
