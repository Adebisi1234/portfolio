interface SocialPillProps {
  href: string;
  label: string;
  accent?: boolean;
}

export default function SocialPill({ href, label, accent }: SocialPillProps) {
  const baseClasses =
    "h-10 px-5 rounded-full text-sm font-semibold transition-colors flex items-center";

  const styleClasses = accent
    ? "bg-accent text-white hover:opacity-90"
    : "border-2 border-border-light dark:border-border-dark text-gray-900 dark:text-white hover:border-accent-border dark:hover:border-accent-border-dark";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${baseClasses} ${styleClasses}`}
    >
      {label}
    </a>
  );
}
