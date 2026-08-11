interface NavLinkProps {
  href: string;
  label: string;
  variant?: "desktop" | "mobile";
  active?: boolean;
  onClick?: () => void;
}

export default function NavLink({
  href,
  label,
  variant = "desktop",
  active = false,
  onClick,
}: NavLinkProps) {
  if (variant === "mobile") {
    return (
      <a
        href={href}
        onClick={onClick}
        className={`text-sm font-semibold uppercase tracking-[0.1em] transition-colors ${
          active
            ? "text-accent dark:text-accent-dark"
            : "text-gray-700 dark:text-gray-300"
        }`}
      >
        {label}
      </a>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
        active
          ? "text-accent dark:text-accent-dark"
          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
      }`}
    >
      {label}
      <span
        className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-current transition-transform duration-300 ease-out ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </a>
  );
}
