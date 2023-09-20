// components/NavButton.js
import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

const NavButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleServiceClick = (service) => {
    let serviceUrl = '';
    let recipient = 'dwyan.alford@gmail.com'; // Default recipient
    let subject = 'dwyanalford.com';
  
    switch (service) {
      case 'Gmail':
        serviceUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}`;
        break;
      case 'Outlook':
        serviceUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(recipient)}&subject=${encodeURIComponent(subject)}`;
        break;
      case 'Yahoo Mail':
        serviceUrl = `https://compose.mail.yahoo.com/?to=${encodeURIComponent(recipient)}&subject=${encodeURIComponent(subject)}`;
        break;
      case 'Apple Mail':
        serviceUrl = `https://www.icloud.com/#mail?to=${encodeURIComponent(recipient)}&subject=${encodeURIComponent(subject)}`;
        break;
      case 'default':
        serviceUrl = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}`;
        break;
      default:
        // Handle the default case or any custom action
        break;
    }
  
    if (serviceUrl) {
      window.open(serviceUrl, '_blank');
      setShowDropdown(false); // Close the dropdown after opening the URL.
    }
  };  
  

  return (
    <div className='contact-container relative inline-block'>
      <a
        className='flex button blue-button uppercase gap-2 overflow-hidden'
        onClick={toggleDropdown}
      >
        <FaEnvelope className='self-center' />
        <p className='self-center hidden sm:block'>Contact</p>
      </a>
      {showDropdown && (
        <div className='absolute left-0 mt-2 py-2 bg-white border border-gray-300 rounded-lg shadow-lg'>
          <ul>
            <li>
              <button
                className='block w-full text-left px-4 py-2 hover:bg-gray-200'
                onClick={() => handleServiceClick('default')}
              >
                Default Email
              </button>
            </li>
            <li>
              <button
                className='block w-full text-left px-4 py-2 hover:bg-gray-200'
                onClick={() => handleServiceClick('Gmail')}
              >
                Gmail
              </button>
            </li>
            <li>
              <button
                className='block w-full text-left px-4 py-2 hover:bg-gray-200'
                onClick={() => handleServiceClick('Outlook')}
              >
                Outlook
              </button>
            </li>
            <li>
              <button
                className='block w-full text-left px-4 py-2 hover:bg-gray-200'
                onClick={() => handleServiceClick('Yahoo Mail')}
              >
                Yahoo Mail
              </button>
            </li>
            <li>
              <button
                className='block w-full text-left px-4 py-2 hover:bg-gray-200'
                onClick={() => handleServiceClick('Apple Mail')}
              >
                Apple Mail
              </button>
            </li>
            {/* Add more services as needed */}
          </ul>
        </div>
      )}
      <style jsx>{`
        .button {
          /* Your existing button styles here */
          cursor: pointer; /* Add this line to change the cursor style */
        }
      `}</style>
    </div>
  );
};

export default NavButton;


// USE THIS BELOW AS EXAMPLE TO USE THE handleClick
// const NavButton = ({ handleClick }) => {
//   return (
//     <button className='flex button blue-button uppercase gap-2 overflow-hidden' onClick={handleClick}>
//       <FaEnvelope className='self-center'/>
//       <p className='self-center hidden sm:block'>Contact</p>
//     </button>
//   );
// };
