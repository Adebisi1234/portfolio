import { useEffect, useState } from "react";
import { sanityClient } from "../data/sanityClient";
import { skillsByRole } from "../data/queries";
import type { Skill } from "../types";
import type { Route } from "./useRoute";

export function useSkills(route: Route) {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    async function loadSkills() {
      setLoading(true);
      try {
        const data = await sanityClient.fetch<Skill[]>(skillsByRole(route));
        if (ignore) return;
        setSkills(data);
        setError(null);
      } catch (err) {
        if (ignore) return;
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadSkills();
    return () => {
      ignore = true;
    };
  }, [route]);

  return { skills, loading, error };
}
