import SectionHeading from '../components/ui/SectionHeading'
import SkillCategory from '../components/ui/SkillCategory'
import { skillCategories } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="skills-section section-padding">
      <div className="site-container">
        <SectionHeading
          eyebrow="Technical toolkit"
          title="Skills supported by hands-on project experience."
          description="A focused combination of frontend development, cloud technologies, DevOps workflows, and user-centred design."
        />

        <div className="row g-4">
          {skillCategories.map((category) => (
            <div className="col-md-6 col-xl-3" key={category.id}>
              <SkillCategory category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills