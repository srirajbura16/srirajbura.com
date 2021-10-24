import Link from 'next/link';
import styles from '../styles/Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_items}>
        <h1>Sriraj Bura</h1>
        <ul className={styles.nav_links}>
          <li>
            {' '}
            <Link href="#projects">
              <a className={styles.nav_link}>Projects</a>
            </Link>
          </li>
          <li>
            {' '}
            <Link href="#about">
              <a className={styles.nav_link}>About</a>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <a className={styles.nav_link}>Contact</a>
            </Link>
          </li>
          <li>
            {' '}
            <Link href="/resume.pdf">
              <a className={styles.nav_link_resume} target="blank">
                Resume
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
