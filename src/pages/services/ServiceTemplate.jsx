import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import '../SharedPages.css'

export function createServicePage(config) {
  return function ServicePage() {
    return (
      <div className="page">
        <Link to="/services" className="back-button" aria-label="Back to services">
          <FaArrowLeft />
        </Link>
        <div className="service-hero">
          <div className="container">
            <div className="service-icon-large">{config.icon}</div>
            <h1>{config.title}</h1>
            <p className="lead">{config.subtitle}</p>
          </div>
        </div>

        <div className="container py-16">
          <div className="content-section">
            <h2>Overview</h2>
            <p>{config.overview}</p>
          </div>

          <div className="content-section">
            <h2>Key Benefits</h2>
            <div className="benefits-grid">
              {config.benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <h3>✓ {benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="content-section text-center">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get Started with {config.title}
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
