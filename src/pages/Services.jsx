import { Link } from 'react-router-dom'
import { motion as framerMotion } from 'framer-motion'
import {
    FaCloud, FaRocket, FaCog, FaBrain, FaShieldAlt, FaSync
} from 'react-icons/fa'
import './SharedPages.css'
import SEO from '../components/SEO'

function Services() {
    const services = [
        {
            icon: <FaSync />,
            title: <><span className="text-blood-red">D</span>evOps Automation &amp; CI/CD</>,
            description: <>Build, test, and deploy with fully <span className="text-blood-red">automated pipelines</span> (CI/CD) and <span className="text-blood-red">Infrastructure as Code</span> (IaC) solutions to accelerate releases safely.</>,
            link: '/services/devops-automation'
        },
        {
            icon: <FaCloud />,
            title: <><span className="text-blood-red">L</span>egacy to Clouds &amp; Private Clouds</>,
            description: <>Migrate legacy infrastructure to public hyperscalers or secure private clouds, with a focus on region-specific <span className="text-blood-red">data protection</span> and <span className="text-blood-red">residency compliance</span>.</>,
            link: '/services/cloud-migration'
        },
        {
            icon: <FaRocket />,
            title: <><span className="text-blood-red">A</span>pplication Modernization</>,
            description: <>Transform <span className="text-blood-red">legacy systems</span> into modern, scalable cloud-native <span className="text-blood-red">microservices</span> architectures.</>,
            link: '/services/application-modernization'
        },
        {
            icon: <FaCog />,
            title: <><span className="text-blood-red">D</span>eterministic Automation (No-LLM)</>,
            description: <>Implement local, secure <span className="text-blood-red">deterministic automation</span> agents that operate without LLM interventions, ensuring zero <span className="text-blood-red">data leakage</span> and 100% predictability.</>,
            link: '/services/advanced-automation'
        },
        {
            icon: <FaBrain />,
            title: <><span className="text-blood-red">L</span>1 Support AI Agents</>,
            description: <>Deploy autonomous self-hosted <span className="text-blood-red">AI agents</span> to monitor logs, manage incidents, and automatically <span className="text-blood-red">remediate alerts</span> in real-time.</>,
            link: '/services/ai-powered-devops'
        },
        {
            icon: <FaShieldAlt />,
            title: <><span className="text-blood-red">S</span>ecurity &amp; DevOps Assessments</>,
            description: <>Conduct deep assessments of your cloud <span className="text-blood-red">security posture</span>, zero-trust configurations, and pipeline maturity <span className="text-blood-red">compliance audits</span> (SOC2/HIPAA).</>,
            link: '/services/devsecops'
        }
    ]

    return (
        <div className="page">
            <SEO 
                title="Our Services - Enterprise DevSecOps & Cloud Consulting" 
                description="Explore our specialized DevOps consulting services, including CI/CD automation, cloud migration, application modernization, DevSecOps compliance assessments, and self-healing AI operations."
                keywords="DevOps services, cloud migration consultancy, DevSecOps consulting, CI/CD pipeline automation, Kubernetes containerization, IT automation"
            />
            <div className="page-hero">
                <div className="container">
                    <h1>Our <span className="text-blood-red">S</span>ervices</h1>
                    <p className="lead">Comprehensive <span className="text-blood-red">D</span>evOps and <span className="text-blood-red">C</span>loud Solutions</p>
                </div>
            </div>

            <div className="container py-16">
                <div className="services-overview-grid">
                    {services.map((service, index) => (
                        <framerMotion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link to={service.link} className="service-detail-card">
                                <div className="service-detail-icon">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <div style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-8)', lineHeight: 1.6 }}>{service.description}</div>
                                <span className="service-arrow">Learn More →</span>
                            </Link>
                        </framerMotion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
