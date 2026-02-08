import './SharedPages.css'

function About() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <h1>About CITOCD</h1>
          <p className="lead">Revolutionizing DevOps and Business Automation</p>
        </div>
      </div>
      <div className="container py-16">
        <div className="content-section">
          <h2>Our Mission</h2>
          <p>
            At CITOCD, we're on a mission to transform how businesses approach DevOps, cloud infrastructure, 
            and digital transformation. We believe in automation, innovation, and excellence in everything we do.
          </p>
          <p>
            Our team of expert engineers and consultants bring decades of combined experience in cloud technologies,
            CI/CD pipelines, and enterprise software development.
          </p>
        </div>

        <div className="content-section">
          <h2>Why Choose Us?</h2>
          <ul className="feature-list">
            <li>✓ Expert team with proven track record</li>
            <li>✓ Cutting-edge technologies and best practices</li>
            <li>✓ 24/7 support and dedicated account management</li>
            <li>✓ Flexible pricing and scalable solutions</li>
            <li>✓ Security-first approach with compliance expertise</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
