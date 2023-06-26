// components/SocialLinks.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="flex items-center space-x-1">
      <a href="https://github.com">
        <FaGithub className="text-xl text-gray-800 hover:text-gray-600 transition-colors duration-200" />
      </a>
      <a href="https://linkedin.com">
        <FaLinkedin className="text-xl text-blue-600 hover:text-blue-500 transition-colors duration-200" />
      </a>
    </div>
  );
};

export default SocialLinks;
