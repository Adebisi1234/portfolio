import { useEffect, useState } from "react";
import { sanityClient } from "../data/sanityClient";
import { experienceByRole } from "../data/queries";
import type { Experience } from "../types";
import type { Route } from "./useRoute";

export function useExperience(route: Route) {
  const [experience, setExperience] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    async function loadExperience() {
      setLoading(true);
      try {
        const data = await sanityClient.fetch<Experience[]>(
          experienceByRole(route),
        );
        if (ignore) return;
        setExperience(data);
        setError(null);
      } catch (err) {
        if (ignore) return;
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadExperience();
    return () => {
      ignore = true;
    };
  }, [route]);

  return { experience, loading, error };
}
