import type { Route } from "../hooks/useRoute";

interface HeroStat {
  value: string;
  label: string;
}

interface HeroContent {
  firstName: string;
  fullName: string;
  role: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  stats: HeroStat[];
}

// NOTE: stat values below are placeholders. Swap in real figures before
// this ships.
const heroContent: Record<Route, HeroContent> = {
  software: {
    firstName: "Tobiloba",
    fullName: "Tobiloba Isaiah Adebisi",
    role: "Software Engineer",
    description:
      "Building fast, reliable web applications, from real time collaboration tools to production backend systems.",
    primaryCta: "View projects",
    secondaryCta: "Resume",
    stats: [
      { value: "3+", label: "Years experience" },
      { value: "12+", label: "Projects shipped" },
      { value: "20+", label: "Production deploys" },
      { value: "4", label: "AWS certifications" },
    ],
  },
  data: {
    firstName: "Tobiloba",
    fullName: "Tobiloba Isaiah Adebisi",
    role: "Data Engineer",
    description:
      "Designing serverless pipelines and streaming systems that turn raw data into decisions.",
    primaryCta: "View projects",
    secondaryCta: "Resume",
    stats: [
      { value: "3+", label: "Years experience" },
      { value: "8+", label: "Pipelines built" },
      { value: "5+", label: "Streaming systems" },
      { value: "4", label: "AWS certifications" },
    ],
  },
};

export function getHeroContent(route: Route): HeroContent {
  return heroContent[route];
}