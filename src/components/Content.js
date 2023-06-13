// components/Content.js
import React, { useContext } from 'react';
import { GlobalContext } from '@/context/GlobalState';

const Content = ({ children }) => {
  const { state } = useContext(GlobalContext);
  const sectionMargin = state.isMenuOpen ? '150px' : '0px';

  return (
    <div className="mainDiv" style={{ marginLeft: sectionMargin }}>
        {children}
    </div>
  );
};

export default Content;
