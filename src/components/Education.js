//components/Education.js
import Image from 'next/image';
import educationData from '@/data/educationData';

const Education = () => {
  // Sort educationData array by end date in descending order
  const sortedEducationData = educationData.sort((a, b) => new Date(b.endDate) - new Date(a.endDate));

  return (
    <>
      {sortedEducationData.map((item, index) => (
        <section key={index} className="education flex w-full lg:p-10">
            <div className="education-container mt-[100px] flex flex-wrap w-full p-1 gap-3 lg:gap-2">
              
              <div className="education-item lg:p-4 w-full bg-center bg-cover md:flex-1"
              style={{ backgroundImage: `url(${item.images.showcase})`}}
              >
              
                <div>{item.images.school && <Image src={item.images.school} alt={`${item.school} logo`} width={150} height={100} 
                className='md:mx-auto md:mt-[15%] lg:mt-[6%]'/> }</div>
              
              </div>
              
              <div className="education-item p-4 w-full md:flex-1" >
                 <div>
                 <div className='first-letter:'>
                  
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

