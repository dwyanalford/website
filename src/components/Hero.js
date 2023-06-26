import React from 'react';
import Image from 'next/image';
import heroData from '@/data/heroData';

const Hero = ({ pageName }) => {
  const pageData = heroData.find((data) => data.page === pageName);

  return (
    pageData.content.map((data, index) => (
      <div key={index} className="item1">
       
          <div className="">
            <Image
              src={data.image.large.url}
              width={1600}
              height={700}
              alt="Hero Image"
              srcSet={`${data.image.mobile.url} 480w, ${data.image.tablet.url} 768w, ${data.image.large.url} 1600w`}
              sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, 1600px"
            />
            <div className="p-6">
              <h2
                className={`text-4xl font-bold mb-4 ${
                  data.color === 'black' ? 'text-black' : 'text-white'
                }`}
              >
                {data.title}
              </h2>
              <p
                className={`text-2xl ${
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
