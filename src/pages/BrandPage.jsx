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
                title="Built on"
                titleAccent="Obsession."
                subtitle="We didn't build The Weekend CEO to scale. We built it to matter."
                short
            />

            {/* Origin - Big Type */}
            <Section variant="cream" id="origin">
                <div className="brand-origin">
                    <ScrollReveal direction="left">
                        <div className="brand-origin__headline">
                            <Text variant="h2">
                                This company was born from a simple observation:
                            </Text>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal direction="right" delay={200}>
                        <div className="brand-origin__statement">
                            <Text className="brand-origin__big-text">
                                Premium vehicles deserve more than <span className="text-teal">assembly-line treatment.</span>
                            </Text>
                        </div>
                    </ScrollReveal>
                </div>
            </Section>

            {/* Philosophy Grid */}
            <Section variant="yellow" id="philosophy">
                <ScrollReveal direction="up">
                    <Text variant="eyebrow" className="text-charcoal">Our Philosophy</Text>
                    <Text variant="h2" className="brand-philosophy__title">
                        We Choose <span className="text-teal">Restraint</span>
                    </Text>
                </ScrollReveal>

                <div className="brand-philosophy__grid">
                    <ScrollReveal direction="left" delay={100}>
                        <div className="brand-philosophy__item">
                            <span className="brand-philosophy__number">01</span>
                            <Text variant="h3">Intent Over Speed</Text>
                            <Text variant="body">
                                Every decision is deliberate. Every motion is purposeful.
                                The result is work that reflects thought, not just effort.
                            </Text>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={200}>
                        <div className="brand-philosophy__item">
                            <span className="brand-philosophy__number">02</span>
                            <Text variant="h3">Selection Over Volume</Text>
                            <Text variant="body">
                                We say no more than we say yes. This selectivity protects the quality of what we deliver.
                            </Text>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal direction="right" delay={300}>
                        <div className="brand-philosophy__item">
                            <span className="brand-philosophy__number">03</span>
                            <Text variant="h3">Discipline Over Convenience</Text>
                            <Text variant="body">
                                The easy path is rarely the right one. We hold ourselves to standards that most
                                would call excessive.
                            </Text>
                        </div>
                    </ScrollReveal>
                </div>
            </Section>

            {/* Founder Quote - Full Width */}
            <Section variant="charcoal" id="founder">
                <ScrollReveal direction="scale">
                    <div className="brand-founder">
                        <div className="brand-founder__quote-mark">"</div>
                        <Text variant="h2" className="brand-founder__quote">
                            I started this to prove that craftsmanship still has a place in a world obsessed with efficiency.
                        </Text>
                        <div className="brand-founder__attribution">
                            <span className="brand-founder__line"></span>
                            <Text variant="caption" className="text-white">The Founder</Text>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* CTA */}
            <Section variant="gradient" id="cta">
                <ScrollReveal direction="up">
                    <div className="brand-cta">
                        <Text variant="h2">Experience the <span className="text-teal">Difference.</span></Text>
                        <Button to="/appointment" variant="primary" className="button--large">
                            Book Your Spot
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </div>
    )
}

export default BrandPage
