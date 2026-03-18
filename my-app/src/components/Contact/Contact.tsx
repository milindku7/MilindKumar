import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
      <p>Please reach out through any of the platforms below for opportunities and collaborations. And check out my github! :)</p>
      <div className={styles.contactInfo}>
        <a
          href="mailto:milindsa@buffalo.edu"
          className={styles.contactItem}
          aria-label="Send email to Milind"
          title="Email"
        >
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0 2v.51l9 5.4 9-5.4V7l-9 5.4L3 7.01z" />
          </svg>
          <span>Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/milind-kumar-01/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactItem}
          aria-label="Visit Milind on LinkedIn"
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M6.94 8.5a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM5.5 9.75H8.4V19H5.5V9.75zm4.7 0h2.78v1.26h.04c.39-.74 1.34-1.52 2.76-1.52 2.95 0 3.49 1.94 3.49 4.47V19h-2.9v-4.46c0-1.06-.02-2.42-1.47-2.42-1.48 0-1.7 1.16-1.7 2.35V19h-2.9V9.75z" />
          </svg>
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/Milind-Kumar-01"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactItem}
          aria-label="Visit Milind on GitHub"
          title="GitHub"
        >
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.41-4.04-1.41-.55-1.37-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.22 1.84 1.22 1.08 1.82 2.82 1.3 3.5 1 .1-.77.42-1.3.76-1.6-2.66-.3-5.47-1.31-5.47-5.86 0-1.3.47-2.36 1.23-3.2-.13-.3-.53-1.51.12-3.15 0 0 1-.31 3.3 1.22a11.52 11.52 0 0 1 6 0c2.3-1.53 3.3-1.22 3.3-1.22.65 1.64.25 2.85.13 3.15.77.84 1.23 1.9 1.23 3.2 0 4.56-2.82 5.56-5.5 5.85.43.37.82 1.1.82 2.22v3.29c0 .32.21.69.83.58A12 12 0 0 0 12 .5z" />
          </svg>
          <span>GitHub</span>
        </a>
        <a
          href="http://localhost:8080/api/pdf/Milind_Kumar.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactItem}
          aria-label="Open Milind's resume PDF"
          title="Resume"
        >
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M7 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.41a2 2 0 0 0-.59-1.41l-4.41-4.41A2 2 0 0 0 12.59 2H7zm5 1.5c.13 0 .26.05.35.15L16.35 7.65c.1.09.15.22.15.35V8h-3a1.5 1.5 0 0 1-1.5-1.5v-3H12zm-4 8.25h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5zm0 3h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5z" />
          </svg>
          <span>Resume</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;