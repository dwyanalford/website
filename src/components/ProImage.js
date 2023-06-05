//components/ProImage.js
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/ProImage.module.css';


export default function ProImage() {
    return (
          <section className={styles.proImage}>
           <Link href="/">
              <Image 
                src='/images/dwyan-avatar.jpg' 
                alt="Dwyan Alford's Avatar"
                className={styles.avatar} 
                width={150}
                height={150}
                // for some reason I had to include width and height properties
                />
            </Link>
            <p className={styles.name}>Dwyan Alford</p>
            <code className={styles.title}>Full Stack Web Developer</code>
          </section>
    );
};