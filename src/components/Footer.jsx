import { Link } from 'react-router-dom'
import Text from './Text'
import './Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <span className="footer__logo-text">The Weekend</span>
                            <span className="footer__logo-accent">CEO</span>
                        </div>
                        <Text variant="accent" className="footer__tagline">
                            No ordinary touches. Only the CEO's touch.
                        </Text>
                    </div>

                    <nav className="footer__nav">
                        <div className="footer__nav-group">
                            <Text variant="eyebrow" className="footer__nav-title">Navigate</Text>
                            <Link to="/" className="footer__link">Home</Link>
                            <Link to="/brand" className="footer__link">Brand</Link>
                            <Link to="/services" className="footer__link">Services</Link>
                        </div>
                        <div className="footer__nav-group">
                            <Text variant="eyebrow" className="footer__nav-title">Explore</Text>
                            <Link to="/areas" className="footer__link">Service Areas</Link>
                            <Link to="/gallery" className="footer__link">Gallery</Link>
                            <Link to="/appointment" className="footer__link">Request Appointment</Link>
                        </div>
                    </nav>
                </div>

                <div className="footer__bottom">
                    <Text variant="caption">
                        © {currentYear} The Weekend CEO. All rights reserved.
                    </Text>
                    <Text variant="caption">
                        Premium Automotive Detailing
                    </Text>
                </div>
            </div>
        </footer>
    )
}

export default Footer
