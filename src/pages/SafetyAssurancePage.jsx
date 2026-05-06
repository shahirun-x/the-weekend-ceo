import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'
import './SafetyAssurancePage.css'

const principles = [
    { num: '01', title: 'Insured Execution', desc: 'Each vehicle is handled under defined conditions. No uncontrolled movement. No unnecessary exposure. Work is executed with discipline and accountability.' },
    { num: '02', title: 'Controlled Handling', desc: 'From the first interaction to final inspection, ownership is not delegated. The same level of responsibility is maintained throughout the process.' },
    { num: '03', title: 'Responsibility at Every Stage', desc: 'Protection is not presented as a feature. It is embedded in every step of our process — from arrival to completion.' },
    { num: '04', title: 'Professional Grade Systems', desc: 'Work is executed using globally recognised detailing systems. CarPro. Rupes. Swissvax. Tested, consistent, and performance-driven.' },
    { num: '05', title: 'Fully Insured', desc: 'Every engagement is fully insured. From arrival to completion, the vehicle is covered against all risks. No verbal assurance. No uncertainty.' },
    { num: '06', title: 'Surface-Safe Chemistry', desc: 'All products used are pH-balanced and material-safe. No harsh compounds. Every application is aligned to surface condition and requirement.' },
]

function SafetyAssurancePage() {
    return (
        <div className="safety-page">
            <Hero
                eyebrow="Safety"
                title="PROTECTION IS"
                titleAccent="BUILT-IN."
                subtitle="Every step is controlled. Every surface is protected. Every engagement is insured."
                short
            />

            <Section variant="darker" id="principles">
                <div className="safety-grid">
                    {principles.map((p, idx) => (
                        <ScrollReveal key={idx} direction="up" delay={idx * 80}>
                            <div className="safety-card">
                                <span className="safety-card__num">{p.num}</span>
                                <h3 className="safety-card__title">{p.title}</h3>
                                <p className="safety-card__desc">{p.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </Section>

            <section className="safety-cta-section">
                <div className="safety-cta-ambient"></div>
                <ScrollReveal direction="scale">
                    <div className="safety-cta-content">
                        <Text variant="h2">Experience Our <span className="text-wine">Standards</span></Text>
                        <Button to="/appointment" variant="primary" className="btn--large">Request a Slot</Button>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    )
}

export default SafetyAssurancePage
