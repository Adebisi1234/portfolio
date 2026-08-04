import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useRoute } from "../hooks/useRoute";
import {
  useCertifications,
  type Certification,
} from "../hooks/useCertifications";
import { useInView } from "../hooks/useInView";
import { urlFor } from "../data/imageUrl";
import Skeleton from "./Skeleton";
import ErrorState from "./ErrorState";

function CertCard({ cert, delay }: { cert: Certification; delay: number }) {
  const { ref, inView } = useInView<HTMLAnchorElement>();

  return (
    <a
      ref={ref}
      href={cert.credentialUrl}
      target="_blank"
      rel="noreferrer"
      style={{ animationDelay: inView ? `${delay}ms` : undefined }}
      className={`group flex flex-col rounded-2xl border-2 border-border-light dark:border-border-dark hover:border-accent-border dark:hover:border-accent-border-dark transition-colors duration-300 p-5 scroll-reveal ${inView ? "in-view" : ""}`}
    >
      {cert.badgeImage && (
        <img
          src={urlFor(cert.badgeImage).width(120).height(120).url()}
          alt={cert.title}
          className="w-16 h-16 object-contain mb-4"
          loading="lazy"
        />
      )}
      <h3 className="font-heading text-base font-semibold tracking-tight text-gray-900 dark:text-white mb-1">
        {cert.title}
      </h3>
      <p className="font-mono text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-500 mb-3">
        {cert.issuer}
      </p>
      {cert.description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          {cert.description}
        </p>
      )}
      <div className="mt-auto flex items-center gap-1.5 font-mono text-[11px] text-gray-500 dark:text-gray-500 group-hover:text-accent transition-colors">
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="text-[10px]"
        />
        Verify credential
      </div>
    </a>
  );
}

export default function Certifications() {
  const { route } = useRoute();
  const { certifications, loading, error } = useCertifications(route);

  if (!loading && !error && certifications.length === 0) return null;

  return (
    <section
      id="certifications"
      className="max-w-[1440px] mx-auto px-5 md:px-9 py-20"
    >
      <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-10 text-center">
        Certifications
      </h2>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[0, 1, 2].map((i) => (
            <Skeleton key={i} className="h-64" />
          ))}
        </div>
      )}

      {!loading && error && <ErrorState resource="certifications" />}

      {!loading && !error && certifications.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <CertCard
              key={cert._id}
              cert={cert}
              delay={Math.min(i * 80, 320)}
            />
          ))}
        </div>
      )}
    </section>
  );
}