export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-light dark:border-border-dark py-6">
      <p className="section-shell text-center text-xs text-gray-600 dark:text-gray-500">
        © {year} Tobiloba Adebisi.
      </p>
    </footer>
  );
}
