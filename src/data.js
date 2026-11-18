// Edit this file to update the whole site.
export const person = {
  name: "Dinesh Kanna Ravi",
  role: "Associate Full Stack Developer",
  tagline: "Software engineer graduate, B.Tech Information Technology, 2026",
  email: "dineshkannaravi25@gmail.com",
  github: "https://github.com/YOUR-USERNAME",      // TODO: replace
  linkedin: "https://www.linkedin.com/in/YOUR-ID", // TODO: replace
  resume: "/Dinesh_Kanna_Full_StackDeveloper.pdf", // put the PDF in /public
  headline:
    "I build React interfaces and the Spring Boot and FastAPI services behind them.",
  about: [
    "I work across the stack: responsive React front ends, RESTful APIs in Spring Boot and FastAPI, and relational databases in MySQL and PostgreSQL.",
    "I containerize with Docker and deploy services independently on Google Cloud Run, with images built by Cloud Build and stored in Artifact Registry.",
    "I have solved over 500 coding problems on Skillrack and enjoy hackathons and UI/UX work.",
  ],
};

export const projects = [
  {
    name: "Employee Management System",
    summary:
      "Register, view, update and delete employees from a responsive React interface.",
    flow: ["React UI", "Spring Boot API", "FastAPI salary service", "Google Cloud SQL"],
    deploy: "Docker, Cloud Build, Artifact Registry, Cloud Run",
    points: [
      "Spring Boot REST APIs handle employee records; a separate FastAPI microservice does the salary calculations.",
      "Frontend and backend services are deployed independently on Cloud Run.",
      "Cloud Build runs from cloudbuild.yaml to build and ship each container image.",
    ],
    link: "",
  },
  {
    name: "CareerBuddy",
    summary:
      "A rule-based chatbot that asks structured questions to suggest technology career paths.",
    flow: ["React chat UI", "FastAPI", "SQLAlchemy", "MySQL"],
    deploy: "",
    points: [
      "FastAPI endpoints process answers and manage each conversation.",
      "Questions, options and conversation data are stored in MySQL through SQLAlchemy.",
    ],
    link: "",
  },
  {
    name: "Predictive Vehicle Maintenance Dashboard",
    summary:
      "A fleet dashboard that turns simulated sensor readings into prioritized maintenance alerts.",
    flow: ["Simulated sensor data", "Classification logic", "React dashboard"],
    deploy: "",
    points: [
      "Classification logic rates each vehicle's health and ranks the alerts.",
      "Reusable components and responsive layouts keep the data readable on any screen.",
    ],
    link: "",
  },
  {
    name: "Starbucks UI Clone",
    summary:
      "A high-fidelity recreation of the Starbucks website built for visual accuracy.",
    flow: ["React", "Vite", "Modular CSS"],
    deploy: "",
    points: [
      "Modular components for navigation, product sections and promotional banners.",
      "Consistent layout from desktop down to mobile.",
    ],
    link: "",
  },
];

export const experience = [
  {
    org: "LEO Technologies",
    role: "React Developer Intern",
    when: "May 2025 – Jun 2025",
    points: [
      "Built and tuned responsive interfaces with React.js and Vite using reusable components.",
      "Worked with the team to debug components and improve responsiveness.",
    ],
  },
  {
    org: "CodeBind Technologies",
    role: "Web Development Intern",
    when: "Jun 2024 – Jul 2024",
    points: [
      "Built interactive pages in HTML5, CSS3 and JavaScript.",
      "Delivered mobile-first, cross-browser layouts.",
    ],
  },
];

export const skills = [
  ["Languages", "Java (Core), JavaScript (ES6+), Python"],
  ["Frontend", "React.js, Vite, HTML5, CSS3, Bootstrap"],
  ["Backend", "Spring Boot, FastAPI, REST APIs, Microservices"],
  ["Databases", "MySQL, PostgreSQL, Google Cloud SQL, SQLAlchemy"],
  ["Cloud and DevOps", "GCP, Cloud Run, Cloud Build, Artifact Registry, Docker, CI/CD"],
  ["Tools", "Git, GitHub, Postman, Poetry, MySQL Workbench, pgAdmin"],
  ["Foundations", "OOP, Data Structures and Algorithms, Software Testing"],
];

export const education = {
  school: "St. Joseph’s Institute of Technology",
  degree: "B.Tech in Information Technology",
  when: "2022 – 2026",
  detail: "CGPA 7.80",
};

export const achievements = [
  "Solved 500+ coding problems on the Skillrack platform.",
  "Completed the NPTEL Software Testing course and cleared the national exam.",
  "Assistant Coordinator for a college-level 24-hour hackathon.",
];
