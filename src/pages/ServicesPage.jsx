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
                title="Each car follows a"
                titleAccent="structured, purpose driven methodology."
                subtitle="Nothing is compromised & Nothing exists without reason."
                short
            />

            {/* Service Packs */}
            <Section variant="cream" id="packs">
                <ScrollReveal direction="up">
                    <div className="services-header">
                        <Text variant="eyebrow">Services</Text>
                    </div>
                </ScrollReveal>

                <div className="services-grid">
                    {/* CEO's Luxury Pro Pack */}
                    <ScrollReveal direction="left" delay={100}>
                        <div className="service-pack service-pack--pro">
                            <div className="service-pack__content">
                                <Text variant="h3" className="service-pack__name">CEO's Luxury Pro Pack</Text>
                                <Text variant="h2" className="service-pack__price">Rs.75,000/- <span>+ GST</span></Text>
                                <div className="service-pack__details">
                                    <Text variant="body" className="service-pack__steps">25 steps</Text>
                                    <Text variant="body" className="service-pack__time">4 to 6 hours Craftmanship</Text>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* CEO's Ultra Luxury Pack */}
                    <ScrollReveal direction="right" delay={200}>
                        <div className="service-pack service-pack--ultra">
                            <div className="service-pack__content">
                                <Text variant="h3" className="service-pack__name">CEO's Ultra Luxury Pack</Text>
                                <Text variant="h2" className="service-pack__price">Rs.1,50,000/- <span>+ GST</span></Text>
                                <div className="service-pack__details">
                                    <Text variant="body" className="service-pack__steps">40 steps</Text>
                                    <Text variant="body" className="service-pack__time">8 to 10 hours Craftmanship</Text>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* CEO's Premium Signature Pack */}
                    <ScrollReveal direction="left" delay={300}>
                        <div className="service-pack service-pack--signature">
                            <div className="service-pack__content">
                                <Text variant="h3" className="service-pack__name text-yellow">CEO's Premium Signature Pack</Text>
                                <Text variant="h2" className="service-pack__price text-white">Rs.3,00,000/- <span>+ GST</span></Text>
                                <div className="service-pack__details">
                                    <Text variant="body" className="service-pack__time text-white">Until CEO's Satisfaction - 2 days</Text>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* CEO's Celebrities Signature Pack */}
                    <ScrollReveal direction="right" delay={400}>
                        <div className="service-pack service-pack--celebrities">
                            <div className="service-pack__content">
                                <Text variant="h3" className="service-pack__name text-yellow">CEO's Celebrities Signature Pack</Text>
                                <Text variant="h2" className="service-pack__price text-white">Rs.5,00,000/- <span>+ GST</span></Text>
                                <div className="service-pack__details">
                                    <Text variant="body" className="service-pack__time text-white">Until CEO's Satisfaction - 2 days</Text>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
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
