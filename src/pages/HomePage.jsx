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
    { value: 96, suffix: '', label: 'Cars Crafted Per Year' },
    { value: 8, suffix: '-', label: 'Cars Crafted Per Month' },
    { value: 25, suffix: '+', label: 'Steps Per Detail' },
]

const services = [
    { title: 'Paint Correction', category: 'Restoration', desc: 'Paint correction and refinement. Multi-stage machine polishing restoring clarity, depth, and showroom gloss.', image: '/images/services/paint-correction.png', featured: true },
    { title: 'Hand-Applied Wax', category: 'Protection', desc: 'Hand-applied wax and sealant systems. Premium-grade surface protection with long-term hydrophobic finish.', image: '/images/services/ceramic-coating.png' },
    { title: 'Interior Refinement', category: 'Refinement', desc: 'Deep cleaning, leather conditioning, and complete cabin restoration.', image: '/images/services/interior-detail.png' },
    { title: 'Controlled Finishing', category: 'Precision', desc: 'Controlled finishing techniques. Decontamination, clay bar treatment, and precision enhancement.', image: '/images/services/exterior-wash.png' },
    { title: 'Wheel & Engine', category: 'Engineering', desc: 'Wheel deep cleaning, tire dressing, and engine bay safe cleaning (non-invasive).', image: '/images/services/wheel-detail.png' },
    { title: 'Doorstep Service', category: 'Convenience', desc: 'Delivered @ your Home, Office, Private garages executed with precision, discipline, and complete control.', image: '/images/services/mobile-service.png' },
]

const processSteps = [
    { step: '01', title: 'Inspection', desc: 'Full paint depth measurement, surface condition assessment, and defect mapping under controlled LED lighting.', image: '/images/process/inspection.png' },
    { step: '02', title: 'Decontamination', desc: 'Chemical and mechanical removal of bonded contaminants — iron fallout, tar, and embedded particles.', image: '/images/process/decontamination.png' },
    { step: '03', title: 'Correction', desc: 'Multi-stage machine polishing to eliminate swirls, holograms, and paint defects with precision.', image: '/images/process/correction.png' },
    { step: '04', title: 'Protection', desc: 'Premium sealant, wax, or ceramic coating application — engineered for long-term surface defence.', image: '/images/process/protection.png' },
    { step: '05', title: 'Finalisation', desc: 'Controlled environment review, final detail inspection, and handover preparation.', image: '/images/process/finalisation.png' },
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

function ProcessTimeline({ steps }) {
    const [activeStep, setActiveStep] = useState(0)
    const stepRefs = useRef([])

    useEffect(() => {
        const observers = []
        stepRefs.current.forEach((el, idx) => {
            if (!el) return
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveStep(idx)
                    }
                },
                { threshold: 0.6, rootMargin: '-10% 0px -40% 0px' }
            )
            observer.observe(el)
            observers.push(observer)
        })
        return () => observers.forEach(o => o.disconnect())
    }, [steps])

    return (
        <div className="process-cinema">
            {/* Left: Steps */}
            <div className="process-cinema__steps">
                <div className="process-cinema__line">
                    <div
                        className="process-cinema__line-fill"
                        style={{ height: `${((activeStep) / (steps.length - 1)) * 100}%` }}
                    ></div>
                </div>
                {steps.map((step, idx) => (
                    <div
                        key={idx}
                        ref={el => stepRefs.current[idx] = el}
                        className={`process-step ${idx === activeStep ? 'process-step--active' : ''} ${idx < activeStep ? 'process-step--done' : ''}`}
                        onClick={() => setActiveStep(idx)}
                    >
                        <span className="process-step__num">{step.step}</span>
                        <div className="process-step__body">
                            <h4 className="process-step__title">{step.title}</h4>
                            <p className="process-step__desc">{step.desc}</p>
                        </div>
                        {/* Mobile inline image */}
                        <div className="process-step__img-mobile">
                            <img src={step.image} alt={step.title} loading="lazy" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Right: Sticky Image Panel */}
            <div className="process-cinema__visual">
                <div className="process-cinema__img-wrap">
                    {steps.map((step, idx) => (
                        <img
                            key={idx}
                            src={step.image}
                            alt={step.title}
                            className={`process-cinema__img ${idx === activeStep ? 'process-cinema__img--active' : ''}`}
                            loading="lazy"
                        />
                    ))}
                    <div className="process-cinema__img-overlay"></div>
                </div>
            </div>
        </div>
    )
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

            {/* Services — Cinematic Bento Showcase */}
            <Section variant="darker" id="services" className="ambient-edge">
                <ScrollReveal direction="up">
                    <div className="home-section-header">
                        <div className="section-marker">
                            <span className="section-marker__num">01</span>
                            <span className="section-marker__line"></span>
                        </div>
                        <Text variant="eyebrow">What We Do</Text>
                        <Text variant="h2">Precision Detailing<br /><span className="text-wine">Without Compromise</span></Text>
                    </div>
                </ScrollReveal>

                <div className="bento-grid">
                    {services.map((svc, idx) => (
                        <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                            <Link
                                to="/packages"
                                className={`bento-block ${svc.featured ? 'bento-block--featured' : ''}`}
                            >
                                <div className="bento-block__bg" style={{ backgroundImage: `url(${svc.image})` }}></div>
                                <div className="bento-block__overlay"></div>
                                <div className="bento-block__glow"></div>
                                <div className="bento-block__content">
                                    <span className="bento-block__category">{svc.category}</span>
                                    <h3 className="bento-block__title">{svc.title}</h3>
                                    <p className="bento-block__desc">{svc.desc}</p>
                                    <span className="bento-block__cta">Explore →</span>
                                </div>
                            </Link>
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

            {/* Process — Cinematic Scroll Timeline */}
            <Section variant="dark" id="process" className="ambient-edge">
                <ScrollReveal direction="up">
                    <div className="home-section-header">
                        <div className="section-marker">
                            <span className="section-marker__num">02</span>
                            <span className="section-marker__line"></span>
                        </div>
                        <Text variant="eyebrow">Our Process</Text>
                        <Text variant="h2">Every vehicle undergoes a<br /><span className="text-wine">structured sequence.</span></Text>
                    </div>
                </ScrollReveal>

                <ProcessTimeline steps={processSteps} />
            </Section>

            {/* Gallery Teaser */}
            <Section variant="darker" id="gallery-teaser">
                <ScrollReveal direction="up">
                    <div className="home-section-header">
                        <div className="section-marker">
                            <span className="section-marker__num">03</span>
                            <span className="section-marker__line"></span>
                        </div>
                        <Text variant="eyebrow">Portfolio</Text>
                        <Text variant="h2">Selected <span className="text-wine">Works</span></Text>
                    </div>
                </ScrollReveal>
                <div className="home-gallery-teaser">
                    <ScrollReveal direction="up" delay={100}>
                        <div className="gallery-teaser-item gallery-teaser-item--wide">
                            <img src="/images/gallery/hood.png" alt="Paint correction detail" loading="lazy" />
                            <div className="gallery-teaser-item__overlay">
                                <span className="gallery-teaser-item__label">Paint Perfection</span>
                            </div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={200}>
                        <div className="gallery-teaser-item">
                            <img src="/images/gallery/coating.png" alt="Ceramic coating" loading="lazy" />
                            <div className="gallery-teaser-item__overlay">
                                <span className="gallery-teaser-item__label">Ceramic Shield</span>
                            </div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={300}>
                        <div className="gallery-teaser-item">
                            <img src="/images/gallery/showroom.png" alt="Showroom finish" loading="lazy" />
                            <div className="gallery-teaser-item__overlay">
                                <span className="gallery-teaser-item__label">Showroom Finish</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
                <div className="home-gallery-cta">
                    <Button to="/gallery" variant="secondary">View Full Gallery</Button>
                </div>
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
