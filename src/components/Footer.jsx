import { Link } from 'react-router-dom'
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import './Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Company Info */}
                    <div className="footer-section">
                        <div className="footer-logo-container" style={{ marginBottom: 'var(--space-4)' }}>
                            <span className="brand-name" style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.03em' }}>CItoCD</span>
                        </div>
                        <p className="footer-description">
                            Revolutionizing DevOps with cutting-edge CI/CD solutions, cloud infrastructure, AI-powered automation, and security-first DevSecOps practices.
                        </p>
                        <div className="social-links">
                            {/* Replace with your actual marketing/social links when ready */}
                            <a href="https://www.linkedin.com/company/citocd" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Page">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://chat.whatsapp.com/YOUR_COMMUNITY_LINK" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Community">
                                <FaWhatsapp />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    {/* DevOps & Cloud Services */}
                    <div className="footer-section">
                        <h4>DevOps & Cloud Services</h4>
                        <ul>
                            <li><Link to="/services/devops-automation">DevOps Automation</Link></li>
                            <li><Link to="/services/cloud-migration">Cloud Migration</Link></li>
                            <li><Link to="/services/application-modernization">Application Modernization</Link></li>
                            <li><Link to="/services/advanced-automation">Advanced Automation</Link></li>
                            <li><Link to="/services/ai-powered-devops">AI-Powered DevOps</Link></li>
                            <li><Link to="/services/devsecops">DevSecOps</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/clients">Our Clients</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <ul className="contact-info">
                            <li>
                                <a href="mailto:accounts@citocd.com" className="contact-info-link">
                                    <FaEnvelope className="contact-icon" />
                                    <span>accounts@CItoCD.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://api.whatsapp.com/send?phone=919746669944" target="_blank" rel="noopener noreferrer" className="contact-info-link">
                                    <FaWhatsapp className="contact-icon" />
                                    <span>WhatsApp Support</span>
                                </a>
                            </li>
                        </ul>
                        <Link to="/contact" className="btn btn-primary btn-sm">
                            Get in Touch
                        </Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} <span className="brand-name" style={{ fontSize: '1rem' }}>CItoCD</span>. All rights reserved.</p>
                    <div className="footer-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <span className="separator">•</span>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
