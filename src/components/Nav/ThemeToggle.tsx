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
    <div
      role="group"
      aria-label="Theme"
      className="flex items-center gap-0.5 rounded-full border border-border-light dark:border-border-dark p-1"
    >
      <button
        type="button"
        onClick={() => setDark(false)}
        aria-label="Switch to light mode"
        aria-pressed={!dark}
        className={`w-7 h-7 flex items-center justify-center rounded-full transition-colors ${
          !dark
            ? "bg-card dark:bg-card-dark text-gray-900 dark:text-white"
            : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
        }`}
      >
        <FontAwesomeIcon icon={faSun} size="xs" />
      </button>
      <button
        type="button"
        onClick={() => setDark(true)}
        aria-label="Switch to dark mode"
        aria-pressed={dark}
        className={`w-7 h-7 flex items-center justify-center rounded-full transition-colors ${
          dark
            ? "bg-card dark:bg-card-dark text-gray-900 dark:text-white"
            : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
        }`}
      >
        <FontAwesomeIcon icon={faMoon} size="xs" />
      </button>
    </div>
  );
}