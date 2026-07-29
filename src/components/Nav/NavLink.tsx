interface NavLinkProps {
  href: string;
  label: string;
  variant?: "desktop" | "mobile";
  onClick?: () => void;
}

export default function NavLink({
  href,
  label,
  variant = "desktop",
  onClick,
}: NavLinkProps) {
  if (variant === "mobile") {
    return (
      <a
        href={href}
        onClick={onClick}
        className="text-sm font-semibold uppercase tracking-[0.1em] text-gray-700 dark:text-gray-300"
      >
        {label}
      </a>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative text-xs font-semibold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      {label}
      <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </a>
  );
}