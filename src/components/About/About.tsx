import { useRoute } from "../../hooks/useRoute";
import { useSiteSettings } from "../../hooks/useSiteSettings";
import { useInView } from "../../hooks/useInView";
import { urlFor } from "../../data/imageUrl";

const FALLBACK_NAME = "Tobiloba Isaiah Adebisi";

const FALLBACK_SOFTWARE_ABOUT_BIO =
  "I'm a software engineer with 6+ years building and shipping production systems, currently leading engineering at Flowambe. I care about writing code that's boring in the best way: predictable, well-tested, and built to survive contact with real users.";

const FALLBACK_DATA_ABOUT_BIO =
  "I'm an AWS-certified data engineer with 6+ years working across production systems, currently leading engineering at Flowambe. I care about data infrastructure that's boring in the best way: predictable, well-instrumented, and built to survive contact with real pipelines at scale.";

const FALLBACK_PERSONAL_DETAIL =
  "Outside of shipping code, I'm usually exploring a new tool, going down a rabbit hole on something that has nothing to do with work, or resetting with a game of chess.";

const UTC_OFFSET = "UTC+1";

export default function About() {
  const { route } = useRoute();
  const { settings } = useSiteSettings();
  const { ref, inView } = useInView<HTMLDivElement>();

  const fullName = settings?.name ?? FALLBACK_NAME;

  const bio =
    route === "data"
      ? (settings?.dataAboutBio ?? FALLBACK_DATA_ABOUT_BIO)
      : (settings?.softwareAboutBio ?? FALLBACK_SOFTWARE_ABOUT_BIO);

  const personalDetail =
    settings?.aboutPersonalDetail ?? FALLBACK_PERSONAL_DETAIL;

  const stats =
    (route === "data" ? settings?.dataStats : settings?.softwareStats) ?? [];

  const portraitUrl = settings?.portrait
    ? urlFor(settings.portrait)
        .width(800)
        .height(1000)
        .fit("crop")
        .auto("format")
        .url()
    : null;

  return (
    <section id="about" className="section-shell py-20">
      <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-10">
        About
      </h2>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-[0.55fr_1fr] gap-10 md:gap-16 items-center scroll-reveal ${inView ? "in-view" : ""}`}
      >
        <div className="group relative aspect-[4/5] max-w-xs md:max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden border-2 border-border-light dark:border-border-dark bg-card dark:bg-card-dark hover:border-accent-border dark:hover:border-accent-border-dark transition-colors duration-300">
          {portraitUrl ? (
            <img
              src={portraitUrl}
              alt={fullName}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full" />
          )}
        </div>

        <div>
          <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-5 max-w-[52ch]">
            {bio}
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-[52ch] mb-10">
            {personalDetail}
          </p>

          {stats.length > 0 && (
            <div className="flex flex-wrap gap-x-10 gap-y-6 pt-8 border-t border-border-light dark:border-border-dark">
              {stats.map((stat) => (
                <div key={`${stat.value}-${stat.label}`} className="flex flex-col gap-1.5 min-w-[7rem]">
                  <span className="font-hero font-extrabold leading-none text-[clamp(1.6rem,2.6vw,2.25rem)] text-gray-900 dark:text-white">
                    {stat.value}
                  </span>
                  <span className="text-sm leading-snug text-gray-600 dark:text-gray-400 max-w-[20ch]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2.5 font-mono text-xs tracking-[0.04em] text-gray-600 dark:text-gray-400 mt-6">
            <span className="h-1.5 w-1.5 rounded-full bg-accent dark:bg-accent-dark" />
            <span>Based in {UTC_OFFSET}</span>
          </div>
        </div>
      </div>
    </section>
  );
}