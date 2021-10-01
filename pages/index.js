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
          <h1>Hello, I'm Sriraj.</h1>
          <p>Here are some of the things I produced while learning to code.</p>
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
