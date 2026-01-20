import { Link } from 'react-router-dom'
import './Button.css'

function Button({
    children,
    variant = 'primary',
    to,
    href,
    className = '',
    ...props
}) {
    const classNames = `button button--${variant} ${className}`

    if (to) {
        return (
            <Link to={to} className={classNames} {...props}>
                {children}
            </Link>
        )
    }

    if (href) {
        return (
            <a href={href} className={classNames} {...props}>
                {children}
            </a>
        )
    }

    return (
        <button className={classNames} {...props}>
            {children}
        </button>
    )
}

export default Button
