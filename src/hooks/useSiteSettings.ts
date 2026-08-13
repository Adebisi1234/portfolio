import { useEffect, useState } from "react";
import { sanityClient } from "../data/sanityClient";
import { siteSettingsQuery } from "../data/queries";

interface HeroStat {
  value: string;
  label: string;
}

interface SiteSettings {
  name?: string;
  tagline?: string;
  portrait?: { asset?: { url?: string } };
  softwareRoleLabel?: string;
  softwareHeroDescription?: string;
  softwareStats?: HeroStat[];
  softwareAboutBio?: string;
  dataRoleLabel?: string;
  dataHeroDescription?: string;
  dataStats?: HeroStat[];
  dataAboutBio?: string;
  aboutPersonalDetail?: string;
  softwareResume?: { asset?: { url?: string } };
  dataResume?: { asset?: { url?: string } };
  contactEmail?: string;
  softwareContactHeadline?: string;
  dataContactHeadline?: string;
  location?: string;
  phone?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  xUrl?: string;
  certifications?: string[];
}

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    sanityClient
      .fetch<SiteSettings>(
        `${siteSettingsQuery}{
          ...,
          portrait{asset->{url}},
          softwareResume{asset->{url}},
          dataResume{asset->{url}}
        }`,
      )
      .then((data) => {
        if (cancelled) return;
        setSettings(data);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        const message =
          err instanceof Error ? err.message : "Failed to load site settings";
        // Hero/Contact/Nav still fall back to hardcoded copy when `settings`
        // is null, but About no longer does — it renders nothing for a
        // missing field rather than fake placeholder text. Log loudly either
        // way so a CORS/config issue doesn't go unnoticed.
        console.error("useSiteSettings: Sanity fetch failed —", message);
        setError(message);
      })
      .finally(() => {
        if (cancelled) return;
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { settings, loading, error };
}