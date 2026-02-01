import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'
import './HomePage.css'

function HomePage() {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <Hero
                eyebrow="Founder-led Luxury Automotive Craftsmanship"
                title="No Ordinary Touches."
                titleAccent="Only The CEO's Touch."
                subtitle="For Those Who Refuse The Ordinary."
            >
                <Text className="hero-doorstep">
                    Delivered at your doorstep – Your home, Your Office, or Your Private Spaces – Executed with the restraint, respect, and discipline found in elite global detailing ateliers.
                </Text>
                <Button to="/appointment" variant="primary">Request Appointment</Button>
                <Button to="/services" variant="secondary">View Services</Button>
            </Hero>

            {/* Brand Statement */}
            <Section variant="charcoal" id="statement">
                <ScrollReveal direction="up">
                    <div className="home-statement">
                        <Text variant="h2" className="home-statement__title">
                            A car is never just transport.
                        </Text>
                        <div className="home-statement__content">
                            <Text className="home-statement__desc">
                                It is an asset. An expression. An Emotion. A reflection of its owner — even when parked still.
                            </Text>
                            <Text className="home-statement__desc">
                                The Weekend CEO was born from a belief that extraordinary cars demand patience, discipline, and leadership.
                            </Text>
                            <Text className="home-statement__desc home-statement__emphasis">
                                Not routines. Not rush. Not volume. Not Shortcuts. Not Offers
                            </Text>
                            <Text className="home-statement__desc">
                                Every vehicle is treated as a prized asset — and every touch carries responsibility.
                            </Text>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Some Cars Are Different */}
            <Section variant="cream" id="differentiation">
                <ScrollReveal direction="left">
                    <div className="home-differentiation">
                        <div className="home-differentiation__text">
                            <Text variant="h3" className="home-differentiation__italic">Some cars are driven.</Text>
                            <Text variant="h3" className="home-differentiation__italic">Some cars are lived with.</Text>
                        </div>
                        <Text variant="accent" className="home-differentiation__statement">
                            The Weekend CEO is for who can differentiate this.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Our Standards */}
            <Section variant="yellow" id="standards">
                <ScrollReveal direction="up">
                    <div className="home-standards-intro">
                        <Text variant="eyebrow">Our Standards</Text>
                        <Text variant="h2">Excellence is not scalable. Excellence is Premium. Excellence is an investment.</Text>
                        <Text className="home-standards__subtitle">----Which is why we choose restraint.</Text>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={100}>
                    <div className="home-standards-pillars">
                        <Text variant="h3">Pure Luxury</Text>
                        <Text variant="h3">Pure Individuality</Text>
                        <Text variant="h3">No Compromise</Text>
                    </div>
                </ScrollReveal>

                <div className="home-standards__grid">
                    <ScrollReveal direction="scale" delay={100}>
                        <div className="home-standards__item">
                            <span className="home-standards__number">1 CAR</span>
                            <Text variant="h3">Crafted Per Day</Text>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal direction="scale" delay={200}>
                        <div className="home-standards__item">
                            <span className="home-standards__number">6 - 8 CARs</span>
                            <Text variant="h3">Crafted Per Month</Text>
                            <Text>Carefully planned and executed exclusively on weekends.</Text>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal direction="scale" delay={300}>
                        <div className="home-standards__item">
                            <span className="home-standards__number">Total of only 96 CARs</span>
                            <Text variant="h3">Crafted Per Year</Text>
                            <Text>All engagements are pre-scheduled and prepared well in advance</Text>
                        </div>
                    </ScrollReveal>
                </div>
            </Section>

            {/* Beyond Location */}
            <Section variant="charcoal" id="beyond-location">
                <ScrollReveal direction="up">
                    <div className="home-beyond">
                        <Text variant="eyebrow" className="text-yellow">Beyond Location</Text>
                        <Text variant="h2" className="text-white">Our Standards Travel – Not the Car.</Text>
                        <Text className="home-beyond__desc">
                            We are Prepared to reach your location by road, rail or by air without any additional travel charges.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Final CTA */}
            <Section variant="teal" id="cta">
                <ScrollReveal direction="scale">
                    <div className="home-cta">
                        <Text variant="h2" className="text-white">No ordinary touches. Only the CEO's touch.</Text>
                        <Text className="home-cta__tagline">For those who refuse the ordinary.</Text>
                        <div className="home-cta__details">
                            <Text className="home-cta__detail">By appointment. By commitment. Beyond location.</Text>
                            <Text className="home-cta__detail home-cta__detail--accent">Where the standard travels — not the car.</Text>
                        </div>
                        <Button to="/appointment" variant="yellow" className="button--large">
                            Request Appointment
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </div>
    )
}

export default HomePage
