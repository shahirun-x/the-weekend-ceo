import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import ScrollReveal from '../components/ScrollReveal'
import Button from '../components/Button'
import './AreasPage.css'

const serviceAreas = [
    {
        region: 'Delhi NCR',
        locations: ['South Delhi', 'Central Delhi', 'Gurgaon', 'Noida', 'Greater Noida', 'Faridabad'],
        featured: true
    },
    {
        region: 'Mumbai',
        locations: ['South Mumbai', 'Bandra', 'Juhu', 'Powai', 'Thane', 'Navi Mumbai'],
        featured: false
    },
    {
        region: 'Bangalore',
        locations: ['Indiranagar', 'Koramangala', 'Whitefield', 'HSR Layout', 'Jayanagar'],
        featured: false
    },
    {
        region: 'Hyderabad',
        locations: ['Jubilee Hills', 'Banjara Hills', 'HITEC City', 'Gachibowli', 'Madhapur'],
        featured: false
    },
    {
        region: 'Chennai',
        locations: ['T. Nagar', 'Adyar', 'Anna Nagar', 'Velachery', 'OMR'],
        featured: false
    },
    {
        region: 'Pune',
        locations: ['Koregaon Park', 'Kalyani Nagar', 'Baner', 'Aundh', 'Viman Nagar'],
        featured: false
    }
]

function AreasPage() {
    return (
        <div className="areas-page">
            {/* Hero */}
            <Hero
                eyebrow="The Weekend CEO Standards"
                title="Beyond"
                titleAccent="Location."
                subtitle="Where the standard travels — not the car."
                short
            />

            {/* Standards Statement */}
            <Section variant="charcoal" id="standards">
                <ScrollReveal direction="up">
                    <div className="areas-standards">
                        <Text variant="h2" className="text-white">
                            Excellence is not scalable without compromise
                        </Text>
                        <Text className="areas-standards__subtitle">
                            — which is why we choose restraint.
                        </Text>
                        <div className="areas-standards__content">
                            <Text className="areas-standards__text">
                                The Weekend CEO operates strictly by private appointment, with the flexibility to serve clients
                                beyond geography.
                            </Text>
                            <Text className="areas-standards__text areas-standards__highlight">
                                When alignment and scheduling demand it, we are prepared to reach your location by road, rail, or
                                by air (flight) — without any additional travel charges.
                            </Text>
                            <Text className="areas-standards__text">
                                This is not a commercial tactic; it is a commitment to uphold standards beyond location.
                            </Text>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Our Commitment */}
            <Section variant="yellow" id="commitment">
                <ScrollReveal direction="up">
                    <div className="areas-commitment">
                        <Text variant="eyebrow">To preserve uncompromising craftsmanship and founder-level involvement:</Text>
                        <div className="areas-commitment__grid">
                            <div className="areas-commitment__item">
                                <span className="areas-commitment__number">1</span>
                                <Text variant="body">Only one car is accepted per day</Text>
                            </div>
                            <div className="areas-commitment__item">
                                <span className="areas-commitment__number">6-8</span>
                                <Text variant="body">Cars per month, carefully planned and executed exclusively on weekends</Text>
                            </div>
                            <div className="areas-commitment__item">
                                <span className="areas-commitment__number">✓</span>
                                <Text variant="body">All engagements are pre-scheduled and prepared well in advance</Text>
                            </div>
                        </div>
                        <Text variant="accent" className="areas-commitment__note">
                            This ensures every vehicle receives uninterrupted attention, unhurried execution, and complete
                            accountability — something money alone cannot buy.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Areas Grid */}
            <Section variant="cream" id="locations">
                <ScrollReveal direction="up">
                    <div className="areas-header">
                        <Text variant="eyebrow">Currently Serving</Text>
                        <Text variant="h2">Select <span className="text-teal">Locations</span></Text>
                    </div>
                </ScrollReveal>

                <div className="areas-grid">
                    {serviceAreas.map((area, index) => (
                        <ScrollReveal
                            key={area.region}
                            direction={index % 2 === 0 ? 'left' : 'right'}
                            delay={index * 100}
                        >
                            <div className={`areas-card ${area.featured ? 'areas-card--featured' : ''}`}>
                                <Text variant="h3" className="areas-card__title">{area.region}</Text>
                                <ul className="areas-card__list">
                                    {area.locations.map((location, locIndex) => (
                                        <li key={locIndex}>{location}</li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </Section>

            {/* Note */}
            <Section variant="teal" id="expansion">
                <ScrollReveal direction="scale">
                    <div className="areas-note">
                        <Text variant="h3" className="text-white">Don't see your area?</Text>
                        <Text className="areas-note__text">
                            We are prepared to reach your location by road, rail, or by air — without any additional travel charges.
                        </Text>
                        <Text className="areas-note__text">
                            Contact us to discuss your requirements.
                        </Text>
                        <Button to="/appointment" variant="yellow">Request Appointment</Button>
                    </div>
                </ScrollReveal>
            </Section>
        </div>
    )
}

export default AreasPage
