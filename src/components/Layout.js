import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <div className='flex justify-center bg-gray-700'>
        <div className="bg-white flex flex-col items-center pt-16">
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
