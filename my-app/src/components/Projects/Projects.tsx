import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    name: 'Project 1',
    description: 'This is a description for project 1.',
    html_url: '#',
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'This is a description for project 2.',
    html_url: '#',
  },
  {
    id: 3,
    name: 'Project 3',
    description: 'This is a description for project 3.',
    html_url: '#',
  },
    {
    id: 4,
    name: 'Project 4',
    description: 'This is a description for project 4.',
    html_url: '#',
  },
    {
    id: 5,
    name: 'Project 5',
    description: 'This is a description for project 5.',
    html_url: '#',
  },
    {
    id: 6,
    name: 'Project 6',
    description: 'This is a description for project 6.',
    html_url: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map(project => (
          <div key={project.id} className={styles.projectCard}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
