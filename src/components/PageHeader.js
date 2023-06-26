import React from 'react';

const PageHeader = ({ title }) => {
  return (
    <>
    <div className='flex'>
      <h1 className='pt-7 text-xl'>- {title} -</h1>;
    </div>
    </>
  )
};

export default PageHeader;
