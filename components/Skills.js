import Image from 'next/image';
import styles from '../styles/Layout.module.css';
import Link from 'next/link';

export default function Skills() {
  return (
    <div className={styles.container}>
      <span className="note">
        Note: The order is proficient to least proficient.
      </span>
    </div>
  );
}
