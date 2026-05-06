import './Section.css'

function Section({ children, variant = 'dark', className = '', id, ...props }) {
    return (
        <section
            className={`section section--${variant} ${className}`}
            id={id}
            {...props}
        >
            <div className="section__container">
                {children}
            </div>
        </section>
    )
}

export default Section
