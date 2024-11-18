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
        <div className="flex gap-1 mb-5 links size-fit">
          <a target="_blank" href="mailto:ti.adebisi@gmail.com">
            <button className="size-10 bg-darkBg  border border-gray-500 rounded-xl *:size-6 flex justify-center items-center">
              <Email />
            </button>
          </a>
          <a
            target="_blank"
            href="http://www.github.com/adebisi1234"
            rel="noopener noreferrer"
          >
            <button className="size-10 bg-darkBg  border border-gray-500 rounded-xl *:size-6 flex justify-center items-center">
              <Github />
            </button>
          </a>
          <a
            target="_blank"
            href="http://www.linkedin.com/in/tobiloba-adebisi"
            rel="noopener noreferrer"
          >
            <button className="size-10 bg-darkBg  border border-gray-500 rounded-xl *:size-6 flex justify-center items-center">
              <LinkedIn />
            </button>
          </a>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1Odzu9Nil8eBWXJRgfy53kVeDQxFTvpva/view?usp=drive_link"
            rel="noopener noreferrer"
            download={"Tobiloba Adebisi Cv"}
          >
            <button className="size-10 bg-darkBg  border border-gray-500 rounded-xl *:size-6 flex justify-center items-center">
              <Resume />
            </button>
          </a>
        </div>
      </div>
      <Hr />
      <p className="mt-10 mb-2 text-sm">
        Design greatly inspired by{" "}
        <a target="_blank" href="https://road-to-next.com">
          road to next
        </a>{" "}
        by Robin Wieruch.
      </p>
      <p className="text-sm">
        Copyright © {fullYear} Tobiloba Adebisi. All rights reserved.
      </p>
    </section>
  );
}
