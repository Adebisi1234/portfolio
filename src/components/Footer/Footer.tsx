import type { ReactNode } from "react";
import { useRoute } from "../../hooks/useRoute";
import { useSiteSettings } from "../../hooks/useSiteSettings";
import { useInView } from "../../hooks/useInView";
import Skeleton from "../Skeleton";
import CopyEmailPill from "./CopyEmailPill";
import SocialPill from "./SocialPill";

const FALLBACK_LOCATION = "Oyo State, Nigeria";
const FALLBACK_EMAIL = "ti.adebisi@gmail.com";
const FALLBACK_GITHUB = "https://github.com/adebisi1234";
const FALLBACK_LINKEDIN = "https://www.linkedin.com/in/tobiloba-adebisi";

export default function Footer() {
  const { route } = useRoute();
  const { settings, loading } = useSiteSettings();
  const { ref: stackRef, inView: stackInView } = useInView<HTMLDivElement>();

  const year = new Date().getFullYear();

  if (loading) {
    return (
      <footer
        id="contact"
        className="border-t border-border-light dark:border-border-dark"
      >
        <div className="section-shell py-24">
          <Skeleton className="h-64" />
        </div>
      </footer>
    );
  }

  const resumeUrl =
    route === "data"
      ? settings?.dataResume?.asset?.url
      : settings?.softwareResume?.asset?.url;

  const email = settings?.contactEmail ?? FALLBACK_EMAIL;
  const location = settings?.location ?? FALLBACK_LOCATION;
  const github = settings?.githubUrl ?? FALLBACK_GITHUB;
  const linkedin = settings?.linkedinUrl ?? FALLBACK_LINKEDIN;
  const x = settings?.xUrl;

  const pills: { key: string; node: ReactNode }[] = [
    { key: "copy", node: <CopyEmailPill email={email} /> },
    { key: "github", node: <SocialPill href={github} label="GitHub" /> },
    { key: "linkedin", node: <SocialPill href={linkedin} label="LinkedIn" /> },
    ...(x ? [{ key: "x", node: <SocialPill href={x} label="X" /> }] : []),
    ...(resumeUrl
      ? [
          {
            key: "resume",
            node: <SocialPill href={resumeUrl} label="Resume" accent />,
          },
        ]
      : []),
  ];

  return (
    <footer
      id="contact"
      className="border-t border-border-light dark:border-border-dark"
    >
      <div
        ref={stackRef}
        className={`section-shell py-20 md:py-28 text-center scroll-reveal ${
          stackInView ? "in-view" : ""
        }`}
      >
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4">
          Say hi or talk about your next project
        </p>

        <a
          href={`mailto:${email}`}
          className="font-hero font-extrabold text-[clamp(1.8rem,5vw,3.25rem)] tracking-tight text-gray-900 dark:text-white hover:text-accent dark:hover:text-accent-dark transition-colors break-all"
        >
          {email}
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {pills.map((pill, i) => (
            <span
              key={pill.key}
              className={`inline-block scroll-reveal ${stackInView ? "in-view" : ""}`}
              style={{
                animationDelay: stackInView ? `${200 + i * 60}ms` : undefined,
              }}
            >
              {pill.node}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-border-light dark:border-border-dark py-6">
        <p className="section-shell text-center text-xs text-gray-500 dark:text-gray-500">
          © {year} Tobiloba Adebisi. Based in {location}.
        </p>
      </div>
    </footer>
  );
}