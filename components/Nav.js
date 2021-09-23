import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <h1>Sriraj Bura</h1>
      <ul className={styles.nav_links}>
        <li>
          {' '}
          <Link href="/">
            <a className={styles.nav_link}>Projects</a>
          </Link>
        </li>
        <li>
          {' '}
          <Link href="/">
            <a className={styles.nav_link}>Skills</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={styles.nav_link}>About</a>
          </Link>
        </li>
        <li>
          {' '}
          <Link href="../lib/sample-resume.pdf">
            <a className={styles.nav_link_resume} target="blank">
              Resume
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
