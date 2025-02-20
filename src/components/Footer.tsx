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
          <a
            aria-label="link to my email"
            target="_blank"
            href="mailto:ti.adebisi@gmail.com"
          >
            <button
              className="size-10 bg-darkBg  border border-gray-500 rounded-xl *:size-6 flex justify-center items-center"
              aria-label="Email"
            >
              <Email />
            </button>
          </a>
          <a
            aria-label="link to my github"
            target="_blank"
            href="https://www.github.com/adebisi1234"
          >
            <button
              className="size-10 bg-darkBg  border border-gray-500 rounded-xl *:size-6 flex justify-center items-center"
              aria-label="Github"
            >
              <Github />
            </button>
          </a>
          <a
            aria-label="link to my linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/tobiloba-adebisi"
          >
            <button
              className="size-10 bg-darkBg  border border-gray-500 rounded-xl *:size-6 flex justify-center items-center"
              aria-label="LinkedIn"
            >
              <LinkedIn />
            </button>
          </a>
          <a
            aria-label="link to my resume"
            target="_blank"
            href="https://drive.google.com/file/d/1Odzu9Nil8eBWXJRgfy53kVeDQxFTvpva/view?usp=drive_link"
            download={"Tobiloba Adebisi Cv"}
          >
            <button
              className="size-10 bg-darkBg  border border-gray-500 rounded-xl *:size-6 flex justify-center items-center"
              aria-label="Resume"
            >
              <Resume />
            </button>
          </a>
        </div>
        <div className="flex gap-1 flex-col item-start justify-start text-start">
          <a
            aria-label="link to my email"
            target="_blank"
            className="hover:text-textGold"
            href="mailto:ti.adebisi@gmail.com"
          >
            ti.adebisi@gmail.com
          </a>
          <a
            aria-label="link to my github"
            target="_blank"
            className="hover:text-textGold"
            href="https://www.github.com/adebisi1234"
          >
            https://www.github.com/adebisi1234
          </a>
          <a
            aria-label="link to my linkedin"
            target="_blank"
            className="hover:text-textGold"
            href="https://www.linkedin.com/in/tobiloba-adebisi"
          >
            https://www.linkedin.com/in/tobiloba-adebisi
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
