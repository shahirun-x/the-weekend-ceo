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
                title="No Ordinary"
                titleAccent="Touches."
                subtitle="For those who refuse the ordinary. Founder-led craftsmanship delivered to your doorstep."
            >
                <Button to="/appointment" variant="primary">Book Your Spot</Button>
                <Button to="/services" variant="secondary">See Services</Button>
            </Hero>

            {/* Brand Statement */}
            <Section variant="charcoal" id="statement">
                <ScrollReveal direction="up">
                    <div className="home-statement">
                        <Text variant="h2" className="home-statement__title">
                            Only the <span className="text-yellow">CEO's</span> touch.
                        </Text>
                        <Text className="home-statement__desc">
                            We don't work on volume. We work on vehicles that deserve more than ordinary attention.
                            Every car we accept is treated with the same care a CEO brings to their most important decisions.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Why Different - Asymmetric */}
            <Section variant="cream" id="different" asymmetric>
                <div className="home-different">
                    <ScrollReveal direction="left">
                        <div className="home-different__content">
                            <Text variant="eyebrow">Why We're Different</Text>
                            <Text variant="h2">Craftsmanship Over Convenience</Text>
                            <Text variant="body" className="home-different__text">
                                This isn't a car wash. This is a statement. Every vehicle we touch undergoes a
                                transformation guided by obsessive attention to detail and a refusal to cut corners.
                            </Text>
                        </div>
                    </ScrollReveal>

                    <div className="home-different__cards">
                        <ScrollReveal direction="right" delay={100}>
                            <Card
                                variant="yellow"
                                number="01"
                                title="Limited Capacity"
                                description="Maximum 8 vehicles per month. We don't scale. We perfect."
                            />
                        </ScrollReveal>
                        <ScrollReveal direction="right" delay={200}>
                            <Card
                                variant="bordered"
                                number="02"
                                title="Founder-Led"
                                description="The founder personally oversees and executes every detail. No handoffs."
                            />
                        </ScrollReveal>
                        <ScrollReveal direction="right" delay={300}>
                            <Card
                                variant="default"
                                number="03"
                                title="Doorstep Service"
                                description="We come to you. Your driveway becomes our studio."
                            />
                        </ScrollReveal>
                    </div>
                </div>
            </Section>

            {/* Stats Section */}
            <Section variant="gradient" id="stats">
                <ScrollReveal direction="scale">
                    <div className="home-stats">
                        <div className="home-stats__item">
                            <span className="home-stats__number">5-8</span>
                            <span className="home-stats__label">Cars monthly, max</span>
                        </div>
                        <div className="home-stats__divider"></div>
                        <div className="home-stats__item">
                            <span className="home-stats__number">100%</span>
                            <span className="home-stats__label">Founder involvement</span>
                        </div>
                        <div className="home-stats__divider"></div>
                        <div className="home-stats__item">
                            <span className="home-stats__number">35</span>
                            <span className="home-stats__label">Step signature process</span>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Services Preview */}
            <Section variant="cream" id="services-preview">
                <div className="home-services">
                    <ScrollReveal direction="up">
                        <div className="home-services__header">
                            <Text variant="eyebrow">Our Services</Text>
                            <Text variant="h2">Two Paths. <span className="text-teal">One Standard.</span></Text>
                        </div>
                    </ScrollReveal>

                    <div className="home-services__grid">
                        <ScrollReveal direction="left" delay={100}>
                            <Card className="home-services__card">
                                <div className="home-services__card-header">
                                    <Text variant="eyebrow">Luxury Pro Pack</Text>
                                    <Text variant="h3">The Refined Experience</Text>
                                </div>
                                <Text variant="body">
                                    15 deliberate steps designed for vehicles that deserve consistent, premium care.
                                </Text>
                                <Button to="/services" variant="ghost">Explore</Button>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal direction="right" delay={200}>
                            <Card variant="featured" className="home-services__card">
                                <div className="home-services__card-header">
                                    <Text variant="eyebrow">CEO's Signature</Text>
                                    <Text variant="h3">The Complete Transformation</Text>
                                </div>
                                <Text variant="body">
                                    35 intensive steps that leave nothing untouched. This is the full expression of
                                    what craftsmanship-driven detailing can achieve.
                                </Text>
                                <Button to="/services" variant="ghost" className="text-white">Explore</Button>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </Section>

            {/* For Who Section */}
            <Section variant="yellow" id="audience">
                <ScrollReveal direction="up">
                    <div className="home-audience">
                        <Text variant="h2" className="home-audience__title">
                            This Is <span className="text-teal">For</span> You If...
                        </Text>
                        <div className="home-audience__grid">
                            <div className="home-audience__item home-audience__item--yes">
                                <span className="home-audience__icon">✓</span>
                                <Text>You see your vehicle as an extension of yourself</Text>
                            </div>
                            <div className="home-audience__item home-audience__item--yes">
                                <span className="home-audience__icon">✓</span>
                                <Text>You value craftsmanship over speed</Text>
                            </div>
                            <div className="home-audience__item home-audience__item--yes">
                                <span className="home-audience__icon">✓</span>
                                <Text>You understand that premium means selective</Text>
                            </div>
                            <div className="home-audience__item home-audience__item--no">
                                <span className="home-audience__icon">✗</span>
                                <Text>You're looking for the cheapest option</Text>
                            </div>
                            <div className="home-audience__item home-audience__item--no">
                                <span className="home-audience__icon">✗</span>
                                <Text>You need it done yesterday</Text>
                            </div>
                            <div className="home-audience__item home-audience__item--no">
                                <span className="home-audience__icon">✗</span>
                                <Text>You want volume, not quality</Text>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Final CTA */}
            <Section variant="teal" id="cta">
                <ScrollReveal direction="scale">
                    <div className="home-cta">
                        <Text variant="h2" className="text-white">Ready to Refuse the Ordinary?</Text>
                        <Text className="home-cta__desc">
                            We review every request personally. Space is limited.
                        </Text>
                        <Button to="/appointment" variant="yellow" className="button--large">
                            Request Your Spot
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </div>
    )
}

export default HomePage
