import { useEffect, useRef } from 'react'

function ScrollReveal({
    children,
    className = '',
    delay = 0,
    direction = 'up', // up, left, right, scale, fade
    tag = 'div'
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
                threshold: 0.1,
                rootMargin: '0px 0px -60px 0px',
            }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [delay])

    const Tag = tag

    return (
        <Tag ref={ref} className={`reveal reveal--${direction} ${className}`}>
            {children}
        </Tag>
    )
}

export default ScrollReveal
