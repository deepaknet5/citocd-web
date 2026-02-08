import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    FaCloud, FaRocket, FaCog, FaBrain, FaShieldAlt
} from 'react-icons/fa'
import './SharedPages.css'

function Services() {
    const services = [
        {
            icon: <FaCloud />,
            title: 'Cloud Migration',
            description: 'Seamless migration to AWS, Azure, and Google Cloud with zero downtime and optimized costs.',
            link: '/services/cloud-migration',
            color: '#3498DB'
        },
        {
            icon: <FaRocket />,
            title: 'Application Modernization',
            description: 'Transform legacy systems into modern, scalable cloud-native microservices architectures.',
            link: '/services/application-modernization',
            color: '#9B59B6'
        },
        {
            icon: <FaCog />,
            title: 'Advanced Automation',
            description: 'Streamline workflows with CI/CD pipelines, Infrastructure as Code, and intelligent automation.',
            link: '/services/advanced-automation',
            color: '#E67E22'
        },
        {
            icon: <FaBrain />,
            title: 'AI-Powered DevOps',
            description: 'Intelligent automation, predictive analytics, and self-healing systems using AI/ML.',
            link: '/services/ai-powered-devops',
            color: '#8E44AD'
        },
        {
            icon: <FaShieldAlt />,
            title: 'DevSecOps',
            description: 'Security-first approach with automated testing, compliance, and zero-trust architecture.',
            link: '/services/devsecops',
            color: '#27AE60'
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
                                <div className="service-detail-icon" style={{ background: service.color }}>
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
