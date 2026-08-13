import { useRoute } from "../../hooks/useRoute";
import { useSiteSettings } from "../../hooks/useSiteSettings";
import { useInView } from "../../hooks/useInView";
import { urlFor } from "../../data/imageUrl";
import Skeleton from "../Skeleton";
import ErrorState from "../ErrorState";

export default function About() {
  const { route } = useRoute();
  const { settings, loading, error } = useSiteSettings();
  const { ref, inView } = useInView<HTMLDivElement>();

  const fullName = settings?.name;

  const bio = route === "data" ? settings?.dataAboutBio : settings?.softwareAboutBio;

  const personalDetail = settings?.aboutPersonalDetail;

  const portraitUrl = settings?.portrait
    ? urlFor(settings.portrait)
        .width(800)
        .height(1000)
        .fit("crop")
        .auto("format")
        .url()
    : null;

  return (
    <section id="about" className="section-shell py-20">
      <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-10">
        About
      </h2>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-[0.55fr_1fr] gap-10 md:gap-16 items-center">
          <Skeleton className="aspect-[4/5] max-w-xs md:max-w-sm mx-auto md:mx-0" />
          <div className="flex flex-col gap-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      )}

      {!loading && error && <ErrorState resource="about info" />}

      {!loading && !error && (
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-[0.55fr_1fr] gap-10 md:gap-16 items-center scroll-reveal ${inView ? "in-view" : ""}`}
        >
          <div className="group relative aspect-[4/5] max-w-xs md:max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden border-2 border-border-light dark:border-border-dark bg-card dark:bg-card-dark hover:border-accent-border dark:hover:border-accent-border-dark transition-colors duration-300">
            {portraitUrl ? (
              <img
                src={portraitUrl}
                alt={fullName ?? "Portrait"}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full" />
            )}
          </div>

          <div>
            {bio && (
              <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-5 max-w-[52ch]">
                {bio}
              </p>
            )}

            {personalDetail && (
              <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-[52ch] mb-10">
                {personalDetail}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}