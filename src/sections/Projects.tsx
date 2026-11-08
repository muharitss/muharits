import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { projectsData } from "../data/projects";

export function Projects() {
  return (
    <section id="work" className="py-16 sm:py-24 border-t border-[#E8E8E5]">
      <Container>
        <SectionHeading
          heading="My Project"
          description="A collection of projects that reflect my approach to building for the web."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
