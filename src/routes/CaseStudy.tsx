import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faGlobe,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useRoute } from "../hooks/useRoute";
import type { Route } from "../hooks/useRoute";
import { useCaseStudy } from "../hooks/useCaseStudy";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { urlFor } from "../data/imageUrl";
import type { Project } from "../types";
import Skeleton from "../components/Skeleton";
import ErrorState from "../components/ErrorState";

function BackLink({ route }: { route: Route }) {
  return (
    <Link
      to={`/${route}/#work`}
      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent-dark transition-colors"
    >
      <FontAwesomeIcon icon={faArrowLeft} className="text-[10px]" />
      Back to work
    </Link>
  );
}

function CaseStudyMedia({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoActive, setVideoActive] = useState(false);

  const imageSrc = project.coverImage
    ? urlFor(project.coverImage).width(1600).fit("max").auto("format").url()
    : null;
  const videoUrl = project.showcaseVideo?.asset?.url;

  if (!imageSrc && !videoUrl) return null;

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (videoActive) {
      video.pause();
      video.currentTime = 0;
      setVideoActive(false);
    } else {
      video.muted = false;
      video.play();
      setVideoActive(true);
    }
  }

  return (
    <div className="relative mt-12 aspect-video rounded-2xl overflow-hidden border-2 border-border-light dark:border-border-dark bg-card dark:bg-card-dark">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={project.title}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            videoActive ? "opacity-0" : "opacity-100"
          }`}
        />
      )}

      {videoUrl && (
        <video
          ref={videoRef}
          src={videoUrl}
          poster={imageSrc ?? undefined}
          preload="metadata"
          loop
          playsInline
          controls={videoActive}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            videoActive ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {videoUrl && (
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={
            videoActive
              ? "Pause preview video"
              : "Play preview video, with sound"
          }
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            videoActive ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-black/75 transition-colors">
            <FontAwesomeIcon
              icon={videoActive ? faPause : faPlay}
              className="text-white text-base ml-0.5"
            />
          </div>
        </button>
      )}
    </div>
  );
}

function CaseStudySection({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-wide text-gray-600 dark:text-gray-500 mb-3">
        {label}
      </p>
      <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-line">
        {text}
      </p>
    </div>
  );
}

function CaseStudySkeleton({ route }: { route: Route }) {
  return (
    <div className="section-shell pt-12 pb-24">
      <BackLink route={route} />
      <Skeleton className="h-10 w-2/3 mt-10 mb-4" />
      <Skeleton className="h-20 w-full max-w-2xl mb-10" />
      <Skeleton className="aspect-video w-full" />
    </div>
  );
}

function NotFoundState({ route }: { route: Route }) {
  return (
    <div className="section-shell pt-12 pb-24">
      <BackLink route={route} />
      <div className="mt-16 text-center">
        <p className="font-heading text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3">
          Case study not found
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This project doesn't exist or may have moved.
        </p>
      </div>
    </div>
  );
}

export default function CaseStudy() {
  const { route } = useRoute();
  const { slug } = useParams<{ slug: string }>();
  const { project, loading, error } = useCaseStudy(route, slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  useDocumentTitle(
    project ? `${project.title} — Tobiloba Adebisi` : "Tobiloba Adebisi",
    project?.summary,
  );

  if (loading) return <CaseStudySkeleton route={route} />;

  if (error) {
    return (
      <div className="section-shell pt-12 pb-24">
        <BackLink route={route} />
        <div className="mt-16">
          <ErrorState resource="this case study" />
        </div>
      </div>
    );
  }

  if (!project) return <NotFoundState route={route} />;

  const sections = [
    { label: "Problem", text: project.problem },
    { label: "Approach", text: project.approach },
    { label: "Outcome", text: project.outcome },
    { label: "Results", text: project.results },
  ].filter(
    (section): section is { label: string; text: string } => !!section.text,
  );

  return (
    <article className="section-shell pt-12 pb-24">
      <BackLink route={route} />

      <header className="mt-10 max-w-2xl">
        {project.focusArea && (
          <p className="font-mono text-[11px] uppercase tracking-wide text-gray-600 dark:text-gray-500 mb-3">
            {project.focusArea}
          </p>
        )}

        <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
          {project.title}
        </h1>

        <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          {project.summary}
        </p>

        {(project.liveUrl || project.repoUrl) && (
          <div className="mt-6 flex flex-wrap items-center gap-5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-mono text-[11px] text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent-dark transition-colors"
              >
                <FontAwesomeIcon icon={faGlobe} className="text-[10px]" />
                Live site
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-mono text-[11px] text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent-dark transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} className="text-[11px]" />
                Code
              </a>
            )}
          </div>
        )}

        {project.techStack.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] uppercase tracking-wide px-2 py-1 rounded-lg border border-border-light dark:border-border-dark text-gray-600 dark:text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </header>

      <CaseStudyMedia project={project} />

      {sections.length > 0 && (
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {sections.map((section) => (
            <CaseStudySection
              key={section.label}
              label={section.label}
              text={section.text}
            />
          ))}
        </div>
      )}

      {project.gallery && project.gallery.length > 0 && (
        <div className="mt-16">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">
            Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.gallery.map((image, i) => (
              <img
                key={i}
                src={urlFor(image).width(1200).fit("max").auto("format").url()}
                alt={`${project.title} screenshot ${i + 1}`}
                className="w-full rounded-2xl border-2 border-border-light dark:border-border-dark"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
