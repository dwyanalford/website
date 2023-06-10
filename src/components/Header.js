// components/Header.js
import React from 'react';
import styles from '@/styles/Header.module.css';
import MobileMenu from '@/components/MobileMenu';

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.leftSection}>
                
            </div>
            <div className={styles.rightSection}>
                <button className={styles.navButton}>Projects</button>
                <button className={styles.navButton}>Bio</button>
                <button className={styles.navButton}>Contact</button>
            </div>
        </div>
    )
}

export default Header;
