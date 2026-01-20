import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import Card from '../components/Card'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'
import './ServicesPage.css'

function ServicesPage() {
    return (
        <div className="services-page">
            {/* Hero */}
            <Hero
                eyebrow="Our Services"
                title="Two paths. One uncompromising standard."
                subtitle="We don't offer packages. We offer transformations. Each designed for those who understand that premium isn't a price point—it's a philosophy."
                fullHeight={false}
            />

            {/* Philosophy First */}
            <Section id="approach">
                <ScrollReveal>
                    <div className="services-philosophy">
                        <Text variant="eyebrow">Our Approach</Text>
                        <Text variant="h2">Philosophy Before Process</Text>
                        <Text variant="body">
                            Before we discuss what we do, you should understand how we think. Every step in our
                            process exists for a reason. Nothing is arbitrary. Nothing is rushed. Each technique
                            has been refined through deliberate practice and an obsession with results that speak
                            for themselves.
                        </Text>
                        <Text variant="accent" className="services-philosophy__highlight">
                            We don't list every step because it would miss the point. The value isn't in the
                            number of steps—it's in the intention behind each one.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Service Packs */}
            <Section dark id="packs">
                <ScrollReveal>
                    <div className="services-packs">
                        <div className="services-packs__intro">
                            <Text variant="eyebrow">Service Packs</Text>
                            <Text variant="h2">Choose Your Experience</Text>
                        </div>

                        <div className="services-packs__grid">
                            {/* Luxury Pro Pack */}
                            <div className="services-pack">
                                <div className="services-pack__header">
                                    <Text variant="eyebrow">Luxury Pro Pack</Text>
                                    <Text variant="h3" className="services-pack__title">The Refined Experience</Text>
                                </div>
                                <div className="services-pack__content">
                                    <Text variant="body">
                                        15 deliberate steps designed for vehicles that deserve consistent, premium care.
                                        This is our refined process for owners who understand that maintenance is an
                                        art form.
                                    </Text>
                                    <div className="services-pack__highlights">
                                        <Text variant="caption" as="div" className="services-pack__highlight">
                                            ✓ Complete exterior decontamination
                                        </Text>
                                        <Text variant="caption" as="div" className="services-pack__highlight">
                                            ✓ Paint correction and protection
                                        </Text>
                                        <Text variant="caption" as="div" className="services-pack__highlight">
                                            ✓ Interior deep cleansing
                                        </Text>
                                        <Text variant="caption" as="div" className="services-pack__highlight">
                                            ✓ Wheel and tire restoration
                                        </Text>
                                        <Text variant="caption" as="div" className="services-pack__highlight">
                                            ✓ Glass clarity treatment
                                        </Text>
                                    </div>
                                    <Text variant="accent" className="services-pack__note">
                                        Ideal for regular maintenance of well-kept premium vehicles.
                                    </Text>
                                </div>
                            </div>

                            {/* CEO's Premium Signature Pack */}
                            <div className="services-pack services-pack--featured">
                                <div className="services-pack__badge">Signature</div>
                                <div className="services-pack__header">
                                    <Text variant="eyebrow">CEO's Premium Signature Pack</Text>
                                    <Text variant="h3" className="services-pack__title">The Complete Transformation</Text>
                                </div>
                                <div className="services-pack__content">
                                    <Text variant="body">
                                        35 intensive steps that leave nothing untouched. This is for vehicles that
                                        require comprehensive revival—or owners who simply refuse to accept anything
                                        less than perfection.
                                    </Text>
                                    <div className="services-pack__highlights">
                                        <Text variant="caption" as="div" className="services-pack__highlight">
                                            ✓ Everything in Luxury Pro Pack
                                        </Text>
                                        <Text variant="caption" as="div" className="services-pack__highlight">
                                            ✓ Multi-stage paint correction
                                        </Text>
                                        <Text variant="caption" as="div" className="services-pack__highlight">
                                            ✓ Engine bay detailing
                                        </Text>
                                        <Text variant="caption" as="div" className="services-pack__highlight">
                                            ✓ Leather conditioning & restoration
                                        </Text>
                                        <Text variant="caption" as="div" className="services-pack__highlight">
                                            ✓ Trim and panel rejuvenation
                                        </Text>
                                        <Text variant="caption" as="div" className="services-pack__highlight">
                                            ✓ Ceramic coating application
                                        </Text>
                                        <Text variant="caption" as="div" className="services-pack__highlight">
                                            ✓ Extended protection treatment
                                        </Text>
                                    </div>
                                    <Text variant="accent" className="services-pack__note">
                                        The full expression of what craftsmanship-driven detailing can achieve.
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Process Note */}
            <Section id="process">
                <ScrollReveal>
                    <div className="services-process">
                        <Text variant="h2">Every vehicle is assessed individually.</Text>
                        <Text variant="body">
                            The condition of your vehicle, the materials used in its construction, and your
                            specific needs all influence our approach. What you see here is a framework.
                            The execution is always tailored.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* CTA */}
            <Section dark className="services-cta-section">
                <ScrollReveal>
                    <div className="services-cta">
                        <Text variant="accent">Ready to begin?</Text>
                        <Text variant="h2">Request Your Appointment</Text>
                        <Text variant="body" className="services-cta__desc">
                            Tell us about your vehicle and your expectations. We'll discuss which approach
                            is right for you.
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

export default ServicesPage
