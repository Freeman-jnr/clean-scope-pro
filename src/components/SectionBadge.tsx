export default function SectionBadge({
  children,
  variant = "light",
}: {
  children: React.ReactNode;
  variant?: "light" | "dark";
}) {
  const cls =
    variant === "dark"
      ? "bg-white/10 backdrop-blur-md text-sky-light border border-white/15"
      : "bg-sky-lighter/80 backdrop-blur-sm text-sky-deeper border border-sky-light/60";
  return (
    <span
      className={`inline-flex items-center gap-1.5 ${cls} text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full mb-4`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-sky animate-pulse-dot" />
      {children}
    </span>
  );
}
