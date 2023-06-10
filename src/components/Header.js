// components/Header.js
import React, { useContext } from 'react';
import styles from '@/styles/Header.module.css';
import Contact from '@/components/Contact';
import { GlobalContext } from '../context/GlobalState';

const Header = () => {
    const { state, dispatch } = useContext(GlobalContext);

    const handleClick = () => {
        dispatch({ type: 'TOGGLE_OVERLAY' });
    };

    const headerClass = state.isOverlayActive ? `${styles.headerContainer} ${styles.overlayActive}` : styles.headerContainer;

    return (
        <>
            <div className={headerClass}>
                <div className={styles.leftSection}>
                </div>
                <div className={styles.rightSection}>
                    <button className={styles.navButton}>Projects</button>
                    <button className={styles.navButton}>Bio</button>
                    <button className={styles.navButton} onClick={handleClick}>Contact</button>
                </div>
            </div>
            <Contact isVisible={state.isOverlayActive} />
        </>
    )
}

export default Header;
