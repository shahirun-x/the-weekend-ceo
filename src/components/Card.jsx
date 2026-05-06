import './Card.css'

function Card({ children, className = '', variant = 'default', glow = false, ...props }) {
    return (
        <div className={`card card--${variant} ${glow ? 'card--glow' : ''} ${className}`} {...props}>
            {children}
        </div>
    )
}

export default Card
