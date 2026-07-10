import Reveal from "./Reveal";
import { SmileIcon, FileIcon } from "./Icons";
import { NavLinks, scrollTo } from "./Nav";
import profile from './profile.jpg';


export default function Hero() {
  return (
    <section className="px-8 pt-10 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-start">
      <div>
        <nav className="flex items-center justify-between mb-20">
          <span className="text-[15px] font-semibold tracking-wide">DALU</span>
          <NavLinks />
        </nav>

        <Reveal className="max-w-md">
          <h1 className="text-4xl font-bold mb-5 tracking-tight">HELLO!</h1>
          <p className="text-[15px] leading-7 text-white/70 font-regular mb-9">
            My name is Chidalu Ella Ezealigo, a software engineer with a UI/UX design background. Building full stack applications using Java, Spring Boot, and React.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo("about")}
              className="btn-lift flex items-center gap-2 bg-green text-bg text-[13px] font-medium px-5 py-3 rounded-md"
            >
              <SmileIcon className="w-4 h-4" /> About Dalu
            </button>
            <button
              className="btn-lift flex items-center gap-2 bg-yellow text-bg text-[13px] font-medium px-5 py-3 rounded-md"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/cv.pdf';
                link.download = 'DALU_CV.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <FileIcon className="w-4 h-4" /> Download CV
            </button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={150}>
        <div className="img-zoom rounded-md w-full aspect-square">
          <img src={profile} alt="Profile Picture" />
        </div>
      </Reveal>
    </section>
  );
}
