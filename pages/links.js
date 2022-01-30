import React from 'react';
import styles from '../styles/Links.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Links() {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
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
          <Link href="">
            <a className={styles.link}>Twitter</a>
          </Link>
          <Link href="">
            <a className={styles.link}>Github</a>
          </Link>
          <Link href="">
            <a className={styles.link}>Linkedin</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
