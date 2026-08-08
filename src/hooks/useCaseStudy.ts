import { useEffect, useState } from "react";
import { sanityClient } from "../data/sanityClient";
import { projectBySlug } from "../data/queries";
import type { Project, Role } from "../types";

interface UseCaseStudyResult {
  project: Project | null;
  loading: boolean;
  error: string | null;
}

export function useCaseStudy(
  role: Role,
  slug: string | undefined,
): UseCaseStudyResult {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    async function loadProject() {
      if (!slug) {
        if (!ignore) {
          setProject(null);
          setError(null);
          setLoading(false);
        }
        return;
      }

      setLoading(true);
      try {
        const data = await sanityClient.fetch<Project | null>(
          projectBySlug(role, slug),
        );
        if (ignore) return;
        setProject(data);
        setError(null);
      } catch (err) {
        if (ignore) return;
        setError(
          err instanceof Error ? err.message : "Failed to load case study",
        );
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadProject();
    return () => {
      ignore = true;
    };
  }, [role, slug]);

  return { project, loading, error };
}