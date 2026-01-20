import Text from './Text'
import './Hero.css'

function Hero({
    eyebrow,
    title,
    subtitle,
    children,
    className = '',
    fullHeight = true,
    ...props
}) {
    return (
        <section className={`hero ${fullHeight ? 'hero--full' : ''} ${className}`} {...props}>
            <div className="hero__overlay"></div>
            <div className="hero__content">
                {eyebrow && (
                    <Text variant="eyebrow" className="hero__eyebrow">{eyebrow}</Text>
                )}
                {title && (
                    <Text variant="h1" className="hero__title">{title}</Text>
                )}
                {subtitle && (
                    <Text variant="accent" as="p" className="hero__subtitle">{subtitle}</Text>
                )}
                {children}
            </div>
        </section>
    )
}

export default Hero
