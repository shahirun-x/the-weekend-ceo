import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import ScrollReveal from '../components/ScrollReveal'
import Button from '../components/Button'
import './AreasPage.css'

const serviceAreas = [
    {
        region: 'Tamilnadu',
        locations: ['Chennai', 'Vellore', 'Katpadi', 'Villupuram', 'Ambur', 'Vaniyambadi', 'Salem', 'Erode', 'Tirupur', 'Coimbatore', 'Madurai', 'Tirunelveli', 'Tuticorin', 'Nagercoil'],
        featured: true
    },
    {
        region: 'Pondicherry',
        locations: ['Pondicherry'],
        featured: false
    },
    {
        region: 'Karnataka',
        locations: ['Bengaluru', 'Mysore', 'Udupi', 'Mangaluru'],
        featured: false
    },
    {
        region: 'Andhra Pradesh',
        locations: ['Tirupati', 'Visakhapatnam', 'Nellore', 'Vijayawada', 'Guntur', 'Anantapur', 'Chitoor'],
        featured: false
    },
    {
        region: 'Telangana',
        locations: ['Secundrabad', 'Hyderabad'],
        featured: false
    },
    {
        region: 'Kerala',
        locations: ['Trivandrum', 'Cochin', 'Kozhikode', 'Pallakad', 'Ernakulam', 'Thrissur', 'Kottayam', 'Mallapuram'],
        featured: false
    }
]

function AreasPage() {
    return (
        <div className="areas-page">
            {/* Hero */}
            <Hero
                title="SERVICE AREAS"
                subtitle="Beyond Location"
                short
            />

            {/* Availability Statement */}
            <Section variant="charcoal" id="availability">
                <ScrollReveal direction="up">
                    <div className="areas-availability" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <Text variant="h2" className="text-white" style={{ marginBottom: '1.5rem' }}>
                            We are prepared to reach your location by Road, Rail, or by Air without any additional travel charges.
                        </Text>
                        <Text variant="h3" className="text-yellow" style={{ marginBottom: '1.5rem' }}>
                            Our Standards Travel — Not the Car.
                        </Text>
                        <Text className="text-white" style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                            We are at present available at most parts of South India.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Areas Grid */}
            <Section variant="cream" id="locations">
                <div className="areas-grid">
                    {serviceAreas.map((area, index) => (
                        <ScrollReveal
                            key={area.region}
                            direction={index % 2 === 0 ? 'left' : 'right'}
                            delay={index * 100}
                        >
                            <div className={`areas-card ${area.featured ? 'areas-card--featured' : ''}`}>
                                <Text variant="h3" className="areas-card__title">{area.region}</Text>
                                <ol className="areas-card__list">
                                    {area.locations.map((location, locIndex) => (
                                        <li key={locIndex}>{location}</li>
                                    ))}
                                </ol>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </Section>

            {/* Closing Note */}
            <Section variant="teal" id="closing">
                <ScrollReveal direction="scale">
                    <div className="areas-closing" style={{ textAlign: 'center' }}>
                        <Text variant="h3" className="text-white" style={{ marginBottom: '1rem' }}>Don't see your Location?</Text>
                        <Text className="areas-closing__text" style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
                            We hope your location is available above. If not but you're interested in our craftsmanship then please reach us. We will try our best to reach you.
                        </Text>
                        <Button to="/appointment" variant="yellow" className="button--large">Request a Slot</Button>
                    </div>
                </ScrollReveal>
            </Section>
        </div>
    )
}

export default AreasPage
