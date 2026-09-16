function ServiceCard({ service }) {
  return (
    <article className="service-card h-100">
      <div className="service-icon" aria-hidden="true">
        <i className={`bi ${service.icon}`}></i>
      </div>

      <h3>{service.title}</h3>
      <p>{service.description}</p>

      <ul className="service-deliverables">
        {service.deliverables.map((deliverable) => (
          <li key={deliverable}>
            <i className="bi bi-check2" aria-hidden="true"></i>
            <span>{deliverable}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default ServiceCard