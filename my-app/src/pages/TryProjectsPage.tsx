import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import styles from './TryProjectsPage.module.css';

const projectBgColors: string[] = [
  '#ffa000',
  '#fffdd0',
  '#008080',
  '#808000',
  '#FFDAB9',
  '#2C3E50',
];

const TryProjectsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const activeProject = projects[activeIndex];
  const activeBgColor =
    activeProject.backgroundColor ??
    projectBgColors[activeIndex % projectBgColors.length];

  return (
    <section className={styles.page} aria-labelledby="try-projects-title">
      <div className={styles.waveHeader}>
        <svg className={styles.waveSvg} viewBox="0 0 1440 200" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,64L48,96C96,128,192,192,288,186.7C384,181,480,107,576,101.3C672,96,768,160,864,176C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" fill="#ffffff" />
        </svg>
      </div>

      <div className={styles.headerContent}>
        <div>
          <p className={styles.kicker}>Interactive project launcher</p>
          <h1 id="try-projects-title" className={styles.pageTitle}>Try Projects</h1>
          <p className={styles.subtitle}>
            Select a project from the menu to preview its details and launch it directly.
          </p>
        </div>
        <Link className={styles.backLink} to="/">
          Back to portfolio
        </Link>
      </div>

      <div className={styles.showcaseContainer}>
        {/* Left Navigation Menu */}
        <nav className={styles.projectNav} aria-label="Project selection menu">
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={`${styles.navItem} ${index === activeIndex ? styles.navItemActive : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-current={index === activeIndex ? 'true' : 'false'}
            >
              <span className={styles.navItemText}>{project.name}</span>
              {index === activeIndex && (
                <svg className={styles.activeIcon} viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              )}
            </button>
          ))}
        </nav>

        {/* Right Interactive Stage */}
        <div 
          className={styles.projectStage} 
          style={{ backgroundColor: activeBgColor }}
        >
          {/* Key prop forces React to re-render and trigger the animation on change */}
          <div key={activeProject.id} className={styles.stageContent}>
            <h2 style={{ color: activeProject.titleColor }}>{activeProject.name}</h2>
            
            {activeProject.toolsUsed && (
              <div className={styles.tagGroup}>
                {activeProject.toolsUsed.split(',').map((tool, i) => (
                  <span 
                    key={i} 
                    className={styles.toolTag} 
                    style={{ color: activeProject.titleColor, borderColor: activeProject.titleColor }}
                  >
                    {tool.trim()}
                  </span>
                ))}
              </div>
            )}

            <p style={{ color: activeProject.descColor }}>{activeProject.description}</p>
            
            <div className={styles.actionGroup}>
              <a
                className={styles.primaryAction}
                href={activeProject.try_url ?? activeProject.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: activeProject.titleColor, color: activeBgColor }}
              >
                Launch Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryProjectsPage;