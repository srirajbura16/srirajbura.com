import styles from '../../styles/Project.module.css';
import { useRouter } from 'next/router';
// import projects_data from '../../lib/projects';
import { getProject, getAllProjectIds } from '../../lib/helpers';

export default function Project({ projectId }) {
  return (
    <div className={styles.container}>
      <div>project ID: {projectId}</div>
    </div>
  );
}

export async function getStaticProps(context) {
  const { projectId } = context.params;
  console.log(context);
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
