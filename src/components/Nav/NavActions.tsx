import ResumeLink from "./ResumeLink";
import ThemeToggle from "./ThemeToggle";

interface NavActionsProps {
  resumeUrl?: string;
  dark: boolean;
  setDark: (dark: boolean) => void;
}

export default function NavActions({
  resumeUrl,
  dark,
  setDark,
}: NavActionsProps) {
  return (
    <div className="hidden md:flex items-center gap-4 justify-self-end">
      <ResumeLink href={resumeUrl} />
      <ThemeToggle dark={dark} setDark={setDark} />
    </div>
  );
}