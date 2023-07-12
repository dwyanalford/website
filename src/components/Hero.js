//components/Hero.js
import React, { useEffect, useState } from 'react';
import heroData from '@/data/heroData';

const Hero = ({ pageName }) => {
  const pageData = heroData.find((data) => data.page === pageName);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    pageData.content.map((data, index) => (
      <div key={index} 
           className={`hero flex w-full h-screen p-4 relative ${loaded ? 'fade-in' : ''}`}
           style={{ backgroundImage: `url(${data.image.large.url})` }}>
          <div className="hero-item absolute bottom-40 left-0 p-8 md:p-0 md:h-[500px] md:static md:ml-[60px] md:mt-[90px]">
            <h2
              className={`font-bold mb-4 mt-5 text-[2.25rem] w-[650px] xl:text-[5.5rem] xl:mb-[30px] ${
                data.color === 'black' ? 'text-black' : 'text-white'
              }`}
            >
              {data.title}
            </h2>
            <p
              className={`text-[1.5rem] xl:text-[2rem] w-[500px] xl:ml-1 leading-snug ${
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

