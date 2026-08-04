import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import type { Project } from "../types";
import { urlFor } from "../data/imageUrl";
import { useInView } from "../hooks/useInView";

interface ProjectCardProps {
  project: Project;
  emphasized: boolean;
}

export default function ProjectCard({ project, emphasized }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [videoActive, setVideoActive] = useState(false);
  const { ref: revealRef, inView } = useInView<HTMLElement>();

  const imageSrc = project.coverImage
    ? urlFor(project.coverImage)
        .width(emphasized ? 1000 : 800)
        .fit("max")
        .auto("format")
        .url()
    : null;

  const videoUrl = project.showcaseVideo?.asset?.url;

  function handleEnter() {
    if (!videoUrl) return;
    hoverTimer.current = setTimeout(() => {
      setVideoActive(true);
      videoRef.current?.play();
    }, 350);
  }

  function handleLeave() {
    if (!videoUrl) return;
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setVideoActive(false);
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
  }

  return (
    <article
      ref={revealRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border-2 border-border-light dark:border-border-dark transition-colors duration-300 scroll-reveal ${inView ? "in-view" : ""}`}
    >
      <div className="relative aspect-video overflow-hidden bg-card dark:bg-card-dark flex items-center justify-center">
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
          <div className="font-mono text-[10px] uppercase tracking-wide text-gray-400 dark:text-gray-600">
            no preview
          </div>
        )}

        {videoUrl && (
          <video
            ref={videoRef}
            src={videoUrl}
            poster={imageSrc ?? undefined}
            preload="metadata"
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              videoActive ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {videoUrl && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              videoActive ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
              <FontAwesomeIcon
                icon={faPlay}
                className="text-white text-sm ml-0.5"
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col p-5 flex-1 min-h-0">
        <h3
          className={`font-heading font-semibold tracking-tight text-gray-900 dark:text-white ${
            emphasized ? "text-xl" : "text-base"
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`mt-3 text-gray-600 dark:text-gray-400 leading-relaxed ${
            emphasized ? "text-sm line-clamp-3" : "text-sm line-clamp-2"
          }`}
        >
          {project.summary}
        </p>

        <div className="mt-auto pt-4 border-t border-border-light dark:border-border-dark flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 min-w-0">
            {project.techStack.slice(0, emphasized ? 5 : 3).map((tech) => (
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

          <div className="flex items-center gap-4 shrink-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-mono text-[11px] text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
              >
                <FontAwesomeIcon icon={faGlobe} className="text-[10px]" />
                Live
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 font-mono text-[11px] text-gray-600 dark:text-gray-400 hover:text-accent transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} className="text-[11px]" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
