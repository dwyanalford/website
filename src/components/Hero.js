//components/Hero.js
import React, { useEffect, useState } from 'react';
import heroData from '@/data/heroData';

const Hero = ({ pageName, scrollDuration = 500 }) => {
  const pageData = heroData.find((data) => data.page === pageName);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
      setTimeout(() => {
        window.scrollBy(0, -40); // Adjust the offset if needed
      }, scrollDuration);
    }
  };

  let sectionId = '';

  switch (pageName) {
    case 'Projects':
      sectionId = 'Projects';
      break;
    case 'Skills':
      sectionId = 'Skills';
      break;
    case 'Experience':
      sectionId = 'Experience';
      break;
    case 'Biography':
      sectionId = 'Biography';
      break;
    default:
      sectionId = 'Projects';
      break;
  }

  const renderReadMoreButton = pageName !== 'Home';

  return (
    pageData.content.map((data, index) => (
      <div
        key={index}
        className={`hero flex w-full h-screen ${loaded ? 'fade-in' : ''}`}
      >
        <div
          className="hero-item relative w-full"
          style={{ backgroundImage: `url(${data.image.large.url})` }}
        ></div>

        <div
          className={`hero-content absolute bottom-20 xl:top-20 left-0 p-8 ${
            data.color === 'black'
              ? 'bg-white bg-opacity-50 xl:bg-transparent'
              : 'bg-black bg-opacity-50 xl:bg-transparent' // Remove background at "xl" screen size
          }`}
        >
          <h2
            className={`font-bold mb-4 mt-5 text-[2.25rem] xl:w-[700px] xl:text-[5.5rem] xl:mb-[30px] p-2 ${
              data.color === 'black' ? 'text-black' : 'text-white'
            }`}
          >
            {data.title}
          </h2>
          <p
            className={`text-[1.5rem] xl:text-[2rem] xl:w-[600px] xl:ml-1 leading-snug p-3 ${
              data.color === 'black' ? 'text-black' : 'text-white'
            }`}
          >
            {data.subTitle}
          </p>
          {renderReadMoreButton && (
            <button
              className="hidden xl:block text-[1.25rem] xl:text-[1.7rem] mt-4 ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer"
              onClick={() => scrollToSection(sectionId)}
            >
              READ MORE
            </button>
          )}
        </div>
      </div>
    ))
  );
};

export default Hero;
