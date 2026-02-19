import styles from './Experience.module.css';
import Exp from '../Exp/Exp';

type Experience = {
  id: number;
  role: string;
  company: string;
  description: string;
  year?: number | string;
  yearEnd?: number | string;
  rangeSeparator?: string;
  titleColor?: string;
  descColor?: string;
  yearColor?: string;
  toolsUsed?: string;
};

const experiences: Experience[] = [
  {
    id: 1,
    role: 'Software Engineering Intern',
    company: 'Tech Corp',
    description: `Worked on the backend infrastructure to support high-scale data processing.
    
    Optimized database queries and implemented caching strategies that reduced latency by 40%. Collaborated with the frontend team to integrate new API endpoints for the user dashboard.`,
    year: 'Summer 2025',
    yearEnd: '',
    titleColor: '#000',
    descColor: '#333333',
    yearColor: '#333333',
    toolsUsed: 'Python, Django, PostgreSQL, Redis',
  },
  {
    id: 2,
    role: 'Research Assistant',
    company: 'University Lab',
    description: `Conducted research on machine learning algorithms for pattern recognition in medical imaging.
    
    Developed a Python-based pipeline to preprocess and analyze large datasets of MRI scans. Published findings in a student research journal.`,
    year: '2024',
    yearEnd: 'Present',
    titleColor: '#fff',
    descColor: '#f0f0f0',
    yearColor: '#f0f0f0',
    toolsUsed: 'Python, PyTorch, NumPy, Pandas',
  },
    {
    id: 3,
    role: 'Web Developer',
    company: 'Freelance',
    description: `Designed and built custom websites for local businesses.
    
    Managed the full development lifecycle from initial client consultation to deployment and maintenance.`,
    year: '2023',
    yearEnd: '2024',
    titleColor: '#000',
    descColor: '#333333',
    yearColor: '#333333',
    toolsUsed: 'React, Node.js, MongoDB',
  },
];

// Distinct background colors for each experience card
const expBgColors: string[] = [
  '#ffa000', // Lavender
  '#2C3E50', // Dark Slate
  '#FFDAB9', // Peach
];

const dividerColors: string[] = [
  '#2C3E50',
  '#FFDAB9',
  '#E6E6FA',
];

const Experience = () => {
    // Determine the next divider color based on the next item (or end)
    // In Projects, it was: dividerColor={dividerColors[(project.id - 1) % dividerColors.length]}
    // And that color matches the NEXT project's bg color? 
    // Wait, let's check Projects.tsx logic.
    // projectBgColors: [A, B, C, D, E, F]
    // dividerColors: [B, C, D, E, F, G?]
    // project 1 (id 1): bg = A, div = B
    // project 2 (id 2): bg = B, div = C
    // This creates a seamless transition.
    
    // So for Experience:
    // Item 1: bg = A, div = B
    // Item 2: bg = B, div = C
    // Item 3: bg = C, div = ? (maybe section background or white)
    
  return (
    <section id="experience" className={styles.experience} aria-labelledby="experience-title">

      <div className={styles.sectionHeader}>
        <h1>Experience</h1>
      </div>

      <div className={styles.experienceGrid}>
        {experiences.map((exp, index) => {
           const separator = exp.rangeSeparator ?? ' - ';
           const displayYear = exp.yearEnd 
            ? `${exp.year}${separator}${exp.yearEnd}`
            : (exp.year ?? '2000');
           
           // Calculate colors
           const bgColor = expBgColors[index % expBgColors.length];
           // Next color for divider
           const nextColor = expBgColors[(index + 1) % expBgColors.length];
           // Last item might need to transition to white or next section color
           const isLast = index === experiences.length - 1;
           const divColor = isLast ? '#ffa000' : nextColor; 

           return (
            <div key={exp.id} className={styles.experienceCard}>
              <Exp
                year={displayYear}
                title={`${exp.role} @ ${exp.company}`}
                description={exp.description}
                bgColor={bgColor}
                dividerColor={divColor}
                titleColor={exp.titleColor}
                descColor={exp.descColor}
                yearColor={exp.yearColor}
                toolsUsed={exp.toolsUsed}
              />
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default Experience;
