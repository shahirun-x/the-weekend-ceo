import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import ScrollReveal from '../components/ScrollReveal'
import Button from '../components/Button'
import './AreasPage.css'

const serviceAreas = [
    { region: 'Tamilnadu', locations: ['Chennai', 'Vellore', 'Katpadi', 'Villupuram', 'Ambur', 'Vaniyambadi', 'Salem', 'Erode', 'Tirupur', 'Coimbatore', 'Madurai', 'Tirunelveli', 'Tuticorin', 'Nagercoil'], featured: true },
    { region: 'Pondicherry', locations: ['Pondicherry'] },
    { region: 'Karnataka', locations: ['Bengaluru', 'Mysore', 'Udupi', 'Mangaluru'] },
    { region: 'Andhra Pradesh', locations: ['Tirupati', 'Visakhapatnam', 'Nellore', 'Vijayawada', 'Guntur', 'Anantapur', 'Chitoor'] },
    { region: 'Telangana', locations: ['Secundrabad', 'Hyderabad'] },
    { region: 'Kerala', locations: ['Trivandrum', 'Cochin', 'Kozhikode', 'Pallakad', 'Ernakulam', 'Thrissur', 'Kottayam', 'Mallapuram'] },
]

function AreasPage() {
    return (
        <div className="areas-page">
            <Hero
                eyebrow="Coverage"
                title="SERVICE"
                titleAccent="LOCATIONS"
                subtitle="Our standards travel — not the car. Available across South India."
                short
            />

            <Section variant="darker" id="availability">
                <ScrollReveal direction="up">
                    <div className="areas-statement">
                        <Text variant="h2">We reach your location by<br /><span className="text-wine">Road, Rail, or Air.</span></Text>
                        <Text>No additional travel charges. The full studio experience — wherever you are.</Text>
                    </div>
                </ScrollReveal>
            </Section>

            <Section variant="dark" id="locations">
                <div className="areas-grid">
                    {serviceAreas.map((area, index) => (
                        <ScrollReveal key={area.region} direction="up" delay={index * 80}>
                            <div className={`areas-card ${area.featured ? 'areas-card--featured' : ''}`}>
                                <Text variant="h3" className="areas-card__title">{area.region}</Text>
                                <ol className="areas-card__list">
                                    {area.locations.map((loc, i) => <li key={i}>{loc}</li>)}
                                </ol>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </Section>

            <section className="areas-cta-section">
                <div className="areas-cta-ambient"></div>
                <ScrollReveal direction="scale">
                    <div className="areas-cta-content">
                        <Text variant="h3">Don't see your location?</Text>
                        <Text className="areas-cta-sub">Reach out — we'll try our best to come to you.</Text>
                        <Button to="/appointment" variant="primary" className="btn--large">Request a Slot</Button>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    )
}

export default AreasPage
