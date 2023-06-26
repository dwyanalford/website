//components/Nav.js
import styles from '@/styles/Nav.module.css';
import { FaUser, FaHome, FaCode, FaBriefcase, FaBook, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import menuLinks from '@/data/menuLinks';

const Nav = () => {
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
    <nav className={styles.nav}>
      <ul>
        {sortedMenuLinks.map(({ href, text }) => {
          const isActive = router.pathname === href;
          const linkClassName = isActive ? styles.activeLink : '';

          return (
            <li key={href}>
              <Link href={href} className={linkClassName}>
                {getIconByMenuLinkText(text)}
                <span>{text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
