import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faDownload,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useRoute } from "../hooks/useRoute";
import { useSiteSettings } from "../hooks/useSiteSettings";
import { useInView } from "../hooks/useInView";
import Skeleton from "./Skeleton";

const FALLBACK_LOCATION = "Oyo State, Nigeria";
const FALLBACK_PHONE = "+234 811 477 9597";
const FALLBACK_EMAIL = "ti.adebisi@gmail.com";
const FALLBACK_GITHUB = "https://github.com/adebisi1234";
const FALLBACK_LINKEDIN = "https://www.linkedin.com/in/tobiloba-adebisi";

interface InfoItem {
  icon: IconDefinition;
  label: string;
  value: string;
  href?: string;
}

function InfoCard({ item, delay }: { item: InfoItem; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();

  const inner = (
    <>
      <FontAwesomeIcon
        icon={item.icon}
        className="text-base text-gray-400 dark:text-gray-600 group-hover:text-accent transition-colors"
      />
      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-500">
          {item.label}
        </p>
        <p className="text-sm text-gray-900 dark:text-white truncate">
          {item.value}
        </p>
      </div>
    </>
  );

  return (
    <div
      ref={ref}
      style={{ animationDelay: inView ? `${delay}ms` : undefined }}
      className={`scroll-reveal ${inView ? "in-view" : ""}`}
    >
      {item.href ? (
         <a
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
          className="group flex items-center gap-3 rounded-2xl border-2 border-border-light dark:border-border-dark hover:border-accent-border dark:hover:border-accent-border-dark p-5 transition-colors duration-300"
        >
          {inner}
        </a>
      ) : (
        <div className="group flex items-center gap-3 rounded-2xl border-2 border-border-light dark:border-border-dark p-5 transition-colors duration-300">
          {inner}
        </div>
      )}
    </div>
  );
}

function SocialButton({
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
      className="w-11 h-11 flex items-center justify-center rounded-full border-2 border-border-light dark:border-border-dark text-gray-600 dark:text-gray-400 hover:border-accent-border dark:hover:border-accent-border-dark hover:text-accent transition-colors"
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}

export default function Contact() {
  const { route } = useRoute();
  const { settings, loading } = useSiteSettings();

  if (loading) {
    return (
      <section
        id="contact"
        className="max-w-[1440px] mx-auto px-5 md:px-9 py-28"
      >
        <Skeleton className="h-96" />
      </section>
    );
  }

  const resumeUrl =
    route === "data"
      ? settings?.dataResume?.asset?.url
      : settings?.softwareResume?.asset?.url;

  const email = settings?.contactEmail ?? FALLBACK_EMAIL;
  const phone = settings?.phone ?? FALLBACK_PHONE;
  const location = settings?.location ?? FALLBACK_LOCATION;
  const github = settings?.githubUrl ?? FALLBACK_GITHUB;
  const linkedin = settings?.linkedinUrl ?? FALLBACK_LINKEDIN;
  const x = settings?.xUrl;

  const infoItems: InfoItem[] = [
    { icon: faLocationDot, label: "Location", value: location },
    {
      icon: faPhone,
      label: "Phone",
      value: phone,
      href: `tel:${phone.replace(/\s+/g, "")}`,
    },
    {
      icon: faEnvelope,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
    },
  ];

  return (
    <section id="contact" className="max-w-[1440px] mx-auto px-5 md:px-9 py-28">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 md:gap-10">
        <div className="rounded-2xl border-2 border-border-light dark:border-border-dark p-8 md:p-10 flex flex-col justify-center">
          <h2 className="font-heading flex items-center gap-2.5 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="text-2xl text-gray-400 dark:text-gray-600"
            />
            Let's build something together
          </h2>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
            Open to software and data engineering roles, freelance work, and
            interesting problems worth solving.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
             <a
              href={`mailto:${email}`}
              className="text-sm font-semibold text-white bg-accent px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Email me
            </a>
            {resumeUrl && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white border-2 border-border-light dark:border-border-dark px-6 py-3 rounded-lg hover:border-accent-border dark:hover:border-accent-border-dark transition-colors"
              >
                <FontAwesomeIcon icon={faDownload} className="text-xs" />
                Resume
              </a>
            )}
          </div>

          <div className="mt-8 flex items-center gap-3">
            <SocialButton href={github} icon={faGithub} label="GitHub" />
            <SocialButton href={linkedin} icon={faLinkedin} label="LinkedIn" />
            {x && <SocialButton href={x} icon={faXTwitter} label="X" />}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 content-start">
          {infoItems.map((item, i) => (
            <InfoCard
              key={item.label}
              item={item}
              delay={Math.min(i * 80, 320)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}