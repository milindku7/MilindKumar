import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a href="https://github.com/Milind-Kumar-01" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/milind-kumar-01/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" />
        </a>
      </div>
      <p>&copy; 2026 Milind Kumar</p>
    </footer>
  );
};

export default Footer;