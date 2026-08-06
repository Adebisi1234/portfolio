import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useRoute } from "../hooks/useRoute";
import { useHeroAnimation } from "../hooks/useHeroAnimation";
import { useSiteSettings } from "../hooks/useSiteSettings";
import { urlFor } from "../data/imageUrl";

const FALLBACK_NAME = "Tobiloba Isaiah Adebisi";
const FALLBACK_SOFTWARE_ROLE = "Software Engineer";
const FALLBACK_DATA_ROLE = "Data Engineer";
const FALLBACK_YEARS_ACTIVE = "6+";
const FALLBACK_LOCATION = "Oyo State, Nigeria";
const FALLBACK_GITHUB = "https://github.com/adebisi1234";
const FALLBACK_LINKEDIN = "https://www.linkedin.com/in/tobiloba-adebisi";

function HeroSocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: IconDefinition;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="text-lg text-gray-500 dark:text-gray-500 hover:text-accent dark:hover:text-accent-dark transition-colors"
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

export default function Hero() {
  const { route } = useRoute();
  const shouldAnimate = useHeroAnimation();
  const { settings } = useSiteSettings();

  const fullName = settings?.name ?? FALLBACK_NAME;

  const roleLabel =
    route === "data"
      ? (settings?.dataRoleLabel ?? FALLBACK_DATA_ROLE)
      : (settings?.softwareRoleLabel ?? FALLBACK_SOFTWARE_ROLE);

  const stats = route === "data" ? settings?.dataStats : settings?.softwareStats;
  const yearsStat = stats?.find((stat) => /year/i.test(stat.label));
  const yearsActive = yearsStat?.value ?? stats?.[0]?.value ?? FALLBACK_YEARS_ACTIVE;
  const location = settings?.location ?? FALLBACK_LOCATION;

  const portraitUrl = settings?.portrait
    ? urlFor(settings.portrait)
        .width(800)
        .height(1000)
        .fit("crop")
        .auto("format")
        .url()
    : null;

  const github = settings?.githubUrl ?? FALLBACK_GITHUB;
  const linkedin = settings?.linkedinUrl ?? FALLBACK_LINKEDIN;
  const x = settings?.xUrl;

  const reveal = (step: 1 | 2 | 3) =>
    shouldAnimate ? `hero-reveal hero-reveal-${step}` : "";

  return (
    <section className="section-shell pt-20 pb-14">
      <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-10">
        <div className={`min-w-0 ${reveal(1)}`}>
          <h1 className="font-hero font-extrabold text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] tracking-tight text-gray-900 dark:text-white">
            {fullName}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400">
            {roleLabel}
          </p>

          <div className="mt-6 flex items-center gap-5">
            <HeroSocialLink href={github} icon={faGithub} label="GitHub" />
            <HeroSocialLink href={linkedin} icon={faLinkedin} label="LinkedIn" />
            {x && <HeroSocialLink href={x} icon={faXTwitter} label="X" />}
          </div>
        </div>

        <div className={`w-40 md:w-52 shrink-0 ${reveal(2)}`}>
          <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-border-light dark:border-border-dark bg-card dark:bg-card-dark hover:border-accent-border dark:hover:border-accent-border-dark transition-colors duration-300">
            {portraitUrl ? (
              <img
                src={portraitUrl}
                alt={fullName}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full" />
            )}
          </div>
        </div>
      </div>

      <div
        className={`mt-12 pt-6 border-t border-border-light dark:border-border-dark flex flex-wrap gap-10 ${reveal(3)}`}
      >
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-500 mb-1">
            Years active
          </p>
          <p className="font-heading font-semibold text-lg text-gray-900 dark:text-white">
            {yearsActive}
          </p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-500 mb-1">
            Based in
          </p>
          <p className="font-heading font-semibold text-lg text-gray-900 dark:text-white">
            {location}
          </p>
        </div>
      </div>
    </section>
  );
}