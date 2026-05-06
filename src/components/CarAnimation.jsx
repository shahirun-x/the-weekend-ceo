import { useEffect, useRef, useState } from 'react'
import './CarAnimation.css'

function CarAnimation() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    return (
        <div className="car-animation-section" ref={sectionRef}>
            <div className={`car-animation-container ${isVisible ? 'is-animating' : ''}`}>
                <div className="car-road"></div>
                <div className="car-wrapper">
                    {/* Minimal SVG Silhouette of a luxury car (sports coupe profile) */}
                    <svg viewBox="0 0 800 250" className="car-svg" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 100 180 Q 80 180 80 150 L 80 120 Q 90 90 150 80 L 250 60 Q 300 40 400 40 Q 500 40 600 70 L 680 100 Q 720 120 720 150 L 720 180 Q 720 200 700 200 L 120 200 Q 100 200 100 180 Z" fill="#111" />
                        
                        {/* Wheels cutouts (to show background or wheels inside) */}
                        <circle cx="220" cy="190" r="45" fill="#1a1a1a" />
                        <circle cx="580" cy="190" r="45" fill="#1a1a1a" />
                        
                        {/* Windows silhouette */}
                        <path d="M 280 65 Q 350 48 430 48 Q 500 48 550 75 L 560 85 L 260 85 Z" fill="#1a1a1a" opacity="0.5"/>

                        {/* Headlight beam (glow) */}
                        <path d="M 700 130 Q 780 140 800 160 L 800 200 L 710 180 Z" fill="url(#headlight-gradient)" className="headlight-beam" />
                        
                        <defs>
                            <linearGradient id="headlight-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                            </linearGradient>
                        </defs>
                    </svg>
                    
                    {/* Rotating Wheels */}
                    <div className="car-wheel wheel-front">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#333" strokeWidth="8"/>
                            <circle cx="50" cy="50" r="20" fill="none" stroke="#222" strokeWidth="4"/>
                            <path d="M 50 10 L 50 90 M 10 50 L 90 50 M 22 22 L 78 78 M 22 78 L 78 22" stroke="#333" strokeWidth="6"/>
                        </svg>
                    </div>
                    
                    <div className="car-wheel wheel-rear">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#333" strokeWidth="8"/>
                            <circle cx="50" cy="50" r="20" fill="none" stroke="#222" strokeWidth="4"/>
                            <path d="M 50 10 L 50 90 M 10 50 L 90 50 M 22 22 L 78 78 M 22 78 L 78 22" stroke="#333" strokeWidth="6"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarAnimation
