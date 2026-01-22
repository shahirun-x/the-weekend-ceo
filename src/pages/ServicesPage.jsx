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
                eyebrow="Our Care Protocols"
                title="Each car follows"
                titleAccent="A structured methodology."
                subtitle="Nothing is improvised. Nothing exists without reason."
                short
            />

            {/* Craftsmanship Statement */}
            <Section variant="charcoal" id="craftsmanship">
                <ScrollReveal direction="up">
                    <div className="services-craftsmanship">
                        <Text variant="h2" className="text-white">
                            Craftsmanship Over Convenience
                        </Text>
                        <div className="services-craftsmanship__content">
                            <Text className="services-craftsmanship__text">
                                We do not believe premium automotive care belongs in crowded studios or mechanic sheds.
                            </Text>
                            <Text className="services-craftsmanship__text">
                                We believe it belongs in calm environments, controlled preparation, and methodical execution.
                            </Text>
                            <Text className="services-craftsmanship__text">
                                The Weekend CEO delivers luxury automotive care at your doorstep — your home, your office, or
                                your private space — executed with the restraint, respect, and discipline found in elite global
                                detailing ateliers.
                            </Text>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Service Packs */}
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
                                <Text variant="h2" className="service-pack__title">A Refined Experience</Text>
                                <Text variant="body" className="service-pack__desc">
                                    A refined 15-step detailing experience for owners who value disciplined luxury maintenance and
                                    long-term preservation.
                                </Text>
                                <div className="service-pack__features">
                                    <Text variant="body">
                                        Every movement is intentional.
                                    </Text>
                                    <Text variant="body">
                                        Every surface is approached with patience.
                                    </Text>
                                    <Text variant="body">
                                        Nothing is rushed for the sake of time, volume, or margins.
                                    </Text>
                                </div>
                                <Text variant="accent" className="service-pack__note">
                                    For owners who value disciplined luxury maintenance.
                                </Text>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* CEO Signature Pack */}
                    <ScrollReveal direction="right" delay={200}>
                        <div className="service-pack service-pack--signature">
                            <div className="service-pack__badge service-pack__badge--featured">Signature</div>
                            <div className="service-pack__content">
                                <Text variant="eyebrow" className="text-yellow">CEO's Premium Signature Pack</Text>
                                <Text variant="h2" className="service-pack__title text-white">
                                    The Complete Transformation
                                </Text>
                                <Text className="service-pack__desc text-white">
                                    A comprehensive 35-step intensive detailing experience for owners who demand maximum depth,
                                    precision, and transformation — executed without time pressure or compromise.
                                </Text>
                                <div className="service-pack__features service-pack__features--light">
                                    <Text>
                                        The objective is not to impress with noise or speed —
                                    </Text>
                                    <Text>
                                        but to deliver results that feel right:
                                    </Text>
                                    <Text className="service-pack__emphasis">
                                        visually, tactically, and emotionally.
                                    </Text>
                                </div>
                                <Text className="service-pack__note text-yellow">
                                    Here, time is an ingredient — not a cost.
                                </Text>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </Section>

            {/* Our Approach */}
            <Section variant="yellow" id="approach">
                <ScrollReveal direction="up">
                    <div className="services-approach">
                        <Text variant="eyebrow">Our Philosophy</Text>
                        <Text variant="h2">Why We Don't Offer Ceramic Coatings or PPF</Text>
                        <div className="services-approach__content">
                            <Text variant="body">
                                We do not believe in ceramic coatings, PPF installations, false longevity promises, or marketing-
                                driven warranty statements.
                            </Text>
                            <Text variant="body">
                                Those services depend on controlled studios, mechanical environments, and volume-oriented
                                execution — which conflicts with our philosophy.
                            </Text>
                            <Text variant="body">
                                Instead, we focus on detailing in its purest and most demanding form:
                            </Text>
                            <ul className="services-approach__list">
                                <li>Advanced paint correction and surface refinement</li>
                                <li>Elite German waxes, sealants, and detailing systems applied by hand</li>
                                <li>Techniques that prioritise depth, clarity, warmth, and tactile perfection</li>
                            </ul>
                            <Text variant="accent">
                                Our results are visible to the eye, felt by the hand, and understood by enthusiasts — not hidden
                                behind claims or paperwork.
                            </Text>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Time & Results */}
            <Section variant="cream" id="results">
                <ScrollReveal direction="up">
                    <div className="services-results">
                        <Text variant="body" className="services-results__statement">
                            This approach requires judgement, restraint, and time — and that is precisely why it cannot be mass-
                            produced.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* CTA */}
            <Section variant="teal" id="cta">
                <ScrollReveal direction="scale">
                    <div className="services-cta">
                        <Text variant="h2" className="text-white">Ready to Experience the Difference?</Text>
                        <Text className="services-cta__desc">
                            All engagements are pre-scheduled and prepared well in advance.
                        </Text>
                        <Button to="/appointment" variant="yellow" className="button--large">
                            Request Appointment
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </div>
    )
}

export default ServicesPage
