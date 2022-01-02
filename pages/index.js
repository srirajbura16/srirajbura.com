import styles from '../styles/Home.module.css';
import SectionTitle from '../components/SectionTitle';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout nav={true}>
      <section className={styles.landing}>
        <div>
          <h1>
            Hi, I'm <span className={styles.name}>Sriraj</span>.
          </h1>
          <h3>
            Here are some of the things I{' '}
            <span className={styles.produced}>produced</span> while{' '}
            <span className={styles.ltc}>learning to code.</span>
            <br />
          </h3>
          <h3 className={styles.aboutme}>
            <Link href="/about">
              <a className={styles.aboutme}>About Me.</a>
            </Link>
          </h3>
        </div>
      </section>

      {/* <section id="about">
        <SectionTitle chars="About" />
        <About />
      </section> */}
      <span id="projects" />
      <section>
        <SectionTitle chars="Projects" />

        <Projects />
      </section>

      <span id="contact"></span>
      <section>
        <SectionTitle chars="Contact" />
        <Contact />
      </section>
    </Layout>
  );
}
