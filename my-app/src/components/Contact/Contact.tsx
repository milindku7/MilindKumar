import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me for any queries or opportunities.</p>
      <div className={styles.contactInfo}>
        <p>Email: <a href="mailto:milindsa@buffalo.edu">milindsa@buffalo.edu</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/milind-kumar-01/" target="_blank" rel="noopener noreferrer">Milind Kumar</a></p>
      </div>
    </section>
  );
};

export default Contact;