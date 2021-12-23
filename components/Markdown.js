import React from 'react';
import marked from 'marked';
import styles from '../styles/Markdown.module.css';

export default function Markdown({ content, title }) {
  return (
    <div className={styles.markdown}>
      {title ? <h1 className={styles.title}>{title}</h1> : ''}
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </div>
  );
}
