import { useRoute } from "../hooks/useRoute";
import { useProjects } from "../hooks/useProjects";
import ProjectCard from "./ProjectCard";
import Skeleton from "./Skeleton";
import ErrorState from "./ErrorState";

export default function ProjectsGrid() {
  const { route } = useRoute();
  const { projects, loading, error } = useProjects(route);

  return (
    <section id="work" className="section-shell py-20">
      <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-10">
        Projects
      </h2>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {[0, 1, 2, 3].map((i) => (
            <Skeleton key={i} className="aspect-video" />
          ))}
        </div>
      )}

      {!loading && error && <ErrorState resource="projects" />}

      {!loading && !error && projects.length === 0 && (
        <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
          No projects added yet.
        </p>
      )}

      {!loading && !error && projects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
