import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import ScrollReveal from '../components/ScrollReveal'
import Button from '../components/Button'
import './AreasPage.css'

const serviceAreas = [
    {
        region: 'Delhi NCR',
        locations: ['South Delhi', 'Central Delhi', 'Gurgaon', 'Noida', 'Greater Noida', 'Faridabad']
    },
    {
        region: 'Mumbai Metropolitan',
        locations: ['South Mumbai', 'Bandra', 'Juhu', 'Powai', 'Thane', 'Navi Mumbai']
    },
    {
        region: 'Bangalore',
        locations: ['Indiranagar', 'Koramangala', 'Whitefield', 'HSR Layout', 'Jayanagar', 'JP Nagar']
    },
    {
        region: 'Hyderabad',
        locations: ['Jubilee Hills', 'Banjara Hills', 'HITEC City', 'Gachibowli', 'Madhapur', 'Kondapur']
    },
    {
        region: 'Chennai',
        locations: ['T. Nagar', 'Adyar', 'Anna Nagar', 'Velachery', 'OMR', 'ECR']
    },
    {
        region: 'Pune',
        locations: ['Koregaon Park', 'Kalyani Nagar', 'Baner', 'Aundh', 'Viman Nagar', 'Hinjewadi']
    }
]

function AreasPage() {
    return (
        <div className="areas-page">
            {/* Hero */}
            <Hero
                eyebrow="Service Areas"
                title="Premium service. At your doorstep."
                subtitle="We bring the studio to you. Currently serving select locations across India's major metropolitan areas."
                fullHeight={false}
            />

            {/* Coverage Notice */}
            <Section id="coverage">
                <ScrollReveal>
                    <div className="areas-notice">
                        <Text variant="body">
                            Our doorstep service model means your vehicle never leaves your sight. We arrive
                            equipped with everything needed to deliver the full experience—no compromises,
                            no shortcuts.
                        </Text>
                        <Text variant="accent" className="areas-notice__highlight">
                            Don't see your area? Contact us. We evaluate expansion requests based on demand
                            and our ability to maintain our standards.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Areas Grid */}
            <Section dark id="locations">
                <ScrollReveal>
                    <div className="areas-grid-section">
                        <Text variant="eyebrow">Currently Serving</Text>
                        <Text variant="h2">Service Locations</Text>

                        <div className="areas-grid">
                            {serviceAreas.map((area, index) => (
                                <div key={index} className="areas-region">
                                    <Text variant="h3" className="areas-region__title">{area.region}</Text>
                                    <ul className="areas-region__list">
                                        {area.locations.map((location, locIndex) => (
                                            <li key={locIndex}>{location}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* CTA */}
            <Section className="areas-cta-section">
                <ScrollReveal>
                    <div className="areas-cta">
                        <Text variant="h2">Located in a service area?</Text>
                        <Text variant="body">
                            Request an appointment and we'll confirm availability for your location.
                        </Text>
                        <Button to="/appointment" variant="primary" className="button--large">
                            Request Appointment
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </div>
    )
}

export default AreasPage
