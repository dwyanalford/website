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
        <section key={index} className="education flex w-full mx-auto p-10">
            <div className="education-container flex flex-wrap w-full justify-center p-4 gap-4 lg:gap-2">
              <div className="education-item p-4 w-full lg:flex-1" style={{ backgroundImage: `url(${item.images.showcase})` }}>
              {item.images.school && <Image src={item.images.school} alt={`${item.school} logo`} width={150} height={100} className={styles.image} /> }
              </div>
              <div className="education-item p-4 text-center w-full lg:flex-1" >
                 <div>
                 <div className='ml-[200px] mt-[100px]'>
                  
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
        </section>
      ))}
    </>
  );
};

export default Education;

