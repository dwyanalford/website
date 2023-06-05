// components/Experience.js
import { Image } from 'next/image';
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
    <section className={styles.section}>
      <div className={styles.experience}>
        {sortedExperienceData.map(({ company, title, workDates, workType, tasks, website, websiteTitle, imgSrc }) => (
          <div key={company}>
            <Image src={imgSrc} width={160} height={60} />
            <h2>{company}</h2>
            <h3>{title}</h3>
            <h4>{workDates}</h4>
            <h5><span>{workType}</span></h5>
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
            <a href={website} target="_blank" rel="noopener noreferrer">{websiteTitle}</a>
          </div>
        ))}
      </div>
      {/* ... (Keep the existing styles) */}
    </section>
  );
};

export default Experience;
