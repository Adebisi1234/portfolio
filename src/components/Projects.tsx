import ProjectComp, { ProjectType } from "./projects/ProjectComp";

const projects: Omit<ProjectType, "id">[] = [
  {
    name: "Blackboard",
    desc: "A very fast, collaborative and efficient drawing board",
    features: [
      "Freehand to Shape - Using ML",
      "Real-time Collaboration",
      "Save to Image",
      "Customization",
    ],
    link: "http://localhost:5174",
    images: [""],
    video: "",
    badges: [
      { name: "ML", color: "#a52a2a" },
      { name: "Web", color: "#008000" },
    ],
  },
  {
    name: "Free City",
    desc: "An open world full of possibilities ",
    features: [
      "Racing - Against AI",
      "Multi-player",
      "Multiple POV",
      "Save state",
      "Customization",
    ],
    link: "",
    images: [""],
    video: "",
    badges: [
      { name: "ML/AI", color: "#a52a2a" },
      { name: "Web", color: "#008000" },
    ],
  },
  {
    name: "Buy Something",
    desc: "A simple, efficient E-commerce store ",
    features: ["Wishlist products ", "Buy products", "Cart", "Persistency"],
    link: "",
    images: [""],
    video: "",
    badges: [{ name: "Web", color: "#008000" }],
  },
];

const renderedProjects = projects.map((project, i) => (
  <ProjectComp {...project} id={i} key={i} />
));

export default function Projects() {
  return (
    <section className="flex flex-col gap-5 bg-darkBg ">
      {renderedProjects}
    </section>
  );
}
