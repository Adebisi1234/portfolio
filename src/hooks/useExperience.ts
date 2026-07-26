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
    setLoading(true);
    sanityClient
      .fetch<Experience[]>(experienceByRole(route))
      .then((data) => {
        setExperience(data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [route]);

  return { experience, loading, error };
}