import './Text.css'

const variantConfig = {
    h1: { tag: 'h1', className: 'text-h1' },
    h2: { tag: 'h2', className: 'text-h2' },
    h3: { tag: 'h3', className: 'text-h3' },
    body: { tag: 'p', className: 'text-body' },
    accent: { tag: 'span', className: 'text-accent-style' },
    caption: { tag: 'span', className: 'text-caption' },
    eyebrow: { tag: 'span', className: 'text-eyebrow' },
}

function Text({ variant = 'body', children, className = '', as, ...props }) {
    const config = variantConfig[variant] || variantConfig.body
    const Tag = as || config.tag

    return (
        <Tag className={`${config.className} ${className}`} {...props}>
            {children}
        </Tag>
    )
}

export default Text
