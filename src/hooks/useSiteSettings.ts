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
  softwareContactAvailability?: string;
  dataContactAvailability?: string;
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

  useEffect(() => {
    sanityClient
      .fetch<SiteSettings>(
        `${siteSettingsQuery}{
          ...,
          portrait{asset->{url}},
          softwareResume{asset->{url}},
          dataResume{asset->{url}}
        }`,
      )
      .then(setSettings)
      .finally(() => setLoading(false));
  }, []);

  return { settings, loading };
}