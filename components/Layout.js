import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sriraj Bura</title>
      </Head>
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
