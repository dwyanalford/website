// components/SocialLinks.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex space-x-8 justify-center">
      <a href="https://github.com/dwyanalford" target='_blank'>
        <FaGithub className="text-2xl text-gray-800 hover:text-gray-600 transition-colors duration-200" />
      </a>
      <a href="https://www.linkedin.com/in/dwyanalford/" target='_blank'>
        <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-500 transition-colors duration-200" />
      </a>
    </div>
  );
};

export default SocialLinks;
