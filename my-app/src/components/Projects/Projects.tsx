import styles from './Projects.module.css';
import Prj from '../Prj/Prj';

type Project = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  img1?: string;
  img2?: string;
  videoSrc?: string;
  videoImageSrc?: string;
  year?: number | string;
  yearEnd?: number | string;
  rangeSeparator?: string;
  titleColor?: string;
  descColor?: string;
  yearColor?: string;
  toolsUsed?: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: 'Customer Atlas: A CRM for Research',
    description: `A market intelligence platform designed to visualize global customer engagement, currently in use by the University at Buffalo to analyze market fit for its AI-driven products (SATE, AudioSight, mRehab)

    My main focus was architecting a robust backend on Supabase to ingest and process geographically distributed user data. To make that data actually useful, I integrated generative AI via OpenRouter to automatically analyze sentiment and spot emerging trends. On the front end, we built an interactive React dashboard that turns that complex data into a live, navigable global map—giving the university a clear picture of their product-market fit.`,
    html_url: 'https://github.com/milindku7/Customer-Atlas',
    img1: 'https://milindkumar.org/api/media/images/Slide1.jpg',
    img2: 'https://milindkumar.org/api/media/images/customeratlas.png',
    videoSrc: 'https://milindkumar.org/api/media/images/CA.mp4',
    year: 'Fall 2025',
    yearEnd: '',
    titleColor: '#000',
    descColor: '#333333',
    yearColor: '#333333',
    toolsUsed: 'Supabase, React, OpenRouter, PostgreSQL, Mapbox, Docker',
  },
  {
    id: 2,
    name: 'Yoga Pose Corrector',
    description: `A playful AI-assisted fitness app that gives real-time posture feedback while users move through yoga routines.

    I built it to make at-home practice feel a little more guided and a lot less guessy, with simple pose detection cues, a clean interface, and feedback designed to help users improve alignment over time.`,
    html_url: 'https://github.com/milindku7/yoga-pose-corrector',
    img1: 'http://127.0.0.1:8080/api/media/images/yogademo.png',
    img2: 'http://127.0.0.1:8080/api/media/images/yoga.png',
    videoSrc: 'https://milindkumar.org/api/media/images/CA.mp4',
    year: 'Side Project',
    yearEnd: '',
    titleColor: '#000',
    descColor: '#333333',
    yearColor: '#333333',
    toolsUsed: 'React, Computer Vision, Python, OpenCV',
  },
  {
    id: 3,
    name: 'Strings Attached: A Social Network for Musicians',
    description: `Finding the right drummer is hard; finding a date who understands tour life is harder. I built this full-stack platform to solve both.

As the lead on the frontend, I took ownership of the UI, turning concepts into a fully responsive, deployed application. But I didn't stop at the pixels—I also implemented core full-stack features, including a secure JWT authentication flow and a live messaging system. It’s a seamless space where musicians can connect, collaborate, and jam in real-time.`,
    html_url: 'https://github.com/milindku7/StringsAttached.git',
    img1: 'https://milindkumar.org/api/media/images/SA1.png',
    img2: 'https://milindkumar.org/api/media/images/stringsattached.png',
    videoSrc: 'https://milindkumar.org/api/media/images/SA2.mp4',
    year: 'Spring 2025',
    yearEnd: '',
    titleColor: '#fff',
    descColor: '#f0f0f0',
    yearColor: '#f0f0f0',
    toolsUsed: 'React, JavaScript, FoalTS, Docker, REST APIs',
  },
    {
    id: 4,
    name: 'Milind Kumar Portfolio Website',
    description: `This website is a fully custom full-stack application. I built the frontend with React to ensure a snappy, component-based user experience, while the backend relies on Python Flask to handle the logic and data. It was built from the ground up to serve as both a showcase of my work and a practical demonstration of modern web architecture.`,
    html_url: 'https://github.com/milindku7/MilindKumar.git',
    img1: 'https://milindkumar.org/api/media/images/portfolio1.png',
    img2: 'https://milindkumar.org/api/media/images/portfolio.png',
    videoSrc: 'https://milindkumar.org/api/media/images/portfolio.mp4',
    year: 'Personal Website',
    yearEnd: '',
    titleColor: '#fff',
    descColor: '#f0f0f0',
    yearColor: '#f0f0f0',
    toolsUsed: 'Python Flask, React, JavaScript, CSS',
  },
    {
    id: 5,
    name: 'Scheduling Algorithm',
    description: `I built a Python-based engine to solve the weekly headache of scheduling for an 18-person team.
     By treating the schedule as an algorithmic constraint satisfaction problem (inspired by my work in Algorithms and Complexity), I reduced a manual 4-hour process down to a few seconds.
     The result? 100% shift coverage, zero human errors, and a "fairness" logic that actually respected everyone's preferences.`,
    html_url: 'https://github.com/milindku7/schedule.git',
    img1: 'https://milindkumar.org/api/media/images/schedule1.png',
    img2: 'https://milindkumar.org/api/media/images/schedulingalgo.png',
    videoSrc: 'https://milindkumar.org/api/media/images/schedule2.mp4',
    year: 'Side Project',
    yearEnd: '',
    titleColor: '#000',
    descColor: '#333333',
    yearColor: '#333333',
    toolsUsed: 'Python, Algorithms',
  },
    {
    id: 6,
    name: 'Calloc, Malloc and Realloc: A Custom Memory Allocator',
    description: `A personalized implementation of Calloc, Malloc and Realloc.
    
    Calls sbrk to get the address of a void pointer that provides 4096 bytes of space in the heap. It then breaks down the bytes into a free list that contains void pointers containing addresses to different-sized blocks.
    
    Based on the number of bytes needed by either of the commands, the code allots the closest 2^n bytes to it.
`,
    html_url: 'https://github.com/milindku7/Calloc-Malloc-and-Realloc-implementation.git',
    img1: 'https://milindkumar.org/api/media/images/calloc1.png',
    img2: 'https://milindkumar.org/api/media/images/calloc.png',
    videoImageSrc: 'https://milindkumar.org/api/media/images/calloc2.png',
    year: 'Fall 2023',
    yearEnd: '',
    titleColor: '#fff',
    descColor: '#f0f0f0',
    yearColor: '#f0f0f0',
    toolsUsed: 'C, Linux System Programming',
  },
];

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
