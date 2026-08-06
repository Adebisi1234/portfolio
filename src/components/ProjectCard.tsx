import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faArrowRight, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import type { Project } from "../types";
import { urlFor } from "../data/imageUrl";
import { useInView } from "../hooks/useInView";
import { useRoute } from "../hooks/useRoute";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { route } = useRoute();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoActive, setVideoActive] = useState(false);
  const { ref: revealRef, inView } = useInView<HTMLElement>();

  const imageSrc = project.coverImage
    ? urlFor(project.coverImage).width(900).fit("max").auto("format").url()
    : null;

  const videoUrl = project.showcaseVideo?.asset?.url;
  const caseStudyUrl = `/${route}/work/${project.slug}`;
  const displayTags = project.techStack.slice(0, 4);

  // Video only ever plays from an explicit click, never on hover, so it's a
  // real user gesture and browsers allow it to play with sound.
  function togglePlayback(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
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
    <article
      ref={revealRef}
      className={`group flex flex-col scroll-reveal ${inView ? "in-view" : ""}`}
    >
      <Link
        to={caseStudyUrl}
        aria-label={`Read the case study for ${project.title}`}
        className="relative block aspect-video overflow-hidden rounded-2xl border-2 border-border-light dark:border-border-dark bg-card dark:bg-card-dark"
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={project.title}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              videoActive ? "opacity-0" : "opacity-100"
            }`}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-mono text-[10px] uppercase tracking-wide text-gray-400 dark:text-gray-600">
            no preview
          </div>
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
            onClick={(e) => e.stopPropagation()}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              videoActive ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {videoUrl && (
          <button
            type="button"
            onClick={togglePlayback}
            aria-label={videoActive ? "Pause preview video" : "Play preview video, with sound"}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              videoActive ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-black/75 transition-colors">
              <FontAwesomeIcon
                icon={videoActive ? faPause : faPlay}
                className="text-white text-sm ml-0.5"
              />
            </div>
          </button>
        )}

        {/* darken-on-hover so the case study cue below stays legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* single click-through cue for the whole image, top right. the
            explicit "Case study" text link below is the other cue, this
            doesn't need its own duplicate text on top of it. */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-gray-900 flex items-center justify-center text-sm opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
          <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 text-xs" />
        </div>
      </Link>

      <div className="flex flex-col pt-5">
        <h3 className="font-heading font-semibold tracking-tight text-gray-900 dark:text-white text-lg">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
          {project.summary}
        </p>

        {displayTags.length > 0 && (
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            {displayTags.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[10px] uppercase tracking-wide px-2 py-1 rounded-lg border border-border-light dark:border-border-dark text-gray-600 dark:text-gray-400"
              >
                {tech}
              </span>
            ))}
            {project.focusArea && (
              <span className="font-mono text-[10px] uppercase tracking-wide px-2 py-1 text-gray-400 dark:text-gray-500">
                {project.focusArea}
              </span>
            )}
          </div>
        )}

        <div className="mt-4 pt-4 border-t border-border-light dark:border-border-dark flex items-center gap-5">
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

          <Link
            to={caseStudyUrl}
            className="flex items-center gap-1.5 font-mono text-[11px] text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent-dark transition-colors"
          >
            Case study
            <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
          </Link>

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
      </div>
    </article>
  );
}