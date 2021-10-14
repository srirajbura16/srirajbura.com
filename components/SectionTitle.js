import styles from '../styles/SectionTitle.module.css';
export default function SectionTitle({ chars }) {
  return (
    <div className={styles.sectionTitle}>
      {chars.split('').map((char, index) => {
        return <div key={index}>{char}</div>;
      })}
    </div>
  );
}
