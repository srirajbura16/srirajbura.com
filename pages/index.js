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
          <h3 className={styles.name}>Hi, I'm Sriraj.</h3>
          <p className={styles.intro}>
            I graduated from High School amid the pandemic and decided not to
            pursue college. Instead, I spent the year involved in coding
            communities and learning full-stack development. Currently, I
            specialize in the MERN stack but am happy to learn new tech and
            languages.
            <br />
          </p>
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
