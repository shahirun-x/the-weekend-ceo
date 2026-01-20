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
                eyebrow="Service Areas"
                title="We Come"
                titleAccent="To You."
                subtitle="Premium service. At your doorstep. Currently serving select locations across India."
                short
            />

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
            <Section variant="yellow" id="expansion">
                <ScrollReveal direction="scale">
                    <div className="areas-note">
                        <Text variant="h3">Don't see your area?</Text>
                        <Text variant="body">
                            Contact us. We evaluate expansion requests based on demand and our ability to
                            maintain our standards.
                        </Text>
                        <Button to="/appointment" variant="secondary">Get In Touch</Button>
                    </div>
                </ScrollReveal>
            </Section>
        </div>
    )
}

export default AreasPage
