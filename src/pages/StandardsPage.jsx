import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'

function StandardsPage() {
    return (
        <div className="standards-page">
            <Hero
                title="OUR STANDARDS"
                subtitle="Excellence is not scalable. Excellence is Premium. Excellence is an investment."
                short
            />

            <Section variant="yellow" id="standards">
                <ScrollReveal direction="up">
                    <div className="home-standards-intro">
                        <Text variant="h2">Excellence is not scalable. Excellence is Premium. Excellence is an investment.</Text>
                        <Text className="home-standards__subtitle">— Which is why we choose restraint.</Text>
                    </div>
                </ScrollReveal>

                <div className="home-standards__grid">
                    <ScrollReveal direction="scale" delay={100}>
                        <div className="home-standards__item">
                            <span className="home-standards__number">1 CAR</span>
                            <Text variant="h3">Crafted Per Day</Text>
                            <Text>Executed with complete focus.</Text>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal direction="scale" delay={200}>
                        <div className="home-standards__item">
                            <span className="home-standards__number">96 CARS</span>
                            <Text variant="h3">Crafted Per Year</Text>
                            <Text>All engagements are pre-scheduled and prepared well in advance</Text>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal direction="scale" delay={300}>
                        <div className="home-standards__item">
                            <span className="home-standards__number">6–8 CARS</span>
                            <Text variant="h3">Crafted Per Month</Text>
                            <Text>Carefully planned and executed exclusively on weekends.</Text>
                        </div>
                    </ScrollReveal>
                </div>
                
                <ScrollReveal direction="up" delay={200}>
                    <div className="home-standards-footer">
                        <Text className="home-standards__note">
                            Time is allocated per vehicle. Not adjusted. Execution follows discipline. Not convenience. If the standard cannot be maintained, the work does not proceed.
                        </Text>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={300}>
                    <div className="home-process">
                        <Text variant="h3" className="home-process__title">OUR PROCESS</Text>
                        <Text className="home-process__desc">
                            Every vehicle undergoes a structured sequence. Preparation, correction, refinement, and finishing are carried out without overlap or shortcuts. Work is performed in controlled conditions with focus on surface integrity and finish quality. Only necessary processes are applied. Nothing is added for display.
                        </Text>
                        <ul className="home-process__list">
                            <li>Paint correction and refinement</li>
                            <li>Hand-applied wax and sealant systems</li>
                            <li>Controlled finishing techniques</li>
                            <li>No ceramic positioning. No marketing-driven claims. Only visible results.</li>
                        </ul>
                    </div>
                </ScrollReveal>
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

export default StandardsPage
