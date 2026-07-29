import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

interface MobileMenuButtonProps {
  open: boolean;
  onClick: () => void;
}

export default function MobileMenuButton({
  open,
  onClick,
}: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-label="Open menu"
      className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-border-light dark:border-border-dark text-gray-600 dark:text-gray-400"
    >
      <FontAwesomeIcon icon={open ? faXmark : faBars} size="sm" />
    </button>
  );
}