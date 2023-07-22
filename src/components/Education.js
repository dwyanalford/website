//components/Education.js
import Image from 'next/image';
import educationData from '@/data/educationData';

const Education = () => {
  // Sort educationData array by end date in descending order
  const sortedEducationData = educationData.sort((a, b) => new Date(b.endDate) - new Date(a.endDate));

  return (
    <>
      <div className='mt-[50px]'>
      {sortedEducationData.map((item, index) => (
        <section key={index} className="flex w-full pb-4 md:p-4 lg:p-10 max-h-auto md:h-screen">
            <div className="content-container md:p-4 lg:gap-2 overflow-hidden">
              
              <div className="w-full bg-center bg-cover p-8 rounded-lg"
              style={{ backgroundImage: `url(${item.images.showcase})`}}
              >
              
                <div className='education-opacity p-4 lg:p-8 max-w-lg mx-auto md:mt-[30%] lg:mt-[0px] bg-white shadow-xl rounded-t-lg bg-center bg-cover'
                style={{ backgroundImage: `url(${item.images.schoolBackground})`}}
                >{item.images.logo && <Image src={item.images.logo} alt={`${item.logo} logo`} width={150} height={100} 
                className='mx-auto rounded-lg shadow-lg'/> }</div>

               
                <div className='education-opacity max-w-lg mx-auto p-4 lg:p-8 shadow-xl rounded-b-lg'>
                  <h2 className='text-xl font-bold'>{item.school}</h2>
                  <p><strong>Dates attended:</strong> {item.startDate} - {item.endDate}</p><br></br>
                  <h3 className='font-semibold'>{item.title}</h3><br></br>
                  <p><strong>Details:</strong> {item.details}</p><br></br>
                  <p><strong>Type:</strong> {item.type}</p>
                  <p><strong>Location:</strong> {item.location}</p><br></br>
                  <p><strong>Website:</strong> <a className='underline text-lg text-blue-400 hover:text-blue-600' href={item.website} target='_blank'>{item.short}</a></p>
                </div>  
              </div> 
              
    
              
              {/* <div className="p-4 w-full md:flex-1" >
                 <div>
                 <div className=''>
                  
                  <h2>{item.school}</h2>
                  <h3>{item.title}</h3>
                  <p>{item.startDate} - {item.endDate}</p>
                  <p><strong>Area of focus:</strong> {item.details}</p>
                  <p><strong>Type:</strong> {item.type}</p>
                  <p><strong>Location:</strong> {item.location}</p>
                </div>  
                  </div> 
              </div> */}
            </div>  
        </section>
      ))}
      </div>
    </>
  );
};

export default Education;

