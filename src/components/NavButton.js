// components/NavButton.js
import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const NavButton = ({ handleClick }) => {
  return (
    <button className='flex button blue-button uppercase gap-2' onClick={handleClick}>
      <FaEnvelope className='self-center'/>
      <p className='self-center'>Contact</p>
    </button>
  );
};

export default NavButton;
