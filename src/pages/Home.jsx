import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
    FaCloud, FaRocket, FaCog, FaBrain, FaShieldAlt,
    FaChartLine, FaRobot, FaUsers, FaGlobe,
    FaChevronDown, FaChevronUp, FaServer, FaCheckCircle, FaLock
} from 'react-icons/fa'
import { SiAmazonwebservices, SiDocker, SiKubernetes } from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'
import './Home.css'

function Home() {
    const [activeFaq, setActiveFaq] = useState(null)

    const toggleFaq = (index) => {
        if (activeFaq === index) {
            setActiveFaq(null)
        } else {
            setActiveFaq(index)
        }
    }

    const services = [
        {
            icon: <FaShieldAlt />,
            title: 'Security & DevOps Assessments',
            description: <>Conduct deep assessments of your cloud security posture, zero-trust configurations, and pipeline maturity compliance (SOC2/HIPAA) to prevent critical security <span className="text-blood-red text-uppercase-bold">BREACHES</span>.</>,
            link: '/services/devsecops'
        },
        {
            icon: <FaRobot />,
            title: 'L1 Support AI Agents',
            description: <>Deploy autonomous self-hosted <span className="text-blood-red text-uppercase-bold">AI agents</span> to monitor logs, manage incidents, and resolve tier-1 service alerts in real-time.</>,
            link: '/services/ai-powered-devops'
        },
        {
            icon: <FaCloud />,
            title: 'Legacy to Clouds & Private Clouds',
            description: <>Migrate legacy infrastructure to public hyperscalers or secure private clouds, with a focus on region-specific <span className="text-blood-red text-uppercase-bold">data protection</span> and residency compliance.</>,
            link: '/services/cloud-migration'
        }
    ]

    const features = [
        {
            icon: <FaUsers />,
            title: 'Upgrade L1 Engineers',
            description: 'Free your entry-level engineers from repetitive tasks. Our agents handle L1 while your team focuses on high-value engineering.'
        },
        {
            icon: <FaGlobe />,
            title: 'WORLDWIDE DELIVERY',
            description: 'Proven track record of delivering high-quality DevSecOps architectures for private, government, and mid-to-large enterprises globally.'
        },
        {
            icon: <FaCog />,
            title: 'Custom CI/CD Workflows',
            description: 'Highly customized, automated CI/CD pipelines designed for maximum agility and zero-downtime deployments.'
        },
        {
            icon: <FaChartLine />,
            title: 'GUARANTEED ROI',
            description: 'Reduce operational costs by replacing process delays with instant, automated resolutions.'
        }
    ]

    const trustBadges = [
        "FINTECH & BANKING", "GOVERNMENT CLOUD", "HEALTHCARE SAAS", "ENTERPRISE TELECOM", "AI LABS"
    ]

    const metrics = [
        { value: "99.99%", label: "Uptime SLA Guaranteed", description: "Architected for high availability and instant self-healing." },
        { value: "10x", label: "Deployment Velocity", description: "Accelerated release cycles from days to minutes safely." },
        { value: "65%", label: "Cost Optimization", description: "Average reduction in enterprise cloud infrastructure spend." },
        { value: "100%", label: "Zero-Trust Security", description: "Fully compliant with SOC2, ISO 27001, and HIPAA protocols." }
    ]

    const steps = [
        {
            num: "01",
            title: "Audit & Analysis",
            desc: "We analyze your active pipelines, identify deployment bottlenecks, and audit L1 operational overhead."
        },
        {
            num: "02",
            title: "Architecture Blueprint",
            desc: "We design a zero-trust architecture outline incorporating modern containerization and IaC plans."
        },
        {
            num: "03",
            title: "Pipeline Automation",
            desc: "Our engineers build secure, containerized CI/CD pipelines and provision infrastructure with code."
        },
        {
            num: "04",
            title: "Self-Healing Deployment",
            desc: "We integrate proprietary self-hosted AI agents to automatically resolve L1 issues in real-time."
        }
    ]

    const faqs = [
        {
            q: "How do self-hosted AI agents work?",
            a: "Our proprietary AI agents run securely within your VPC. They continuously monitor logs, identify anomalous behavior, and automatically execute safe, pre-approved runbooks to resolve L1 issues instantly without human intervention."
        },
        {
            q: <>Which cloud platforms does <span className="brand-name">CItoCD</span> support?</>,
            a: "We provide full support for AWS, Microsoft Azure, Google Cloud Platform (GCP), and hybrid/on-premise environments running Docker and Kubernetes."
        },
        {
            q: <>How does <span className="brand-name">CItoCD</span> ensure security and compliance?</>,
            a: <><span className="brand-name">CItoCD</span> prioritizes security at every level. We implement zero-trust access controls, integrate automated vulnerability scanning (SAST/DAST) directly into CI/CD pipelines, and align with industry standards including SOC2, ISO 27001, and HIPAA.</>
        },
        {
            q: "What is the typical timeline for an enterprise migration?",
            a: "Timelines vary depending on infrastructure complexity. A standard migration and pipeline overhaul typically takes 4 to 8 weeks, with zero downtime guaranteed during the transition."
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
                                Revolutionizing <span className="text-blood-red text-uppercase-bold">DEVSECOPS</span>
                            </h1>
                            <h2 className="hero-subtitle">
                                Replace L1 <span className="text-blood-red text-uppercase-bold">INEFFICIENCIES</span> with Automated Self-Hosted Agents
                            </h2>
                            <p className="hero-description">
                                Stop wasting time on manual processes. We empower worldwide enterprises by eliminating costly <span className="text-blood-red text-uppercase-bold">DOWNTIME</span>, automating pipelines, and deploying self-healing AI agents for real-time operations.
                            </p>
                            <div className="hero-cta">
                                <Link to="/contact" className="btn btn-primary">
                                    Get a Quote
                                </Link>
                                <Link to="/services" className="btn btn-outline">
                                    Explore Solutions
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
                                <div className="glow-sphere"></div>
                                <div className="floating-card c1">
                                    <FaRobot className="card-icon" />
                                    <span className="text-uppercase-bold">AI AGENTS ACTIVE</span>
                                </div>
                                <div className="floating-card c2 card-red">
                                    <FaShieldAlt className="card-icon" />
                                    <span className="text-uppercase-bold">ZERO-TRUST SECURITY</span>
                                </div>
                                <div className="floating-card c3">
                                    <FaRocket className="card-icon" />
                                    <span>Zero Downtime</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trust Banner */}
            <section className="trust-banner">
                <div className="container">
                    <p className="trust-title">TRUSTED BY LEADING ENGINEERING TEAMS IN HIGH-VALUE SECTORS</p>
                    <div className="trust-grid">
                        {trustBadges.map((badge, idx) => (
                            <span key={idx} className={`trust-badge ${idx === 0 || idx === 4 ? 'badge-red' : ''}`}>
                                <span className="text-blood-red">{badge[0]}</span>{badge.slice(1)}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section services-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="section-header"
                    >
                        <h2>Next-<span className="text-blood-red">G</span>en <span className="text-gradient"><span className="text-blood-red">C</span>apabilities</span></h2>
                        <p className="section-description">
                            Delivering enterprise-grade solutions for private, government, and Fortune 500 companies.
                        </p>
                    </motion.div>

                    <div className="grid-3">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link to={service.link} className="glass-card service-card">
                                    <div className="service-icon">
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

            {/* Performance Metrics Section */}
            <section className="section metrics-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="section-header"
                    >
                        <h2><span className="brand-name">CItoCD</span> by the <span className="text-gradient"><span className="text-blood-red">N</span>umbers</span></h2>
                        <p className="section-description">
                            Our automated architectures and AI agents generate tangible business impact globally.
                        </p>
                    </motion.div>

                    <div className="grid-4 metrics-grid">
                        {metrics.map((metric, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="glass-card metric-card"
                            >
                                <div className="metric-value">{metric.value}</div>
                                <h3>{metric.label}</h3>
                                <p>{metric.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section features-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="section-header"
                    >
                        <h2>Why Partner With <span className="brand-name">CItoCD</span>?</h2>
                        <p className="section-description">
                            We don't just maintain your infrastructure; we upgrade your entire engineering methodology.
                        </p>
                    </motion.div>

                    <div className="grid-2">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card feature-card"
                            >
                                <div className="feature-icon">{feature.icon}</div>
                                <div className="feature-content">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DevOps Integration Stack Section */}
            <section className="section integrations-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="section-header"
                    >
                        <h2>Supported <span className="text-gradient text-uppercase-bold">INFRASTRUCTURE</span></h2>
                        <p className="section-description">
                            <span className="brand-name">CItoCD</span> integrates seamlessly with industry-standard DevOps and cloud platforms to deliver <span className="text-blood-red text-uppercase-bold">ROBUST</span>, secure automation.
                        </p>
                    </motion.div>

                    <div className="grid-4 integrations-grid">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="glass-card integration-card aws-card"
                        >
                            <div className="integration-icon-container">
                                <SiAmazonwebservices className="integration-icon" />
                            </div>
                            <h3>AWS</h3>
                            <p>Deploy secure, multi-region architectures, serverless workloads, and optimize costs with AWS Well-Architected guidelines.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="glass-card integration-card azure-card"
                        >
                            <div className="integration-icon-container">
                                <VscAzure className="integration-icon" />
                            </div>
                            <h3>Azure</h3>
                            <p>Architect robust hybrid cloud deployments, enterprise Active Directory integrations, and reliable backup pipelines.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="glass-card integration-card docker-card"
                        >
                            <div className="integration-icon-container">
                                <SiDocker className="integration-icon" />
                            </div>
                            <h3>Docker</h3>
                            <p>Standardize application environments with lightweight container isolation, ensuring parity across staging and production.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="glass-card integration-card kubernetes-card"
                        >
                            <div className="integration-icon-container">
                                <SiKubernetes className="integration-icon" />
                            </div>
                            <h3>Kubernetes</h3>
                            <p>Orchestrate container deployments with self-healing clusters, auto-scaling, and rolling updates with zero-downtime.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Step-by-Step Methodology Timeline */}
            <section className="section steps-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="section-header"
                    >
                        <h2>Our <span className="text-gradient text-uppercase-bold"><span className="text-blood-red">M</span>ETHODOLOGY</span></h2>
                        <p className="section-description">
                            How we audit, design, build, and deploy self-healing architectures for your team.
                        </p>
                    </motion.div>

                    <div className="steps-container">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="step-item"
                            >
                                <div className="step-num">{step.num}</div>
                                <div className="step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive FAQ Accordion */}
            <section className="section faq-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="section-header"
                    >
                        <h2>Frequently Asked <span className="text-gradient text-uppercase-bold"><span className="text-blood-red">Q</span>UESTIONS</span></h2>
                        <p className="section-description">
                            Clear answers to questions regarding our AI agents, compliance protocols, and platform onboarding.
                        </p>
                    </motion.div>

                    <div className="faq-accordion">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className={`faq-item ${activeFaq === idx ? 'active' : ''}`} onClick={() => toggleFaq(idx)}>
                                <div className="faq-question">
                                    <h3>{faq.q}</h3>
                                    <span className="faq-toggle">
                                        {activeFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
                                    </span>
                                </div>
                                <AnimatePresence initial={false}>
                                    {activeFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="faq-answer-wrapper"
                                        >
                                            <p className="faq-answer">{faq.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card cta-card"
                    >
                        <h2>Ready to Automate Your World?</h2>
                        <p>Let's discuss how our self-hosted agents can instantly resolve system <span className="text-blood-red text-uppercase-bold">FAILURES</span>, improve your delivery quality, and free up your engineering team.</p>
                        <div className="cta-buttons mt-8">
                            <Link to="/contact" className="btn btn-primary">
                                Connect With Our Experts
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Home
