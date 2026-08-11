import { useEffect, useRef } from "react";
import { useRoute } from "../../hooks/useRoute";
import { useSiteSettings } from "../../hooks/useSiteSettings";
import { gsap } from "../../lib/gsap";

const FALLBACK_NAME = "Tobiloba Adebisi";
const FALLBACK_SOFTWARE_ROLE = "Software Engineer";
const FALLBACK_DATA_ROLE = "Data Engineer";

export default function Hero() {
  const { route } = useRoute();
  const { settings } = useSiteSettings();
  const maskRef = useRef<HTMLHeadingElement>(null);
  const nameInnerRef = useRef<HTMLSpanElement>(null);
  const roleRowRef = useRef<HTMLDivElement>(null);

  const fullName = settings?.name ?? FALLBACK_NAME;

  const roleLabel =
    route === "data"
      ? (settings?.dataRoleLabel ?? FALLBACK_DATA_ROLE)
      : (settings?.softwareRoleLabel ?? FALLBACK_SOFTWARE_ROLE);

  useEffect(() => {
    const mask = maskRef.current;
    const nameInner = nameInnerRef.current;
    const roleRow = roleRowRef.current;
    if (!mask || !nameInner || !roleRow) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let tl: gsap.core.Timeline | null = null;
    let cancelled = false;

    const play = () => {
      if (cancelled) return;

      const lines = roleRow.querySelectorAll<HTMLElement>(".hero-rule");

      if (reduceMotion) {
        gsap.set(mask, { opacity: 1 });
        gsap.set(nameInner, { yPercent: 0 });
        gsap.set(roleRow, { opacity: 1, y: 0 });
        gsap.set(lines, { scaleX: 1 });
        return;
      }

      // The name slides up as a single solid block inside the overflow-hidden
      // mask (no per-character split) — reads as one deliberate reveal rather
      // than the text "typing itself out".
      gsap.set(mask, { opacity: 1 });
      gsap.set(nameInner, { yPercent: 110 });
      gsap.set(roleRow, { opacity: 0, y: 16 });
      gsap.set(lines, { scaleX: 0 });

      tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.to(nameInner, { yPercent: 0, duration: 0.9 })
        .to(roleRow, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .to(
          lines,
          { scaleX: 1, duration: 0.5, ease: "power2.inOut" },
          "-=0.4",
        );
    };

    // Wait for webfonts to finish loading (and swapping in) before revealing
    // the heading, so the mask animation isn't running against fallback-font
    // metrics that then jump when the real font swaps in mid-animation.
    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(() => {
        requestAnimationFrame(play);
      });
    } else {
      play();
    }

    return () => {
      cancelled = true;
      tl?.kill();
    };
    // Intentionally mount-only: `fullName`/`roleLabel` start as fallback
    // text and get swapped in-place once the async Sanity fetch in
    // useSiteSettings resolves. The JSX below already reflects that update
    // reactively — re-running this effect on that change would replay the
    // whole entrance (including the role row) a second time.
  }, []);

  return (
    <section className="section-shell flex min-h-[calc(100svh-4.25rem)] flex-col items-center justify-end pt-12 pb-24 text-center md:pb-32">
      <h1
        ref={maskRef}
        className="overflow-hidden pb-[0.1em] opacity-0"
        style={{ marginBottom: "-0.1em" }}
      >
        <span
          ref={nameInnerRef}
          className="font-hero inline-block font-extrabold leading-[0.85] tracking-tight whitespace-nowrap text-[clamp(3.25rem,11.5vw,9rem)] text-gray-900 dark:text-white"
        >
          {fullName}
        </span>
      </h1>
      <div
        ref={roleRowRef}
        className="mt-6 flex items-center justify-center gap-4 opacity-0"
      >
        <span className="hero-rule h-px w-8 origin-center scale-x-0 bg-accent dark:bg-accent-dark md:w-12" />
        <p className="font-mono text-sm uppercase tracking-[0.25em] text-accent dark:text-accent-dark md:text-base">
          {roleLabel}
        </p>
        <span className="hero-rule h-px w-8 origin-center scale-x-0 bg-accent dark:bg-accent-dark md:w-12" />
      </div>
    </section>
  );
}