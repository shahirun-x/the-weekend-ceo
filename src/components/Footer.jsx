import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            {/* Ambient top edge glow */}
            <div className="footer__ambient-edge"></div>

            <div className="footer__container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <img src="/logo.jpg" alt="The Weekend CEO" className="footer__logo-img" />
                            <span className="footer__logo-text">THE WEEKEND <span>CEO</span></span>
                        </div>
                        <p className="footer__tagline">
                            By appointment. By commitment. Beyond location.
                        </p>
                        <p className="footer__tagline footer__tagline--muted">
                            Where the standard travels — not the car.
                        </p>
                    </div>

                    <div className="footer__nav-group">
                        <span className="footer__nav-title">Navigate</span>
                        <Link to="/" className="footer__link">Home</Link>
                        <Link to="/packages" className="footer__link">Packages</Link>
                        <Link to="/safety-assurance" className="footer__link">Safety Assurance</Link>
                        <Link to="/areas" className="footer__link">Service Locations</Link>
                        <Link to="/brand" className="footer__link">Brand Story</Link>
                    </div>

                    <div className="footer__nav-group">
                        <span className="footer__nav-title">Company</span>
                        <Link to="/standards" className="footer__link">Standards</Link>
                        <Link to="/stories" className="footer__link">96 Stories</Link>
                        <Link to="/contact" className="footer__link">Contact Us</Link>
                    </div>

                    <div className="footer__nav-group">
                        <span className="footer__nav-title">Connect</span>
                        <Link to="/contact" className="footer__link">Contact Us</Link>
                        <Link to="/appointment" className="footer__link">Request a Slot</Link>
                        <a href="#" className="footer__link">Instagram</a>
                        <a href="#" className="footer__link">YouTube</a>
                    </div>
                </div>

                <div className="footer__divider"></div>

                {/* Brand monogram */}
                <div className="footer__monogram">
                    <span className="footer__monogram-text">KA</span>
                </div>

                <div className="footer__bottom">
                    <span className="footer__copyright">
                        © 2026 The Weekend CEO. All rights reserved.
                    </span>
                    <span className="footer__legal">
                        Founder Led Luxury Automotive Craftmanship
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
