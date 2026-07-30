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
const FALLBACK_SOFTWARE_DESCRIPTION =
  "I build fast, reliable software, from interactive frontends to scalable backend systems.";
const FALLBACK_DATA_ROLE = "Data Engineer";
const FALLBACK_DATA_DESCRIPTION =
  "I build cloud-native data pipelines, from real-time ETL/ELT workflows to scalable data warehouses.";
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

  const description =
    route === "data"
      ? (settings?.dataHeroDescription ?? FALLBACK_DATA_DESCRIPTION)
      : (settings?.softwareHeroDescription ?? FALLBACK_SOFTWARE_DESCRIPTION);

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

  const reveal = (step: 1 | 2) =>
    shouldAnimate ? `hero-reveal hero-reveal-${step}` : "";

  return (
    <section className="max-w-[1440px] mx-auto px-5 md:px-9 pt-20 pb-10 grid md:grid-cols-[auto_1fr] gap-12 md:gap-16 items-center">
      <div className={`w-full md:w-64 shrink-0 ${reveal(1)}`}>
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

        <div className="mt-4 min-w-0">
          <p className="font-heading font-semibold text-gray-900 dark:text-white truncate">
            {fullName}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-500 mt-0.5">
            {roleLabel}
          </p>
        </div>
      </div>

      <div>
        <h1
          className={`font-hero font-extrabold text-[clamp(2.3rem,4vw,3.5rem)] leading-[1.18] tracking-tight text-gray-900 dark:text-white max-w-2xl ${reveal(2)}`}
        >
          {description}
        </h1>

        <div className={`mt-8 flex items-center gap-5 ${reveal(2)}`}>
          <HeroSocialLink href={github} icon={faGithub} label="GitHub" />
          <HeroSocialLink href={linkedin} icon={faLinkedin} label="LinkedIn" />
          {x && <HeroSocialLink href={x} icon={faXTwitter} label="X" />}
        </div>
      </div>
    </section>
  );
}