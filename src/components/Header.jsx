import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
import './Header.css'

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
        setIsServicesOpen(false)
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo" onClick={closeMobileMenu}>
                        <img src="/assets/logd.png" alt="CITOCD Logo" />
                    </Link>

                    <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                        <NavLink to="/" className="nav-link" onClick={closeMobileMenu}>
                            Home
                        </NavLink>

                        <div
                            className="nav-dropdown"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button className="nav-link dropdown-toggle">
                                Our Services <FaChevronDown className="dropdown-icon" />
                            </button>

                            <div className={`dropdown-menu ${isServicesOpen ? 'dropdown-open' : ''}`}>
                                <h4 className="dropdown-header">DevOps & Cloud</h4>
                                <NavLink to="/services/cloud-migration" onClick={closeMobileMenu}>
                                    Cloud Migration
                                </NavLink>
                                <NavLink to="/services/application-modernization" onClick={closeMobileMenu}>
                                    Application Modernization
                                </NavLink>
                                <NavLink to="/services/advanced-automation" onClick={closeMobileMenu}>
                                    Advanced Automation
                                </NavLink>

                                <div className="dropdown-divider"></div>
                                <h4 className="dropdown-header">Business Solutions</h4>
                                <NavLink to="/services/payment-integration" onClick={closeMobileMenu}>
                                    Payment Integration
                                </NavLink>
                                <NavLink to="/services/healthcare-solutions" onClick={closeMobileMenu}>
                                    Healthcare Solutions
                                </NavLink>
                                <NavLink to="/services/whatsapp-marketing" onClick={closeMobileMenu}>
                                    WhatsApp Marketing
                                </NavLink>
                                <NavLink to="/services/attendance-systems" onClick={closeMobileMenu}>
                                    Attendance Systems
                                </NavLink>
                                <NavLink to="/services/lms-solutions" onClick={closeMobileMenu}>
                                    LMS Solutions
                                </NavLink>
                            </div>
                        </div>

                        <NavLink to="/clients" className="nav-link" onClick={closeMobileMenu}>
                            Our Clients
                        </NavLink>
                        <NavLink to="/about" className="nav-link" onClick={closeMobileMenu}>
                            About Us
                        </NavLink>
                        <NavLink to="/contact" className="nav-link nav-link-cta" onClick={closeMobileMenu}>
                            Contact Us
                        </NavLink>
                    </nav>

                    <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
