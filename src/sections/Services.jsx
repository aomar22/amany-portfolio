import SectionHeading from '../components/ui/SectionHeading'
import ServiceCard from '../components/services/ServiceCard'
import { services } from '../data/services'

function Services() {
  return (
    <section id="services" className="services-section section-padding">
      <div className="site-container">
        <SectionHeading
          eyebrow="How I can contribute"
          title="Technical skills guided by practical problem-solving."
          description="I combine frontend development, product thinking, and cloud knowledge to help teams and clients move ideas toward useful digital solutions."
        />

        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-6 col-xl-4" key={service.id}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services