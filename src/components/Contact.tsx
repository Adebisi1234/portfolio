export default function Contact() {
  return (
    <section className="bg-darkBg2">
      <h6 className="mt-4 mb-10 text-2xl font-semibold leading-6 text-textGold">
        Contact
      </h6>
      <div className="flex flex-wrap items-center max-w-full gap-3">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1Odzu9Nil8eBWXJRgfy53kVeDQxFTvpva/view?usp=drive_link"
          rel="noopener noreferrer"
          aria-label="Link to my Resume"
        >
          <button
            className="flex py-4 pl-12 pr-16 text-sm border border-gray-700 rounded-xl bg-darkBgXl"
            aria-label="Resume"
          >
            Resume
          </button>
        </a>
        <a
          target="_blank"
          href="mailto:ti.adebisi@gmail.com"
          rel="noopener noreferrer"
          aria-label="Link to my Email"
        >
          <button
            className="flex py-4 pl-12 pr-16 text-sm border border-gray-700 rounded-xl bg-darkBgXl"
            aria-label="Email"
          >
            Email
          </button>
        </a>
        <a
          target="_blank"
          href="http://www.github.com/adebisi1234"
          rel="noopener noreferrer"
          aria-label="Link to my Github"
        >
          <button
            className="flex py-4 pl-12 pr-16 text-sm border border-gray-700 rounded-xl bg-darkBgXl"
            aria-label="Github"
          >
            Github
          </button>
        </a>
        <a
          target="_blank"
          href="http://www.linkedin.com/in/tobiloba-adebisi"
          rel="noopener noreferrer"
          aria-label="Link to my LinkedIn"
        >
          <button
            className="flex py-4 pl-12 pr-16 text-sm border border-gray-700 rounded-xl bg-darkBgXl"
            aria-label="LinkedIn"
          >
            LinkedIn
          </button>
        </a>{" "}
        aria-label="Tel. Link to my Number"
        <a target="_blank" href="tel:+2348114779597" rel="noopener noreferrer">
          <button
            className="flex py-4 pl-12 pr-16 text-sm border border-gray-700 rounded-xl bg-darkBgXl"
            aria-label="Tel. Number"
          >
            Tel. Number
          </button>
        </a>
      </div>
    </section>
  );
}
