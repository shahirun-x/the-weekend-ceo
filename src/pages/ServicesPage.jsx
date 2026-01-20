import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'
import './ServicesPage.css'

function ServicesPage() {
    return (
        <div className="services-page">
            {/* Hero */}
            <Hero
                eyebrow="Our Services"
                title="Two Paths."
                titleAccent="One Standard."
                subtitle="We don't offer packages. We offer transformations."
                short
            />

            {/* Philosophy Statement */}
            <Section variant="charcoal" id="philosophy">
                <ScrollReveal direction="up">
                    <div className="services-philosophy">
                        <Text variant="h2" className="text-white">
                            Every step exists for a <span className="text-yellow">reason.</span>
                        </Text>
                        <Text className="services-philosophy__desc">
                            Nothing is arbitrary. Nothing is rushed. Each technique has been refined through
                            deliberate practice and an obsession with results that speak for themselves.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Service Packs - Visual Focus */}
            <Section variant="cream" id="packs">
                <ScrollReveal direction="up">
                    <div className="services-header">
                        <Text variant="eyebrow">Choose Your Experience</Text>
                    </div>
                </ScrollReveal>

                <div className="services-grid">
                    {/* Luxury Pro Pack */}
                    <ScrollReveal direction="left" delay={100}>
                        <div className="service-pack service-pack--pro">
                            <div className="service-pack__badge">15 Steps</div>
                            <div className="service-pack__content">
                                <Text variant="eyebrow">Luxury Pro Pack</Text>
                                <Text variant="h2" className="service-pack__title">The Refined Experience</Text>
                                <Text variant="body" className="service-pack__desc">
                                    Designed for vehicles that deserve consistent, premium care. This is our refined
                                    process for owners who understand that maintenance is an art form.
                                </Text>
                                <ul className="service-pack__features">
                                    <li>Complete exterior decontamination</li>
                                    <li>Paint correction & protection</li>
                                    <li>Interior deep cleansing</li>
                                    <li>Wheel & tire restoration</li>
                                    <li>Glass clarity treatment</li>
                                </ul>
                                <Text variant="accent" className="service-pack__note">
                                    Ideal for regular maintenance of well-kept vehicles.
                                </Text>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* CEO Signature Pack */}
                    <ScrollReveal direction="right" delay={200}>
                        <div className="service-pack service-pack--signature">
                            <div className="service-pack__badge service-pack__badge--featured">Signature</div>
                            <div className="service-pack__content">
                                <Text variant="eyebrow" className="text-yellow">CEO's Premium Signature</Text>
                                <Text variant="h2" className="service-pack__title text-white">
                                    The Complete Transformation
                                </Text>
                                <Text className="service-pack__desc text-white">
                                    35 intensive steps that leave nothing untouched. This is for vehicles that require
                                    comprehensive revival—or owners who simply refuse to accept anything less than perfection.
                                </Text>
                                <ul className="service-pack__features service-pack__features--light">
                                    <li>Everything in Luxury Pro Pack</li>
                                    <li>Multi-stage paint correction</li>
                                    <li>Engine bay detailing</li>
                                    <li>Leather conditioning & restoration</li>
                                    <li>Trim & panel rejuvenation</li>
                                    <li>Ceramic coating application</li>
                                    <li>Extended protection treatment</li>
                                </ul>
                                <Text className="service-pack__note text-yellow">
                                    The full expression of craftsmanship-driven detailing.
                                </Text>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </Section>

            {/* CTA */}
            <Section variant="yellow" id="cta">
                <ScrollReveal direction="scale">
                    <div className="services-cta">
                        <Text variant="h2">Ready to <span className="text-teal">Begin?</span></Text>
                        <Text variant="body" className="services-cta__desc">
                            Tell us about your vehicle and your expectations.
                        </Text>
                        <Button to="/appointment" variant="primary" className="button--large">
                            Request Your Spot
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </div>
    )
}

export default ServicesPage
