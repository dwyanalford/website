//components/Education.js
import Image from 'next/image';
import styles from '@/styles/Education.module.css';
import educationData from '@/data/educationData';

const Education = () => {
  // Sort educationData array by end date in descending order
  const sortedEducationData = educationData.sort((a, b) => new Date(b.endDate) - new Date(a.endDate));

  return (
    <>
      {sortedEducationData.map((item, index) => (
        <div key={index} className={styles.wrapper}>
          <div className={`${styles.row}`}>
            <div className={styles.imageContainer} style={{ backgroundImage: `url(${item.images.showcase})` }}>
              <div className={`${styles.column} ${styles.leftColumn}`}>
                {item.images.school && <Image src={item.images.school} alt={`${item.school} logo`} width={150} height={100} className={styles.image} /> }
                <h2>{item.school}</h2>
                <h3>{item.title}</h3>
                <p>{item.startDate} - {item.endDate}</p>
                <p><strong>Area of focus:</strong> {item.details}</p>
                <p><strong>Type:</strong> {item.type}</p>
                <p><strong>Location:</strong> {item.location}</p>
              </div>
            </div>  
          </div>
        </div>
      ))}
    </>
  );
};

export default Education;

