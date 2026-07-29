import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../hooks/useTheme";
import { useRoute } from "../hooks/useRoute";
import { useEscapeKey } from "../hooks/useEscapeKey";
import { useSiteSettings } from "../hooks/useSiteSettings";

export default function Nav() {
  const { route } = useRoute();
  const { dark, setDark } = useTheme();
  const { settings } = useSiteSettings();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEscapeKey(() => {
    setMobileMenuOpen(false);
  });

  const resumeUrl =
    route === "data"
      ? settings?.dataResume?.asset?.url
      : settings?.softwareResume?.asset?.url;

  const scrollToTop = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-30 border-b border-border-light dark:border-border-dark bg-surface/90 dark:bg-surface-dark/90 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 px-5 md:px-9 py-3">
        <button
          type="button"
          onClick={scrollToTop}
          className="font-hero text-2xl font-extrabold tracking-tight"
        >
          TA
        </button>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="#work"
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Contact
          </a>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-white bg-accent px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Resume
          </a>

          <button
            onClick={() => setDark(!dark)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border-light dark:border-border-dark text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
          >
            <FontAwesomeIcon icon={dark ? faSun : faMoon} size="sm" />
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Open menu"
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-border-light dark:border-border-dark text-gray-600 dark:text-gray-400"
        >
          <FontAwesomeIcon icon={mobileMenuOpen ? faXmark : faBars} size="sm" />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border-light dark:border-border-dark px-5 py-5 flex flex-col gap-5">
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Work
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Contact
          </a>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold text-white bg-accent px-4 py-2.5 rounded-lg text-center"
          >
            Resume
          </a>

          <div className="pt-2 border-t border-border-light dark:border-border-dark">
            <div className="text-[10px] font-mono text-gray-400 dark:text-gray-500 mb-2 tracking-wide">
              APPEARANCE
            </div>
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setDark(false)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold ${!dark ? "bg-card dark:bg-card-dark text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
              >
                <FontAwesomeIcon icon={faSun} size="xs" /> Light
              </button>
              <button
                onClick={() => setDark(true)}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold ${dark ? "bg-card dark:bg-card-dark text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
              >
                <FontAwesomeIcon icon={faMoon} size="xs" /> Dark
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
