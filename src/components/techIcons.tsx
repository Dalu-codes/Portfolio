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
  SiJsonwebtokens,
} from "react-icons/si";
import { FaHtml5, FaJava, FaDocker, FaSlack, FaDatabase } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { TbApi, TbChartBar } from "react-icons/tb";

export interface TechIcon {
  Icon: IconType | ComponentType<{ className?: string }>;
  color: string;
}

export const TECH: Record<string, TechIcon> = {
  React: { Icon: SiReact, color: "#61DAFB" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  Tailwind: { Icon: SiTailwindcss, color: "#38BDF8" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38BDF8" },
  "HTML/CSS": { Icon: FaHtml5, color: "#E34F26" },

  Java: { Icon: FaJava, color: "#ED8B00" },
  "Spring Boot": { Icon: SiSpringboot, color: "#6DB33F" },
  "REST APIs": { Icon: TbApi, color: "#BAEB6B" },
  API: { Icon: TbApi, color: "#BAEB6B" },
  Maven: { Icon: SiApachemaven, color: "#C71A36" },

  SQL: { Icon: FaDatabase, color: "#F5B301" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  Postgres: { Icon: SiPostgresql, color: "#4169E1" },
  Hibernate: { Icon: SiHibernate, color: "#BCA255" },

  Figma: { Icon: SiFigma, color: "#F24E1E" },
  "Figma design": { Icon: SiFigma, color: "#F24E1E" },
  "Google/Adobe Fonts": { Icon: SiGooglefonts, color: "#4285F4" },
  "Chart.js": { Icon: SiChartdotjs, color: "#FF6384" },
  Recharts: { Icon: TbChartBar, color: "#FF6384" },

  Git: { Icon: SiGit, color: "#F05032" },
  Docker: { Icon: FaDocker, color: "#2496ED" },
  IntelliJ: { Icon: SiIntellijidea, color: "#000000" },
  "VS Code": { Icon: VscVscode, color: "#007ACC" },
  Slack: { Icon: FaSlack, color: "#E01E5A" },
  Zoom: { Icon: SiZoom, color: "#2D8CFF" },

  "JWT Auth": { Icon: SiJsonwebtokens, color: "#000000" },
  JWT: { Icon: SiJsonwebtokens, color: "#000000" },
};

export const DEFAULT_TECH_ICON: TechIcon = { Icon: TbApi, color: "#9CA3AF" };
