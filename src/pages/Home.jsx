import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
    FaCloud, FaRocket, FaCog, FaBrain, FaShieldAlt,
    FaChartLine, FaClock, FaUsers
} from 'react-icons/fa'
import './Home.css'

function Home() {
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

    const features = [
        {
            icon: <FaChartLine />,
            title: 'Cloud Agility',
            description: 'Multi-cloud support ensuring scalability, flexibility, and cost optimization.'
        },
        {
            icon: <FaUsers />,
            title: 'Collaborative DevOps',
            description: 'Seamless team collaboration with integrated workflows and automated communication.'
        },
        {
            icon: <FaCog />,
            title: 'Intelligent Automation',
            description: 'AI-powered automation that streamlines workflows and eliminates manual tasks.'
        },
        {
            icon: <FaClock />,
            title: 'Faster Time-to-Market',
            description: 'Accelerate product delivery with automated CI/CD pipelines and DevOps best practices.'
        },
        {
            icon: <FaRocket />,
            title: 'Scalable Infrastructure',
            description: 'Resilient, auto-scaling cloud infrastructure tailored for enterprise growth.'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Security First',
            description: 'DevSecOps practices with automated security testing, compliance, and vulnerability management.'
        }
    ]

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="hero-text"
                        >
                            <h1 className="hero-title">
                                CI-to-CD: <span className="text-primary">Revolutionizing DevOps</span>
                            </h1>
                            <h2 className="hero-subtitle">
                                Enterprise Cloud & DevOps Excellence
                            </h2>
                            <p className="hero-description">
                                Accelerate. Secure. Optimize. <br />
                                Empowering enterprises with cutting-edge DevOps practices, cloud infrastructure, AI-powered automation, and security-first DevSecOps solutions.
                            </p>
                            <div className="hero-cta">
                                <Link to="/contact" className="btn btn-primary btn-lg">
                                    Get Started
                                </Link>
                                <Link to="/services" className="btn btn-outline btn-lg">
                                    Explore Services
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hero-image"
                        >
                            <div className="hero-visual">
                                <div className="floating-card">
                                    <FaRocket className="card-icon" />
                                    <span>Fast Deployment</span>
                                </div>
                                <div className="floating-card">
                                    <FaShieldAlt className="card-icon" />
                                    <span>DevSecOps</span>
                                </div>
                                <div className="floating-card">
                                    <FaBrain className="card-icon" />
                                    <span>AI-Powered</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="services-section py-20 bg-gray">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="section-header"
                    >
                        <h2>Our DevOps & Cloud Services</h2>
                        <p className="section-description">
                            Comprehensive solutions for modern DevOps practices, cloud infrastructure, and secure delivery
                        </p>
                    </motion.div>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link to={service.link} className="service-card">
                                    <div className="service-icon" style={{ background: service.color }}>
                                        {service.icon}
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <span className="service-arrow">→</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section py-20">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="section-header"
                    >
                        <h2>Why Choose CITOCD?</h2>
                        <p className="section-description">
                            Discover what sets us apart in delivering world-class DevOps and Cloud solutions
                        </p>
                    </motion.div>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="feature-card"
                            >
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section py-20">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="cta-card glass"
                    >
                        <h2>Ready to Transform Your DevOps?</h2>
                        <p>Let's discuss how we can accelerate your digital transformation journey with cloud and DevOps excellence.</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Contact Us
                            </Link>
                            <Link to="/clients" className="btn btn-secondary btn-lg">
                                View Our Clients
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Home
