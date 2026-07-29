interface NavBrandProps {
  onClick: () => void;
}

export default function NavBrand({ onClick }: NavBrandProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Scroll to top"
      className="font-hero text-2xl font-extrabold tracking-tight md:justify-self-start"
    >
      TA
    </button>
  );
}