import styles from './Projects.module.css';
import Prj from '../Prj/Prj';
import { projects } from '../../data/projects';

// Distinct background colors for each project card
const projectBgColors: string[] = [
  '#ffa000', // Red-ish
  '#fffdd0', // Teal
  '#008080', // Yellow
  '#808000', // Purple
  '#FFDAB9', // Green
  '#2C3E50', // Orange
];

const dividerColors: string[] = [
  '#fffdd0',
  '#008080',
  '#808000',
  '#FFDAB9',
  '#2C3E50',
  '#ffa000',
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
        {projects.map(project => {
           const separator = project.rangeSeparator ?? ' - ';
           const displayYear = project.yearEnd 
            ? `${project.year}${separator}${project.yearEnd}`
            : (project.year ?? '2000');
            
           return (
            <div key={project.id} className={styles.projectCard}>
              <Prj
                year={displayYear}
                title={project.name}
                githubUrl={project.html_url}
                description={project.description}
                bgColor={projectBgColors[(project.id - 1) % projectBgColors.length]}
                dividerColor={dividerColors[(project.id - 1) % dividerColors.length]}
                titleColor={project.titleColor}
                descColor={project.descColor}
                yearColor={project.yearColor}
                toolsUsed={project.toolsUsed}
                img1={project.img1}
                img2={project.img2}
                videoSrc={project.videoSrc}
                videoImageSrc={project.videoImageSrc}
              />
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Projects;
