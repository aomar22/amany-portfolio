import SectionHeading from '../components/ui/SectionHeading'
import ProjectCard from '../components/projects/ProjectCard'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="projects-section section-padding">
      <div className="site-container">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects that connect technical skills with real problems."
          description="A focused selection spanning frontend development, product thinking, healthcare technology, and cloud-native delivery."
        />

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-lg-6" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects