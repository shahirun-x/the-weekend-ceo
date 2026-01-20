import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <img src="/logo.jpg" alt="The Weekend CEO" className="footer__logo-img" />
                            <span className="footer__logo-text">The Weekend <span>CEO</span></span>
                        </div>
                        <p className="footer__tagline">
                            No ordinary touches. Only the CEO's touch. For those who refuse the ordinary.
                        </p>
                    </div>

                    <div className="footer__nav-group">
                        <span className="footer__nav-title">Navigate</span>
                        <Link to="/" className="footer__link">Home</Link>
                        <Link to="/brand" className="footer__link">Brand</Link>
                        <Link to="/services" className="footer__link">Services</Link>
                        <Link to="/gallery" className="footer__link">Gallery</Link>
                    </div>

                    <div className="footer__nav-group">
                        <span className="footer__nav-title">Connect</span>
                        <Link to="/areas" className="footer__link">Service Areas</Link>
                        <Link to="/appointment" className="footer__link">Book Appointment</Link>
                        <a href="mailto:hello@theweekendceo.in" className="footer__link">Email Us</a>
                    </div>
                </div>

                <div className="footer__bottom">
                    <span className="footer__copyright">
                        © {currentYear} The Weekend CEO. All rights reserved.
                    </span>
                    <div className="footer__social">
                        <a href="#" className="footer__social-link" aria-label="Instagram">📸</a>
                        <a href="#" className="footer__social-link" aria-label="YouTube">▶️</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
