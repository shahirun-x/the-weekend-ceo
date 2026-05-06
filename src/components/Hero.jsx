import { useEffect, useRef } from 'react'
import ScrollReveal from './ScrollReveal'
import './Hero.css'

function Hero({
    eyebrow,
    title,
    titleAccent,
    subtitle,
    children,
    short = false,
    fullscreen = false,
    className = ''
}) {
    const heroRef = useRef(null)

    // Subtle parallax drift on mouse movement (desktop only)
    useEffect(() => {
        const el = heroRef.current
        if (!el || window.matchMedia('(max-width: 768px)').matches) return

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e
            const { innerWidth, innerHeight } = window
            const xOffset = ((clientX / innerWidth) - 0.5) * 5
            const yOffset = ((clientY / innerHeight) - 0.5) * 4

            const ambients = el.querySelectorAll('.hero__ambient')
            ambients.forEach((ambient, i) => {
                const factor = i === 0 ? 1 : -0.7
                ambient.style.transform = `translate(${xOffset * factor}px, ${yOffset * factor}px)`
            })
        }

        window.addEventListener('mousemove', handleMouseMove, { passive: true })
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <section ref={heroRef} className={`hero ${short ? 'hero--short' : ''} ${fullscreen ? 'hero--fullscreen' : ''} ${className}`}>
            {/* Environmental lights */}
            <div className="hero__ambient hero__ambient--wine"></div>
            <div className="hero__ambient hero__ambient--blue"></div>

            {/* Showroom spotlight sweep */}
            <div className="hero__spotlight"></div>

            {/* Atmospheric haze layer */}
            <div className="hero__haze"></div>

            {/* Grain */}
            <div className="hero__grain"></div>

            <div className="hero__container">
                <ScrollReveal direction="fade" delay={200}>
                    {eyebrow && <span className="hero__eyebrow">{eyebrow}</span>}
                </ScrollReveal>
                <ScrollReveal direction="up" delay={400}>
                    <h1 className="hero__title">
                        {title}
                        {titleAccent && <span className="hero__title-accent">{titleAccent}</span>}
                    </h1>
                </ScrollReveal>
                {subtitle && (
                    <ScrollReveal direction="up" delay={600}>
                        <p className="hero__subtitle">{subtitle}</p>
                    </ScrollReveal>
                )}
                {children && (
                    <ScrollReveal direction="up" delay={800}>
                        <div className="hero__content">
                            {children}
                        </div>
                    </ScrollReveal>
                )}
            </div>
        </section>
    )
}

export default Hero
