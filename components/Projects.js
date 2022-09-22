import Image from "next/image";
import styles from "../styles/Projects.module.css";
import Link from "next/link";
import projects_data from "../lib/projects";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className={styles.container}>
      {projects_data.map((project) => {
        const { id, img, name, small_description, github, site } = project;
        return (
          <div key={id} className={styles.project_container}>
            <div className={styles.project_image}>
              <Image
                src={`/images/${img}`}
                priority="eager"
                layout="intrinsic"
                alt={name}
                width={560} //480
                height={320} //280
              />
            </div>
            <div className={styles.project_details}>
              <h2 className={styles.project_name}>{name}</h2>
              <p className={styles.project_description}>{small_description}</p>
              <div className={styles.project_links}>
                <a
                  href={`${github}`}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.github}
                >
                  <FaGithub className={styles.social_icon} />
                </a>
                <a href={`${site}`} target="_blank" rel="noreferrer">
                  Live
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
