import { Email, Github, LinkedIn, Resume } from "../assets/Svg";
import Hr from "./Hr";

export default function Footer() {
  const fullYear = new Date().getFullYear();
  return (
    <section className="pb-3 bg-darkBg">
      <div className="flex flex-col items-start gap-5 my-10 mr-auto lg:ml-32">
        <h3 className="text-lg font-bold text-textGold">
          Tobiloba Isaiah Adebisi
        </h3>
        <p>
          Reach me using the below links <i>again!!! :)</i>
        </p>
        <div className="flex gap-1 mb-5 links size-fit">
          <a href="mailto:ti.adebisi@gmail.com">
            <div className="size-10 bg-darkBg hover:bg-darkBg2 border border-gray-500 rounded-xl *:size-6 flex justify-center items-center">
              <Email />
            </div>
          </a>
          <a
            href="http://www.github.com/adebisi1234"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="size-10 bg-darkBg hover:bg-darkBg2 border border-gray-500 rounded-xl *:size-6 flex justify-center items-center">
              <Github />
            </div>
          </a>
          <a
            href="http://www.linkedin.com/in/tobiloba-adebisi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="size-10 bg-darkBg hover:bg-darkBg2 border border-gray-500 rounded-xl *:size-6 flex justify-center items-center">
              <LinkedIn />
            </div>
          </a>
          <a
            href="https://drive.google.com/file/d/1Odzu9Nil8eBWXJRgfy53kVeDQxFTvpva/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            download={"Tobiloba Adebisi Cv"}
          >
            <div className="size-10 bg-darkBg hover:bg-darkBg2 border border-gray-500 rounded-xl *:size-6 flex justify-center items-center">
              <Resume />
            </div>
          </a>
        </div>
      </div>
      <Hr />
      <p className="mt-10 mb-2 text-sm">
        Design greatly inspired by{" "}
        <a href="https://road-to-next.com">road to next</a> by Robin Wieruch.
      </p>
      <p className="text-sm">
        Copyright © {fullYear} Tobiloba Adebisi. All rights reserved.
      </p>
    </section>
  );
}
