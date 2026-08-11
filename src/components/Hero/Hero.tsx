import { useEffect, useRef } from "react";
import { useRoute } from "../../hooks/useRoute";
import { useSiteSettings } from "../../hooks/useSiteSettings";
import { gsap, SplitText } from "../../lib/gsap";

const FALLBACK_NAME = "Tobiloba Adebisi";
const FALLBACK_SOFTWARE_ROLE = "Software Engineer";
const FALLBACK_DATA_ROLE = "Data Engineer";

export default function Hero() {
  const { route } = useRoute();
  const { settings } = useSiteSettings();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const roleRowRef = useRef<HTMLDivElement>(null);

  const fullName = settings?.name ?? FALLBACK_NAME;

  const roleLabel =
    route === "data"
      ? (settings?.dataRoleLabel ?? FALLBACK_DATA_ROLE)
      : (settings?.softwareRoleLabel ?? FALLBACK_SOFTWARE_ROLE);

  useEffect(() => {
    const heading = headingRef.current;
    const roleRow = roleRowRef.current;
    if (!heading || !roleRow) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      gsap.set(heading, { opacity: 1 });
      gsap.set(roleRow, { opacity: 1, y: 0 });
      const lines = roleRow.querySelectorAll<HTMLElement>(".hero-rule");
      gsap.set(lines, { scaleX: 1 });
      return;
    }

    const split = SplitText.create(heading, {
      type: "chars",
      charsClass: "hero-char",
    });

    gsap.set(heading, { opacity: 1 });
    gsap.set(roleRow, { opacity: 0, y: 16 });

    const lines = roleRow.querySelectorAll<HTMLElement>(".hero-rule");
    gsap.set(lines, { scaleX: 0 });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(split.chars, {
      yPercent: 110,
      opacity: 0,
      duration: 0.85,
      stagger: 0.025,
    })
      .to(roleRow, { opacity: 1, y: 0, duration: 0.6 }, "-=0.35")
      .to(lines, { scaleX: 1, duration: 0.5, ease: "power2.inOut" }, "-=0.4");

    return () => {
      tl.kill();
      split.revert();
    };
  }, [fullName, roleLabel]);

  return (
    <section className="section-shell flex min-h-[calc(100svh-4.25rem)] flex-col items-center justify-end pt-12 pb-24 text-center md:pb-32">
      <h1
        ref={headingRef}
        className="font-hero font-extrabold leading-[0.85] tracking-tight whitespace-nowrap text-[clamp(3.25rem,11.5vw,9rem)] text-gray-900 opacity-0 dark:text-white"
      >
        {fullName}
      </h1>
      <div
        ref={roleRowRef}
        className="mt-6 flex items-center justify-center gap-4"
      >
        <span className="hero-rule h-px w-8 origin-center bg-accent dark:bg-accent-dark md:w-12" />
        <p className="font-mono text-sm uppercase tracking-[0.25em] text-accent dark:text-accent-dark md:text-base">
          {roleLabel}
        </p>
        <span className="hero-rule h-px w-8 origin-center bg-accent dark:bg-accent-dark md:w-12" />
      </div>
    </section>
  );
}
