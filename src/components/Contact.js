// components/Contact.js
import { useContext } from 'react';
import styles from '@/styles/Contact.module.css';
import { GlobalContext } from '@/context/GlobalState'; 

const Contact = () => {
    const { state, dispatch } = useContext(GlobalContext);
    const containerClass = state.isOverlayActive ? `${styles.overlay} ${styles.active}` : styles.overlay;
    const contactContainerClass = state.isOverlayActive ? `${styles.contactContainer} ${styles.active}` : styles.contactContainer;

    const handleOverlayClick = () => {
        dispatch({ type: 'TOGGLE_OVERLAY' });
    };

    return (
        <div className={containerClass} onClick={handleOverlayClick}>
            <div className={contactContainerClass} onClick={e => e.stopPropagation()}>
                Contact Component
            </div>
        </div>
    );
};

export default Contact;
