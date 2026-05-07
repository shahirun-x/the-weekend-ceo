import { useState, useEffect, useCallback, useRef } from 'react'
import './MediaGrid.css'

function MediaGrid({ items = [] }) {
    const [lightboxIndex, setLightboxIndex] = useState(null)
    const [activeFilter, setActiveFilter] = useState('all')
    const touchStart = useRef(null)

    const filters = ['all', ...new Set(items.map(i => i.category).filter(Boolean))]

    const filteredItems = activeFilter === 'all'
        ? items
        : items.filter(i => i.category === activeFilter)

    const lightbox = lightboxIndex !== null ? filteredItems[lightboxIndex] : null

    const goNext = useCallback(() => {
        setLightboxIndex(prev =>
            prev !== null ? (prev + 1) % filteredItems.length : null
        )
    }, [filteredItems.length])

    const goPrev = useCallback(() => {
        setLightboxIndex(prev =>
            prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        )
    }, [filteredItems.length])

    const closeLightbox = useCallback(() => {
        setLightboxIndex(null)
    }, [])

    // Keyboard navigation
    useEffect(() => {
        if (lightboxIndex === null) return
        const handleKey = (e) => {
            if (e.key === 'Escape') closeLightbox()
            if (e.key === 'ArrowRight') goNext()
            if (e.key === 'ArrowLeft') goPrev()
        }
        window.addEventListener('keydown', handleKey)
        document.body.style.overflow = 'hidden'
        return () => {
            window.removeEventListener('keydown', handleKey)
            document.body.style.overflow = ''
        }
    }, [lightboxIndex, goNext, goPrev, closeLightbox])

    // Touch swipe for lightbox
    const handleTouchStart = (e) => {
        touchStart.current = e.touches[0].clientX
    }
    const handleTouchEnd = (e) => {
        if (touchStart.current === null) return
        const diff = touchStart.current - e.changedTouches[0].clientX
        if (Math.abs(diff) > 50) {
            diff > 0 ? goNext() : goPrev()
        }
        touchStart.current = null
    }

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
                        onClick={() => setLightboxIndex(index)}
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
                <div
                    className="mg-lightbox"
                    onClick={closeLightbox}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="mg-lightbox__ambient"></div>
                    <button className="mg-lightbox__close" onClick={closeLightbox}>×</button>

                    {/* Prev/Next arrows */}
                    <button className="mg-lightbox__arrow mg-lightbox__arrow--prev" onClick={(e) => { e.stopPropagation(); goPrev() }}>
                        ‹
                    </button>
                    <button className="mg-lightbox__arrow mg-lightbox__arrow--next" onClick={(e) => { e.stopPropagation(); goNext() }}>
                        ›
                    </button>

                    <div className="mg-lightbox__content" onClick={e => e.stopPropagation()}>
                        <img key={lightboxIndex} src={lightbox.src} alt={lightbox.alt} />
                        <div className="mg-lightbox__info">
                            <span className="mg-lightbox__title">{lightbox.title}</span>
                            {lightbox.subtitle && <span className="mg-lightbox__subtitle">{lightbox.subtitle}</span>}
                            <span className="mg-lightbox__counter">{lightboxIndex + 1} / {filteredItems.length}</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default MediaGrid
