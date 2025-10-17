// src/data/timeline.js
// Wording tightened, typos fixed, and date ranges normalized.

/**
 * @typedef {Object} TimelineEntry
 * @property {string} year
 * @property {string} title
 * @property {string} duration
 * @property {string} details
 */

/** @type {TimelineEntry[]} */
const timeline = [
    {
      year: "2022",
      title: "Full Stack Engineer — Strategic Imperatives",
      duration: "2022 – present",
      details:
        "Introduced the BDD and TDD practicies into a team which insreased a code qality and speed of feature delivering. Increased a speed of feature delivering and code maintenence ability by moving a part of business logic from monolith arcitecture to microservices. Delivered features on the UI.",
    },
    {
      year: "2020",
      title: "Senior Software Engineer — Cardpay (Unlimint)",
      duration: "2020 – 2022 (1 year 7 months)",
      details:
        "Built a reverse‑proxy service for mobile client integrity and vulnerability checks and contributed to a Mobile API enabling Android/iOS integrations, unlocking multiple contracts. Led a cross‑functional team of 6 dev/test engineers and 2 analysts to add new payment platforms, collaborating with Security, Legal, Product, and Design. These projects opened LATAM/EMEA customer streams and increased ARR.",
    },
    {
      year: "2017",
      title: "Senior Software Engineer — Dell EMC",
      duration: "2017 – 2020 (3 years 2 months)",
      details:
        "Worked on a storage array sizing tool, improving performance and stability while redesigning and refactoring core components. Maintained a legacy version for existing customers and handled troubleshooting. Mentored students in the Dell EMC program.",
    },
    {
      year: "2015",
      title: "Software Engineer — EMC",
      duration: "2015 – 2017 (2 years 2 months)",
      details:
        "Enhanced configuration and sizing algorithms to support new storage array features. Built a reporting tool that automated device utilization reports, reducing delivery time from two weeks to five minutes. Gained deep understanding of storage internals and passed the EMC SPEED Performance Guru exam.",
    },
    {
      year: "2014",
      title: "Intern — EMC",
      duration: "2014 – 2015 (1 year)",
      details:
        "Developed a storage array performance testing tool. Reduced test‑suite runtime 5× by making log sinking multi‑threaded, introduced data hashing to increase throughput, and established unit testing with broad coverage while training teammates.",
    },
    {
      year: "2009",
      title: 'St. Petersburg State Electrotechnical University “LETI”',
      duration: "2009 – 2015 (6 years)",
      details:
        "Completed a Bachelor’s degree followed by a Master’s degree in Computer Technologies and Informatics.",
    },
  ];
  
  export default timeline;  