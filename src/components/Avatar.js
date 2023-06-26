import React from 'react';
import Image from 'next/image';

const Avatar = () => {
  return (
    <>
      <span className="">
        <Image
          src='/images/dwyan-avatar.jpg' 
          alt="Dwyan Alford's Avatar"
          width={50}
          height={50}
          className='rounded-full overflow-hidden pl-1'
        />
      </span>
        <p className="text-sm font-semibold pl-2 pt-1">Dwyan Alford<br/>
        <span className="text-sm font-normal">Full Stack Web Developer</span>
        </p>
    </>
  );
};

export default Avatar;
