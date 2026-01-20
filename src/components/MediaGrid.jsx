import './MediaGrid.css'

function MediaGrid({ items = [], className = '' }) {
    return (
        <div className={`media-grid ${className}`}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`media-grid__item ${item.featured ? 'media-grid__item--featured' : ''}`}
                >
                    <div className="media-grid__image-wrapper">
                        <img
                            src={item.src}
                            alt={item.alt || 'Gallery image'}
                            className="media-grid__image"
                            loading="lazy"
                        />
                        <div className="media-grid__overlay">
                            {item.title && (
                                <span className="media-grid__title">{item.title}</span>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MediaGrid
