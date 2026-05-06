import { useState } from 'react'
import './MediaGrid.css'

function MediaGrid({ items = [] }) {
    const [lightbox, setLightbox] = useState(null)
    const [activeFilter, setActiveFilter] = useState('all')

    const filters = ['all', ...new Set(items.map(i => i.category).filter(Boolean))]

    const filteredItems = activeFilter === 'all'
        ? items
        : items.filter(i => i.category === activeFilter)

    return (
        <>
            {filters.length > 1 && (
                <div className="mg-filters">
                    {filters.map(f => (
                        <button
                            key={f}
                            className={`mg-filter ${activeFilter === f ? 'mg-filter--active' : ''}`}
                            onClick={() => setActiveFilter(f)}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            )}

            <div className="mg-grid">
                {filteredItems.map((item, index) => (
                    <div
                        key={index}
                        className={`mg-item ${item.featured ? 'mg-item--featured' : ''}`}
                        onClick={() => setLightbox(item)}
                    >
                        <img src={item.src} alt={item.alt} className="mg-item__img" loading="lazy" />
                        <div className="mg-item__overlay">
                            <span className="mg-item__title">{item.title}</span>
                            {item.subtitle && <span className="mg-item__subtitle">{item.subtitle}</span>}
                        </div>
                    </div>
                ))}
            </div>

            {lightbox && (
                <div className="mg-lightbox" onClick={() => setLightbox(null)}>
                    <button className="mg-lightbox__close" onClick={() => setLightbox(null)}>×</button>
                    <div className="mg-lightbox__content" onClick={e => e.stopPropagation()}>
                        <img src={lightbox.src} alt={lightbox.alt} />
                        <div className="mg-lightbox__info">
                            <span className="mg-lightbox__title">{lightbox.title}</span>
                            {lightbox.subtitle && <span className="mg-lightbox__subtitle">{lightbox.subtitle}</span>}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MediaGrid
