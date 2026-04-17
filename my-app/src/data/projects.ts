export type Project = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  try_url?: string;
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
  backgroundColor?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: 'StreetGraph Pathfinder',
    description: `This project is a sophisticated intersection of geospatial data processing and interactive algorithm visualization designed to navigate the complex street networks of Buffalo, New York. At its core, the system utilizes a robust Java-based engine that parses XML data into a directed graph, employing an adjacency list architecture to manage thousands of intersections and street edges. 

I implemented two primary routing strategies: a Breadth-First Search (BFS) to identify the path with the fewest intersections and Dijkstra’s algorithm which was optimized with a Priority Queue and the Haversine formula, to calculate the shortest physical distance between GPS coordinates. To bridge the gap between abstract data structures and user experience, I developed a high-fidelity web visualizer using HTML5 Canvas and modern CSS, featuring real-time animation of the traversal logic as the algorithms explore the graph.
    `,
    html_url: 'https://github.com/milindku7/Customer-Atlas',
    try_url: 'https://github.com/milindku7/Customer-Atlas',
    img1: 'https://milindkumar.org/api/media/images/Slide1.jpg',
    img2: 'https://milindkumar.org/api/media/images/customeratlas.png',
    videoSrc: 'https://milindkumar.org/api/media/images/CA.mp4',
    year: 'Fall 2025',
    yearEnd: '',
    titleColor: '#fff',
    descColor: '#f0f0f0',
    yearColor: '#f0f0f0',
    toolsUsed: 'Supabase, React, OpenRouter, PostgreSQL, Mapbox, Docker',
    backgroundColor: '#0F172A',
  },
  {
    id: 2,
    name: 'Yoga Pose Corrector',
    description: `A playful AI-assisted fitness app that gives real-time posture feedback while users move through yoga routines.

    I built it to make at-home practice feel a little more guided and a lot less guessy, with simple pose detection cues, a clean interface, and feedback designed to help users improve alignment over time.`,
    html_url: 'https://github.com/milindku7/yoga-pose-corrector',
    try_url: 'https://github.com/milindku7/yoga-pose-corrector',
    img1: 'http://127.0.0.1:8080/api/media/images/yogademo.png',
    img2: 'http://127.0.0.1:8080/api/media/images/yoga.png',
    year: 'Side Project',
    yearEnd: '',
    titleColor: '#fff',
    descColor: '#f0f0f0',
    yearColor: '#f0f0f0',
    toolsUsed: 'React, Computer Vision, Python, OpenCV',
    backgroundColor: '#2E1065',
  },
  {
    id: 3,
    name: 'Strings Attached: A Social Network for Musicians',
    description: `Finding the right drummer is hard; finding a date who understands tour life is harder. I built this full-stack platform to solve both.

As the lead on the frontend, I took ownership of the UI, turning concepts into a fully responsive, deployed application. But I did not stop at the pixels-I also implemented core full-stack features, including a secure JWT authentication flow and a live messaging system. It is a seamless space where musicians can connect, collaborate, and jam in real-time.`,
    html_url: 'https://github.com/milindku7/StringsAttached.git',
    try_url: 'https://github.com/milindku7/StringsAttached.git',
    img1: 'https://milindkumar.org/api/media/images/SA1.png',
    img2: 'https://milindkumar.org/api/media/images/stringsattached.png',
    videoSrc: 'https://milindkumar.org/api/media/images/SA2.mp4',
    year: 'Spring 2025',
    yearEnd: '',
    titleColor: '#fff',
    descColor: '#f0f0f0',
    yearColor: '#f0f0f0',
    toolsUsed: 'React, JavaScript, FoalTS, Docker, REST APIs',
    backgroundColor: '#008080',
  },
  {
    id: 4,
    name: 'Milind Kumar Portfolio Website',
    description: `This website is a fully custom full-stack application. I built the frontend with React to ensure a snappy, component-based user experience, while the backend relies on Python Flask to handle the logic and data. It was built from the ground up to serve as both a showcase of my work and a practical demonstration of modern web architecture.`,
    html_url: 'https://github.com/milindku7/MilindKumar.git',
    try_url: 'https://milindkumar.org/',
    img1: 'https://milindkumar.org/api/media/images/portfolio1.png',
    img2: 'https://milindkumar.org/api/media/images/portfolio.png',
    videoSrc: 'https://milindkumar.org/api/media/images/portfolio.mp4',
    year: 'Personal Website',
    yearEnd: '',
    titleColor: '#fff',
    descColor: '#f0f0f0',
    yearColor: '#f0f0f0',
    toolsUsed: 'Python Flask, React, JavaScript, CSS',
    backgroundColor: '#808000',
  },
  {
    id: 5,
    name: 'Scheduling Algorithm',
    description: `I built a Python-based engine to solve the weekly headache of scheduling for an 18-person team.
     By treating the schedule as an algorithmic constraint satisfaction problem (inspired by my work in Algorithms and Complexity), I reduced a manual 4-hour process down to a few seconds.
     The result? 100% shift coverage, zero human errors, and a fairness logic that actually respected everyone\'s preferences.`,
    html_url: 'https://github.com/milindku7/schedule.git',
    try_url: 'https://github.com/milindku7/schedule.git',
    img1: 'https://milindkumar.org/api/media/images/schedule1.png',
    img2: 'https://milindkumar.org/api/media/images/schedulingalgo.png',
    videoSrc: 'https://milindkumar.org/api/media/images/schedule2.mp4',
    year: 'Side Project',
    yearEnd: '',
    titleColor: '#fff',
    descColor: '#f0f0f0',
    yearColor: '#f0f0f0',
    toolsUsed: 'Python, Algorithms',
    backgroundColor: '#7F1D1D',
  },
  {
    id: 6,
    name: 'Calloc, Malloc and Realloc: A Custom Memory Allocator',
    description: `A personalized implementation of Calloc, Malloc and Realloc.

    Calls sbrk to get the address of a void pointer that provides 4096 bytes of space in the heap. It then breaks down the bytes into a free list that contains void pointers containing addresses to different-sized blocks.

    Based on the number of bytes needed by either of the commands, the code allots the closest 2^n bytes to it.`,
    html_url: 'https://github.com/milindku7/Calloc-Malloc-and-Realloc-implementation.git',
    try_url: 'https://github.com/milindku7/Calloc-Malloc-and-Realloc-implementation.git',
    img1: 'https://milindkumar.org/api/media/images/calloc1.png',
    img2: 'https://milindkumar.org/api/media/images/calloc.png',
    videoImageSrc: 'https://milindkumar.org/api/media/images/calloc2.png',
    year: 'Fall 2023',
    yearEnd: '',
    titleColor: '#fff',
    descColor: '#f0f0f0',
    yearColor: '#f0f0f0',
    toolsUsed: 'C, Linux System Programming',
    backgroundColor: '#2C3E50',
  },
];
