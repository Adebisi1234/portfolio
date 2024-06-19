import { useState } from "react";
import Badge from "../Badge";
import Hr from "../Hr";
import { ExternalLink, Github, NextShowcase } from "../../assets/Svg";
export type ProjectType = {
  name: string;
  desc: string;
  features: string[];
  link?: string;
  github: string;
  images?: string[];
  video?: string;
  id: number;
  badges: {
    name: string;
    color: string;
  }[];
};

export default function ProjectComp(prop: ProjectType) {
  const features = prop.features.map((feature, i) => (
    <li key={i} className="mb-3">
      {feature}
    </li>
  ));
  const badges = prop.badges?.map((badge, i) => (
    <Badge key={i} name={badge.name} color={badge.color} />
  ));
  const showcase = [];
  typeof prop.link !== "undefined" &&
    showcase.push({ url: prop.link, name: "Minimized V." });
  typeof prop.video !== "undefined" &&
    showcase.push({ url: prop.video, name: "video" });
  typeof prop.images !== "undefined" &&
    showcase.push({ images: prop.images, name: "images" });

  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-between w-full gap-5 lg:flex-row text-start my-10">
        <div className="flex flex-wrap  2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div
            className={`w-full mt-12 mb-12 lg:w-1/2 lg:mb-0 ${
              prop.id % 2 !== 0 ? "lg:order-2" : ""
            }`}
          >
            <div className="w-11/12 mx-auto sm:w-4/5 md:w-3/4 lg:w-unset">
              <div className="flex gap-4 text-sm font-bold badge">{badges}</div>
              <h3 className="mt-6 mb-8 text-4xl font-bold lg:text-5xl ">
                {prop.name}
              </h3>

              <p className="mb-5 leading-loose text-darkGray">{prop.desc}</p>

              <h5 className="mt-2 mb-3 font-bold text-left">Features</h5>
              <ul className="mb-6 text-base font-semibold">{features}</ul>
            </div>
          </div>
          <div
            className={`w-full mt-12 mb-12 lg:w-1/2 lg:mb-0 ${
              prop.id % 2 !== 0 ? "lg:order-1" : ""
            }`}
          >
            <div className="flex justify-between w-[600px] my-3 max-w-full">
              <div className="flex gap-1 justify-center items-center">
                {showcase.length > 1 ? (
                  <>
                    <div className="flex py-2 justify-center items-center pl-6 pr-8 text-sm text-white border border-gray-700 rounded-xl bg-darkBgL w-[150px]">
                      {showcase[showcaseIndex].name}
                    </div>
                    <button
                      className="flex p-2 h-full items-center justify-center text-sm text-white border border-gray-700 rounded-xl bg-darkBgL"
                      onClick={() => {
                        setShowcaseIndex(
                          (prev) => (prev + 1) % showcase.length
                        );
                        setLoading(true);
                      }}
                    >
                      <NextShowcase />
                    </button>
                  </>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="flex gap-2 justify-center items-center">
                {prop.github && (
                  <button className="flex p-2 h-full items-center justify-center text-sm text-white border border-gray-700 rounded-xl bg-darkBgL">
                    <Github />{" "}
                  </button>
                )}
                {prop.link && (
                  <button className="flex p-2 h-full items-center justify-center text-sm text-white border border-gray-700 rounded-xl bg-darkBgL">
                    <a
                      href={prop.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <ExternalLink />
                    </a>
                  </button>
                )}
              </div>
            </div>
            {(prop.link || prop.images || prop.video) && (
              <div
                className={`bg-darkBg2 h-[400px] w-[600px] max-w-full ${
                  loading && "animate-pulse"
                }`}
                onMouseOver={() => setLoading(false)}
              >
                <iframe
                  src={prop.link}
                  width={600}
                  height={400}
                  className="max-w-full"
                  allowFullScreen={true}
                  style={{
                    display:
                      showcase[showcaseIndex].name === "Minimized V."
                        ? "block"
                        : "none",
                  }}
                  onLoad={() => loading && setLoading(false)}
                  // allow="writeText"
                >
                  Loading a minimized instance of this project
                </iframe>
                <video
                  src={showcase[showcaseIndex].url}
                  style={{
                    display:
                      showcase[showcaseIndex].name === "video"
                        ? "block"
                        : "none",
                  }}
                  autoPlay
                  preload="eager"
                  className="max-w-full size-full object-fill"
                  onCanPlay={() => loading && setLoading(false)}
                ></video>
                <div
                  className="overflow-x-scroll size-full max-w-full flex snap-both snap-center snap-mandatory"
                  style={{
                    display:
                      showcase[showcaseIndex].name === "images"
                        ? "flex"
                        : "none",
                  }}
                >
                  {showcase[showcaseIndex].images?.map((image, i) => (
                    <img
                      src={image}
                      alt="Showcase screenshot"
                      className="size-full snap-center snap-mandatory snap-both min-w-full"
                      key={i}
                      loading="eager"
                      onLoad={() => loading && setLoading(false)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Hr />
    </>
  );
}
