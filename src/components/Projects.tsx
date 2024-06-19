import ProjectComp, { ProjectType } from "./projects/ProjectComp";

const projects: Omit<ProjectType, "id">[] = [
  {
    name: "Blackboard",
    github: "https://github.com/adebisi1234/blackboard",
    desc: "A very fast, collaborative and efficient drawing board",
    features: [
      "Freehand to Shape - Using ML",
      "Real-time Collaboration",
      "Save to Image",
      "Easy customization",
    ],
    link: "https://myblackboard.vercel.app",
    images: ["", "", "", ""],
    video: "",
    badges: [
      { name: "ML", color: "#a52a2a" },
      { name: "Web", color: "#008000" },
    ],
  },
  // {
  //   name: "Free City",
  //   desc: "An open world full of possibilities ",
  //   features: [
  //     "Racing - Against AI",
  //     "Multi-player",
  //     "Multiple POV",
  //     "Save state",
  //     "Customization",
  //   ],
  //   link: "",
  //   images: ["", "", "", ""],
  //   video: "",
  //   badges: [
  //     { name: "ML/AI", color: "#a52a2a" },
  //     { name: "Web", color: "#008000" },
  //   ],
  // },
  {
    name: "Re-cached",
    github: "https://github.com/adebisi1234/recached",
    desc: "A fast in-memory storage like redis",
    features: [
      "Very Fast storage and retrieval",
      "Implemented and used complex DSA like hash table, heap",
      "Built a thread pool",
      "Data stored is persisted",
    ],
    // link: "",
    // images: ["", "", "", ""],
    // video: "",
    badges: [{ name: "Network", color: "#dcbb57" }],
  },
  {
    name: "Buy Something",
    github: "https://github.com/adebisi1234/buyomething",
    desc: "A simple, efficient E-commerce store ",
    features: ["Wishlist products ", "Buy products", "Cart", "Persistency"],
    link: "https://buysomething.vercel.app",
    images: ["", "", "", ""],
    video: "",
    badges: [{ name: "Web", color: "#008000" }],
  },
  {
    name: "Xitterr",
    github: "https://github.com/adebisi1234/twitter_clone",
    desc: "A full stack clone of twitter, built during the rage to find alternative to twitter",
    features: [
      "Create Posts, Comments, Likes and Retweet",
      "Upload Media",
      "Follow feature",
      "Customization",
    ],
    link: "https://xitterr.vercel.app",
    images: ["", "", "", ""],
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
      <h6 className="text-textGoldLight text-2xl font-semibold mt-4 leading-6">
        Projects
      </h6>
      {renderedProjects}
    </section>
  );
}
