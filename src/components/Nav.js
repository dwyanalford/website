//components/Nav.js
import { FaUser, FaHome, FaCode, FaBriefcase, FaBook, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import menuLinks from '@/data/menuLinks';

const Nav = ({ className, dataId }) => {
  const router = useRouter();
  const sortedMenuLinks = menuLinks.sort((a, b) => a.text.localeCompare(b.text));

  const getIconByMenuLinkText = (text) => {
    switch (text.toLowerCase()) {
      case 'biography':
        return <FaUser />;
      case 'home':
        return <FaHome />;
      case 'projects':
        return <FaCode />;
      case 'experience':
        return <FaBriefcase />;
      case 'skills':
        return <FaBook />;
      case 'education':
        return <FaBook />;
      case 'contact':
        return <FaEnvelope />;
      default:
        return null;
    }
  };

  return (
    <nav className={`${className} flex p-2 overflow-hidden mx-auto`} data-id={dataId}>
      <ul className='flex p-2 xl:gap-7'>
        {sortedMenuLinks.map(({ href, text }) => {
          const isActive = router.pathname === href;
          const linkClassName = isActive ? '.activeLink' : '';

          return (
            <li key={href} className='flex'>
              <Link href={href} className={`${linkClassName} button grey-button flex gap-2`}>
                <p className='self-center'>{getIconByMenuLinkText(text)}</p>
                <p className='self-center'>{text}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
