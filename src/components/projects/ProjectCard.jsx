function ProjectCard({ project }) {
  const hasVideoLinks = project.videoLinks?.length > 0

  const hasLinks =
    project.githubUrl || project.liveUrl || hasVideoLinks

  return (
    <article className="project-card h-100">
      <div className="project-card-header">
        <div className="project-icon" aria-hidden="true">
          <i className={`bi ${project.icon}`}></i>
        </div>

        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
      </div>

      <div className="project-card-body">
        <p className="project-description">{project.description}</p>

        <div className="project-contribution">
          <strong>My contribution</strong>
          <p>{project.contribution}</p>
        </div>

        <ul className="project-highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>
              <i
                className="bi bi-check-circle-fill"
                aria-hidden="true"
              ></i>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <ul
          className="project-technologies"
          aria-label={`Technologies used for ${project.title}`}
        >
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        {hasLinks && (
          <div className="project-links">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn hero-primary-button"
              >
                {project.liveLabel ?? 'Live project'}
                <i className="bi bi-box-arrow-up-right ms-2"></i>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary"
              >
                <i className="bi bi-github me-2"></i>
                Source code
              </a>
            )}

            {project.videoLinks?.map((video) => (
            <a
                href={video.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary"
                key={video.url}
            >
                <i className="bi bi-play-circle me-2" aria-hidden="true"></i>
                {video.label}
            </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard