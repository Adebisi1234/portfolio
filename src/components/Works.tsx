import { ExternalLink } from "../assets/Svg";
import Hr from "./Hr";

const experiences = [
  {
    name: "The Valley",
    position: "Software Developer",
    date: "Jan 2024 - Present",
    desc: "Work as a full-stack developer for the start-up",
    points: [
      "Built the site-wide search feature using typesense",
      "Worked on a user / company profile for the app",
      "Launched a email feature that's used to onboard new users",
      "Mentored peer developers on full-stack development and best practices",
    ],
    technologies: [
      "React",
      "Node",
      "AdonisJs",
      "MySql",
      "Typesense",
      "SendGrid",
      "Javascript",
      "TypeScript",
      "styled-components",
      "Tailwind",
      "Storybook",
      "CSS",
      "Sass",
      "Jest",
    ],
    img: "/thevalley.jpg",
  },
  {
    name: "Ticksevent",
    position: "Software Developer",
    date: "Oct 2023 - Dec 2023",
    desc: "Built the entire back-end of the event management platform",
    points: [
      "Built the entire backend for the app",
      "Integrated Paystack for payment processing",
      "Built the ML model for Discovering user-related Events",
      "Built the QR code generation components for tickets",
    ],
    technologies: [
      "React",
      "NextJS",
      "Javascript",
      "Node",
      "Express",
      "MongoDB",
      "Resend",
      "React-Email",
      "Node-schedule",
      "Docker",
      "AWS",
    ],
    img: "/ticks.jpg",
    url: "https://tickevents.com",
  },
];

const experiencesComp = experiences.map((experience, i) => {
  return (
    <>
      <div className="flex flex-col items-center justify-between w-full gap-5 my-10 lg:flex-row text-start">
        <div className="flex flex-wrap 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div
            className={`w-full mt-12 mb-12 lg:w-1/2 lg:mb-0 ${
              i % 2 !== 0 ? "lg:order-2" : ""
            }`}
          >
            <div className="w-11/12 mx-auto sm:w-4/5 md:w-3/4 lg:w-unset">
              <h3 className="mt-6 text-4xl font-bold lg:text-5xl ">
                {experience.name}
              </h3>
              <div className="my-4 flex justify-between w-full">
                <p>{experience.position}</p>
                <p>{experience.date}</p>
              </div>

              <p className="mb-5 leading-loose text-darkGray">
                {experience.desc}
              </p>

              <ul className="mb-6 text-base font-semibold">
                {experience.points.map((point) => (
                  <li>{point}</li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={`w-full mt-12 mb-12 lg:w-1/2 lg:mb-0 ${
              i % 2 !== 0 ? "lg:order-1" : ""
            }`}
          >
            <div className="flex justify-between w-[600px] my-3 max-w-full">
              {experience.url && (
                <button className="flex items-center justify-center ml-auto h-full p-2 text-sm text-white border border-gray-700 rounded-xl bg-darkBgL">
                  <a
                    href={experience.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <ExternalLink />
                  </a>
                </button>
              )}
            </div>
            <div className={`bg-darkBg2 h-[400px] w-[600px] max-w-full`}>
              <img
                src={experience.img}
                alt="Showcase screenshot"
                className="min-w-full size-full snap-center snap-mandatory snap-both"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
      <Hr />
    </>
  );
});

export default function Works() {
  return (
    <section>
      <h6 className="text-textGoldLight text-2xl font-semibold mt-4 mb-10 leading-6">
        Works
      </h6>
      {experiencesComp}
    </section>
  );
}
