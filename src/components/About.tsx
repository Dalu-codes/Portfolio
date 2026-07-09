import Reveal from "./Reveal";
import profile from './profile.jpg';


export default function About() {
  return (
    <section className="px-16 pt-4 pb-28 text-center">
      <Reveal>
        <h2 className="text-2xl font-bold mb-12">ABOUT</h2>
      </Reveal>
      <Reveal delay={100}>
        <div className="relative w-40 h-40 mx-auto mb-10">
          <div className="absolute inset-0 rounded-full bg-green -translate-x-2.5 -translate-y-2.5 animate-float" />
           <div className="checker absolute inset-0 rounded-full border-4 border-bg">
           <img 
            src={profile} 
            alt="Profile Picture" 
            className="absolute inset-0 w-full h-full object-cover rounded-full" 
            />
          </div>
        </div>
      </Reveal>
      <Reveal delay={200}>
        <p className="max-w-xl mx-auto text-[15px] leading-7 text-white/70">
          I&apos;m a software engineer who designs and builds, I work in Java and Spring Boot on
          the backend and React on the frontend, which means I understand the full system. I
          spent time as a UI/UX designer before going deep on engineering, so I build things that
          works and look good.
        </p>
      </Reveal>
    </section>
  );
}
