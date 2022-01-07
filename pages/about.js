import React from 'react';
import Markdown from '../components/Markdown';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../components/Layout';
// import styles from '../styles/About.module.css';

export default function about({ frontmatter, content }) {
  return (
    <Layout headTitle={frontmatter.title} nav={true}>
      <Markdown content={content} />
    </Layout>
  );
}

export function getStaticProps() {
  const markdownWithMeta = fs.readFileSync(
    path.join('lib', 'about.md'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
    },
  };
}
