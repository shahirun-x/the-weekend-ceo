import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'
import './HomePage.css'

const stats = [
    { value: 1, suffix: '', label: 'Car Crafted Per Day' },
    { value: 96, suffix: '', label: 'Cars Per Year' },
    { value: 8, suffix: '+', label: 'Hours Per Vehicle' },
    { value: 25, suffix: '+', label: 'Steps Per Detail' },
]

const services = [
    { icon: '◆', title: 'Paint Correction', desc: 'Multi-stage machine polishing restoring clarity, depth, and gloss.' },
    { icon: '◇', title: 'Ceramic Coating', desc: 'Premium-grade surface protection with long-term hydrophobic finish.' },
    { icon: '▣', title: 'Interior Detailing', desc: 'Deep cleaning, leather conditioning, and complete cabin restoration.' },
    { icon: '◈', title: 'Exterior Detailing', desc: 'Decontamination, clay bar treatment, and hand-applied wax systems.' },
    { icon: '⬡', title: 'Wheel & Engine', desc: 'Wheel deep cleaning, tire dressing, and engine bay safe detailing.' },
    { icon: '◉', title: 'Mobile Service', desc: 'Full detailing delivered to your home, office, or private garage.' },
]

const processSteps = [
    { step: '01', title: 'Inspection', desc: 'Full paint and surface condition assessment.' },
    { step: '02', title: 'Decontamination', desc: 'Chemical and mechanical removal of bonded contaminants.' },
    { step: '03', title: 'Correction', desc: 'Machine polishing to eliminate swirls and defects.' },
    { step: '04', title: 'Protection', desc: 'Sealant, wax, or ceramic coating application.' },
    { step: '05', title: 'Finalisation', desc: 'Controlled review and final detail inspection.' },
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
                const duration = 1500
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
            <Hero fullscreen>
                <span className="home-hero__eyebrow">
                    <span className="home-hero__dot"></span>
                    Limited to 96 Cars Per Year
                </span>
                <h1 className="home-hero__title">
                    NO ORDINARY<br />
                    <span className="home-hero__title-accent">TOUCHES</span>
                </h1>
                <p className="home-hero__subtitle">
                    Only the CEO's touch. Premium founder-led automotive detailing
                    delivered at your doorstep with precision and discipline.
                </p>
                <div className="home-hero__actions">
                    <Button to="/appointment" variant="primary" className="btn--large">Book Your Slot</Button>
                    <Button to="/packages" variant="secondary">View Packages</Button>
                </div>
                <div className="home-hero__badge glass">
                    <span className="home-hero__badge-label">96 Stories League</span>
                    <span className="home-hero__badge-value">Slots Remaining</span>
                </div>
            </Hero>

            {/* Services Overview */}
            <Section variant="darker" id="services">
                <ScrollReveal direction="up">
                    <div className="home-section-header">
                        <Text variant="eyebrow">What We Do</Text>
                        <Text variant="h2">Precision Detailing<br /><span className="text-wine">Without Compromise</span></Text>
                    </div>
                </ScrollReveal>

                <div className="home-services-grid">
                    {services.map((svc, idx) => (
                        <ScrollReveal key={idx} direction="up" delay={idx * 80}>
                            <div className="home-service-card">
                                <span className="home-service-card__icon">{svc.icon}</span>
                                <h3 className="home-service-card__title">{svc.title}</h3>
                                <p className="home-service-card__desc">{svc.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </Section>

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
                <ScrollReveal direction="up">
                    <div className="home-statement">
                        <div className="home-statement__watermark">KA</div>
                        <Text variant="h2" className="home-statement__title">
                            A car is never just transport.
                        </Text>
                        <Text className="home-statement__body">
                            It is an asset. An expression. A reflection of its owner — even when parked still.
                            The Weekend CEO was born from a belief that extraordinary cars demand patience,
                            discipline, and leadership. Not routines. Not rush. Not volume.
                        </Text>
                        <Button to="/brand" variant="ghost">Read Our Story →</Button>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Process */}
            <Section variant="dark" id="process">
                <ScrollReveal direction="up">
                    <div className="home-section-header">
                        <Text variant="eyebrow">Our Process</Text>
                        <Text variant="h2">Structured.<br /><span className="text-wine">Purpose-Driven.</span></Text>
                    </div>
                </ScrollReveal>

                <div className="home-process-timeline">
                    {processSteps.map((step, idx) => (
                        <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                            <div className="home-process-step">
                                <span className="home-process-step__num">{step.step}</span>
                                <div className="home-process-step__content">
                                    <h4 className="home-process-step__title">{step.title}</h4>
                                    <p className="home-process-step__desc">{step.desc}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </Section>

            {/* Gallery Teaser */}
            <Section variant="darker" id="gallery-teaser">
                <ScrollReveal direction="up">
                    <div className="home-section-header">
                        <Text variant="eyebrow">Portfolio</Text>
                        <Text variant="h2">Selected <span className="text-wine">Works</span></Text>
                    </div>
                </ScrollReveal>
                <ScrollReveal direction="scale" delay={200}>
                    <div className="home-gallery-teaser">
                        <div className="home-gallery-placeholder">
                            <span>Gallery Preview</span>
                        </div>
                        <div className="home-gallery-placeholder">
                            <span>Gallery Preview</span>
                        </div>
                        <div className="home-gallery-placeholder home-gallery-placeholder--tall">
                            <span>Gallery Preview</span>
                        </div>
                    </div>
                </ScrollReveal>
                <div className="home-gallery-cta">
                    <Button to="/gallery" variant="secondary">View Full Gallery</Button>
                </div>
            </Section>

            {/* Final CTA */}
            <section className="home-final-cta">
                <div className="home-final-cta__ambient"></div>
                <ScrollReveal direction="scale">
                    <div className="home-final-cta__content">
                        <Text variant="eyebrow">Ready?</Text>
                        <Text variant="h1">No Ordinary Touches.<br /><span className="text-wine">Only the CEO's Touch.</span></Text>
                        <Text className="home-final-cta__sub">
                            By appointment. By commitment. Beyond location.
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
