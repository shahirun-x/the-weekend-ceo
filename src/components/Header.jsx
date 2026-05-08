import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/packages', label: 'Packages' },
    { path: '/safety-assurance', label: 'Safety Assurance' },
    { path: '/areas', label: 'Service Locations' },
    { path: '/brand', label: 'Brand Story' },
    { path: '/standards', label: 'Standards' },
]

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location])

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isMobileMenuOpen])

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="header__container">
                <Link to="/" className="header__logo">
                    <img src="/logo.jpg" alt="The Weekend CEO" className="header__logo-img" />
                    <span className="header__logo-text">THE WEEKEND <span>CEO</span></span>
                </Link>

                <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
                    <div className="header__nav-links">
                        {navLinks.map((link, idx) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`header__link ${location.pathname === link.path ? 'header__link--active' : ''}`}
                                style={{ transitionDelay: isMobileMenuOpen ? `${idx * 0.06}s` : '0s' }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <Link to="/appointment" className="header__cta">
                        <span>Request a Slot</span>
                        <div className="header__cta-glow"></div>
                    </Link>
                </nav>

                <button
                    className={`header__mobile-toggle ${isMobileMenuOpen ? 'header__mobile-toggle--open' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    )
}

export default Header
