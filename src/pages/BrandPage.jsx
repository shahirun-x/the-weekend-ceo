import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import ScrollReveal from '../components/ScrollReveal'
import Button from '../components/Button'
import './BrandPage.css'

function BrandPage() {
    return (
        <div className="brand-page">
            {/* Hero */}
            <Hero
                eyebrow="The Brand"
                title="Built on restraint. Driven by craft."
                subtitle="We didn't build The Weekend CEO to scale. We built it to matter."
                fullHeight={false}
            />

            {/* Origin Story */}
            <Section id="origin">
                <ScrollReveal>
                    <div className="brand-story">
                        <div className="brand-story__content">
                            <Text variant="eyebrow">The Origin</Text>
                            <Text variant="h2">Why The Weekend CEO Exists</Text>
                            <Text variant="body">
                                This company was born from a simple observation: premium vehicles deserve more than
                                assembly-line treatment. Every car wash chain promises quality. Every mobile detailer
                                claims excellence. But genuine craftsmanship requires something they cannot offer—restraint.
                            </Text>
                            <Text variant="body">
                                We choose to remain small because excellence cannot be mass-produced. The founder
                                personally touches every vehicle not because there's no one else to do it, but because
                                delegation dilutes what makes this work meaningful.
                            </Text>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Philosophy */}
            <Section dark id="mindset">
                <ScrollReveal>
                    <div className="brand-mindset">
                        <Text variant="eyebrow">The Mindset</Text>
                        <Text variant="h2">Leadership Applied to Craft</Text>
                        <div className="brand-mindset__grid">
                            <div className="brand-mindset__item">
                                <Text variant="h3">Intent Over Speed</Text>
                                <Text variant="body">
                                    We don't rush. Every decision is deliberate. Every motion is purposeful.
                                    The result is work that reflects thought, not just effort.
                                </Text>
                            </div>
                            <div className="brand-mindset__item">
                                <Text variant="h3">Selection Over Volume</Text>
                                <Text variant="body">
                                    We say no more than we say yes. This selectivity isn't about exclusivity for
                                    its own sake—it's about protecting the quality of what we deliver.
                                </Text>
                            </div>
                            <div className="brand-mindset__item">
                                <Text variant="h3">Discipline Over Convenience</Text>
                                <Text variant="body">
                                    The easy path is rarely the right one. We hold ourselves to standards that
                                    most would call excessive. We call them necessary.
                                </Text>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Founder Note */}
            <Section id="founder">
                <ScrollReveal>
                    <div className="brand-founder">
                        <Text variant="accent" className="brand-founder__quote">
                            "I didn't start The Weekend CEO to build a business. I started it to prove that
                            craftsmanship still has a place in a world obsessed with efficiency. Every car I
                            work on is a statement: quality matters more than quantity. Always."
                        </Text>
                        <div className="brand-founder__attribution">
                            <Text variant="caption">— The Founder, The Weekend CEO</Text>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* CTA */}
            <Section dark className="brand-cta-section">
                <ScrollReveal>
                    <div className="brand-cta">
                        <Text variant="h2">Experience the difference.</Text>
                        <Button to="/appointment" variant="primary" className="button--large">
                            Request Appointment
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </div>
    )
}

export default BrandPage
