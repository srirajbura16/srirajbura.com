import styles from '../styles/Home.module.css';
import SectionTitle from '../components/SectionTitle';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <Layout home>
      <section className={styles.landing}>
        <div>
          <h1>
            Hi, I'm <span className={styles.name}>Sriraj</span>.
          </h1>
          <h3>
            Here are some of the things I{' '}
            <span className={styles.produced}>produced</span> while{' '}
            <span className={styles.ltc}>learning to code.</span>
          </h3>
        </div>
      </section>

      <section id="projects">
        <SectionTitle chars="Projects" />

        <Projects />
      </section>

      <section id="about">
        <SectionTitle chars="About" />
        <About />
      </section>

      <section id="contact">
        <SectionTitle chars="Contact" />
        <Contact />
      </section>
    </Layout>
  );
}
