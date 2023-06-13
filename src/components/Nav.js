//components/Nav.js
import styles from '@/styles/Nav.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter
import Image from 'next/image';
import menuLinks from '@/data/menuLinks';

const Nav = () => {
  const router = useRouter(); // Use useRouter
  const sortedMenuLinks = menuLinks.sort((a, b) => a.text.localeCompare(b.text));

  return (
    <nav className={styles.nav}>
      <ul>
        {sortedMenuLinks.map(({ href, src, alt, text, target }) => {
          const isActive = router.pathname === href; // Check if the current route matches the link's href
          const linkClassName = isActive ? styles.activeLink : ''; // Apply activeLink class if the link is active

          return (
            <li key={href}>
              <Link href={href} className={linkClassName} target={target} rel="noopener noreferrer">
                  <Image src={src} alt={`${text} button`}  width={25} height={22} />
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
