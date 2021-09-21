import Image from 'next/image';
import styles from '../styles/Projects.module.css';
import Link from 'next/link';
import Nav from './Nav';
import Footer from './Footer';
import projects_data from '../lib/projects';

export default function Projects() {
  return (
    <div className={styles.container}>
      {projects_data.map((project) => {
        return (
          <div className={styles.project_container}>
            <div className={styles.project_image}>
              <Image
                src="/images/project.jpeg"
                layout="intrinsic"
                width={480}
                height={280}
              />
            </div>
            <div className={styles.project_details}>
              <h2>{project.name}</h2>
              <p>{project.small_description}</p>
              <Link href="/"> → Read More</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
