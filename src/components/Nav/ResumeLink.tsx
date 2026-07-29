interface ResumeLinkProps {
  href?: string;
  variant?: "desktop" | "mobile";
  onClick?: () => void;
}

export default function ResumeLink({
  href,
  variant = "desktop",
  onClick,
}: ResumeLinkProps) {
  const sizeClasses =
    variant === "mobile"
      ? "px-4 py-2.5 text-center"
      : "px-5 py-2 hover:opacity-90 transition-opacity";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      className={`text-sm font-semibold text-white bg-accent rounded-lg ${sizeClasses}`}
    >
      Resume
    </a>
  );
}