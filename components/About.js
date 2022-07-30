import Link from 'next/link';
import React from 'react';
import styles from '../styles/About.module.scss';
import { useContent } from '../utils/ContentContext';

function About() {
  const content = useContent();
  return (
    <>
      <div id="about"></div>
      <div className={`container ${styles.about}`}>
        <span className={styles.watermark} aria-hidden="true">
          ABOUT
        </span>
        <h2 className={styles.title}>{content.about.title}</h2>
        <p className={styles.desc}>{content.about.desc}</p>
        <button className={`btn ${styles.contact}`}>
          <Link href={content.about.link}>{content.about.linktext}</Link>
        </button>
      </div>
    </>
  );
}

export default About;
