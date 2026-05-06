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
                eyebrow="Our Philosophy"
                title="BRAND"
                titleAccent="STORY"
                subtitle="Leadership meets craftsmanship. Two disciplines. One standard."
                short
            />

            <Section variant="darker" id="idea" className="ambient-edge">
                <ScrollReveal direction="up">
                    <div className="brand-statement">
                        <Text variant="large" className="brand-statement__text">
                            During the week, the founder operates in environments where standards are non-negotiable, time is measured, and accountability defines outcomes. On weekends, that same discipline becomes personal. Not in meetings. Not in presentations. But in the quiet, controlled process of working on a car.
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
                            <Text variant="h3" className="text-wine">Corporate Leadership</Text>
                            <Text>Builds structure, discipline, and respect for time.</Text>
                        </div>
                        <div className="brand-duality__divider"></div>
                        <div className="brand-duality__card smoked-glass">
                            <Text variant="h3" className="text-blue">Entrepreneurial Instinct</Text>
                            <Text>Drives obsession, accountability, and care beyond obligation.</Text>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={200}>
                    <div className="brand-closing">
                        <Text className="brand-closing__text">
                            The Weekend CEO exists at the intersection of both — where professional rigour meets personal craftsmanship. This is not a side activity. It is a deliberately limited, founder-led practice — where every car receives undivided attention from start to finish.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            <section className="brand-cta-section">
                <div className="brand-cta-ambient"></div>
                <ScrollReveal direction="scale">
                    <div className="brand-cta-content">
                        <Text variant="h2">Experience the <span className="text-wine">Difference.</span></Text>
                        <Button to="/appointment" variant="primary" className="btn--large">Request a Slot</Button>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    )
}

export default BrandPage
