import styles from '../styles/Home.module.css';
import SectionTitle from '../components/SectionTitle';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout nav={true}>
      <section className={styles.landing}>
        <div>
          <h1 className={styles.name}>Hi, I'm Sriraj.</h1>
          <h4 className={styles.intro}>
            Full-Stack Developer based in Toronto, Canada.
            <br />
          </h4>
          <h3 className={styles.aboutme}>
            <Link href="/about">
              <a className={styles.aboutme}>About Me.</a>
            </Link>
          </h3>
        </div>
      </section>

      <span id="projects" />
      <section>
        <SectionTitle chars="Projects" />
        <Projects />
      </section>

      <span id="contact" />
      <section>
        <SectionTitle chars="Contact" />
        <Contact />
      </section>
    </Layout>
  );
}
