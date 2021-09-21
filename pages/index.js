import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Projects from '../components/Projects';

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
            I spent almost a year learning to code and here is what I produced.
          </p>
        </div>
      </section>
      <section>
        <div className={styles.section_title}>
          <h1>
            {' '}
            <strong>//</strong> Projects
          </h1>
        </div>
        <Projects />
      </section>
    </Layout>
  );
}
