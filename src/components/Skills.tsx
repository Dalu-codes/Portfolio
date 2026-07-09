import type { ComponentType } from "react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiSpringboot,
  SiApachemaven,
  SiPostgresql,
  SiHibernate,
  SiGit,
  SiIntellijidea,
  SiZoom,
  SiFigma,
  SiGooglefonts,
  SiChartdotjs,
} from "react-icons/si";
import { FaHtml5, FaJava, FaDocker, FaSlack, FaDatabase } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import Reveal from "./Reveal";

interface Skill {
  name: string;
  Icon: IconType | ComponentType<{ className?: string }>;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "FRONTEND",
    skills: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8" },
      { name: "HTML/CSS", Icon: FaHtml5, color: "#E34F26" },
    ],
  },
  {
    title: "BACKEND",
    skills: [
      { name: "Java", Icon: FaJava, color: "#ED8B00" },
      { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
      { name: "REST APIs", Icon: TbApi, color: "#BAEB6B" },
      { name: "Maven", Icon: SiApachemaven, color: "#C71A36" },
    ],
  },
  {
    title: "DATA",
    skills: [
      { name: "SQL", Icon: FaDatabase, color: "#F5B301" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "Hibernate", Icon: SiHibernate, color: "#BCA255" },
    ],
  },
  {
    title: "DESIGN",
    skills: [
      { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
      { name: "Google/Adobe Fonts", Icon: SiGooglefonts, color: "#4285F4" },
      { name: "Chart.js", Icon: SiChartdotjs, color: "#FF6384" },
    ],
  },
  {
    title: "TOOLS",
    skills: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "Docker", Icon: FaDocker, color: "#2496ED" },
      { name: "IntelliJ", Icon: SiIntellijidea, color: "#000000" },
      { name: "VS Code", Icon: VscVscode, color: "#007ACC" },
      { name: "Slack", Icon: FaSlack, color: "#E01E5A" },
      { name: "Zoom", Icon: SiZoom, color: "#2D8CFF" },
    ],
  },
];

function SkillsColumn({ category, delay }: { category: SkillCategory; delay: number }) {
  return (
    <Reveal delay={delay}>
      <h4 className="text-[15px] font-semibold text-green mb-5 tracking-wide">{category.title}</h4>
      <div className="flex flex-col gap-4">
        {category.skills.map(({ name, Icon, color }) => (
          <div key={name} className="skill-row flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-white/5 flex items-center justify-center shrink-0">
              <Icon className="w-[18px] h-[18px]" style={{ color }} />
            </div>
            <span className="text-[13px] text-white/75">{name}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section className="px-16 pt-4 pb-28">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12">
        {SKILL_CATEGORIES.map((category, i) => (
          <SkillsColumn key={category.title} category={category} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}
