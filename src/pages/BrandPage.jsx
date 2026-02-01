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
                title="The Idea Behind"
                titleAccent="The Weekend CEO"
                subtitle="Where entrepreneurship, ownership, and a lifelong passion for cars converge."
                short
            />

            {/* The Idea Behind */}
            <Section variant="cream" id="idea">
                <ScrollReveal direction="up">
                    <div className="brand-idea">
                        <Text variant="body" className="brand-idea__text">
                            By weekdays, the founder operates as a senior corporate leader — accountable for people, processes, performance, and outcomes, in an environment where standards are non-negotiable and time is the most valuable currency.
                        </Text>
                        <Text variant="body" className="brand-idea__text">
                            By weekends, that same leadership becomes deeply personal.
                        </Text>
                        <Text variant="h3" className="brand-idea__highlight">
                            The Weekend CEO is where entrepreneurship, ownership, and a lifelong passion for cars converge — guided by the same CEO mindset, now expressed through hands-on craftsmanship instead of boardrooms and presentations.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* The Duality */}
            <Section variant="yellow" id="duality">
                <ScrollReveal direction="up">
                    <div className="brand-duality">
                        <Text variant="eyebrow">This duality is intentional.</Text>
                        <div className="brand-duality__grid">
                            <div className="brand-duality__item">
                                <Text variant="h3">Corporate Leadership</Text>
                                <Text variant="body">
                                    Builds structure, systems, discipline, and respect for time.
                                </Text>
                            </div>
                            <div className="brand-duality__item">
                                <Text variant="h3">Entrepreneurship</Text>
                                <Text variant="body">
                                    Fuels obsession, pride, accountability, and care beyond obligation.
                                </Text>
                            </div>
                        </div>
                        <Text variant="accent" className="brand-duality__statement">
                            The Weekend CEO exists at the intersection of both — where professional rigour meets personal passion, and where time is invested, not spent.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Not A Side Activity */}
            <Section variant="charcoal" id="not-side">
                <ScrollReveal direction="scale">
                    <div className="brand-not-side">
                        <Text variant="h2" className="text-white">This is not a side activity.</Text>
                        <Text className="brand-not-side__desc">
                            It is a founder-led boutique automotive brand, deliberately limited in scale, where every car receives undivided, CEO-level ownership and involvement — from the first touch to the final inspection.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Our Approach */}
            <Section variant="cream" id="approach">
                <ScrollReveal direction="up">
                    <div className="brand-approach">
                        <Text variant="eyebrow">Our Approach.</Text>
                        <Text variant="h2">What Makes Us Unique & Different?</Text>
                        <div className="brand-approach__content">
                            <Text variant="body">
                                The Weekend CEO positions itself as one of India's most premium and expensive forms of automotive craftmanship — by choice, not by claim.
                            </Text>
                            <Text variant="body">
                                This Isn't your regular car wash. This is a statement. Every vehicle we touch undergoes a transformation guided by obsession attention to detail and a refusal to cut corners. We do not believe premium automotive care belongs in crowded studios, mechanic sheds or mass execution. We believe it belongs in calm environments, controlled preparation, methodical execution.
                            </Text>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Philosophy - No Ceramic/PPF */}
            <Section variant="teal" id="philosophy">
                <ScrollReveal direction="up">
                    <div className="brand-philosophy">
                        <Text className="brand-philosophy__intro">
                            We do not seal paint using ceramic coatings, PPF installations or deliver false longevity promises, or marketing-driven warranty statements.
                        </Text>
                        <Text variant="body" className="brand-philosophy__text">
                            Instead, we focus on detailing in its purest and most demanding form:
                        </Text>
                        <Text variant="h3" className="brand-philosophy__title text-yellow">PURE CRAFTSMANSHIP</Text>
                        <ul className="brand-philosophy__list">
                            <li>Advanced paint correction and surface refinement</li>
                            <li>Elite German waxes, sealants, and detailing systems applied by hand. The wax gives protection and keeps the paint open and original for future corrections or changes.</li>
                            <li>Techniques that prioritise depth, clarity, warmth, and tactile perfection</li>
                        </ul>
                        <Text className="brand-philosophy__conclusion">
                            Our results are visible to the eye, felt by the hand, and understood by enthusiasts — not hidden behind claims or paperwork. This approach requires judgement, restraint, and time and that is precisely why it cannot be mass-produced.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Who This Is For */}
            <Section variant="yellow" id="audience">
                <ScrollReveal direction="up">
                    <div className="brand-audience">
                        <Text variant="h2" className="brand-audience__title">Who this is For</Text>
                        <Text variant="body" className="brand-audience__intro">The Weekend CEO is Created for:</Text>

                        <div className="brand-audience__grid">
                            <div className="brand-audience__item brand-audience__item--yes">
                                <span className="brand-audience__icon">✓</span>
                                <Text>Premium & Luxury car owners</Text>
                            </div>
                            <div className="brand-audience__item brand-audience__item--yes">
                                <span className="brand-audience__icon">✓</span>
                                <Text>Entrepreneurs, Professionals, Celebrities and Leaders</Text>
                            </div>
                            <div className="brand-audience__item brand-audience__item--yes">
                                <span className="brand-audience__icon">✓</span>
                                <Text>Car Collectors & Serious automotive enthusiasts.</Text>
                            </div>
                            <div className="brand-audience__item brand-audience__item--yes">
                                <span className="brand-audience__icon">✓</span>
                                <Text>Individuals who value craftsmanship over convenience.</Text>
                            </div>
                        </div>

                        <Text variant="body" className="brand-audience__note">
                            If you seek quick washes, discounts, or mass service execution – we are not for you.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* CTA */}
            <Section variant="cream" id="cta">
                <ScrollReveal direction="scale">
                    <div className="brand-cta">
                        <Text variant="h2">Experience the <span className="text-teal">Difference.</span></Text>
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
