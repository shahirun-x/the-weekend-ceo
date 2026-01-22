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
                eyebrow="Premium Automotive Craftsmanship"
                title="No Ordinary"
                titleAccent="Touches."
                subtitle="Only the CEO's touch. For those who refuse the ordinary."
            >
                <Button to="/appointment" variant="primary">Request Appointment</Button>
                <Button to="/services" variant="secondary">View Services</Button>
            </Hero>

            {/* Brand Statement */}
            <Section variant="charcoal" id="statement">
                <ScrollReveal direction="up">
                    <div className="home-statement">
                        <Text variant="h2" className="home-statement__title">
                            A car is never just transport.
                        </Text>
                        <div className="home-statement__content">
                            <Text className="home-statement__desc">
                                It is an asset. An expression. A reflection of its owner — even when standing still.
                            </Text>
                            <Text className="home-statement__desc">
                                The Weekend CEO was born from a belief that extraordinary cars demand patience,
                                discipline, and leadership.
                            </Text>
                            <Text className="home-statement__desc home-statement__emphasis">
                                Not routines. Not rush. Not volume. Not Shortcuts.
                            </Text>
                            <Text className="home-statement__desc">
                                This is founder-led automotive craftsmanship, where every vehicle is treated as a
                                prized asset — and every touch carries responsibility.
                            </Text>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Some Cars Are Different */}
            <Section variant="cream" id="differentiation">
                <ScrollReveal direction="left">
                    <div className="home-differentiation">
                        <div className="home-differentiation__text">
                            <Text variant="h3">Some cars are driven.</Text>
                            <Text variant="h3">Some cars are lived with.</Text>
                        </div>
                        <Text variant="accent" className="home-differentiation__statement">
                            The Weekend CEO is for those who can differentiate this.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Craftsmanship Over Convenience */}
            <Section variant="yellow" id="craftsmanship">
                <ScrollReveal direction="up">
                    <div className="home-craftsmanship">
                        <Text variant="eyebrow">Our Approach</Text>
                        <Text variant="h2">Craftsmanship Over Convenience</Text>
                        <div className="home-craftsmanship__content">
                            <Text variant="body">
                                We do not believe premium automotive care belongs in crowded studios or mechanic sheds.
                            </Text>
                            <Text variant="body">
                                We believe it belongs in calm environments, controlled preparation, and methodical execution.
                            </Text>
                            <Text variant="body">
                                The Weekend CEO delivers luxury automotive care at your doorstep — your home, your office, or
                                your private space — executed with the restraint, respect, and discipline found in elite global
                                detailing ateliers.
                            </Text>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="home-craftsmanship__principles">
                    <ScrollReveal direction="left" delay={100}>
                        <Card variant="default" className="home-principle-card">
                            <Text variant="h3">Intentional Movement</Text>
                            <Text variant="body">Every movement is intentional. Every surface is approached with patience.</Text>
                        </Card>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={200}>
                        <Card variant="default" className="home-principle-card">
                            <Text variant="h3">Never Rushed</Text>
                            <Text variant="body">Nothing is rushed for the sake of time, volume, or margins.</Text>
                        </Card>
                    </ScrollReveal>
                    <ScrollReveal direction="right" delay={300}>
                        <Card variant="default" className="home-principle-card">
                            <Text variant="h3">Results That Feel Right</Text>
                            <Text variant="body">The objective is not to impress with noise or speed — but to deliver results that feel right: visually, tactically, and emotionally.</Text>
                        </Card>
                    </ScrollReveal>
                </div>
            </Section>

            {/* The Weekend CEO Standards */}
            <Section variant="charcoal" id="standards">
                <ScrollReveal direction="up">
                    <div className="home-standards">
                        <Text variant="eyebrow" className="text-yellow">Our Standards</Text>
                        <Text variant="h2" className="text-white">Excellence is not scalable without compromise</Text>
                        <Text className="home-standards__subtitle">— which is why we choose restraint.</Text>
                    </div>
                </ScrollReveal>

                <div className="home-standards__grid">
                    <ScrollReveal direction="scale" delay={100}>
                        <div className="home-standards__item">
                            <span className="home-standards__number">1</span>
                            <Text variant="h3" className="text-white">One Car Per Day</Text>
                            <Text className="text-white">Only one car is accepted per day.</Text>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal direction="scale" delay={200}>
                        <div className="home-standards__item">
                            <span className="home-standards__number">6-8</span>
                            <Text variant="h3" className="text-white">Cars Per Month</Text>
                            <Text className="text-white">Carefully planned and executed exclusively on weekends.</Text>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal direction="scale" delay={300}>
                        <div className="home-standards__item">
                            <span className="home-standards__number">∞</span>
                            <Text variant="h3" className="text-white">Beyond Location</Text>
                            <Text className="text-white">We are prepared to reach your location by road, rail, or by air — without any additional travel charges.</Text>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal direction="up" delay={400}>
                    <Text className="home-standards__note">
                        This ensures every vehicle receives uninterrupted attention, unhurried execution, and complete
                        accountability — something money alone cannot buy.
                    </Text>
                </ScrollReveal>
            </Section>

            {/* Services Preview */}
            <Section variant="cream" id="services-preview">
                <div className="home-services">
                    <ScrollReveal direction="up">
                        <div className="home-services__header">
                            <Text variant="eyebrow">Our Care Protocols</Text>
                            <Text variant="h2">Each car follows a structured, purpose-driven methodology.</Text>
                            <Text variant="body" className="home-services__subtitle">Nothing is improvised. Nothing exists without reason.</Text>
                        </div>
                    </ScrollReveal>

                    <div className="home-services__grid">
                        <ScrollReveal direction="left" delay={100}>
                            <Card className="home-services__card">
                                <div className="home-services__card-header">
                                    <Text variant="eyebrow">15 Steps</Text>
                                    <Text variant="h3">Luxury Pro Pack</Text>
                                </div>
                                <Text variant="body">
                                    A refined 15-step detailing experience for owners who value disciplined luxury maintenance and
                                    long-term preservation.
                                </Text>
                                <Button to="/services" variant="ghost">Learn More</Button>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={200}>
                            <Card variant="featured" className="home-services__card">
                                <div className="home-services__card-header">
                                    <Text variant="eyebrow">35 Steps</Text>
                                    <Text variant="h3">CEO's Premium Signature Pack</Text>
                                </div>
                                <Text variant="body">
                                    A comprehensive 35-step intensive detailing experience for owners who demand maximum depth,
                                    precision, and transformation — executed without time pressure or compromise.
                                </Text>
                                <Text variant="accent" className="home-services__note">Here, time is an ingredient — not a cost.</Text>
                                <Button to="/services" variant="ghost" className="text-white">Learn More</Button>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </Section>

            {/* Who This Is For */}
            <Section variant="yellow" id="audience">
                <ScrollReveal direction="up">
                    <div className="home-audience">
                        <Text variant="h2" className="home-audience__title">Who This Is For</Text>
                        <Text variant="body" className="home-audience__intro">The Weekend CEO is created for:</Text>

                        <div className="home-audience__grid">
                            <div className="home-audience__item home-audience__item--yes">
                                <span className="home-audience__icon">✓</span>
                                <Text>Premium and luxury car owners</Text>
                            </div>
                            <div className="home-audience__item home-audience__item--yes">
                                <span className="home-audience__icon">✓</span>
                                <Text>Entrepreneurs, professionals, celebrities, and leaders</Text>
                            </div>
                            <div className="home-audience__item home-audience__item--yes">
                                <span className="home-audience__icon">✓</span>
                                <Text>Car collectors and serious automotive enthusiasts</Text>
                            </div>
                            <div className="home-audience__item home-audience__item--yes">
                                <span className="home-audience__icon">✓</span>
                                <Text>Individuals who value craftsmanship over convenience</Text>
                            </div>
                        </div>

                        <Text variant="body" className="home-audience__note">
                            If you seek quick washes, discounts, or mass-service execution — we are not aligned.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Our Belief */}
            <Section variant="cream" id="belief">
                <ScrollReveal direction="up">
                    <div className="home-belief">
                        <Text variant="eyebrow">Our Belief</Text>
                        <div className="home-belief__statements">
                            <Text variant="h3">We believe a car reflects its owner — even when parked silently.</Text>
                            <Text variant="h3">We believe excellence is built through intent, not noise.</Text>
                            <Text variant="h3">We believe premium ownership deserves premium care — delivered privately, precisely, and responsibly.</Text>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Final CTA */}
            <Section variant="teal" id="cta">
                <ScrollReveal direction="scale">
                    <div className="home-cta">
                        <Text variant="h2" className="text-white">No ordinary touches. Only the CEO's touch.</Text>
                        <Text className="home-cta__tagline">For those who refuse the ordinary.</Text>
                        <div className="home-cta__details">
                            <Text className="home-cta__detail">By appointment. By commitment. Beyond location.</Text>
                            <Text className="home-cta__detail home-cta__detail--accent">Where the standard travels — not the car.</Text>
                        </div>
                        <Button to="/appointment" variant="yellow" className="button--large">
                            Request Appointment
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </div>
    )
}

export default HomePage
