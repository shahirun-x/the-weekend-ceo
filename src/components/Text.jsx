import './Text.css'

function Text({ children, variant = 'body', className = '', ...props }) {
    const tags = {
        h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4',
        body: 'p', large: 'p', caption: 'span', eyebrow: 'span', accent: 'p'
    }

    const Tag = tags[variant] || 'p'

    return (
        <Tag className={`text text--${variant} ${className}`} {...props}>
            {children}
        </Tag>
    )
}

export default Text
