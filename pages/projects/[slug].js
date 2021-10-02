import styles from '../../styles/Project.module.css';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';

import SectionTitle from '../../components/SectionTitle';
import { getProject } from '../../lib/helpers';

export default function Project({
  frontmatter: { title },
  slug,
  project,
  content,
}) {
  const { name, small_description } = project;
  return (
    <section className={styles.container}>
      <SectionTitle chars={title} />
      <div className={styles.project_container}>
        {/* <div className={styles.small_description}>{small_description}</div> */}
        <div
          // className={styles.markdown}
          className="markdown"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        />
      </div>
    </section>
  );
}

export function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('descriptions', slug + '.md'),
    'utf-8'
  );

  const project = getProject(slug);

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      project,
      slug,
      content,
    },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('descriptions'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
