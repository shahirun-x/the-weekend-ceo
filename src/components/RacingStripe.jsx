import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './RacingStripe.css'

function RacingStripe() {
    const [scrollProgress, setScrollProgress] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY
            const max = document.documentElement.scrollHeight - window.innerHeight
            setScrollProgress(max > 0 ? Math.min(y / max, 1) : 0)
            setIsVisible(y > 80)
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const visClass = isVisible ? 'rs--visible' : ''

    return (
        <>
            {/* ── Desktop / Tablet: Fixed vertical rail ─────────── */}
            <div className={`rs-track ${visClass}`} aria-hidden="true">
                <div className="rs-track__surface">
                    {/* End cap dots — precision mounting points */}
                    <div className="rs-track__cap rs-track__cap--top"></div>
                    <div className="rs-track__cap rs-track__cap--bottom"></div>
                    {/* Blue reflective edge */}
                    <div className="rs-track__blue-edge"></div>
                    {/* Graphite body highlight */}
                    <div className="rs-track__highlight"></div>
                    {/* Wine-red illuminated center stripe */}
                    <div className="rs-track__center"></div>
                    {/* Scanning light sweep */}
                    <div className="rs-track__sweep"></div>
                    {/* Scroll fill — progress indicator */}
                    <div
                        className="rs-track__fill"
                        style={{ height: `${scrollProgress * 100}%` }}
                    ></div>
                </div>
                {/* Ambient glow emitted behind track */}
                <div className="rs-track__ambient"></div>
            </div>

            {/* ── Badge: precision motorsport plaque ────────────── */}
            <Link
                to="/stories"
                className={`rs-badge ${visClass}`}
                aria-label="96 Stories League — Explore all car stories"
            >
                <span className="rs-badge__num">96</span>
                <span className="rs-badge__rule"></span>
                <span className="rs-badge__stories">Stories</span>
                <span className="rs-badge__league">League</span>
            </Link>

            {/* ── Mobile: Compact floating pill ─────────────────── */}
            <Link
                to="/stories"
                className="rs-mobile"
                aria-label="96 Stories League"
            >
                <div className="rs-mobile__accent"></div>
                <span className="rs-mobile__num">96</span>
                <div className="rs-mobile__sep"></div>
                <div className="rs-mobile__text">
                    <span className="rs-mobile__title">Stories League</span>
                    <span className="rs-mobile__sub">Limited · 96 Cars</span>
                </div>
            </Link>
        </>
    )
}

export default RacingStripe
