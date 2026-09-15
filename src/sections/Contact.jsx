import { useState } from 'react'
import { profile } from '../data/profile'

function Contact() {
  const [emailCopied, setEmailCopied] = useState(false)

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setEmailCopied(true)

      window.setTimeout(() => {
        setEmailCopied(false)
      }, 2000)
    } catch {
      setEmailCopied(false)
    }
  }

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="site-container">
        <div className="contact-panel">
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <p className="section-eyebrow">Let’s connect</p>

              <h2>
                Have an opportunity or a problem worth solving?
              </h2>

              <p className="contact-description">
                I’m open to software development opportunities,
                collaborative projects, and freelance conversations. Tell
                me what you’re working on and how I may be able to help.
              </p>

              <div className="contact-location">
                <i
                  className="bi bi-geo-alt"
                  aria-hidden="true"
                ></i>
                <span>{profile.location}</span>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="contact-actions">
                <div className="contact-email">
                  <a
                    href={`mailto:${profile.email}`}
                    className="btn contact-primary-button"
                  >
                    <i
                      className="bi bi-envelope me-2"
                      aria-hidden="true"
                    ></i>
                    Email me
                  </a>

                  <button
                    type="button"
                    className="btn contact-copy-button"
                    onClick={handleCopyEmail}
                    aria-label={`Copy ${profile.email}`}
                  >
                    <i
                      className={`bi ${
                        emailCopied ? 'bi-check-lg' : 'bi-copy'
                      } me-2`}
                      aria-hidden="true"
                    ></i>

                    {emailCopied ? 'Copied!' : 'Copy email'}
                  </button>
                </div>

                <a
                  className="contact-email-address"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>

                <a
                  href={profile.linkedInUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn contact-secondary-button"
                >
                  <i
                    className="bi bi-linkedin me-2"
                    aria-hidden="true"
                  ></i>
                  Connect on LinkedIn
                </a>

                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-github-link"
                >
                  <i
                    className="bi bi-github me-2"
                    aria-hidden="true"
                  ></i>
                  View my GitHub
                  <i
                    className="bi bi-arrow-up-right ms-2"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact