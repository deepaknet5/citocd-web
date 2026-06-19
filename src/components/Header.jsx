import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
import './Header.css'

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setIsMobileMenuOpen(false)
        setIsServicesOpen(false)
    }, [location])

    const handleNavLinkClick = (to) => {
        if (location.pathname === to) {
            setIsMobileMenuOpen(false)
            setIsServicesOpen(false)
        }
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo" aria-label="CItoCD Home" onClick={() => handleNavLinkClick('/')}>
                        <span className="brand-name" style={{ fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.03em' }}>CItoCD</span>
                    </Link>

                    <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                        <NavLink to="/" className="nav-link" onClick={() => handleNavLinkClick('/')}>
                            Home
                        </NavLink>

                        <div
                            className="nav-dropdown"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button className="nav-link dropdown-toggle" onClick={() => setIsServicesOpen(!isServicesOpen)}>
                                Our Services <FaChevronDown className="dropdown-icon" />
                            </button>

                            <div className={`dropdown-menu ${isServicesOpen ? 'dropdown-open' : ''}`}>
                                <h4 className="dropdown-header">DevOps & Cloud Services</h4>
                                <NavLink to="/services/devops-automation" onClick={() => handleNavLinkClick('/services/devops-automation')}>
                                    DevOps Automation
                                </NavLink>
                                <NavLink to="/services/cloud-migration" onClick={() => handleNavLinkClick('/services/cloud-migration')}>
                                    Cloud Migration
                                </NavLink>
                                <NavLink to="/services/application-modernization" onClick={() => handleNavLinkClick('/services/application-modernization')}>
                                    Application Modernization
                                </NavLink>
                                <NavLink to="/services/advanced-automation" onClick={() => handleNavLinkClick('/services/advanced-automation')}>
                                    Advanced Automation
                                </NavLink>
                                <NavLink to="/services/ai-powered-devops" onClick={() => handleNavLinkClick('/services/ai-powered-devops')}>
                                    AI-Powered DevOps
                                </NavLink>
                                <NavLink to="/services/devsecops" onClick={() => handleNavLinkClick('/services/devsecops')}>
                                    DevSecOps
                                </NavLink>
                            </div>
                        </div>

                        <NavLink to="/clients" className="nav-link" onClick={() => handleNavLinkClick('/clients')}>
                            Our Clients
                        </NavLink>
                        <NavLink to="/about" className="nav-link" onClick={() => handleNavLinkClick('/about')}>
                            About Us
                        </NavLink>
                        <NavLink to="/contact" className="nav-link nav-link-cta" onClick={() => handleNavLinkClick('/contact')}>
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
