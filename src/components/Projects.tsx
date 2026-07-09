import Reveal from "./Reveal";
import { ArrowUpRightIcon } from "./Icons";
import { TECH, DEFAULT_TECH_ICON } from "./techIcons.tsx";
import task from './task.png'
import dashboard from './dashboard.png'
import landing from './landing.png'

interface Project {
  title: string;
  description: string;
  stack: string[];
  link: string;
  image?: string;
  buttonLabel?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Full Stack Task Manager",
    description:
      "Built a task management app with user authentication, CRUD operations, and a clean React UI. Backend: Spring Boot REST API with JWT login, PostgreSQL database.",
    stack: ["Spring Boot", "Java", "REST APIs", "PostgreSQL", "React", "TypeScript", "JWT Auth"],
    link: "https://full-stack-task-manager-ecru.vercel.app/",
    image: task,
    buttonLabel: "View Live Demo",
  },
  {
    title: "Finance Dashboard with API",
    description:
      "Built a polished dashboard UI that consumes data from a Spring Boot backend. Charts, tables, filters, mobile responsive.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Spring Boot", "API", "Figma design"],
    link: "https://finance-dashboard-two-lime-87.vercel.app/",
    image: dashboard, 
    buttonLabel: "View Live Demo",
  },
  {
    title: "Landing Page",
    description:
      "A project demonstrating the complete design-to-development workflow: from high-fidelity Figma wireframe through to a production-grade, deployed landing page.",
    stack: ["Figma design", "React", "TypeScript"],
    link: "https://landing-page-two-chi-12.vercel.app/",
    image: landing, 
    buttonLabel: "View Live Demo",
  },
];

function ProjectThumbnail({ project }: { project: Project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full rounded-md object-cover"
      />
    );
  }


  return (
    <div className="checker w-full h-full rounded-md relative flex items-center justify-center">
      <span className="relative bg-bg/80 text-white/70 text-xs font-medium px-3 py-1 rounded">
        {project.title}
      </span>
    </div>
  );
}

function TechStackRow({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-4">
      {stack.map((name) => {
        const { Icon, color } = TECH[name] ?? DEFAULT_TECH_ICON;
        return (
          <div
            key={name}
            title={name}
            className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center shrink-0"
          >
            <Icon className="w-4 h-4" style={{ color }} />
          </div>
        );
      })}
    </div>
  );
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay} className="card-lift">
      <div className="img-zoom rounded-md w-full aspect-video mb-5">
        <ProjectThumbnail project={project} />
      </div>
      <h3 className="text-lg font-bold mb-3">{project.title}</h3>
      <TechStackRow stack={project.stack} />
      <p className="text-[13px] leading-6 text-white/65 mb-6 min-h-[96px] line-clamp-4">
        {project.description}
      </p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-lift w-full flex items-center justify-center gap-2 bg-green text-bg text-[13px] font-semibold py-3 rounded-md"
      >
        <ArrowUpRightIcon className="w-4 h-4" /> {project.buttonLabel ?? "View Project"}
      </a>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section className="px-16 pt-4 pb-28">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} delay={i * 100} />
        ))}
      </div>
    </section>
  );
}
