import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'
import CarAnimation from '../components/CarAnimation'
import './HomePage.css'

function HomePage() {
    return (
        <div className="home-page">
            <div className="founder-initials founder-initials--hero">KA</div>
            
            {/* Hero Section */}
            <Hero
                title="NO ORDINARY TOUCHES"
                titleAccent="ONLY THE CEO'S TOUCH"
                subtitle="THE WEEKEND CEO"
            >
                <div className="hero-badge">96 Cars Stories League</div>
                <Text className="hero-tagline">
                    For Those Who Refuse The Ordinary.
                </Text>
                <Text className="hero-doorstep">
                    Limited to 96 Cars Per Year — Delivered @ your Home, Office, Private garages executed with precision, discipline, and complete control.
                </Text>
                <Button to="/appointment" variant="primary">Request a Slot</Button>
            </Hero>

            {/* Car Animation Divider */}
            <CarAnimation />

            {/* Brand Statement */}
            <Section variant="charcoal" id="statement">
                <div className="founder-initials founder-initials--brand">KA</div>
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
                            Request a Slot
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </div>
    )
}

export default HomePage
