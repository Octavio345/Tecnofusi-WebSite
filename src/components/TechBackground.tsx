export function TechBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-radial-sweep" />

      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(224,20,27,0.18),transparent_38%,rgba(103,232,249,0.1)_72%,transparent)] sm:hidden" />

      <div className="grid-mask absolute inset-0 bg-tech-grid bg-[size:34px_34px] opacity-60 sm:bg-[size:42px_42px] sm:opacity-45" />

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-bright/70 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-graphite-950 to-transparent" />
    </div>
  );
}
