import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import ScrollReveal from '../components/ScrollReveal'
import Button from '../components/Button'
import './BrandPage.css'

function BrandPage() {
    return (
        <div className="brand-page">
            <Hero
                eyebrow="Brand Story"
                title="BRAND"
                titleAccent="STORY"
                subtitle="The Idea Behind The Weekend CEO"
                short
            />

            <Section variant="darker" id="idea" className="ambient-edge">
                <ScrollReveal direction="up">
                    <div className="brand-statement">
                        <Text variant="large" className="brand-statement__text">
                            During the week, the founder operates in environments where standards are non-negotiable, time is measured, and accountability defines outcomes. On weekends, that same discipline becomes personal. Not in meetings. Not in presentations. But in the quiet, controlled process of working on a car.
                        </Text>
                        <Text variant="large" className="brand-statement__text" style={{ marginTop: 'var(--space-md)' }}>
                            This is not a shift in role. It is a shift in expression. The same mindset — precision, ownership, and responsibility — now applied by hand.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            <Section variant="dark" id="quote">
                <div className="brand-quote-watermark">KA</div>
                <ScrollReveal direction="scale">
                    <div className="brand-quote">
                        <Text variant="h1" className="brand-quote__text">
                            "Leadership meets<br /><span className="text-wine">craftsmanship.</span>"
                        </Text>
                        <Text variant="h3" className="brand-quote__sub">Two disciplines. One standard.</Text>
                    </div>
                </ScrollReveal>
            </Section>

            <Section variant="darker" id="duality">
                <div className="luxury-divider luxury-divider--wine"></div>
                <ScrollReveal direction="up">
                    <div className="brand-duality">
                        <div className="brand-duality__card smoked-glass">
                            <Text variant="h3" className="text-wine">Corporate leadership</Text>
                            <Text>Builds structure, discipline, and respect for time.</Text>
                        </div>
                        <div className="brand-duality__divider"></div>
                        <div className="brand-duality__card smoked-glass">
                            <Text variant="h3" className="text-blue">Entrepreneurial instinct</Text>
                            <Text>Drives obsession, accountability, and care beyond obligation.</Text>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={200}>
                    <div className="brand-closing">
                        <Text className="brand-closing__text">
                            The Weekend CEO exists at the intersection of both — where professional rigour meets personal craftsmanship. This is not a side activity. It is a deliberately limited, founder-led practice — where every car receives undivided attention from start to finish.
                        </Text>
                        <Text className="brand-closing__text" style={{ marginTop: 'var(--space-sm)' }}>
                            Where entrepreneurship, ownership, and a lifelong passion for cars converge.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            <section className="brand-cta-section">
                <div className="brand-cta-ambient"></div>
                <ScrollReveal direction="scale">
                    <div className="brand-cta-content">
                        <Text variant="h2">Some cars are driven.<br /><span className="text-wine">Some cars are lived with.</span></Text>
                        <Text>This is for those who understand the difference.</Text>
                        <Button to="/appointment" variant="primary" className="btn--large">Request a Slot</Button>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    )
}

export default BrandPage
