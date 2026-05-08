import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'
import './SafetyAssurancePage.css'

const principles = [
    { num: '01', title: 'INSURED EXECUTION', desc: 'Every engagement is fully insured. From arrival to completion, the vehicle is covered against all risks. No dependency on verbal assurance. No uncertainty.' },
    { num: '02', title: 'CONTROLLED HANDLING', desc: 'Each vehicle is handled under defined conditions. No uncontrolled movement. No unnecessary exposure. No third-party dependency. No compromise on environment. Work is executed with discipline and accountability.' },
    { num: '03', title: 'RESPONSIBILITY AT EVERY STAGE', desc: 'Protection is not presented as a feature. From the first interaction to final inspection, ownership is not delegated. The same level of responsibility is maintained throughout the process.' },
    { num: '04', title: 'PROFESSIONAL GRADE - SYSTEMS', desc: 'Work is executed using globally recognised detailing systems. CarPro. Rupes. Swissvax. Tested, consistent, and performance-driven. No generic or unverified products are introduced.' },
    { num: '05', title: 'SURFACE - SAFE CHEMISTRY', desc: 'All products used are pH-balanced and material-safe. No harsh compounds. No unnecessary chemical exposure. Every application is aligned to surface condition and requirement.' },
]

function SafetyAssurancePage() {
    return (
        <div className="safety-page">
            <Hero
                eyebrow="Safety Assurance"
                title="PROTECTION IS"
                titleAccent="BUILT - IN."
                subtitle="SAFETY ASSURANCE"
                short
            />

            <Section variant="darker" id="principles" className="ambient-edge">
                <div className="safety-grid">
                    {principles.map((p, idx) => (
                        <ScrollReveal key={idx} direction="up" delay={idx * 80}>
                            <div className="safety-card showroom-light">
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
