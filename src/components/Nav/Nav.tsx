import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useRoute } from "../../hooks/useRoute";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { useSiteSettings } from "../../hooks/useSiteSettings";
import NavBrand from "./NavBrand";
import NavLinksDesktop from "./NavLinksDesktop";
import NavActions from "./NavActions";
import MobileMenuButton from "./MobileMenuButton";
import MobileNavMenu from "./MobileNavMenu";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

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
      <div className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] gap-4 px-5 md:px-9 py-3">
        <NavBrand onClick={scrollToTop} />

        <NavLinksDesktop links={navLinks} />

        <NavActions resumeUrl={resumeUrl} dark={dark} setDark={setDark} />

        <MobileMenuButton
          open={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
      </div>

      {mobileMenuOpen && (
        <MobileNavMenu
          links={navLinks}
          resumeUrl={resumeUrl}
          dark={dark}
          setDark={setDark}
          onLinkClick={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}