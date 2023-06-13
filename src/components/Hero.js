// components/Hero.js
import React, { useContext } from 'react';
import styles from '@/styles/Home.module.css';
import heroData from '@/data/heroData';
import { GlobalContext } from '@/context/GlobalState';

const Hero = ({ currentPage }) => {
  const { state } = useContext(GlobalContext);

  const sectionMargin = state.isMenuOpen ? '150px' : '0px';

  const pageData = heroData.find(data => data.page === currentPage);

  return (
    <div className="dynamicContent" style={{ marginLeft: sectionMargin, height: pageData.boxHeight }}>
        {pageData.content.map((data, index) => (
          <div key={index}>
            {/* <h1>{pageData.page}</h1> */}
            <div className={styles.imageContainer} style={{ backgroundImage: `url(${data.image.large.url})` }}>
              <div className={styles.titles}>
                <h2 className={`${styles.title} ${data.color === "black" ? styles.textBlack : styles.textWhite}`}>{data.title}</h2>
                <p className={`${styles.subTitle} ${data.color === "black" ? styles.textBlack : styles.textWhite}`}>{data.subTitle}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Hero;
