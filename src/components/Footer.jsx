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
                        <img src="/assets/logo.png" alt="CITOCD" className="footer-logo" />
                        <p className="footer-description">
                            Revolutionizing DevOps with cutting-edge CI/CD solutions, cloud migration, and innovative business automation.
                        </p>
                        <div className="social-links">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul>
                            <li><Link to="/services/cloud-migration">Cloud Migration</Link></li>
                            <li><Link to="/services/application-modernization">Application Modernization</Link></li>
                            <li><Link to="/services/advanced-automation">Advanced Automation</Link></li>
                            <li><Link to="/services/payment-integration">Payment Integration</Link></li>
                            <li><Link to="/services/healthcare-solutions">Healthcare Solutions</Link></li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div className="footer-section">
                        <h4>Solutions</h4>
                        <ul>
                            <li><Link to="/services/whatsapp-marketing">WhatsApp Marketing</Link></li>
                            <li><Link to="/services/attendance-systems">Attendance Systems</Link></li>
                            <li><Link to="/services/lms-solutions">LMS Solutions</Link></li>
                            <li><Link to="/clients">Our Clients</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <ul className="contact-info">
                            <li>
                                <FaEnvelope className="contact-icon" />
                                <a href="mailto:accounts@citocd.com">accounts@citocd.com</a>
                            </li>
                            <li>
                                <FaWhatsapp className="contact-icon" />
                                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">WhatsApp Support</a>
                            </li>
                        </ul>
                        <Link to="/contact" className="btn btn-primary btn-sm">
                            Get in Touch
                        </Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} CITOCD. All rights reserved.</p>
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
