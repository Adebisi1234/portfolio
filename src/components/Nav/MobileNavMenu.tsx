import NavLink from "./NavLink";
import ResumeLink from "./ResumeLink";
import ThemeToggle from "./ThemeToggle";

interface MobileNavMenuProps {
  links: { href: string; label: string }[];
  activeHref?: string;
  resumeUrl?: string;
  dark: boolean;
  setDark: (dark: boolean) => void;
  onLinkClick: () => void;
}

export default function MobileNavMenu({
  links,
  activeHref,
  resumeUrl,
  dark,
  setDark,
  onLinkClick,
}: MobileNavMenuProps) {
  return (
    <div className="md:hidden border-t border-border-light dark:border-border-dark px-5 py-5 flex flex-col gap-5">
      {links.map((link) => (
        <NavLink
          key={link.href}
          href={link.href}
          label={link.label}
          variant="mobile"
          active={link.href === activeHref}
          onClick={onLinkClick}
        />
      ))}

      <ResumeLink href={resumeUrl} variant="mobile" onClick={onLinkClick} />

      <div className="pt-2 border-t border-border-light dark:border-border-dark">
        <ThemeToggle dark={dark} setDark={setDark} variant="segmented" />
      </div>
    </div>
  );
}
