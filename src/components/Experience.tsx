import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { useRoute } from "../hooks/useRoute";
import { useExperience } from "../hooks/useExperience";
import { useInView } from "../hooks/useInView";
import type { Experience as ExperienceEntry } from "../types";
import Skeleton from "./Skeleton";

function formatDate(dateStr?: string) {
  if (!dateStr) return "Present";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

function ExperienceRow({
  entry,
  delay,
  isLast,
}: {
  entry: ExperienceEntry;
  delay: number;
  isLast: boolean;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ animationDelay: inView ? `${delay}ms` : undefined }}
      className={`flex items-baseline justify-between gap-4 flex-wrap py-5 scroll-reveal ${inView ? "in-view" : ""} ${
        isLast ? "" : "border-b border-border-light dark:border-border-dark"
      }`}
    >
      <div>
        <h3 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">
          {entry.company}
        </h3>
        {entry.title && (
          <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
            {entry.title}
          </p>
        )}
      </div>
      <span className="font-mono text-[11px] text-gray-500 dark:text-gray-500 whitespace-nowrap">
        {formatDate(entry.startDate)} — {formatDate(entry.endDate)}
      </span>
    </div>
  );
}

export default function Experience() {
  const { route } = useRoute();
  const { experience, loading, error } = useExperience(route);

  if (!loading && !error && experience.length === 0) return null;

  return (
    <section
      id="experience"
      className="max-w-[1440px] mx-auto px-5 md:px-9 py-20"
    >
      <h2 className="flex items-center justify-end gap-2.5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-10 text-right">
        <FontAwesomeIcon
          icon={faBuildingColumns}
          className="text-2xl text-gray-400 dark:text-gray-600"
        />
        Experience
      </h2>

      {loading && (
        <div className="flex flex-col gap-4">
          {[0, 1].map((i) => (
            <Skeleton key={i} className="h-16" />
          ))}
        </div>
      )}

      {!loading && error && (
        <p className="font-mono text-sm text-gray-500 dark:text-gray-400">
          Couldn't load experience right now, {error}.
        </p>
      )}

      {!loading && !error && experience.length > 0 && (
        <div>
          {experience.map((entry, i) => (
            <ExperienceRow
              key={entry._id}
              entry={entry}
              delay={Math.min(i * 80, 320)}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      )}
    </section>
  );
}