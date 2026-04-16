import styles from './Awards.module.css';
import Prj from '../Prj/Prj';

type Award = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  img1?: string;
  year?: number | string;
  yearEnd?: number | string;
  rangeSeparator?: string;
  titleColor?: string;
  descColor?: string;
  yearColor?: string;
};

const awards: Award[] = [
  {
    id: 1,
    name: 'Grace W. Capen Academic Award 2024',
    description: `This award is given to sophomores who have completed three semesters of full-time study at UB with a cumulative GPA of 3.95 or higher.
    
    `,
    html_url: '#',
    img1: 'https://milindkumar.org/api/media/images/capen.jpg',
    year: 'August 2024',
    yearEnd: '',
    titleColor: '#000',
    descColor: '#333333',
    yearColor: '#333333',
  },
  {
    id: 2,
    name: 'UB CSE Demo Day 2025',
    description: `I was awarded second place at the UB CSE Demo Day 2025 for Customer Atlas.
    
    UB CSE Demo Day is an annual event that celebrates the innovative projects and research conducted by students in the Computer Science and Engineering department. It provides a platform for students to showcase their work, network with industry professionals, and gain recognition for their achievements. The event features a diverse range of projects, including software applications, hardware prototypes, research papers, and more, highlighting the creativity and technical skills of UB's CSE students.`,
    html_url: '#',
    img1: 'https://milindkumar.org/api/media/images/demoday.jpeg',
    year: 'December 2025',
    yearEnd: '',
    titleColor: '#000',
    descColor: '#333333',
    yearColor: '#333333',
  },
  {
    id: 3,
    name: `Dean's List 2022, 2023`,
    description: `The University at Buffalo (UB) Dean's List recognizes full-time undergraduate students who achieve a minimum 3.600 GPA while completing at least 12 credit hours of A-F letter-graded coursework in a semester.
    
    This honor is awarded after the fall and spring semesters.`,
    html_url: '#',
    img1: 'http://127.0.0.1:8080/api/media/images/dean.png',
    year: '',
    yearEnd: '',
    titleColor: '#fff',
    descColor: '#f0f0f0',
    yearColor: '#f0f0f0',
  },
];

const awardBgColors: string[] = [
  '#ffa000',
  '#fffdd0',
  '#008080',
  '#808000',
  '#FFDAB9',
  '#2C3E50',
];

const dividerColors: string[] = [
  '#fffdd0',
  '#008080',
  '#ffffff',
  '#FFDAB9',
  '#2C3E50',
  '#ffa000',
];

const Awards = () => {
  return (
    <section id="awards" className={styles.awards} aria-labelledby="awards-title">
      

      <div className={styles.sectionHeader}>
        <h1>Awards</h1>
      </div>

      <div className={styles.projectGrid}>
        {awards.map(award => {
          const separator = award.rangeSeparator ?? ' - ';
          const displayYear = award.yearEnd
            ? `${award.year}${separator}${award.yearEnd}`
            : (award.year ?? '2000');

          return (
            <div key={award.id} className={styles.projectCard}>
              <Prj
                year={displayYear}
                title={award.name}
                description={award.description}
                img1={award.img1}
                bgColor={awardBgColors[(award.id - 1) % awardBgColors.length]}
                dividerColor={dividerColors[(award.id - 1) % dividerColors.length]}
                titleColor={award.titleColor}
                descColor={award.descColor}
                yearColor={award.yearColor}
                mediaVariant="exp"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Awards;