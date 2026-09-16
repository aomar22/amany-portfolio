function Navbar() {
  const navigationLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    // { label: 'Notes', href: '#notes' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark portfolio-navbar sticky-top"
      aria-label="Main navigation"
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          Amany Omar
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navigationLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}

            <li className="nav-item ms-lg-3">
              {/* <a
                className="btn btn-warning fw-semibold"
                href="/Amany-Omar-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-download me-2"></i>
                Résumé
              </a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar