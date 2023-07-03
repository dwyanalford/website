//components/Hero.js
import React from 'react';
import heroData from '@/data/heroData';

const Hero = ({ pageName }) => {
  const pageData = heroData.find((data) => data.page === pageName);

  return (
    pageData.content.map((data, index) => (
      <div key={index} 
           className="hero flex w-full h-screen p-4 relative"
           style={{ backgroundImage: `url(${data.image.large.url})` }}>
          <div className="hero-item absolute bottom-40 left-0 p-8 md:p-0 md:h-[500px] md:static md:ml-[60px] md:mt-[90px]">
            <h2
              className={`font-bold mb-4 mt-5 text-[2.25rem] xl:text-[5.5rem] xl:mb-0 ${
                data.color === 'black' ? 'text-black' : 'text-white'
              }`}
            >
              {data.title}
            </h2>
            <p
              className={`text-[1.5rem] xl:text-[2rem] w-[400px] xl:ml-1 leading-snug ${
                data.color === 'black' ? 'text-black' : 'text-white'
              }`}
            >
              {data.subTitle}
            </p>
          </div>
      </div>
    ))
  );
};

export default Hero;
