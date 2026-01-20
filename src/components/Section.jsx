import './Section.css'

function Section({
    children,
    className = '',
    dark = false,
    id,
    ...props
}) {
    return (
        <section
            id={id}
            className={`section ${dark ? 'section--dark' : ''} ${className}`}
            {...props}
        >
            <div className="section__container">
                {children}
            </div>
        </section>
    )
}

export default Section
