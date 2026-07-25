import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useRoute } from "../hooks/useRoute";
import { useHeroAnimation } from "../hooks/useHeroAnimation";
import { useSiteSettings } from "../hooks/useSiteSettings";
import { useInView } from "../hooks/useInView";
import { getHeroContent } from "../data/heroContent";
import { urlFor } from "../data/imageUrl";

function StatValue({ value, active }: { value: string; active: boolean }) {
  const match = value.match(/^(\d+)(\D*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";
  const [display, setDisplay] = useState(target === null ? 0 : 0);

  useEffect(() => {
    if (!active || target === null) return;
    const duration = 900;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * (target as number)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  if (target === null) return <>{value}</>;
  return (
    <>
      {display}
      {suffix}
    </>
  );
}

export default function Hero() {
  const { route } = useRoute();
  const shouldAnimate = useHeroAnimation();
  const { settings } = useSiteSettings();
  const content = getHeroContent(route);
  const { ref: statsRef, inView: statsInView } = useInView<HTMLDivElement>();

  const portraitUrl = settings?.portrait
    ? urlFor(settings.portrait)
        .width(800)
        .height(1000)
        .fit("crop")
        .auto("format")
        .url()
    : null;

  const resumeUrl =
    route === "data"
      ? settings?.dataResume?.asset?.url
      : settings?.softwareResume?.asset?.url;

  const reveal = (step: 1 | 2 | 3) =>
    shouldAnimate ? `hero-reveal hero-reveal-${step}` : "";

  return (
    <section className="max-w-[1440px] mx-auto px-5 md:px-9 py-16 md:py-24 grid md:grid-cols-[0.65fr_1.35fr] gap-12 md:gap-16 items-start">
      <div className={reveal(1)}>
        <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-border-light dark:border-border-dark bg-accent-tint dark:bg-accent-tint-dark hover:border-accent-border dark:hover:border-accent-border-dark transition-colors duration-300">
          {portraitUrl ? (
            <img
              src={portraitUrl}
              alt={content.fullName}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-mono text-xs text-accent">
                portrait placeholder
              </span>
            </div>
          )}

          <div className="absolute inset-x-4 bottom-4">
            <a
              href="#work"
              className="flex items-center justify-center w-full rounded-xl bg-accent text-white text-sm font-semibold py-3 hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
            >
              {content.primaryCta}
            </a>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="font-heading font-semibold text-gray-900 dark:text-white truncate">
              {content.fullName}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-500 mt-0.5">
              {content.role}
            </p>
          </div>

          {resumeUrl && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-[11px] text-gray-600 dark:text-gray-400 hover:text-accent transition-colors shrink-0"
            >
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-[10px]"
              />
              {content.secondaryCta}
            </a>
          )}
        </div>
      </div>

      <div>
        <h1
          className={`font-heading font-bold text-[clamp(1.9rem,3.4vw,2.75rem)] leading-[1.25] tracking-tight text-gray-900 dark:text-white ${reveal(2)}`}
        >
          Hi, I&apos;m {content.firstName}. {content.description}
        </h1>

        <div
          ref={statsRef}
          className={`mt-10 grid grid-cols-2 gap-4 ${reveal(3)}`}
        >
          {content.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border-2 border-border-light dark:border-border-dark p-5 hover:border-accent-border dark:hover:border-accent-border-dark transition-colors duration-300"
            >
              <p className="font-heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                <StatValue value={stat.value} active={statsInView} />
              </p>
              <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}