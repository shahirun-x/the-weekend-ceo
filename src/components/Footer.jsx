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
                            No ordinary touches. Only the CEO's touch.
                        </p>
                        <p className="footer__tagline footer__tagline--muted">
                            Limited to 96 cars per year.
                        </p>
                    </div>

                    <div className="footer__nav-group">
                        <span className="footer__nav-title">Navigate</span>
                        <Link to="/" className="footer__link">Home</Link>
                        <Link to="/packages" className="footer__link">Packages</Link>
                        <Link to="/gallery" className="footer__link">Gallery</Link>
                        <Link to="/stories" className="footer__link">96 Stories</Link>
                        <Link to="/brand" className="footer__link">About</Link>
                    </div>

                    <div className="footer__nav-group">
                        <span className="footer__nav-title">Company</span>
                        <Link to="/standards" className="footer__link">Standards</Link>
                        <Link to="/safety-assurance" className="footer__link">Safety</Link>
                        <Link to="/areas" className="footer__link">Locations</Link>
                        <Link to="/faq" className="footer__link">FAQ</Link>
                        <Link to="/blog" className="footer__link">Blog</Link>
                    </div>

                    <div className="footer__nav-group">
                        <span className="footer__nav-title">Connect</span>
                        <Link to="/contact" className="footer__link">Contact</Link>
                        <Link to="/appointment" className="footer__link">Book Now</Link>
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
                        Crafted without shortcuts.
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
