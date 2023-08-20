import React from 'react';

const PageHeader = ({ title }) => {
  return (
    <>
    <div className='flex w-full pt-[85px] lg:pt-[145px] pb-[25px]'>
      <h1 className='text-xl mx-auto font-bold p-3 lg:p-6'>{title}</h1>
    </div>
    </>
  )
};

export default PageHeader;
