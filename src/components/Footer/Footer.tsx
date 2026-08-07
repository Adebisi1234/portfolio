import { useSiteSettings } from "../../hooks/useSiteSettings";

const FALLBACK_LOCATION = "Oyo State, Nigeria";

export default function Footer() {
  const { settings } = useSiteSettings();
  const location = settings?.location ?? FALLBACK_LOCATION;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-light dark:border-border-dark py-6">
      <p className="section-shell text-center text-xs text-gray-600 dark:text-gray-500">
        © {year} Tobiloba Adebisi. Based in {location}.
      </p>
    </footer>
  );
}
