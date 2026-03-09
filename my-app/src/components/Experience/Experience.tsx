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
};

const experiences: Experience[] = [
  {
    id: 1,
    role: 'Research Assistant',
    company: 'State University of New York at Buffalo',
    description: `Engineered Customer Atlas, a full-stack application using React and PostgreSQL to streamline data collection processes, collaborating within a 4-person team under the supervision of Professor Wenyao Xu.

    Deployed the solution for institutional use at the University at Buffalo, enabling the active tracking of customer interest metrics and the projection of potential revenue

    Awarded 2nd Place at the UB CSE Demo Day, recognized for technical execution and the successful delivery of a practical, high-impact research tool
`,
    year: 'August 2025 to December 2025',
    yearEnd: '',
    titleColor: '#000',
    descColor: '#333333',
    yearColor: '#333333',
  },
  {
    id: 2,
    role: 'International Admissions Ambassador - GloBull Leader',
    company: 'State University of New York at Buffalo',
    description: `Developed a Python scheduling algorithm to automate and optimize shift assignments for a team of 18 ambassadors
    
    Directed content strategy and community management for UB International Admissions social media platforms, engaging thousands of prospective students globally

    Recruited and trained a cohort of 8 new ambassadors, equipping them with knowledge to support prospective students
`,
    year: 'March 2023 to Present',
    yearEnd: '',
    titleColor: '#fff',
    descColor: '#f0f0f0',
    yearColor: '#f0f0f0',
  },
    {
    id: 3,
    role: 'STEM Exploration Field Trips Volunteer',
    company: 'State University of New York at Buffalo',
    description: `Gamified complex scientific topics into engaging mini-games to spark curiosity and promote STEM accessibility for elementary school students
    
    Orchestrated and led hands-on educational classes and activities for groups of elementary and middle school students
    `,
    year: 'January 2024',
    yearEnd: '',
    titleColor: '#000',
    descColor: '#333333',
    yearColor: '#333333',
  },
];

// Distinct background colors for each experience card
const expBgColors: string[] = [
  '#ffa000', // Lavender
  '#2C3E50', // Dark Slate
  '#FFDAB9', // Peach
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
              />
            </div>
          )
        })}
      </div>
    </section>
  );
};


const ExperienceAndAwards = () => {
  return (
    <>
      <Experience />
    </>
  );
};

export default ExperienceAndAwards;
