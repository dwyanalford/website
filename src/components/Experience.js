// components/Experience.js
import styles from '@/styles/Experience.module.css'
import experienceData from '@/data/experienceData';

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
        <div key={index} className={styles.wrapper}>
          <div className={`${styles.row} borderDiv`}>
          <div className={`${styles.column} ${styles.leftColumn}`}>
          <h1>{exp.title}</h1>
          <h2>Company: {exp.company}</h2>
          <h4>{exp.workDates}</h4>
          <h4>Type of work:{exp.workType}</h4>
          <h3>Tasks:</h3>
          <h4>Type of work:&nbsp;{exp.workType}</h4>
          <ul>
            {exp.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
            <div className={`${styles.column} ${styles.rightColumn}`}>
              <img
                src={exp.imgSrc}
                alt={exp.alt}
                className={styles.backgroundImage}
              />
              <div className={styles.buttonContainer}>
                <a href={exp.website} className={`button-blue ${styles.centered}`} target="_blank" rel="noopener noreferrer">
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
