import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { project } from "@/lib/assets/projects";

function ProjectsPage() {
  return (
    <main className="container">
      <Header title="My Projects! Please have a look!" />
      <ul className="stack">
        {project.map((p, index) => (
          <li key={index}>
            <ProjectCard
              title={p.title}
              description={p.description}
              projectUrl={p.url}
              imgUrl={p.image}
              imgAlt={p.imageAlt}
            />
          </li>
        ))}
      </ul>
      <Footer />
    </main>
  );
}

export default ProjectsPage;
