import { Fragment } from "react/jsx-runtime";
import Hr from "./Hr";

const experiences = [
  {
    name: "The Valley",
    position: "Software Developer",
    date: "Jun 2024 - Present",
    points: [
      "Built the site's SEO-friendly blog with 100% audit score on lighthouse & pagespeed.web.dev",
      "Increase the app's loading speed by 90% using code-splitting",
      "Built the site-wide search feature using Typesense",
      "Launched a email feature that's used to onboard new users",
      "Worked on a user / company profile for the app",
    ],
    technologies: [
      "React",
      "Nextjs",
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
    img: "thevalley.jpg",
    url: "https://app.thevalley.live",
  },
  {
    name: "Ticksevent",
    position: "Software Developer",
    date: "April 2024 - May 2024",

    points: [
      "Built the entire back-end of the event management platform",
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
    img: "ticks.jpg",
    url: "https://tickevents.com",
  },
];

const experiencesComp = experiences.map((experience, i) => {
  return (
    <Fragment key={i}>
      <div className="flex flex-col items-center justify-between w-full gap-5 my-10 lg:flex-row text-start">
        <div className="flex flex-wrap 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div
            className={`w-full lg:my-12 my-6 lg:w-1/2 lg:mb-0 ${
              i % 2 !== 0 ? "lg:order-2" : ""
            }`}
          >
            <div className="w-11/12 mx-auto sm:w-4/5 md:w-3/4 lg:w-unset">
              <a target="_blank" href={experience.url}>
                <h3 className="mt-6 text-4xl font-bold lg:text-5xl ">
                  {experience.name}
                </h3>
              </a>
              <div className="flex justify-between w-full my-4">
                <p>{experience.position}</p>
                <p>{experience.date}</p>
              </div>

              <ul className="mb-6 text-base font-semibold">
                {experience.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`w-full mt-12 mb-12 lg:w-1/2 lg:mb-0`}>
            <div className="flex justify-between w-[600px] my-3 max-w-full"></div>
            <div
              className={`bg-darkBg2 h-fit max-h-[400px] w-[600px] max-w-full`}
            >
              <img
                src={experience.img}
                alt="Showcase screenshot"
                className="object-contain min-w-full size-full snap-center snap-mandatory snap-both"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
      <Hr />
    </Fragment>
  );
});

export default function Works() {
  return (
    <section className="bg-darkBg2">
      <h6 className="mt-4 mb-10 text-2xl font-semibold leading-6 text-textGoldLight">
        Work Experiences
      </h6>
      {experiencesComp}
    </section>
  );
}
