import styles from '../styles/Contact.module.css';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className={styles.container}>
      <p className={styles.message}>
        As a soon-to-be rookie starting out in the industry, I'm looking forward
        to working and learning alongside my fellow devs!
      </p>
      <h2 className={styles.info}>sriraj.bura16@gmail.com</h2>

      <div className={styles.social_icons}>
        <a
          href="https://github.com/srirajbura16"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className={styles.social_icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/sriraj-bura-356ab21a5/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className={styles.social_icon} />
        </a>
        <a
          href="https://twitter.com/srirajbura"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className={styles.social_icon} />
        </a>
      </div>
    </div>
  );
}
