import { useRoute } from "../../hooks/useRoute";
import { useSiteSettings } from "../../hooks/useSiteSettings";

const FALLBACK_NAME = "Tobiloba Adebisi";
const FALLBACK_SOFTWARE_ROLE = "Software Engineer";
const FALLBACK_DATA_ROLE = "Data Engineer";

export default function Hero() {
  const { route } = useRoute();
  const { settings } = useSiteSettings();

  const fullName = settings?.name ?? FALLBACK_NAME;

  const roleLabel =
    route === "data"
      ? (settings?.dataRoleLabel ?? FALLBACK_DATA_ROLE)
      : (settings?.softwareRoleLabel ?? FALLBACK_SOFTWARE_ROLE);

  return (
    <section className="section-shell flex min-h-[calc(100svh-4.25rem)] flex-col items-center justify-end pt-12 pb-24 text-center md:pb-32">
      <h1 className="hero-reveal hero-reveal-1 font-hero font-extrabold leading-[0.85] tracking-tight whitespace-nowrap text-[clamp(3.25rem,11.5vw,9rem)] text-gray-900 dark:text-white">
        {fullName}
      </h1>
      <div className="hero-reveal hero-reveal-2 mt-6 flex items-center justify-center gap-4">
        <span className="h-px w-8 bg-accent dark:bg-accent-dark md:w-12" />
        <p className="font-mono text-sm uppercase tracking-[0.25em] text-accent dark:text-accent-dark md:text-base">
          {roleLabel}
        </p>
        <span className="h-px w-8 bg-accent dark:bg-accent-dark md:w-12" />
      </div>
    </section>
  );
}
