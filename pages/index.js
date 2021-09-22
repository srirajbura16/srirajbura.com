import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  // section.landing - Name and small description
  // section.projects - list of projects from projects data(lib folder)
  // sectoion.skills
  // sectoion.about

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
        <h1 className="section-title">// Projects</h1>
        <Projects />
      </section>

      <section>
        <h1 className="section-title">// Skills</h1>
        <Skills />
      </section>
    </Layout>
  );
}
