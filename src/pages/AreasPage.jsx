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
                eyebrow="Beyond Location"
                title="SERVICE"
                titleAccent="AREAS"
                subtitle="Our Standards Travel – Not the Car."
                short
            />

            <Section variant="darker" id="availability">
                <ScrollReveal direction="up">
                    <div className="areas-statement">
                        <Text variant="h2">We are Prepared to reach your location by<br /><span className="text-wine">Road, Rail, or by Air</span></Text>
                        <Text>without any additional travel charges.</Text>
                        <Text style={{ marginTop: 'var(--space-sm)' }}>We are at present available at most parts of South India.</Text>
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
                        <Text variant="h3">Dont see your Location ?</Text>
                        <Text className="areas-cta-sub">We hope your location is available above. If not but your interested in our craftmanship then please reach us. We will try the best possible to reach you.</Text>
                        <Button to="/appointment" variant="primary" className="btn--large">Request a Slot</Button>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    )
}

export default AreasPage
