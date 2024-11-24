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
      "http://res.cloudinary.com/de4vooekftest/video/upload/v1732484287/dvlju0dxwwm6qkgp5nkk.mp4",
    badges: [
      { name: "Network", color: "#af8608" },
      { name: "Web", color: "#008000" },
    ],
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
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/v1718851602/buysomething_screenshot1_amnnqa.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/v1718851601/buysomething_screenshot2_ldtroy.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/v1718851626/buysomething_screenshot3_pcxfjk.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/v1718851597/buysomething_screenshot4_dn8ajp.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/v1718851622/buysomething_screenshot5_hzhehd.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/v1718851593/buysomething_screenshot6_fuamu8.jpg",
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
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/v1718851620/xitterr_screenshot1_mevids.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/v1718851619/xitterr_screenshot2_gbt3g1.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/v1718851618/xitterr_screenshot3_r4fy9a.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/v1718851616/xitterr_screenshot4_nziqti.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/v1718851614/xitterr_screenshot5_wthdka.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/v1718852910/xitterr_screenshot7_dste8m.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/v1718852553/xitterr_screenshot8_t02z0d.jpg",
      "https://res.cloudinary.com/de4vooekftest/image/upload/f_auto,q_auto/v1718852909/xitterr_screenshot9_idjtby.jpg",
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
/* The Blackboard project's primary goals are to provide a fast, collaborative, and efficient digital drawing board that caters to the needs of users who require real-time collaboration, intuitive drawing tools, and seamless integration into their workflow.

To achieve these goals, the project has implemented the following key features:

Freehand to Shape using ML: By leveraging machine learning technology, the Blackboard drawing tool can automatically recognize and convert freehand sketches into clean, geometric shapes. This feature enhances the user's drawing experience by allowing them to quickly create precise shapes without the need for manual precision.
Real-time Collaboration: The Blackboard platform enables multiple users to work on the same drawing board simultaneously, allowing for seamless real-time collaboration. This feature enables teams to brainstorm, ideate, and iterate on designs in a shared, interactive environment.
Save to Image: Users can save their drawings as image files, allowing them to easily incorporate their work into presentations, documents, or other digital assets.
Zoom and Minimap: The Blackboard interface provides robust zooming and panning capabilities, as well as a minimap view, which enables users to navigate large, detailed drawings with ease.
Persistency: The Blackboard platform ensures that user drawings are persistently stored, allowing users to return to their work at any time and continue their creative process.
Easy Customization: The Blackboard interface is highly customizable, allowing users to tailor the tool to their specific needs and preferences.
Browser Extension: The Blackboard project is available as a browser extension, providing users with seamless integration into their existing workflows and easy access to the drawing tool.
The impact of the Blackboard project is that it empowers users, particularly those engaged in collaborative design, ideation, and brainstorming activities, to work more efficiently and effectively. By providing a fast, intuitive, and feature-rich drawing tool, the Blackboard project aims to improve productivity, enhance creativity, and foster better communication and collaboration among teams.
*/
