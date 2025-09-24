import ProjectComp, { ProjectType } from "./projects/ProjectComp";

const projects: Omit<ProjectType, "id">[] = [
  {
    name: "Blackboard",
    github: "https://github.com/adebisi1234/blackboard",
    desc: "A very fast, collaborative and efficient drawing board",
    tools: "React • ws • zustand",
    features: [
      "Freehand to Shape - Using ML",
      "Real-time Collaboration",
      "Save to Image",
      "Zoom and Minimap",
      "Persistency",
      "Easy customization",
      "Available as a browser extension",
    ],
    link: "https://tobiloba.me/blackboard",
    images: [
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/v1718851607/blackboard_screenshot1_g4trqc.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/v1718851606/blackboard_screenshot2_ros5lz.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/v1718851605/blackboard_screenshot3_blregp.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/v1718851631/blackboard_screenshot4_ah2bbt.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/v1718851629/blackboard_screenshot5_fxj963.jpg",
    ],
    video:
      "https://res.cloudinary.com/de4vooekftest/video/upload/f_auto:video,q_auto/v1718852902/blackboard_showcase_a7ukkl.mp4",
    badges: [
      { name: "ML", bg: "#7f1d1d", color: "#ffffff" },
      { name: "Web", color: "#ffffff", bg: "#065f46" },
      { name: "Real-time", color: "#ffffff", bg: "#b91c1c" },
      { name: "Canvas", color: "#000000", bg: "#f59e0b" },
    ],
  },
  {
    name: "Serverless E-commerce Data & Analytics Pipeline",
    github: "",
    desc: "A fully automated, serverless data pipeline built on AWS to process raw e-commerce data and power a business intelligence dashboard.",
    tools:
      "AWS S3 • AWS Glue • SQL • AWS Step Functions • Amazon Redshift • Amazon QuickSight",
    features: [
      "Automated Data Ingestion",

      "Serverless ETL Processing",

      "Robust Data Modeling",

      "Automated Workflow Orchestration",

      "Interactive BI Dashboard",
    ],
    link: "",
    images: [
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/v1758735572/data-eng_jr32sx.png",
    ],
    video:
      "https://res.cloudinary.com/de4vooekftest/video/upload/f_auto:video,q_auto/v1758735526/data-eng_ezjlnz.mp4",
    badges: [
      { name: "Data", color: "#ffffff", bg: "#0d9488" },
      { name: "AWS", color: "#000000", bg: "#fbbf24" },
      { name: "ETL", color: "#ffffff", bg: "#4f46e5" },
      { name: "Analytics", color: "#ffffff", bg: "#7c3aed" },
    ],
  },
  {
    name: "Sweet Server",
    github: "https://github.com/adebisi1234/sserver",
    desc: "A simple static web server. Supports HMR, Made to be used mostly locally",
    tools: "Nodejs • Expressjs",
    features: [
      "Hot Module Replacement (HMR) - No need to refresh",
      "Supports multiple mode - hmr and hot reload",
      "Automatic compression of files - gzip",
      "Cleanup of side-effects before invalidation of modules",
      "Supports multiple ports - Tries new port if provided one isn't available",
      "Supports setting options as global",
    ],
    link: "https://www.npmjs.com/package/sweet-server",
    images: [
      "sweet-server.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/fz10z5ohpbrjvnqnw3r2",
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/frcf4wbe3ymclaqh2mf6",
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/sj6dp67gxf82nq5vnbhw",
    ],
    video:
      "https://res.cloudinary.com/de4vooekftest/video/upload/f_auto:video,q_auto/v1732484287/dvlju0dxwwm6qkgp5nkk.mp4",
    badges: [
      { name: "Network", color: "#ffffff", bg: "#92400e" },
      { name: "Web", color: "#ffffff", bg: "#065f46" },
      { name: "Node.js", color: "#ffffff", bg: "#16a34a" },
      { name: "CLI", color: "#ffffff", bg: "#374151" },
    ],
  },
];

const renderedProjects = projects.map((project, i) => (
  <ProjectComp {...project} id={i} key={i} />
));

export default function Projects() {
  return (
    <section className="flex flex-col gap-5 bg-darkBg ">
      <h2 className="mt-4 text-2xl font-semibold leading-6 text-textGoldLight">
        Projects
      </h2>
      {renderedProjects}
    </section>
  );
}
