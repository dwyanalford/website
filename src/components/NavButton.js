// components/NavButton.js
import React from 'react';
import styles from '@/styles/Header.module.css';

const NavButton = ({ handleClick }) => {
  return (
    <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded' onClick={handleClick}>
      Contact
    </button>
  );
};

export default NavButton;
