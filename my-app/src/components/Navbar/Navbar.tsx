import styles from "./Navbar.module.css";
import * as React from "react";

const HeaderCurve = ({ className = "" }) => {
  return (
    <div
      className={className}
      style={{ position: 'relative', width: '100%', overflow: 'hidden', height: '300px' }}
    >
      <svg
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <path
          d="M0,0 L1440,0 L1440,170 C100,360 500,80 0,0 Z"
          fill="orange"
          stroke="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'right',
          pointerEvents: 'auto',
          paddingTop: '2rem',
          paddingRight: '2rem',
          gap: '0.5rem'
        }}
      >
        <nav aria-label="Header links" className={styles.headerLinks}>
          <a href="#awards" className={styles.headerLink}>Awards</a>
          <a href="#experience" className={styles.headerLink}>Experience</a>
          <a href="#projects" className={styles.headerLink}>Projects</a>
          <a href="#contact" className={styles.headerLink}>Contact</a>
          <a href="#about" className={styles.headerLink}>About</a>
        </nav>
      </div>
    </div>
  );
};

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.titleContainer}>
        <h1 className={`${styles.title} ${styles.fadeUp} ${styles.delay1}`}>Hi, My name is Milind Kumar</h1>
        <h2 className={`${styles.fadeUp} ${styles.delay2}`}>University at Buffalo, Computer Science (BS)</h2>
        <h3 className={`${styles.fadeUp} ${styles.delay3}`}>Software Developer, UI/UX Designer, Database and AI/ML Engineer</h3>
        <a
          href="https://milindkumar.org/api/pdf/Milind_Kumar.pdf"
          target="_blank"
          rel="noreferrer"
          className={`${styles.resumeButton} ${styles.fadeUp} ${styles.delay4}`}
        >
          Browse my resume
        </a>
      </div>
      <div className={styles.navContainer}>
        <HeaderCurve />
      </div>
    </nav>
  );
};
