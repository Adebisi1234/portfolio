import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

interface ThemeToggleProps {
  dark: boolean;
  setDark: (dark: boolean) => void;
  variant?: "compact" | "segmented";
}

export default function ThemeToggle({
  dark,
  setDark,
  variant = "compact",
}: ThemeToggleProps) {
  if (variant === "segmented") {
    return (
      <div>
        <div className="text-[10px] font-mono text-gray-400 dark:text-gray-500 mb-2 tracking-wide">
          APPEARANCE
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setDark(false)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold ${!dark ? "bg-card dark:bg-card-dark text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
          >
            <FontAwesomeIcon icon={faSun} size="xs" /> Light
          </button>
          <button
            type="button"
            onClick={() => setDark(true)}
            className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold ${dark ? "bg-card dark:bg-card-dark text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}
          >
            <FontAwesomeIcon icon={faMoon} size="xs" /> Dark
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setDark(!dark)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="w-8 h-8 flex items-center justify-center rounded-full border border-border-light dark:border-border-dark text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
    >
      <FontAwesomeIcon icon={dark ? faMoon : faSun} size="xs" />
    </button>
  );
}
