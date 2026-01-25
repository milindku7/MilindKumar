import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Hi, My name is Milind Kumar</h1>
        <h2>University at Buffalo, Computer Science (BS)</h2>
        <h3>Software Developer, UI/UX Designer, Database and AI/ML Engineer</h3>
      </div>
      <div className={styles.navContainer}>          

        <ul className={styles.navList}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
