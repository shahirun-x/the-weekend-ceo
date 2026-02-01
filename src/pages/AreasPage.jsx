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
                eyebrow="Service Areas"
                title="Beyond"
                titleAccent="Location."
                subtitle="Where the standard travels — not the car."
                short
            />

            {/* Availability Statement */}
            <Section variant="charcoal" id="availability">
                <ScrollReveal direction="up">
                    <div className="areas-availability">
                        <Text variant="h2" className="text-white">
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
                    <div className="areas-closing">
                        <Text variant="h3" className="text-white">Don't see your location?</Text>
                        <Text className="areas-closing__text">
                            We hope your location is available above. If not but you are interested in our craftmanship please reach us. We will try the best possible to reach you.
                        </Text>
                        <Button to="/appointment" variant="yellow">Request Appointment</Button>
                    </div>
                </ScrollReveal>
            </Section>
        </div>
    )
}

export default AreasPage
