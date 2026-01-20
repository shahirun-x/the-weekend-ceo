import Text from './Text'
import './Card.css'

function Card({
    title,
    subtitle,
    description,
    children,
    className = '',
    variant = 'default',
    ...props
}) {
    return (
        <div className={`card card--${variant} ${className}`} {...props}>
            {subtitle && (
                <Text variant="eyebrow" className="card__subtitle">{subtitle}</Text>
            )}
            {title && (
                <Text variant="h3" className="card__title">{title}</Text>
            )}
            {description && (
                <Text variant="body" className="card__description">{description}</Text>
            )}
            {children}
        </div>
    )
}

export default Card
