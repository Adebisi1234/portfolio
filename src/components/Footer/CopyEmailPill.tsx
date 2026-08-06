import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";

interface CopyEmailPillProps {
  email: string;
}

export default function CopyEmailPill({ email }: CopyEmailPillProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable or blocked, fail silently.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="relative h-10 px-5 rounded-full border-2 border-border-light dark:border-border-dark text-sm font-semibold text-gray-900 dark:text-white hover:border-accent-border dark:hover:border-accent-border-dark transition-colors overflow-hidden"
    >
      <span
        className={`flex items-center gap-2 transition-all duration-300 ${
          copied ? "-translate-y-5 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <FontAwesomeIcon icon={faCopy} className="text-xs" />
        Copy email
      </span>
      <span
        className={`absolute inset-0 flex items-center justify-center gap-2 text-accent transition-all duration-300 ${
          copied ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        <FontAwesomeIcon icon={faCheck} className="text-xs" />
        Copied
      </span>
    </button>
  );
}