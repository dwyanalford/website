// components/Header.js
import React, { useContext } from 'react';
import styles from '@/styles/Header.module.css';
import Contact from '@/components/contact/Contact';
import { GlobalContext } from '@/context/GlobalState';
import MobileMenu from '@/components/MobileMenu';
import NavButton from '@/components/NavButton';
import Avatar from '@/components/Avatar';
import Link from 'next/link';

const Header = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleClick = () => {
    dispatch({ type: 'TOGGLE_OVERLAY' });
  };

  const headerClass = state.isOverlayActive
    ? `${styles.headerContainer} ${styles.overlayActive}`
    : styles.headerContainer;

  return (
    <>
      <div className={`${headerClass} header-custom flex justify-center items-center fixed mx-auto overflow-hidden`}>
        <div className='flex w-2/12 justify-left'>
            <MobileMenu />
        </div>
        <div className='flex w-7/12 justify-center'>
            <Avatar />
        </div>
        <div className='flex w-3/12 justify-end'>
            <Link href="/biography" rel="noopener noreferrer" className='blue-button'>Biography</Link>
            <NavButton handleClick={handleClick} />
        </div>
        <style jsx>{`
          
        `}</style>
      </div>
      <Contact isVisible={state.isOverlayActive} />
    </>
  );
};

export default Header;
