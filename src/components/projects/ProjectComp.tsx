import { useState } from "react";
import Badge from "../Badge";
import Hr from "../Hr";
import { ExternalLink, Github } from "../../assets/Svg";
export type ProjectType = {
  name: string;
  desc: string;
  tools: string;
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
  typeof prop.images !== "undefined" &&
    showcase.push({ images: prop.images, name: "images" });
  typeof prop.video !== "undefined" &&
    showcase.push({ url: prop.video, name: "video" });

  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center justify-between w-full gap-5 my-10 lg:flex-row text-start">
        <div className="flex flex-wrap  2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div
            className={`w-full mt-12 mb-12 lg:w-1/2 lg:mb-0 ${
              prop.id % 2 !== 0 ? "lg:order-2" : ""
            }`}
          >
            <div className="w-11/12 mx-auto sm:w-4/5 md:w-3/4 lg:w-unset">
              <div className="flex justify-between items-center">
                <div className="flex gap-4 text-sm font-bold badge">
                  {badges}
                </div>
                {!(prop.link || prop.images || prop.video) && (
                  <div className="flex items-center justify-center gap-2">
                    {" "}
                    {prop.github && (
                      <a
                        target="_blank"
                        href={prop.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="flex items-center justify-center h-full p-2 text-sm text-white border border-gray-700 rounded-xl bg-darkBgL">
                          <Github />
                        </button>
                      </a>
                    )}
                    {prop.link && (
                      <a
                        target="_blank"
                        href={prop.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="flex items-center justify-center h-full p-2 text-sm text-white border border-gray-700 rounded-xl bg-darkBgL">
                          <ExternalLink />
                        </button>
                      </a>
                    )}
                  </div>
                )}
              </div>
              <h3 className="my-6 text-4xl font-bold lg:text-5xl ">
                {prop.name}
              </h3>

              <p className="mb-2 leading-loose text-darkGray">{prop.desc}</p>
              <p className="mb-4">
                <strong>Tools:</strong> {prop.tools}
              </p>

              <h5 className="mt-2 mb-3 font-bold text-left">Features</h5>
              <ul className="mb-6 text-base font-semibold">{features}</ul>
            </div>
          </div>
          <div className={`w-full mt-12 mb-12 lg:w-1/2 lg:mb-0`}>
            {(prop.link || prop.images || prop.video) && (
              <>
                <div className="flex justify-between w-[600px] my-3 max-w-full h-fit">
                  <div className="flex items-center justify-center gap-1">
                    {showcase.length > 1 ? (
                      <>
                        {showcase.map((index, i) => (
                          <div
                            key={i}
                            className={`flex py-2 justify-center items-center px-2 text-sm text-white border border-gray-700 cursor-pointer rounded-xl bg-darkBgL ${
                              showcaseIndex === i ? "bg-textGold" : ""
                            } `}
                            onClick={() => setShowcaseIndex(i)}
                          >
                            {index.name}
                          </div>
                        ))}
                      </>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    {prop.github && (
                      <a
                        target="_blank"
                        href={prop.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="flex items-center justify-center h-full p-2 text-sm text-white border border-gray-700 rounded-xl bg-darkBgL">
                          <Github />
                        </button>
                      </a>
                    )}
                    {prop.link && (
                      <a
                        target="_blank"
                        href={prop.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="flex items-center justify-center h-full p-2 text-sm text-white border border-gray-700 rounded-xl bg-darkBgL">
                          <ExternalLink />
                        </button>
                      </a>
                    )}
                  </div>
                </div>

                <div
                  className={`bg-darkBg2 h-fit max-h-[400px] w-[600px] max-w-full ${
                    loading && "animate-pulse"
                  }`}
                  onMouseOver={() => setLoading(false)}
                >
                  <video
                    src={showcase[showcaseIndex].url}
                    style={{
                      display:
                        showcase[showcaseIndex].name === "video"
                          ? "block"
                          : "none",
                    }}
                    autoPlay
                    loop
                    controls
                    preload="eager"
                    className="object-fill max-w-full w-full h-auto"
                    onCanPlay={() => loading && setLoading(false)}
                  ></video>
                  <div
                    className="flex max-w-full overflow-x-scroll size-full snap-both snap-center snap-mandatory"
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
                        draggable="false"
                        alt="Showcase screenshot"
                        className="min-w-full size-full object-contain snap-center snap-mandatory snap-both"
                        key={i}
                        loading="eager"
                        onLoad={() => loading && setLoading(false)}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Hr />
    </>
  );
}
