import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    FaCloud, FaRocket, FaCog, FaBrain, FaShieldAlt, FaSync
} from 'react-icons/fa'
import './SharedPages.css'

function Services() {
    const services = [
        {
            icon: <FaSync />,
            title: 'DevOps Automation & CI/CD',
            description: 'Build, test, and deploy with fully automated pipelines (CI/CD) and Infrastructure as Code (IaC) solutions to accelerate releases safely.',
            link: '/services/devops-automation'
        },
        {
            icon: <FaCloud />,
            title: 'Legacy to Clouds & Private Clouds',
            description: 'Migrate legacy infrastructure to public hyperscalers or secure private clouds, with a focus on region-specific data protection and residency compliance.',
            link: '/services/cloud-migration'
        },
        {
            icon: <FaRocket />,
            title: 'Application Modernization',
            description: 'Transform legacy systems into modern, scalable cloud-native microservices architectures.',
            link: '/services/application-modernization'
        },
        {
            icon: <FaCog />,
            title: 'Deterministic Automation (No-LLM)',
            description: 'Implement local, secure automation agents that operate without LLM interventions, ensuring zero data leakage and 100% predictability.',
            link: '/services/advanced-automation'
        },
        {
            icon: <FaBrain />,
            title: 'L1 Support AI Agents',
            description: 'Deploy autonomous self-hosted AI agents to monitor logs, manage incidents, and resolve tier-1 service alerts in real-time.',
            link: '/services/ai-powered-devops'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Security & DevOps Assessments',
            description: 'Conduct deep assessments of your cloud security posture, zero-trust configurations, and pipeline maturity compliance (SOC2/HIPAA).',
            link: '/services/devsecops'
        }
    ]

    return (
        <div className="page">
            <div className="page-hero">
                <div className="container">
                    <h1>Our Services</h1>
                    <p className="lead">Comprehensive DevOps and Cloud Solutions</p>
                </div>
            </div>

            <div className="container py-16">
                <div className="services-overview-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
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
                                <p>{service.description}</p>
                                <span className="service-arrow">Learn More →</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
