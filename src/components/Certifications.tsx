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

function formatDate(value?: string) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function DateField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-wide text-gray-600 dark:text-gray-500 mb-1">
        {label}
      </p>
      <p className="text-sm text-gray-700 dark:text-gray-300">{value}</p>
    </div>
  );
}

function CertRow({ cert, delay }: { cert: Certification; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();

  const issued = formatDate(cert.issuedDate);
  const expires = formatDate(cert.expiryDate);

  return (
    <div
      ref={ref}
      style={{ animationDelay: inView ? `${delay}ms` : undefined }}
      className={`group grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 sm:gap-10 rounded-2xl border-2 border-border-light dark:border-border-dark hover:border-accent-border dark:hover:border-accent-border-dark transition-colors duration-300 p-6 sm:p-8 scroll-reveal ${inView ? "in-view" : ""}`}
    >
      <div className="min-w-0">
        <h3 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-1">
          {cert.title}
        </h3>
        <p className="font-mono text-[10px] uppercase tracking-wide text-gray-600 dark:text-gray-500 mb-4">
          {cert.issuer}
        </p>

        {cert.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5 max-w-[46ch]">
            {cert.description}
          </p>
        )}

        {(issued || expires) && (
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-5">
            {issued && <DateField label="Issued" value={issued} />}
            {expires && <DateField label="Expires" value={expires} />}
          </div>
        )}

        {cert.credentialId && (
          <p className="font-mono text-[10px] text-gray-600 dark:text-gray-500 mb-6 break-all">
            <span className="uppercase tracking-wide">Credential ID</span>{" "}
            &middot; {cert.credentialId}
          </p>
        )}

        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-border-light dark:border-border-dark px-4 py-2 font-mono text-[11px] uppercase tracking-wide text-gray-700 dark:text-gray-300 group-hover:border-accent-border dark:group-hover:border-accent-border-dark hover:text-accent dark:hover:text-accent-dark transition-colors"
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-[10px]"
            />
            Verify credential
          </a>
        )}
      </div>

      <div className="w-32 h-32 sm:w-40 sm:h-40 shrink-0 self-start sm:self-center rounded-xl border-2 border-border-light dark:border-border-dark bg-card dark:bg-card-dark flex items-center justify-center p-6">
        {cert.badgeImage && (
          <img
            src={urlFor(cert.badgeImage).width(240).height(240).url()}
            alt={cert.title}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}

export default function Certifications() {
  const { route } = useRoute();
  const { certifications, loading, error } = useCertifications(route);

  if (!loading && !error && certifications.length === 0) return null;

  return (
    <section id="certifications" className="section-shell py-20">
      <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-10">
        Certifications
      </h2>

      {loading && (
        <div className="flex flex-col gap-6">
          {[0, 1].map((i) => (
            <Skeleton key={i} className="h-48" />
          ))}
        </div>
      )}

      {!loading && error && <ErrorState resource="certifications" />}

      {!loading && !error && certifications.length > 0 && (
        <div className="flex flex-col gap-6">
          {certifications.map((cert, i) => (
            <CertRow key={cert._id} cert={cert} delay={Math.min(i * 80, 320)} />
          ))}
        </div>
      )}
    </section>
  );
}
