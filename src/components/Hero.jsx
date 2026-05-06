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
    return (
        <section className={`hero ${short ? 'hero--short' : ''} ${fullscreen ? 'hero--fullscreen' : ''} ${className}`}>
            <div className="hero__ambient hero__ambient--wine"></div>
            <div className="hero__ambient hero__ambient--blue"></div>
            <div className="hero__grain"></div>

            <div className="hero__container">
                <ScrollReveal direction="fade" delay={100}>
                    {eyebrow && <span className="hero__eyebrow">{eyebrow}</span>}
                </ScrollReveal>
                <ScrollReveal direction="up" delay={200}>
                    <h1 className="hero__title">
                        {title}
                        {titleAccent && <span className="hero__title-accent">{titleAccent}</span>}
                    </h1>
                </ScrollReveal>
                {subtitle && (
                    <ScrollReveal direction="up" delay={350}>
                        <p className="hero__subtitle">{subtitle}</p>
                    </ScrollReveal>
                )}
                {children && (
                    <ScrollReveal direction="up" delay={500}>
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
