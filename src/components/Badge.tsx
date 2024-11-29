export default function Badge({
  name,
  color,
  bg,
}: {
  name: string;
  bg: string;
  color: string;
}) {
  return (
    <div
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-darkBg2`}
      style={{ backgroundColor: bg, color }}
    >
      {name}
    </div>
  );
}
