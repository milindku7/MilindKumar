import styles from './About.module.css';
import aboutImage from '../../assets/react.svg';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutContent}>
        <h2>About Me</h2>
        <p>
          I am a passionate software developer with a knack for creating elegant and efficient solutions. 
          I have experience in a variety of technologies, including React, Node.js, and Python. 
          I am a quick learner and always eager to take on new challenges.
        </p>
      </div>
      <div className={styles.aboutImage}>
        <img src={aboutImage} alt="About Me" />
      </div>
    </section>
  );
};

export default About;