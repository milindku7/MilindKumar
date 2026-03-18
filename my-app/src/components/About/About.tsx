import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContent}>
        <h2>About Me</h2>
        <p>
          I am a Computer Science student at the University at Buffalo with a strong foundation in software engineering, Artificial Intelligence, full stack development, data structures, and systems programming. I enjoy working on projects that are driven to help people which is reflected through my work experience. I’m always looking for opportunities to apply classroom knowledge to real-world challenges and collaborate with others who share a passion for technology.
        </p>
      </div>
      <div className={styles.aboutImage}>
        <img src='http://localhost:8080/api/media/images/mypic.jpg' alt="About Me" />
      </div>
    </section>
  );
};

export default About;