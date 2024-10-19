import Projects from "./_components/projects/projects";
import Education from "./_components/education/education";
import AnimatedIcons from "./_components/hero/animated-icons";
import Presentation from "./_components/hero/presentation";
import PresentationSection from "./_components/presentation";

export default function Home() {
  return (
    <div>
      <section
        className="relative w-full overflow-hidden bg-gradient-to-r gradient-yellow gradient-orange"
        style={{ clipPath: 'polygon(25% 0%, 100% 0, 100% 95%, 0 100%, 0 100%, 0 0)' }}
      >
        <Presentation />
        <AnimatedIcons />
      </section>
      <section className="flex justify-center gap-6 p-6">
        <PresentationSection />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}
