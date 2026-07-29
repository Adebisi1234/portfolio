import NavLink from "./NavLink";

interface NavLinksDesktopProps {
  links: { href: string; label: string }[];
}

export default function NavLinksDesktop({ links }: NavLinksDesktopProps) {
  return (
    <div className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <NavLink key={link.href} href={link.href} label={link.label} />
      ))}
    </div>
  );
}