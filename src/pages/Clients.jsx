import './SharedPages.css'

function Clients() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <h1>Our Clients</h1>
          <p className="lead">Trusted by leading organizations worldwide</p>
        </div>
      </div>
      <div className="container py-16">
        <div className="content-section text-center">
          <h2>Success Stories</h2>
          <p>
            We've helped businesses of all sizes transform their operations, streamline workflows,
            and achieve unprecedented growth through our comprehensive DevOps and automation solutions.
          </p>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <h3>100+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-card">
            <h3>99.9%</h3>
            <p>Uptime SLA</p>
          </div>
          <div className="stat-card">
            <h3>24/7</h3>
            <p>Support Available</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients
