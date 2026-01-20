import './Card.css'

function Card({
    title,
    eyebrow,
    description,
    number,
    children,
    className = '',
    variant = 'default',
    ...props
}) {
    return (
        <div className={`card card--${variant} ${className}`} {...props}>
            {number && <span className="card__number">{number}</span>}
            {eyebrow && <span className="card__eyebrow">{eyebrow}</span>}
            {title && <h3 className="card__title">{title}</h3>}
            {description && <p className="card__description">{description}</p>}
            {children}
        </div>
    )
}

export default Card
