// src/data/portfolio.js
// Tip: keep fields consistent and add a 'slug' for stable keys/URLs.

/**
 * @typedef {Object} Project
 * @property {string} slug         // stable id, no spaces
 * @property {string} title
 * @property {string} imgUrl       // light theme image
 * @property {string} imgUrlDark   // dark theme image
 * @property {string[]} stack
 * @property {string} link
 */

/** @type {Project[]} */
const projects = [
    {
      slug: "github-profile",
      title: "GitHub profile",
      imgUrl: "/assets/github.png",
      imgUrlDark: "/assets/githubdark.png",
      stack: ["Java", "React", "Tailwind", "Vite", "Python"],
      link: "https://github.com/IamOlgaOlga",
    },
    {
      slug: "portfolio-site",
      title: "Developer Portfolio Website",
      imgUrl: "/assets/portfoliowebsitelight.png",
      imgUrlDark: "/assets/portfoliowebsitedark.png",
      stack: ["React", "Tailwind", "Vite"],
      link: "https://github.com/IamOlgaOlga",
    },
  ];
  
  export default projects;  