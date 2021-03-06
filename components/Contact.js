import styles from '../styles/Contact.module.css';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h2 className={styles.info}>sriraj.bura16@gmail.com</h2>

      <div className={styles.social_icons}>
        <a
          href="https://github.com/srirajbura16"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className={`${styles.social_icon} ${styles.github}`} />
        </a>
        <a
          href="https://www.linkedin.com/in/sriraj-bura-356ab21a5/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className={`${styles.social_icon} ${styles.linkedin}`} />
        </a>
      </div>
    </div>
  );
}
