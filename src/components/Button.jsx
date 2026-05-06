import { Link } from 'react-router-dom'
import './Button.css'

function Button({
    children,
    to,
    variant = 'primary', // primary, secondary, ghost, glass
    className = '',
    type = 'button',
    disabled = false,
    onClick,
    ...props
}) {
    const classes = `btn btn--${variant} ${className} ${disabled ? 'btn--disabled' : ''}`

    if (to) {
        return (
            <Link to={to} className={classes} {...props}>
                <span className="btn__text">{children}</span>
                <span className="btn__glow"></span>
            </Link>
        )
    }

    return (
        <button type={type} className={classes} disabled={disabled} onClick={onClick} {...props}>
            <span className="btn__text">{children}</span>
            <span className="btn__glow"></span>
        </button>
    )
}

export default Button
