import Image from 'next/image';
import styles from '../styles/Layout.module.css';
import Link from 'next/link';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.children}>{children}</main>
      <Footer />
    </div>
  );
}
