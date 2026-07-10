import { NavLinks } from "./Nav";

interface SectionBarProps {
  // leftLabel: string;
  id?: string;
}

export default function SectionBar({ id }: SectionBarProps) {
  return (
    <div id={id} className="px-8 py-8 flex items-center justify-end">
      <NavLinks />
    </div>
  );
}
