import styles from '../../styles/Project.module.css';
import { useRouter } from 'next/router';
import SectionTitle from '../../components/SectionTitle';
// import projects_data from '../../lib/projects';
import { getProject, getAllProjectIds } from '../../lib/helpers';

export default function Project({ projectId }) {
  const project = getProject(projectId);
  const { name, small_description } = project;
  return (
    <section className={styles.container}>
      <SectionTitle chars={name} />
      <div className={styles.project_container}>
        <div className={project.small_description}></div>
        {small_description}
      </div>
    </section>
  );
}

export async function getStaticProps(context) {
  const { projectId } = context.params;
  return {
    props: {
      projectId: projectId,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}
