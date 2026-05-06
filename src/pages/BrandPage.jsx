import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import ScrollReveal from '../components/ScrollReveal'
import Button from '../components/Button'
import './BrandPage.css'

function BrandPage() {
    return (
        <div className="brand-page">
            <div className="founder-initials founder-initials--brand-hero" style={{ top: '15%', left: '10%' }}>KA</div>

            {/* Hero */}
            <Hero
                title="BRAND STORY"
                subtitle="The Idea Behind The Weekend CEO"
                short
            />

            {/* The Idea Behind */}
            <Section variant="cream" id="idea">
                <ScrollReveal direction="up">
                    <div className="brand-idea">
                        <Text variant="body" className="brand-idea__text">
                            During the week, the founder operates in environments where standards are non-negotiable, time is measured, and accountability defines outcomes. On weekends, that same discipline becomes personal. Not in meetings. Not in presentations. But in the quiet, controlled process of working on a car. This is not a shift in role. It is a shift in expression. The same mindset — precision, ownership, and responsibility — now applied by hand.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Pull Quote */}
            <Section variant="charcoal" id="quote">
                <div className="founder-initials founder-initials--brand-quote" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.05, fontSize: '15rem', width: '350px', height: '350px' }}>KA</div>
                <ScrollReveal direction="scale">
                    <div className="brand-quote" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                        <Text variant="h2" className="text-yellow" style={{ fontSize: '2.5rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                            "Leadership meets craftsmanship."
                        </Text>
                        <Text variant="h3" className="text-white" style={{ fontSize: '1.5rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                            Two disciplines. One standard.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* The Duality */}
            <Section variant="yellow" id="duality">
                <ScrollReveal direction="up">
                    <div className="brand-duality">
                        <div className="brand-duality__grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'center', marginBottom: '3rem' }}>
                            <div className="brand-duality__item">
                                <Text variant="h3" style={{ color: 'var(--teal)', marginBottom: '1rem' }}>Corporate leadership</Text>
                                <Text variant="body" style={{ fontSize: '1.2rem', color: 'var(--charcoal)' }}>
                                    Builds structure, discipline, and respect for time.
                                </Text>
                            </div>
                            <div className="brand-duality__item">
                                <Text variant="h3" style={{ color: 'var(--teal)', marginBottom: '1rem' }}>Entrepreneurial instinct</Text>
                                <Text variant="body" style={{ fontSize: '1.2rem', color: 'var(--charcoal)' }}>
                                    Drives obsession, accountability, and care beyond obligation.
                                </Text>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
                
                <ScrollReveal direction="up" delay={200}>
                    <div className="brand-closing" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2rem' }}>
                        <Text variant="body" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--charcoal)' }}>
                            The Weekend CEO exists at the intersection of both — where professional rigour meets personal craftsmanship. This is not a side activity. It is a deliberately limited, founder-led practice — where every car receives undivided attention from start to finish. Where entrepreneurship, ownership, and a lifelong passion for cars converge.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* CTA */}
            <Section variant="teal" id="cta">
                <ScrollReveal direction="scale">
                    <div className="brand-cta" style={{ textAlign: 'center' }}>
                        <Text variant="h2" className="text-white" style={{ marginBottom: '2rem' }}>Experience the Difference.</Text>
                        <Button to="/appointment" variant="yellow" className="button--large">
                            Request a Slot
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </div>
    )
}

export default BrandPage
