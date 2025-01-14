// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data

import { Experience, Post, Project, SocialLink } from "./definitions";

const experienceData: Experience[] = [
  {
    title: "Simulation Software Engineer",
    subtitle: "Draper",
    date: "January 2023 - Present",
    children: [
      "Developing high-fidelity simulation software for hardware and software development using C++",
      "Creating physics-based models for real-time vehicle dynamics and sensors",
      "Creating visualization tools and data analysis pipelines for simulation results using modern web technologies",
    ],
    link: "https://www.draper.com",
  },
  {
    title: "Software Engineer Intern",
    subtitle: "CesiumAstro",
    date: "May 2022 - Aug 2022",
    children: [
      "Developed a low-level distributed messaging service for SWIL simulation",
      "Created simulation data visualization web app with JavaScript and Flask (Python)",
      "Implemented navigation algorithms as embedded flight software in C++",
    ],
    link: "https://www.cesiumastro.com",
  },
  {
    title: "Research Assistant",
    subtitle: "USC Dynamic Robotics and Control Lab",
    date: "August 2020 - January 2021",
    children: [
      "Built a declarative configuration management system for robotics simulations",
      "Improved simulation usability by creating a GUI for controls with Qt C++",
    ],
    link: "https://sites.usc.edu/quann",
  },
];

const posts: Post[] = [
  // {
  //   title: "Getting Started with Next.js",
  //   date: "March 1, 2024",
  //   preview:
  //     "Learn how to build modern web applications with Next.js, the React framework for production.",
  //   slug: "getting-started-nextjs",
  // },
  // {
  //   title: "Understanding TypeScript Generics",
  //   date: "February 15, 2024",
  //   preview:
  //     "A deep dive into TypeScript generics and how they can make your code more reusable and type-safe.",
  //   slug: "typescript-generics",
  // },
  // {
  //   title: "The Power of Tailwind CSS",
  //   date: "February 1, 2024",
  //   preview:
  //     "Explore how Tailwind CSS can streamline your styling workflow and make your development process faster.",
  //   slug: "power-of-tailwind",
  // },
];

const projects: Project[] = [
  {
    title: "New Train Tracker",
    status: "Completed",
    tech: ["React", "TypeScript", "Python", "Chalice"],
    description:
      "Website to track locations of the new MBTA trains throughout the system. Contributed to the Front-End styling and routing system.",
    link: "https://github.com/transitmatters/new-train-tracker",
    preview: "https://traintracker.transitmatters.org",
  },
  {
    title: "BetterBrews iOS App",
    status: "Completed",
    tech: ["SwiftUI", "Swift", "iOS", "Mobile Development"],
    description:
      "Created an iOS application for tracking coffee breweing data for various brew methods and recipes.",
    link: "https://github.com/BetterBrews/BetterBrews-IOS",
    preview: "",
  },
  // {
  //   title: "Personal Portfolio",
  //   status: "Completed",
  //   tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  //   description:
  //     "A modern portfolio website built with Next.js and styled with Tailwind CSS. Features a responsive design and Notion-inspired interface.",
  //   link: "https://github.com/colbyhaskell/portfolio",
  //   preview: "https://colbyhaskell.com",
  // },
  // {
  //   title: "Senior Capstone Project",
  //   status: "Completed",
  //   tech: ["React", "Node.js", "Express", "MongoDB"],
  //   description:
  //     "A web application developed as part of senior capstone project. Focused on creating solutions for environmental monitoring and data visualization.",
  //   link: "https://github.com/colbyhaskell/capstone",
  //   preview: "https://github.com/colbyhaskell/capstone",
  // },
];

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/colbychaskell",
    ariaLabel: "GitHub",
    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    href: "https://linkedin.com/in/colbyhaskell",
    ariaLabel: "LinkedIn",
    icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  },
  {
    href: "https://twitter.com/thecolbyhaskell",
    ariaLabel: "X (Twitter)",
    icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];

export { experienceData, posts, projects, socialLinks };
