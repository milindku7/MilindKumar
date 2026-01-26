import styles from './Projects.module.css';
import Prj from '../Prj/Prj';

type Project = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  year?: number | string;
  img1?: string;
  img2?: string;
  videoSrc?: string;
};

const projects: Project[] = [
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

// Distinct background colors for each project card
const projectBgColors: string[] = [
  '#FF6B6B', // Red-ish
  '#4ECDC4', // Teal
  '#FFD93D', // Yellow
  '#6C5CE7', // Purple
  '#00C853', // Green
  '#FF7043', // Orange
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects} aria-labelledby="projects-title">
      <div className={styles.waveHeader}>
        <svg className={styles.waveSvg} viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,64L48,96C96,128,192,192,288,186.7C384,181,480,107,576,101.3C672,96,768,160,864,176C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" fill="#ffffff" />
        </svg>
        <h2 id="projects-title" className={styles.waveTitle}>Projects</h2>
      </div>

      <div className={styles.sectionHeader}>
        <h1>Projects</h1>
      </div>

      <div className={styles.projectGrid}>
        {projects.map(project => (
          <div key={project.id} className={styles.projectCard}>
            <Prj
              year={project.year ?? '2000'}
              title={project.name}
              description={project.description}
              img1={project.img1}
              img2={project.img2}
              videoSrc={project.videoSrc}
              bgColor={projectBgColors[(project.id - 1) % projectBgColors.length]}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
