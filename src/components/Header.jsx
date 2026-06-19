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
                    <Link to="/" className="logo" onClick={closeMobileMenu} aria-label="CItoCD Home">
                        <span className="brand-name" style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.03em' }}>CItoCD</span>
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
                                <h4 className="dropdown-header">DevOps & Cloud Services</h4>
                                <NavLink to="/services/devops-automation" onClick={closeMobileMenu}>
                                    DevOps Automation
                                </NavLink>
                                <NavLink to="/services/cloud-migration" onClick={closeMobileMenu}>
                                    Cloud Migration
                                </NavLink>
                                <NavLink to="/services/application-modernization" onClick={closeMobileMenu}>
                                    Application Modernization
                                </NavLink>
                                <NavLink to="/services/advanced-automation" onClick={closeMobileMenu}>
                                    Advanced Automation
                                </NavLink>
                                <NavLink to="/services/ai-powered-devops" onClick={closeMobileMenu}>
                                    AI-Powered DevOps
                                </NavLink>
                                <NavLink to="/services/devsecops" onClick={closeMobileMenu}>
                                    DevSecOps
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
