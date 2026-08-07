import { useEffect, useState } from "react";
import { sanityClient } from "../data/sanityClient";
import type { Route } from "./useRoute";

export interface Certification {
  _id: string;
  title: string;
  issuer: string;
  badgeImage?: string;
  credentialUrl?: string;
  description?: string;
  issuedDate?: string;
  expiryDate?: string;
  credentialId?: string;
  role: Route[];
}

export function useCertifications(route: Route) {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    async function loadCertifications() {
      setLoading(true);
      try {
        const data = await sanityClient.fetch<Certification[]>(
          `*[_type == "certification" && "${route}" in role] | order(issuedDate desc)`,
        );
        if (ignore) return;
        setCertifications(data);
        setError(null);
      } catch (err) {
        if (ignore) return;
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadCertifications();
    return () => {
      ignore = true;
    };
  }, [route]);

  return { certifications, loading, error };
}
