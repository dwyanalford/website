//components/Education.js
import Image from 'next/image';
import styles from '@/styles/Education.module.css';
import educationData from '@/data/educationData';

const Education = () => {
  // Sort educationData array by end date in descending order
  const sortedEducationData = educationData.sort((a, b) => new Date(b.endDate) - new Date(a.endDate));

  return (
    <section className="dynamicContent">
      {sortedEducationData.map((item, index) => (
        <div key={index}>
          {/* Add img elements for the school and showcase images if provided */}
          {item.images.school && <Image src={item.images.school} alt={`${item.school} logo`} width={100} height={100}/>}
            <h2>{item.school}</h2>
            <h3>{item.title}</h3>
            <h4>{item.startDate} - {item.endDate}</h4>
            <p>{item.details}</p>
            <p><strong>Type:</strong> {item.type}</p>
            <p><strong>Location:</strong> {item.location}</p>
            {/* Add img elements for the school and showcase images if provided */}
          {item.images.showcase && <Image className={styles.educationImages} src={item.images.showcase} alt={`${item.showcase} showcase`} width={500} height={250}/>}
        </div>
      ))}
    </section>
  );
};


export default Education;
