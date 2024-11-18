export default function Contact() {
  return (
    <section className="bg-darkBg2">
      <h6 className="mt-4 mb-10 text-2xl font-semibold leading-6 text-textGold">
        Contact
      </h6>
      <div className="flex flex-wrap max-w-full gap-3 items-center">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1Odzu9Nil8eBWXJRgfy53kVeDQxFTvpva/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex py-4 pl-12 pr-16 text-sm border border-gray-700 rounded-xl  bg-darkBgXl">
            Resume
          </button>
        </a>
        <a
          target="_blank"
          href="mailto:ti.adebisi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex py-4 pl-12 pr-16 text-sm border border-gray-700 rounded-xl  bg-darkBgXl">
            Email
          </button>
        </a>
        <a
          target="_blank"
          href="http://www.github.com/adebisi1234"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex py-4 pl-12 pr-16 text-sm border border-gray-700 rounded-xl  bg-darkBgXl">
            Github
          </button>
        </a>
        <a
          target="_blank"
          href="http://www.linkedin.com/in/tobiloba-adebisi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex py-4 pl-12 pr-16 text-sm border border-gray-700 rounded-xl  bg-darkBgXl">
            LinkedIn
          </button>
        </a>{" "}
        <a
          target="_blank"
          href="tel:+2348114779597"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex py-4 pl-12 pr-16 text-sm border border-gray-700 rounded-xl  bg-darkBgXl">
            Tel. Number
          </button>
        </a>
      </div>
    </section>
  );
}
