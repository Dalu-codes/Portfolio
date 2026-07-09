import { NavLinks } from "./Nav";

interface SectionBarProps {
  leftLabel: string;
  id?: string;
}

export default function SectionBar({ leftLabel, id }: SectionBarProps) {
  return (
    <div id={id} className="px-16 py-8 flex items-center justify-between">
      <span className="text-[13px] tracking-wide font-medium text-white/80">{leftLabel}</span>
      <NavLinks />
    </div>
  );
}
