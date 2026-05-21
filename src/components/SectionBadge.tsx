export default function SectionBadge({
  children,
  variant = "light",
}: {
  children: React.ReactNode;
  variant?: "light" | "dark";
}) {
  const cls =
    variant === "dark"
      ? "bg-[rgba(56,189,248,0.15)] text-sky-light"
      : "bg-sky-lighter text-sky-deeper";
  return (
    <span
      className={`inline-block ${cls} text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4`}
    >
      {children}
    </span>
  );
}
