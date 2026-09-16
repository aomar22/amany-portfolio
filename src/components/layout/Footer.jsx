import { profile } from '../../data/profile'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="portfolio-footer">
      <div className="site-container">
        <div className="footer-content">
          <div>
            <a className="footer-brand" href="#home">
              {profile.name}
            </a>

            <p>
              Building practical digital solutions from interface to
              deployment.
            </p>
          </div>

          <nav className="footer-navigation" aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footer-social-links">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Amany Omar’s GitHub profile"
            >
              <i className="bi bi-github" aria-hidden="true"></i>
            </a>

            <a
              href={profile.linkedInUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Amany Omar’s LinkedIn profile"
            >
              <i className="bi bi-linkedin" aria-hidden="true"></i>
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label={`Email ${profile.name}`}
            >
              <i className="bi bi-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} {profile.name}. All rights reserved.
          </p>

          <p>Designed and developed with React and Bootstrap.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer