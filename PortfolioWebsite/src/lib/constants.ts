import type { Page } from "./types";

export const loaderAnimation = [
  ".loader",
  { opacity: [1, 0], pointerEvents: "none" },
  { easing: "ease-out" },
];

export const ME = {
  firstName: "Glen",
  fullName: "Glen Harding",
  country: "New Zealand",
  email: "glen.harding.nz@gmail.com",
};

export const LINKS = {
  github: "https://github.com/nelg62",
  linkedin: "https://www.linkedin.com/in/glen-harding-5a1317114",
  mail: "mailto:glen.harding.nz@gmail.com",
  thisProject: "https://github.com/nelg62/nelg62.github.io",
  // instagram: "",
  // medium: "",
  // discord: "",
};

export const PROJECTS = [
  {
    TITLE: "Minesweeper Automation",
    DESCRIPTION: "Automating minesweeper with javascript",
    img: "/Recording 2025-06-19 105117winninggame.gif",
    website: "https://github.com/nelg62/minesweeper-automation-with-puppeteer",
    repository:
      "https://github.com/nelg62/minesweeper-automation-with-puppeteer",
  },
  {
    TITLE: "Ecommerse Website Nextjs Typescript",
    DESCRIPTION: "Recreacting Capstone Project",
    img: "/Ecommercewebsitetypescript.png",
    website: "https://ecommersewebsitetypescript.netlify.app/",
    repository: "https://github.com/nelg62/EcommerseWebsiteNextjsTypescript",
  },
  {
    TITLE: "Dice Bear Character Builder",
    DESCRIPTION:
      "Learning Typescript while building an app I plan to make it look nicer",
    img: "/Characterappcreator.png",
    website: "https://characterappglenharding.netlify.app/",
    repository: "https://github.com/nelg62/charactorcreatorapp",
  },
  {
    TITLE: "Character Card Creator",
    DESCRIPTION: "Recreacting Miniproject 1",
    img: "/CharacterCardCreatorApp.png",
    website: "https://charactercardbuilderglenharding.netlify.app/",
    repository: "https://github.com/nelg62/CharacterFormwithtypescriptandreact",
  },
  {
    TITLE: "Capstone Project",
    DESCRIPTION: "test account User: a@a pass: Password1",
    img: "/Capstonprojectproductpage.png",
    website: "https://capstopeprojectglenharding.netlify.app",
    repository: "https://github.com/nelg62/CapstoneProject",
  },
  {
    TITLE: "Mini Project 3",
    DESCRIPTION: "Group Project with Amitabh Das",
    img: "/MiniProject3mainpage.png",
    website: "https://master--miniproject3glenharding.netlify.app/",
    repository: "https://github.com/nelg62/MiniProject3",
  },
  {
    TITLE: "Mini Project 2",
    DESCRIPTION: "",
    img: "/MiniProject2picture.png",
    website: "https://miniproject2glenharding.netlify.app/login",
    repository: "https://github.com/nelg62/MiniProject2",
    frountend: "Netlify",
    backend: "Render",
  },
  {
    TITLE: "Mini Project 1",
    DESCRIPTION: "",
    img: "/MiniProject1mainpage.png",
    website:
      "https://66b3ecc9cf2c55362d4faea2--endearing-gnome-6ad42e.netlify.app/",
    repository:
      "https://github.com/nelg62/Remake-Miniproject1-with-react/tree/master",
    frountend: "Netlify",
  },
];

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

export const EXPERIENCE = [
  {
    company: "Institute of Data",
    location: "Remote (Australian Class time)",
    position: "Teaching Assistant (Full Time 3 months)",
    start: "2025",
    link: "https://www.institutedata.com/nz/",
    end: "2025",
    tasks: [
      "Provided one-on-one and group support to students during and after lessons.",
      "Answered technical and conceptual questions to reinforce understanding of course material.",
      "Guided students through lab exercises, helping troubleshoot coding issues in real time.",
      "Assessed and marked lab work, offering constructive feedback to support learning and improvement.",
      "Tracked student progress and collaborated with instructors to identify areas for additional support.",
    ],
  },
  {
    company: "Institute of Data",
    location: "Remote (Australian Class time)",
    position: "Teaching Assistant (Full time 2-week contract)",
    start: "2025",
    link: "https://www.institutedata.com/nz/",
    end: "2025",
    tasks: [
      "Stepped in as a last-minute replacement for the original teaching assistant due to sickness, supporting lab sessions for seven days.",
      "Assisted students remotely during lab sessions, providing guidance and support.",
      "Helped the teacher monitor student progress and address questions during labs.",
      "Marked student attendance and assessed lab work for accuracy and completeness.",
    ],
  },
  {
    company: "Foundation Partners Limited",
    location: "Auckland New Zealand",
    position: "Level 1 & Level 2 Service Desk Engineer",
    start: "2023",
    link: "https://foundationpartners.co.nz/",
    end: "2024",
    tasks: [
      "Provide first and second level ICT support to customers at medium to large businesses - Predominantly via phone assistance - Occasional on-site visits as required",
      "Collaborate with other team members to deliver support services",
      "Assist clients as needed with various ICT issues",
      "Follow directives from Senior Engineers or Senior Managers for on-site assistance - Diagnose ICT issues on-site",
      "Communicate proactively with end-users and directing engineer/manager - Update status of projects or requests to end-users and supervisors",
      "Proficient in utilizing various software solutions to troubleshoot and resolve issues effectively: - 3cx - TeamViewer - N-central - Halopsa",
    ],
  },
  {
    company: "Fusion Tech Limited",
    location: "Pokeno New Zealand",
    position: "ICT Support Technician",
    link: "https://fusiontech.nz/",
    start: "2019",
    end: "2023",
    tasks: [
      "Troubleshoot IT issues for small to medium-sized businesses, including server management.",
      "Set up mobile phones, laptops, and other devices.",
      "Proficient with software and tools such as Office 365, Sophos routers, and Acronis.",
      "Knowledgeable in: - Azure - Sharepoint - Nagios - Shadowprotect - Scalefusion - Eset - Yealink PBX and phone systems.",
      "Work on a helpdesk, including using a ticketing system and taking phone calls.",
      "Provide on-site IT support",
      "Work independently and as part of a team.",
      "Willing to learn new technologies and software to stay up-to-date with industry advancements.",
      "Use Active Directory to create and manage users and groups.",
    ],
  },
  {
    company: "Darkwing Corporation Limited",
    link: "https://www.darkwing.co.nz/",
    location: "Auckland New Zealand",
    position: "ICT Support Technician",
    start: "2018",
    end: "2019",
    tasks: [
      "Provide on-site IT support for small to medium-sized businesses and individual clients.",
      "Troubleshoot IT-related issues for both Mac and iPhone-based devices.",
      "Fix hardware and software issues for Mac devices.",
      "Use backup and cloning tools such as Time Machine and Shadow Protect.",
      "Set up Android and iPhone phones, as well as Mac laptops.",
      "Install OS and recover lost data.",
      "Understand how companies and individuals use their devices and troubleshoot issues accordingly.",
      "Work independently and as part of a team.",
      "Learn new technologies and software to stay up-to-date with industry advancements.",
    ],
  },
];

export const STUDIES = [
  {
    title:
      "Software Bootcamp – Professional Certificate in Software Engineering",
    institution: "AUT/Institute of Data",
    link: "https://www.institutedata.com/nz/courses/software-engineering-programme/",
    date: "2023 - 2024",
    info: [
      "Software Development Principles",
      "API Development and Integration",
      "Javascript Programming",
      "Front End Development",
      "Back End and Full Stack Development",
      "Interactive Web Design",
      "Web Design with React II",
    ],
    miniProjects: {
      miniProject1:
        "https://github.com/nelg62/Module-4/tree/master/MiniProject1",
      miniProject2: "https://github.com/nelg62/MiniProject2",
      miniProject3: "https://github.com/nelg62/MiniProject3",
    },
    capstoneProject: "https://github.com/nelg62/CapstoneProject",
  },
  {
    title: "Level 7 Diploma in Cloud Management in Information Technology",
    institution: "Techtorium NZ Institute of Info Tech",
    link: "https://techtorium.ac.nz/it-courses/diploma-in-cloud-management/",
    date: "2017 - 2017",
    info: [
      "Install, upgrade, migrate, configure & troubleshoot Windows Client OS",
      "Configure & install DNS, WINS, DHCP, network infrastructure & servers",
      "Configure Active Directory in Windows Server Identify, protect, authenticate & asses network security & basic Cryptography",
      "Use MDT & SCCM for Deployment",
    ],
  },
  {
    title:
      "Level 6 Diploma in Networking and Security in Information Technology",
    institution: "Techtorium NZ Institute of Info Tech",
    link: "https://techtorium.ac.nz/it-courses/new-zealand-diploma-in-it-infrastructure/",
    date: "2016 - 2016",
    info: [
      "WDS, MDT Deployment",
      "Installing and Configuring Windows Server 2012",
      "Administering Windows Server 2012",
      "Configuring Advanced Windows Server 2012 Services",
    ],
  },
  {
    title: "Level 5 Diploma in PC Support in Information Technology",
    institution: "Techtorium NZ Institute of Info Tech",
    link: "https://techtorium.ac.nz/new-zealand-diploma-in-information-technology-technical-support/",
    date: "2015 - 2015",
    info: [
      "PC Hardware & Software Installation, Repair & Support",
      "Networking Concepts and Server Administration",
      "Internet & Networking Security, WAN & LAN Security",
      "Windows Applications, Operating Systems, and Web-Creation",
    ],
  },
];
