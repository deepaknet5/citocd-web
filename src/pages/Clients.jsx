import { FaExternalLinkAlt } from 'react-icons/fa'
import './SharedPages.css'

const clientsData = [
  {
    name: 'Entrypass360',
    url: 'https://entrypass360.com',
    description: 'An innovative WhatsApp-native visitor management and smart gatepass system built for secure residential and enterprise access control.',
    industry: 'Smart Security & Access Control',
    highlight: true
  },
  {
    name: 'Jeastrata',
    url: 'https://jeastrata.com',
    description: 'A premier software consulting firm offering end-to-end consulting, architecture engineering, and scalable enterprise platforms.',
    industry: 'Software Consulting'
  },
  {
    name: 'Transind Power',
    url: 'http://www.transindpower.com',
    description: 'An ISO 9001-certified manufacturer delivering advanced electrical power distribution transformers and industrial control systems.',
    industry: 'Electrical & Power Technology'
  },
  {
    name: 'JeaDigital',
    url: 'https://jeadigital.com',
    description: 'A key digital transformation partner focused on blockchain, AI, enterprise application development, and modern mobile/web solutions.',
    industry: 'IT Services & Digital Transformation'
  },
  {
    name: 'Storyonreels',
    url: 'https://storyonreel.com',
    description: 'A next-generation immersive storytelling hub and literary platform featuring high-fidelity creative content in English and regional languages.',
    industry: 'Media & Digital Storytelling'
  },
  {
    name: 'Cokonet',
    url: 'https://www.cokonet.com',
    description: 'A premium software training and global career placement academy specializing in SAP, AI, Data Science, and modern web technologies.',
    industry: 'EdTech & Career Consultancy',
    highlight: true
  }
]


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

        <div className="clients-container">
          <h2 className="text-center" style={{ fontSize: '2rem', marginBottom: 'var(--space-8)' }}>Featured Partners & Clients</h2>
          <div className="clients-grid">
            {clientsData.map((client, index) => (
              <div className={`glass-card client-card ${client.highlight ? 'highlight-red' : ''}`} key={index}>
                <div className="client-header">
                  <span className="client-industry">{client.industry}</span>
                  <h3 style={{ fontSize: '1.5rem', marginTop: 'var(--space-2)' }}>{client.name}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>{client.description}</p>
                </div>
                <div className="client-footer">
                  <a 
                    href={client.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="client-btn"
                  >
                    Visit Website <FaExternalLinkAlt style={{ fontSize: '0.8rem' }} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div style={{ marginTop: 'var(--space-16)' }}>
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
    </div>
  )
}

export default Clients

