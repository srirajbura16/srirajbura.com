import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';

export default function Home() {
  // Nav - Layout
  // section.landing - Name and small description
  // section.projects - list of projects from projects data(lib folder)
  // sectoion.skills
  // sectoion.about
  // Footer - Layout

  return (
    <Layout home>
      <section>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
