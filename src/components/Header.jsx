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
    { path: '/stories', label: '96 Stories', isSpecial: true },
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

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="header__container">
                <Link to="/" className="header__logo">
                    <img src="/logo.jpg" alt="The Weekend CEO" className="header__logo-img" />
                    <span className="header__logo-text">The Weekend <span>CEO</span></span>
                </Link>

                <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`header__link ${location.pathname === link.path ? 'header__link--active' : ''} ${link.isSpecial ? 'header__link--special' : ''}`}
                        >
                            {link.isSpecial && <span className="header__link-dot"></span>}
                            {link.label}
                        </Link>
                    ))}
                    <Link to="/appointment" className="header__cta">
                        Request a Slot
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
