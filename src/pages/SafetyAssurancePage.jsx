import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'
import './SafetyAssurancePage.css'

function SafetyAssurancePage() {
    return (
        <div className="safety-page">
            <Hero
                title="PROTECTION IS BUILT-IN"
                subtitle="SAFETY ASSURANCE"
                short
            />

            <Section variant="charcoal" id="assurance-principles">
                <div className="safety-grid">
                    <ScrollReveal direction="up" delay={100}>
                        <div className="safety-card">
                            <Text variant="h3" className="safety-card__title">1. INSURED EXECUTION</Text>
                            <Text className="safety-card__desc">
                                Each vehicle is handled under defined conditions. No uncontrolled movement. No unnecessary exposure. No third-party dependency. No compromise on environment. Work is executed with discipline and accountability.
                            </Text>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={200}>
                        <div className="safety-card">
                            <Text variant="h3" className="safety-card__title">2. CONTROLLED HANDLING</Text>
                            <Text className="safety-card__desc">
                                Protection is not presented as a feature. From the first interaction to final inspection, ownership is not delegated. The same level of responsibility is maintained throughout the process.
                            </Text>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={300}>
                        <div className="safety-card">
                            <Text variant="h3" className="safety-card__title">3. RESPONSIBILITY AT EVERY STAGE</Text>
                            <Text className="safety-card__desc">
                                Protection is not presented as a feature. From the first interaction to final inspection, ownership is not delegated. The same level of responsibility is maintained throughout the process.
                            </Text>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={400}>
                        <div className="safety-card">
                            <Text variant="h3" className="safety-card__title">4. PROFESSIONAL GRADE SYSTEMS</Text>
                            <Text className="safety-card__desc">
                                Work is executed using globally recognised detailing systems. CarPro. Rupes. Swissvax. Tested, consistent, and performance-driven. No generic or unverified products are introduced.
                            </Text>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={500}>
                        <div className="safety-card">
                            <Text variant="h3" className="safety-card__title">5. FULLY INSURED</Text>
                            <Text className="safety-card__desc">
                                Every engagement is fully insured. From arrival to completion, the vehicle is covered against all risks. No dependency on verbal assurance. No uncertainty.
                            </Text>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={600}>
                        <div className="safety-card">
                            <Text variant="h3" className="safety-card__title">6. SURFACE-SAFE CHEMISTRY</Text>
                            <Text className="safety-card__desc">
                                All products used are pH-balanced and material-safe. No harsh compounds. No unnecessary chemical exposure. Every application is aligned to surface condition and requirement.
                            </Text>
                        </div>
                    </ScrollReveal>
                </div>
            </Section>

            <Section variant="teal" id="cta">
                <ScrollReveal direction="scale">
                    <div className="home-cta">
                        <Text variant="h2" className="text-white">Experience Our Standards</Text>
                        <Button to="/appointment" variant="yellow" className="button--large">
                            Request a Slot
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </div>
    )
}

export default SafetyAssurancePage
