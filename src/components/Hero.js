import React from 'react';
import Image from 'next/image';
import heroData from '@/data/heroData';

const Hero = ({ pageName }) => {
  const pageData = heroData.find((data) => data.page === pageName);

  return (
    pageData.content.map((data, index) => (
      <div key={index} className="hero flex xl:p-4 w-full mt-[70px] xl:mt-[95px]">
       
          <div className="hero-container flex flex-wrap relative w-full p-4">
            <div className="hero-item w-[1600px] p-2 xl:p-4 mx-auto bg-white rounded-lg mt-[20px]">
              <Image
                src={data.image.large.url}
                width={1600}
                height={700}
                alt="An african american man smiling with computer code in the background"
                className=''
                // srcSet={`${data.image.mobile.url} 480w, ${data.image.tablet.url} 768w, ${data.image.large.url} 1600w`}
                // sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1600px"
              />
              </div>
            <div className="hero-item xl:absolute xl:top-0 xl:left-40 2xl:ml-[50px] ">
              <h2
                className={`font-bold mb-4 mt-5 text-[2.25rem] xl:text-[5.5rem] xl:mb-0 xl:mt-20 ${
                  data.color === 'black' ? 'text-black' : 'text-white'
                }`}
              >
                {data.title}
              </h2>
              <p
                className={`text-[1.5rem] w-full xl:text-[2rem] xl:w-[400px] xl:ml-1 leading-snug ${
                  data.color === 'black' ? 'text-black' : 'text-white'
                }`}
              >
                {data.subTitle}
              </p>
            </div>
          </div>
        </div>
     
    ))
  );
};

export default Hero;
