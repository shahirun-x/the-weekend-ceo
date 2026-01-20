import './Text.css'

const variantConfig = {
    h1: { tag: 'h1', className: 'text-h1' },
    h2: { tag: 'h2', className: 'text-h2' },
    h3: { tag: 'h3', className: 'text-h3' },
    body: { tag: 'p', className: 'text-body' },
    accent: { tag: 'span', className: 'text-accent-style' },
    caption: { tag: 'span', className: 'text-caption' },
    eyebrow: { tag: 'span', className: 'text-eyebrow' },
    impact: { tag: 'span', className: 'text-impact' },
}

function Text({ variant = 'body', children, className = '', as, color, ...props }) {
    const config = variantConfig[variant] || variantConfig.body
    const Tag = as || config.tag
    const colorClass = color ? `text-${color}` : ''

    return (
        <Tag className={`${config.className} ${colorClass} ${className}`} {...props}>
            {children}
        </Tag>
    )
}

export default Text
