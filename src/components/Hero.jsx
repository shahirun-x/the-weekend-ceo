import './Hero.css'

function Hero({
    eyebrow,
    title,
    titleAccent,
    subtitle,
    children,
    showLogo = true,
    short = false,
    className = '',
}) {
    return (
        <section className={`hero ${short ? 'hero--short' : ''} ${className}`}>
            <div className="hero__decoration">
                <div className="hero__circle hero__circle--1"></div>
                <div className="hero__circle hero__circle--2"></div>
                <div className="hero__circle hero__circle--3"></div>
            </div>

            <div className="hero__content">
                <div className="hero__text">
                    {eyebrow && (
                        <span className="hero__eyebrow">{eyebrow}</span>
                    )}
                    {title && (
                        <h1 className="hero__title">
                            {title}
                            {titleAccent && (
                                <span className="hero__title-accent">{titleAccent}</span>
                            )}
                        </h1>
                    )}
                    {subtitle && (
                        <p className="hero__subtitle">{subtitle}</p>
                    )}
                    {children && (
                        <div className="hero__actions">
                            {children}
                        </div>
                    )}
                </div>

                {showLogo && (
                    <div className="hero__logo-wrapper">
                        <img src="/logo.jpg" alt="The Weekend CEO" className="hero__logo" />
                    </div>
                )}
            </div>
        </section>
    )
}

export default Hero
