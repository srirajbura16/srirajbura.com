import React from "react";
import styles from "../styles/Links.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Links() {
  return (
    <div className={styles.container}>
      <div className={styles.profile_pic}>
        <Image
          src="/images/me.jpg"
          alt="Picture of Sriraj Bura"
          className={styles.img}
          width={250}
          height={250}
        />
      </div>
      <div className={styles.links}>
        <div className={styles.link}>
          <FaTwitter className={`${styles.social_icon} ${styles.twitter}`} />
          <Link href="https://twitter.com/SrirajBura">
            <a>Twitter</a>
          </Link>
        </div>
        <div className={styles.link}>
          <FaGithub className={`${styles.social_icon} ${styles.github}`} />
          <Link href="https://github.com/srirajbura16">
            <a>Github</a>
          </Link>
        </div>
        <div className={styles.link}>
          <FaLinkedin className={`${styles.social_icon} ${styles.linkedin}`} />
          <Link href="https://www.linkedin.com/in/srirajbura/">
            <a>Linkedin</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
