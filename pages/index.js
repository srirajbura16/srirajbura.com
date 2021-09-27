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
          <p>
            I spent almost a year learning to code and here are some of the
            things I produced.
          </p>
        </div>
      </section>

      <section>
        <SectionTitle chars="Projects" />

        <Projects />
      </section>

      <section>
        <SectionTitle chars="About" />
        <About />
      </section>

      <section>
        <SectionTitle chars="Contact" />
        <Contact />
      </section>
    </Layout>
  );
}
