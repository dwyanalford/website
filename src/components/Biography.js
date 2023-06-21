// components/Biography.js
import Image from "next/image";
import styles from '@/styles/Biography.module.css';
import bioData from "@/data/bioData";

const Biography = () => {
    return (
        <>
            {bioData.map((data, index) => (
                <div key={index} className={styles.wrapper}>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <div className={styles.leftColumn}>
                                <h4 className={styles.heading}>{data.heading}</h4>
                                <p className={styles.dateDisplayed}>{data.date}</p>
                                <p className={styles.bioParagraph1}>{data.p1}</p>
                                <p className={styles.bioParagraph2}>{data.p2}</p>
                            </div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.rightColumn}>

                            </div>
                        </div>
                    </div>
                </div>

            ))}
            
        </>
    );
}

export default Biography;