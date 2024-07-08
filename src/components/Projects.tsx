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
    ],
    link: "https://myblackboard.vercel.app",
    images: [
      "https://res.cloudinary.com/de4vooekftest/image/upload/v1718851607/blackboard_screenshot1_g4trqc.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/v1718851606/blackboard_screenshot2_ros5lz.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/v1718851605/blackboard_screenshot3_blregp.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/v1718851631/blackboard_screenshot4_ah2bbt.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/v1718851629/blackboard_screenshot5_fxj963.jpg",
    ],
    video:
      "https://res.cloudinary.com/de4vooekftest/video/upload/v1718852902/blackboard_showcase_a7ukkl.mp4",
    badges: [
      { name: "ML", color: "#a52a2a" },
      { name: "Web", color: "#008000" },
    ],
  },
  // {
  //   name: "Free City",
  //   desc: "An open world full of possibilities ",
  //   tools: "",
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
    tools: "C++ • Socket API",
    features: [
      "Very Fast storage and retrieval",
      "Built a thread pool",
      "Data stored is persisted",
    ],
    // link: "",
    images: ["recached.jpg"],
    // video: "",
    badges: [{ name: "Network", color: "#dcbb57" }],
  },
  {
    name: "Buy Something",
    github: "https://github.com/adebisi1234/buyomething",
    desc: "A simple, efficient E-commerce store ",
    tools: "React • Python • Paystack • Temporal",
    features: [
      "Wishlist products ",
      "Buy products",
      "Cart",
      "Payment integration using paystack",
    ],
    link: "https://buysomething.vercel.app",
    images: [
      "https://res.cloudinary.com/de4vooekftest/image/upload/v1718851602/buysomething_screenshot1_amnnqa.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/v1718851601/buysomething_screenshot2_ldtroy.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/v1718851626/buysomething_screenshot3_pcxfjk.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/v1718851597/buysomething_screenshot4_dn8ajp.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/v1718851622/buysomething_screenshot5_hzhehd.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/v1718851593/buysomething_screenshot6_fuamu8.jpg",
    ],
    video:
      "https://res.cloudinary.com/de4vooekftest/video/upload/v1718852880/ecommerce_showcase_uva5tv.mp4",
    badges: [{ name: "Web", color: "#008000" }],
  },
  {
    name: "Heyyy",
    github: "https://github.com/adebisi1234/twitter_project",
    desc: "A social media app",
    tools: "React • Socket.io • Node",
    features: [
      "Create Posts, Comments, Likes and Retweet",
      "Upload Media",
      "Follow feature",
      "Theme customization",
    ],
    link: "https://xitterr.vercel.app",
    images: [
      "https://res.cloudinary.com/de4vooekftest/image/upload/v1718851620/xitterr_screenshot1_mevids.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/v1718851619/xitterr_screenshot2_gbt3g1.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/v1718851618/xitterr_screenshot3_r4fy9a.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/v1718851616/xitterr_screenshot4_nziqti.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/v1718851614/xitterr_screenshot5_wthdka.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/v1718852910/xitterr_screenshot7_dste8m.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/v1718852553/xitterr_screenshot8_t02z0d.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/v1718852909/xitterr_screenshot9_idjtby.jpg",
    ],
    video:
      "https://res.cloudinary.com/de4vooekftest/video/upload/v1718851297/xitterr_showcase_ck77ad.mp4",
    badges: [{ name: "Web", color: "#008000" }],
  },
];

const renderedProjects = projects.map((project, i) => (
  <ProjectComp {...project} id={i} key={i} />
));

export default function Projects() {
  return (
    <section className="flex flex-col gap-5 bg-darkBg ">
      <h6 className="mt-4 text-2xl font-semibold leading-6 text-textGoldLight">
        Projects
      </h6>
      {renderedProjects}
    </section>
  );
}
