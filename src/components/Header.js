// components/Header.js
import React, { useContext } from 'react';
import styles from '@/styles/Header.module.css';
import Contact from '@/components/contact/Contact';
import { GlobalContext } from '@/context/GlobalState';
import MobileMenu from '@/components/MobileMenu';
import NavButton from '@/components/NavButton';
import Avatar from '@/components/Avatar';
import Nav from './Nav';

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
      <section className="header flex justify-center p-4 mx-auto sticky top-0 z-10">
        <div className={`${headerClass} header-container flex justify-center p-4 w-full gap-1`}>
          <div className="header-item w-2/12 xl:w-1/12 p-4 text-center xl:hidden"><MobileMenu /></div>
          <div className="header-item w-7/12 xl:w-2/12 p-4 text-center justify-center"><Avatar /></div>
          <div className="header-item text-center hidden xl:flex xl:w-8/12 xl:p-4 justify-center"><Nav className="navInstance2" dataId="nav2" /></div>
          <div className="header-item w-3/12 xl:w-1/12 p-4 text-center flex justify-end"><NavButton handleClick={handleClick} /></div>
        </div>
      </section>
      <Contact isVisible={state.isOverlayActive} />
    </>
  );
};

export default Header;
