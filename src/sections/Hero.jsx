function Hero() {
  return (
    <header id="home" className="hero-section">
      <div className="site-container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <span className="hero-badge">
              <i className="bi bi-circle-fill me-2"></i>
              Available for opportunities and freelance projects
            </span>

            <p className="hero-introduction mt-4 mb-2">
              Hi, I’m Amany Omar
            </p>

            <h1 className="hero-title fw-bold mb-4">
                Building useful digital products from{' '}
                <span className="hero-highlight">
                 interface to deployment.
                </span>
            </h1>

            <p className="lead hero-description mb-4">
              Software developer combining React frontend development,
               user-centred design, and cloud and DevOps skills to create
                practical solutions.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a className="btn hero-primary-button btn-lg" href="#projects">
                View my work
                <i className="bi bi-arrow-right ms-2"></i>
              </a>

              <a
                className="btn btn-outline-primary btn-lg"
                href="#contact"
              >
                Let’s work together
              </a>
            </div>

            <div className="d-flex gap-4 mt-4">
              <a
                className="hero-social-link"
                href="https://github.com/aomar22"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github me-2"></i>
                GitHub
              </a>

              <a
                className="hero-social-link"
                href="https://www.linkedin.com/in/amany-o-b52264127"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin me-2"></i>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero-summary-card">
              <p className="text-uppercase fw-semibold small mb-4">
                What I bring
              </p>

              <div className="hero-skill-item">
                <i className="bi bi-window"></i>
                <div>
                  <h2 className="h5">Frontend Development</h2>
                  <p>Responsive React interfaces built around real users.</p>
                </div>
              </div>

              <div className="hero-skill-item">
                <i className="bi bi-cloud-check"></i>
                <div>
                  <h2 className="h5">Cloud & DevOps</h2>
                  <p>Containerized applications and automated workflows.</p>
                </div>
              </div>

              <div className="hero-skill-item">
                <i className="bi bi-lightbulb"></i>
                <div>
                  <h2 className="h5">Product Thinking</h2>
                  <p>Solutions connecting technology with business needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero