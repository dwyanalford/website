// components/DetailColumn.js
import styles from '@/styles/DetailColumn.module.css';

const DetailColumn = ({ data, type }) => {
  return (
    <div className={`${styles.column} ${styles.leftColumn} ${styles[type]}`}>
      <h1>
        {data.title}
        {data.buttonColor && (
          <span className={`button-highlights ${data.buttonColor}`}>
            {data.type}
          </span>
        )}
      </h1>
      {data.descriptions && data.descriptions.map((description, index) => (
        <p key={index}>{description}</p>
      ))}
      {data.responsibilities && data.responsibilities.length > 0 && (
        <>
          <h3>Responsibilities:</h3>
          {data.responsibilities.map((responsibility, index) => (
            <ul key={index}>
              <li>{responsibility}</li>
            </ul>
          ))}
        </>
      )}
      {type === "experience" && (
        <>
          <h2>Company: {data.company}</h2>
          <h4>{data.workDates}</h4>
          <h4>Type of work:{data.workType}</h4>
          <h3>Tasks:</h3>
          <h4>Type of work:&nbsp;{data.workType}</h4>
          <ul>
            {data.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default DetailColumn;
