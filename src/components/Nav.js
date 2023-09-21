//components/Nav.js
import { FaUser, FaHome, FaCode, FaBriefcase, FaBook, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import menuLinks from '@/data/menuLinks';

const Nav = ({ className, dataId }) => {
  const router = useRouter();
  const sortedMenuLinks = menuLinks.sort((a, b) => a.text.localeCompare(b.text));

  const getIconByMenuLinkText = (text) => {
    const color = '#8f9293';
    switch (text.toLowerCase()) {
      case 'biography':
        return <FaUser color={color} />;
      case 'home':
        return <FaHome color={color} />;
      case 'projects':
        return <FaCode color={color} />;
      case 'experience':
        return <FaBriefcase color={color} />;
      case 'skills':
        return <FaBook color={color} />;
      case 'education':
        return <FaBook color={color} />;
      case 'contact':
        return <FaEnvelope color={color} />;
      default:
        return null;
    }
  };

  return (
    <nav className={`${className} p-2 mx-auto`} data-id={dataId}>
      <ul className='flex p-2 xl:gap-7'>
        {sortedMenuLinks.map(({ href, text }) => {
          const isActive = router.pathname === href;
          const linkClassName = isActive ? 'activeLink' : '';

          return (
            <li key={href} className='flex'>
              <Link href={href}>
                <div className={`button grey-button flex gap-2 xl:gap-2 ${linkClassName}`}>
                  <p className='self-center'>{getIconByMenuLinkText(text)}</p>
                  <p className='self-center'>{text}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;