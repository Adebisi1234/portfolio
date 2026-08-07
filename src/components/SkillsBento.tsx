import { useRoute } from "../hooks/useRoute";
import { useSkills } from "../hooks/useSkills";
import { useInView } from "../hooks/useInView";
import Skeleton from "./Skeleton";
import ErrorState from "./ErrorState";

function SkillCard({
  category,
  names,
  delay,
}: {
  category: string;
  names: string[];
  delay: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ animationDelay: inView ? `${delay}ms` : undefined }}
      className={`break-inside-avoid mb-5 rounded-2xl border-2 border-border-light dark:border-border-dark bg-card dark:bg-card-dark p-5 flex flex-col scroll-reveal ${inView ? "in-view" : ""}`}
    >
      <h3 className="font-heading text-sm font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2 content-start">
        {names.map((name) => (
          <span
            key={name}
            className="font-mono text-[10px] uppercase tracking-wide px-2.5 py-1.5 rounded-lg border border-border-light dark:border-border-dark text-gray-600 dark:text-gray-400"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsBento() {
  const { route } = useRoute();
  const { skills, loading, error } = useSkills(route);

  const grouped = skills.reduce<Record<string, string[]>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  const categories = Object.entries(grouped).sort(
    (a, b) => b[1].length - a[1].length,
  );

  return (
    <section id="skills" className="section-shell py-20">
      <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-10">
        Skills
      </h2>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[8rem]">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} />
          ))}
        </div>
      )}

      {!loading && error && <ErrorState resource="skills" />}

      {!loading && !error && categories.length > 0 && (
        <div className="columns-1 sm:columns-2 xl:columns-3 gap-5">
          {categories.map(([category, names], i) => (
            <SkillCard
              key={category}
              category={category}
              names={names}
              delay={Math.min(i * 80, 320)}
            />
          ))}
        </div>
      )}
    </section>
  );
}