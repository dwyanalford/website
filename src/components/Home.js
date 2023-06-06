//components/Home.js
import React from 'react';
import styles from '@/styles/Home.module.css';
import homeData from '@/data/homeData';

const Home = () => {
  return (
    <div className="dynamicContent">
        {homeData.map((data, index) => (
          <div key={index}>
            <div className={`${styles.section} ${styles.imageContainer}`} style={{ backgroundImage: `url(${data.image})` }}>
              <div className={styles.title}>
                <h2 className={`${styles.subTitle} ${data.color === "black" ? styles.textBlack : styles.textWhite}`}>{data.subTitle}</h2>
                <p className={`${styles.text} ${data.color === "black" ? styles.textBlack : styles.textWhite}`}>{data.text}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;

