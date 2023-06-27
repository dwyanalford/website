import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Avatar = () => {
  return (
    <>
      <div className='flex flex-row'>
        <div className='flex mx-auto'>
          <Link href={'/'}>
            <Image
              src='/images/dwyan-avatar.jpg' 
              alt="Dwyan Alford's Avatar"
              width={50}
              height={50}
              className='rounded-full'
            />
          </Link>
          <p className="font-bold text-left pl-4 leading-5">Dwyan Alford<br/>
          <span className="text-[12px] font-light 2xl:text-[14px]">Full Stack Web Developer</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Avatar;
