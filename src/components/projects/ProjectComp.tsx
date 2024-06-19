import Badge from "../Badge";
import Hr from "../Hr";
export type ProjectType = {
  name: string;
  desc: string;
  features: string[];
  link: string;
  images: string[];
  video: string;
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
  const showcase = [prop.link, prop.video, prop.images];
  return (
    <>
      <div className="flex flex-col items-center justify-between w-full gap-5 lg:flex-row text-start my-10">
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
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

              <p className="mb-10 leading-loose text-darkGray">{prop.desc}</p>

              <h5 className="mt-2 mb-1 font-bold text-left">Features</h5>
              <ul className="mb-6 text-base font-semibold">{features}</ul>
            </div>
          </div>
          <div
            className={`w-full mt-12 mb-12 lg:w-1/2 lg:mb-0 ${
              prop.id % 2 !== 0 ? "lg:order-1" : ""
            }`}
          >
            <div className="flex justify-between align-center w-[600px] my-3 max-w-full">
              <button className="flex py-2 pl-6 pr-8 text-sm text-white border border-gray-700 rounded-xl bg-darkBgL">
                Minimized V.
              </button>
              <button className="flex py-2 pl-6 pr-8 text-sm text-white border border-gray-700 rounded-xl bg-darkBgL">
                <a href={prop.link} target="_blank" rel="noopener noreferrer">
                  {" "}
                  Go to page{" "}
                </a>
              </button>
            </div>
            <iframe
              src={prop.link}
              width={600}
              height={400}
              className="max-w-full"
              allowFullScreen={true}
              // allow="writeText"
            >
              Loading a minimized instance of this project
            </iframe>
          </div>
        </div>
      </div>
      <Hr />
    </>
  );
}
