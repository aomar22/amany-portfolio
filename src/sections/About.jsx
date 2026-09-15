import SectionHeading from '../components/ui/SectionHeading'

function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="site-container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <SectionHeading
              eyebrow="About me"
              title="A developer shaped by technology, healthcare, and real-world problem solving."
            />

            <div className="about-copy">
              <p>
                I’m a graduate of Seneca Polytechnic’s Computer Programming
                & Analysis program and an internationally trained dentist who
                transitioned into software development.
              </p>

              <p>
                My technical experience includes building React interfaces,
                designing user-centred experiences, and working with Docker,
                Kubernetes, Azure, AWS, and GitOps workflows.
              </p>

              <p>
                My healthcare background strengthened my communication,
                attention to detail, and ability to understand people’s needs.
                I bring that same thoughtful approach to every digital product
                I build.
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="about-panel">
              <h3 className="h5 mb-4">How I approach my work</h3>

              <div className="about-value">
                <i className="bi bi-people"></i>
                <div>
                  <h4 className="h6">Start with the user</h4>
                  <p>Understand the problem before choosing the technology.</p>
                </div>
              </div>

              <div className="about-value">
                <i className="bi bi-diagram-3"></i>
                <div>
                  <h4 className="h6">Build with structure</h4>
                  <p>Create maintainable components and clear workflows.</p>
                </div>
              </div>

              <div className="about-value">
                <i className="bi bi-arrow-repeat"></i>
                <div>
                  <h4 className="h6">Improve continuously</h4>
                  <p>Test, learn, document, and refine each solution.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About