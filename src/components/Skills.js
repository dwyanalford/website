import styles from "@/styles/Skills.module.css";
import data from '@/data/skillsData';

const Skills = () => {
  const maxExperience = 5;

  return (
    <div className='flex flex-wrap p-6 space-y-6 gap-7'>
      {data.map((category) => (
        <div key={category.category} className='p-4 md:p-6 max-w-lg mx-auto shadow-md'>
          <div className={styles.chart}>
            <div className={styles.xAxis}><h3>{category.category}</h3></div>
            {category.technologies.map((technology) => (
              <div
                key={technology.name}
                className={styles.bar}
                style={{ height: `${(technology.experience / maxExperience) * 100}%` }}
              >
                <span className={styles.label2}>
                {technology.experience}<br/>{technology.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

//images/midjourney-created-man-computer.jpg
