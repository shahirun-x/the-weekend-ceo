import { useEffect, useRef } from 'react'

function ScrollReveal({
    children,
    className = '',
    delay = 0,
    direction = 'up' // up, left, right, scale
}) {
    const ref = useRef(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('visible')
                        }, delay)
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -80px 0px',
            }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [delay])

    return (
        <div ref={ref} className={`reveal reveal--${direction} ${className}`}>
            {children}
        </div>
    )
}

export default ScrollReveal
