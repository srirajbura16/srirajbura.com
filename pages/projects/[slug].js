import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../../components/Layout';
import Markdown from '../../components/Markdown';

import { getProject } from '../../lib/helpers';

export default function Project({
  frontmatter: { title },
  slug,
  project,
  content,
}) {
  const { name, small_description } = project; //meta data

  return (
    <Layout headTitle={title}>
      <section>
        <Markdown title={title} content={content} />
      </section>
    </Layout>
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
