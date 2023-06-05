import styles from "@/styles/Skills.module.css";
import data from '@/data/skillsData';

const Skills = () => {
  const maxExperience = 5;

  return (
    <div className={styles.container}>
      <div className={styles.yAxis}><h4>Skill Level (Years of Experience)</h4></div>
      {data.map((category) => (
        <div key={category.category} className={styles.chartContainer}>
          <div className={styles.chart}>
            <div className={styles.xAxis}><h4>{category.category}</h4></div>
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
