import { useState, useEffect, useRef } from 'react'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'
import './HomePage.css'

const stats = [
    { value: 1, suffix: '', label: 'Car Crafted Per Day' },
    { value: 96, suffix: '', label: 'Cars Crafted Per Year' },
    { value: 8, suffix: '-', label: 'Cars Crafted Per Month' },
    { value: 25, suffix: '+', label: 'Steps Per Detail' },
]

function AnimatedCounter({ value, suffix = '' }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                let start = 0
                const end = value
                const duration = 2000
                const stepTime = Math.abs(Math.floor(duration / end))
                const timer = setInterval(() => {
                    start += 1
                    setCount(start)
                    if (start >= end) clearInterval(timer)
                }, stepTime)
                observer.unobserve(el)
            }
        }, { threshold: 0.5 })
        observer.observe(el)
        return () => observer.disconnect()
    }, [value])

    return <span ref={ref}>{count}{suffix}</span>
}

function HomePage() {
    return (
        <div className="home-page">
            {/* Hero */}
            <Hero fullscreen videoSrc="/videos/weekend ceo.mp4">
                <span className="home-hero__eyebrow">
                    <span className="home-hero__dot"></span>
                    Limited to 96 Cars Per Year
                </span>
                <h1 className="home-hero__title">
                    NO ORDINARY<br />
                    <span className="home-hero__title-accent">TOUCHES</span>
                </h1>
                <p className="home-hero__subtitle">
                    Only the CEO's Touch.<br />
                    For Those Who Refuse The Ordinary.<br />
                    Limited to 96 Cars Per Year -
                    Delivered @ your Home, Office,
                    Private garages executed
                    with precision, discipline, and
                    complete control.
                </p>
                <div className="home-hero__actions">
                    <Button to="/appointment" variant="primary" className="btn--large">Request a Slot</Button>
                    <Button to="/packages" variant="secondary">View Packages</Button>
                </div>
                <div className="home-hero__badge smoked-glass">
                    <span className="home-hero__badge-label">96 Car Stories League</span>
                    <span className="home-hero__badge-value">Slots Remaining</span>
                </div>
            </Hero>

            {/* Stats */}
            <Section variant="dark" id="stats">
                <div className="home-stats">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="home-stat">
                            <span className="home-stat__value">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </span>
                            <span className="home-stat__label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Brand Statement */}
            <Section variant="darker" id="statement">
                <div className="luxury-divider luxury-divider--wine"></div>
                <ScrollReveal direction="up">
                    <div className="home-statement">
                        <div className="home-statement__watermark">KA</div>
                        <Text variant="h2" className="home-statement__title">
                            A car is never just transport.
                        </Text>
                        <Text className="home-statement__body">
                            It is an asset. An expression. An Emotion. A reflection of its owner — even when parked still.
                            The Weekend CEO was born from a belief that extraordinary cars demand patience,
                            discipline, and leadership. No routines. No rush. No volume. No Shortcuts. No Offers.
                            Every vehicle is treated as a prized asset — and every touch carries responsibility.
                        </Text>
                        <Button to="/brand" variant="ghost">Read Our Story →</Button>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Final CTA */}
            <section className="home-final-cta">
                <div className="home-final-cta__ambient"></div>
                <div className="home-final-cta__ambient home-final-cta__ambient--blue"></div>
                <ScrollReveal direction="scale">
                    <div className="home-final-cta__content">
                        <Text variant="eyebrow">Ready?</Text>
                        <Text variant="h1">No Ordinary Touches.<br /><span className="text-wine">Only the CEO's Touch.</span></Text>
                        <Text className="home-final-cta__sub">
                            By appointment. By commitment. Beyond location.<br />
                            Where the standard travels — not the car.
                        </Text>
                        <Button to="/appointment" variant="primary" className="btn--large">
                            Request a Slot
                        </Button>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    )
}

export default HomePage
