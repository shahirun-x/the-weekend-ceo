import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'
import './StandardsPage.css'

function StandardsPage() {
    return (
        <div className="standards-page">
            <Hero
                eyebrow="Discipline"
                title="OUR"
                titleAccent="STANDARDS"
                subtitle="Excellence is not scalable. Excellence is Premium. Excellence is an investment."
                short
            />

            <Section variant="darker" id="standards">
                <ScrollReveal direction="up">
                    <div className="standards-intro">
                        <Text variant="h2">Excellence is not scalable.</Text>
                        <Text className="standards-intro__sub">----Which is why we choose restraint. This is not structured for volume.</Text>
                    </div>
                </ScrollReveal>

                <div className="standards-stats">
                    <ScrollReveal direction="scale" delay={100}>
                        <div className="standards-stat">
                            <span className="standards-stat__value">1 CAR</span>
                            <Text variant="h3">Crafted Per Day</Text>
                            <Text>Executed with complete focus.</Text>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal direction="scale" delay={200}>
                        <div className="standards-stat">
                            <span className="standards-stat__value">96 CARs</span>
                            <Text variant="h3">Crafted Per Year</Text>
                            <Text>All engagements are pre-scheduled and prepared well in advance.</Text>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal direction="scale" delay={300}>
                        <div className="standards-stat">
                            <span className="standards-stat__value">6 - 8 CARs</span>
                            <Text variant="h3">Crafted Per Month</Text>
                            <Text>Carefully planned and executed exclusively on weekends.</Text>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal direction="up" delay={200}>
                    <div className="standards-note">
                        <Text>
                            Time is allocated per vehicle. Not adjusted. Execution follows discipline. Not convenience. If the standard cannot be maintained, the work does not proceed.
                        </Text>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={300}>
                    <div className="standards-process">
                        <Text variant="h3" className="standards-process__title">OUR PROCESS</Text>
                        <Text className="standards-process__desc">
                            Every vehicle undergoes a structured sequence. Preparation, correction, refinement, and finishing are carried out without overlap or shortcuts. Work is performed in controlled conditions with focus on surface integrity and finish quality. Only necessary processes are applied. Nothing is added for display.
                        </Text>
                        <ul className="standards-process__list">
                            <li>Paint correction and refinement</li>
                            <li>Hand-applied wax and sealant systems</li>
                            <li>Controlled finishing techniques</li>
                            <li>No ceramic positioning. No marketing-driven claims. Only visible results.</li>
                        </ul>
                    </div>
                </ScrollReveal>
            </Section>

            <section className="standards-cta-section">
                <div className="standards-cta-ambient"></div>
                <ScrollReveal direction="scale">
                    <div className="standards-cta-content">
                        <Text variant="h2">Experience Our <span className="text-wine">Standards</span></Text>
                        <Button to="/appointment" variant="primary" className="btn--large">Request a Slot</Button>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    )
}

export default StandardsPage
