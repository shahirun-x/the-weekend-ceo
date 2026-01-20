import './Section.css'

function Section({
    children,
    className = '',
    variant = 'cream',
    asymmetric = false,
    id,
    ...props
}) {
    return (
        <section
            id={id}
            className={`section section--${variant} ${asymmetric ? 'section--asymmetric' : ''} ${className}`}
            {...props}
        >
            <div className="section__container">
                {children}
            </div>
        </section>
    )
}

export default Section
