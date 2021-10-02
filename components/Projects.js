import Image from 'next/image';
import styles from '../styles/Projects.module.css';
import Link from 'next/link';
import projects_data from '../lib/projects';

export default function Projects() {
  return (
    <div className={styles.container}>
      {projects_data.map((project) => {
        return (
          <div key={project.id} className={styles.project_container}>
            <div className={styles.project_image}>
              <Image
                src={`/images/${project.img}`}
                layout="intrinsic"
                alr={project.name}
                width={560} //480
                height={320} //280
              />
            </div>
            <div className={styles.project_details}>
              <h2>{project.name}</h2>
              <p>{project.small_description}</p>
              <Link href={'projects/' + project.url_name}> → Read More</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
