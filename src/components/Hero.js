// components/Hero.js
import React from 'react';
import styles from '@/styles/Home.module.css';
import heroData from '@/data/heroData';

const Hero = ({ pageName }) => {
  const pageData = heroData.find(data => data.page === pageName);

  return (
    pageData.content.map((data, index) => (
      <div key={index} className="item1">
        <div className="borderDiv">
          <div className={styles.imageContainer} style={{ backgroundImage: `url(${data.image.large.url})` }}>
            <div className={styles.titles}>
              <h2 className={`${styles.title} ${data.color === "black" ? styles.textBlack : styles.textWhite}`}>{data.title}</h2>
              <p className={`${styles.subTitle} ${data.color === "black" ? styles.textBlack : styles.textWhite}`}>{data.subTitle}</p>
            </div>
          </div>
        </div>
      </div>
    ))
  );
};

export default Hero;
