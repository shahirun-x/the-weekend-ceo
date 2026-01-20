import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import Card from '../components/Card'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'
import './HomePage.css'

function HomePage() {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <Hero
                eyebrow="Premium Automotive Detailing"
                title="No ordinary touches. Only the CEO's touch."
                subtitle="For those who refuse the ordinary. We deliver leadership-level attention to premium vehicles—craftsmanship over convenience, always."
            >
                <Button to="/appointment" variant="secondary" className="hero__cta">
                    Request an Appointment
                </Button>
            </Hero>

            {/* Brand Philosophy */}
            <Section id="philosophy">
                <div className="home-philosophy">
                    <ScrollReveal>
                        <Text variant="eyebrow">Our Philosophy</Text>
                        <Text variant="h2" className="home-philosophy__title">
                            Craftsmanship is not a service.<br />It's a discipline.
                        </Text>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <div className="home-philosophy__content">
                            <Text variant="body">
                                We don't work on volume. We work on vehicles that deserve more than ordinary attention.
                                Every car we accept is treated with the same care a CEO brings to their most important decisions—deliberate, precise, and uncompromising.
                            </Text>
                            <Text variant="accent" className="home-philosophy__quote">
                                "The difference between good and exceptional is restraint.
                                It's knowing when to stop. It's caring enough to do less, better."
                            </Text>
                        </div>
                    </ScrollReveal>
                </div>
            </Section>

            {/* Craftsmanship Over Convenience */}
            <Section dark id="craftsmanship">
                <ScrollReveal>
                    <div className="home-craftsmanship">
                        <div className="home-craftsmanship__header">
                            <Text variant="eyebrow">Why The Weekend CEO</Text>
                            <Text variant="h2">Craftsmanship Over Convenience</Text>
                        </div>
                        <div className="home-craftsmanship__grid">
                            <Card variant="minimal">
                                <Text variant="h3">Limited Capacity</Text>
                                <Text variant="body">
                                    We accept only a handful of vehicles each month. This isn't limitation—it's intention.
                                    Every car receives the attention it deserves.
                                </Text>
                            </Card>
                            <Card variant="minimal">
                                <Text variant="h3">Founder-Led</Text>
                                <Text variant="body">
                                    The founder personally oversees and executes every detail.
                                    No handoffs. No delegation of what matters.
                                </Text>
                            </Card>
                            <Card variant="minimal">
                                <Text variant="h3">Doorstep Delivery</Text>
                                <Text variant="body">
                                    We come to you. Premium service shouldn't require you to go anywhere.
                                    Your driveway becomes our studio.
                                </Text>
                            </Card>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* The Weekend CEO Standard */}
            <Section id="standard">
                <ScrollReveal>
                    <div className="home-standard">
                        <Text variant="eyebrow">The Standard</Text>
                        <Text variant="h2" className="home-standard__title">
                            Every vehicle.<br />Leadership-level attention.
                        </Text>
                        <div className="home-standard__stats">
                            <div className="home-standard__stat">
                                <span className="home-standard__number">5-8</span>
                                <Text variant="caption">Cars per month, maximum</Text>
                            </div>
                            <div className="home-standard__stat">
                                <span className="home-standard__number">100%</span>
                                <Text variant="caption">Founder involvement</Text>
                            </div>
                            <div className="home-standard__stat">
                                <span className="home-standard__number">35</span>
                                <Text variant="caption">Steps in our signature process</Text>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Service Packs Teaser */}
            <Section dark id="services-preview">
                <ScrollReveal>
                    <div className="home-services">
                        <Text variant="eyebrow">Our Service Packs</Text>
                        <Text variant="h2">Two paths. One standard.</Text>
                        <div className="home-services__cards">
                            <Card variant="default" className="home-services__card">
                                <Text variant="eyebrow">Luxury Pro Pack</Text>
                                <Text variant="h3">The Refined Experience</Text>
                                <Text variant="body">
                                    15 deliberate steps designed for vehicles that deserve more than the ordinary wash.
                                    Protection. Restoration. Refinement.
                                </Text>
                                <Button to="/services" variant="ghost">Learn More</Button>
                            </Card>
                            <Card variant="featured" className="home-services__card">
                                <Text variant="eyebrow">CEO's Signature</Text>
                                <Text variant="h3">The Complete Transformation</Text>
                                <Text variant="body">
                                    35 intensive steps that leave nothing untouched. This is the full expression of what
                                    craftsmanship-driven detailing can achieve.
                                </Text>
                                <Button to="/services" variant="ghost">Learn More</Button>
                            </Card>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Who This Is For */}
            <Section id="for-who">
                <ScrollReveal>
                    <div className="home-audience">
                        <div className="home-audience__column">
                            <Text variant="eyebrow">This is for</Text>
                            <ul className="home-audience__list home-audience__list--positive">
                                <li>Owners who see their vehicle as an extension of themselves</li>
                                <li>Those who value craftsmanship over speed</li>
                                <li>People who understand that premium means selective</li>
                                <li>Vehicles that have earned more than ordinary treatment</li>
                            </ul>
                        </div>
                        <div className="home-audience__column">
                            <Text variant="eyebrow">This is not for</Text>
                            <ul className="home-audience__list home-audience__list--negative">
                                <li>Those seeking the cheapest option</li>
                                <li>Anyone in a rush</li>
                                <li>Volume expectations</li>
                                <li>Ordinary cars that need ordinary washes</li>
                            </ul>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Final CTA */}
            <Section dark className="home-cta-section">
                <ScrollReveal>
                    <div className="home-cta">
                        <Text variant="accent" className="home-cta__pre">
                            Ready to experience the difference?
                        </Text>
                        <Text variant="h2">Request an Appointment</Text>
                        <Text variant="body" className="home-cta__desc">
                            We review every request personally. Not every vehicle is accepted—but every inquiry is considered with care.
                        </Text>
                        <Button to="/appointment" variant="primary" className="button--large">
                            Request Appointment
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </div>
    )
}

export default HomePage
