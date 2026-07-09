export interface NavItem {
  label: string;
  id: string;
}

/** Section ids used both for scroll-links and as anchors on their target sections. */
export const NAV: NavItem[] = [
  { label: "PROJECTS", id: "projects" },
  { label: "ABOUT", id: "about" },
  { label: "CONTACT", id: "contact" },
];

export function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function NavLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-10 ${className}`}>
      {NAV.map((n) => (
        <button
          key={n.id}
          onClick={() => scrollTo(n.id)}
          className="nav-link text-[13px] tracking-wide font-medium text-white/90 hover:text-green transition-colors"
        >
          {n.label}
        </button>
      ))}
    </div>
  );
}
