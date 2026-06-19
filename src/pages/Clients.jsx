import { FaExternalLinkAlt } from 'react-icons/fa'
import './SharedPages.css'

const clientsData = [
  {
    name: <><span className="text-blood-red">E</span>ntrypass360</>,
    url: 'https://entrypass360.com',
    description: <>An innovative WhatsApp-native <span className="text-blood-red">visitor management</span> and <span className="text-blood-red">smart gatepass</span> system built for secure residential and enterprise access control.</>,
    industry: 'Smart Security & Access Control',
    highlight: true
  },
  {
    name: <><span className="text-blood-red">J</span>eastrata</>,
    url: 'https://jeastrata.com',
    description: <>A premier <span className="text-blood-red">software consulting</span> firm offering end-to-end consulting, architecture engineering, and scalable enterprise platforms.</>,
    industry: 'Software Consulting'
  },
  {
    name: <><span className="text-blood-red">T</span>ransind Power</>,
    url: 'http://www.transindpower.com',
    description: <>An <span className="text-blood-red">ISO 9001-certified</span> manufacturer delivering advanced electrical power distribution transformers and industrial control systems.</>,
    industry: 'Electrical & Power Technology'
  },
  {
    name: <><span className="text-blood-red">J</span>eaDigital</>,
    url: 'https://jeadigital.com',
    description: <>A key <span className="text-blood-red">digital transformation</span> partner focused on <span className="text-blood-red">blockchain</span>, AI, enterprise application development, and modern mobile/web solutions.</>,
    industry: 'IT Services & Digital Transformation'
  },
  {
    name: <><span className="text-blood-red">S</span>toryonreels</>,
    url: 'https://storyonreel.com',
    description: <>A next-generation <span className="text-blood-red">immersive storytelling</span> hub and literary platform featuring high-fidelity creative content in English and regional languages.</>,
    industry: 'Media & Digital Storytelling'
  },
  {
    name: <><span className="text-blood-red">C</span>okonet</>,
    url: 'https://www.cokonet.com',
    description: <>A premium software training and <span className="text-blood-red">global career placement</span> academy specializing in SAP, AI, Data Science, and modern web technologies.</>,
    industry: 'EdTech & Career Consultancy',
    highlight: true
  }
]


function Clients() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <h1><span className="text-blood-red">O</span>ur <span className="text-blood-red">C</span>lients</h1>
          <p className="lead">Trusted by leading organizations worldwide</p>
        </div>
      </div>
      <div className="container py-16">
        <div className="content-section text-center">
          <h2><span className="text-blood-red">S</span>uccess <span className="text-blood-red">S</span>tories</h2>
          <p>
            We at <span className="brand-name">CItoCD</span> have helped businesses of all sizes transform their operations, streamline workflows,
            and achieve unprecedented growth through our comprehensive <span className="text-blood-red">DevOps and automation</span> solutions.
          </p>
        </div>

        <div className="clients-container">
          <h2 className="text-center" style={{ fontSize: '2rem', marginBottom: 'var(--space-8)' }}><span className="text-blood-red">F</span>eatured <span className="text-blood-red">P</span>artners &amp; <span className="text-blood-red">C</span>lients</h2>
          <div className="clients-grid">
            {clientsData.map((client, index) => (
              <div className={`glass-card client-card ${client.highlight ? 'highlight-red' : ''}`} key={index}>
                <div className="client-header">
                  <span className="client-industry">{client.industry}</span>
                  <h3 style={{ fontSize: '1.5rem', marginTop: 'var(--space-2)' }}>{client.name}</h3>
                  <div style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{client.description}</div>
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
              <p><span className="text-blood-red">P</span>rojects Delivered</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p><span className="text-blood-red">H</span>appy <span className="text-blood-red">C</span>lients</p>
            </div>
            <div className="stat-card">
              <h3>99.9%</h3>
              <p><span className="text-blood-red">U</span>ptime SLA</p>
            </div>
            <div className="stat-card">
              <h3>24/7</h3>
              <p><span className="text-blood-red">S</span>upport Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients

