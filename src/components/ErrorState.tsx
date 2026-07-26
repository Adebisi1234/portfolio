interface ErrorStateProps {
  /** Lowercase noun describing what failed to load, e.g. "skills", "projects" */
  resource: string;
}

export default function ErrorState({ resource }: ErrorStateProps) {
  return (
    <div className="rounded-2xl border-2 border-border-light dark:border-border-dark p-8 text-center">
      <p className="text-sm text-gray-500 dark:text-gray-500">
        Couldn't load {resource} right now. Refresh the page to try again.
      </p>
    </div>
  );
}