import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'
import './ContactPage.css'

function ContactPage() {
    return (
        <div className="contact-page">
            <Hero
                eyebrow="Get In Touch"
                title="CONTACT"
                titleAccent="US"
                subtitle="Every conversation begins with respect for your time and your vehicle."
                short
            />

            <Section variant="darker" id="contact-info">
                <div className="contact-grid">
                    <ScrollReveal direction="up">
                        <div className="contact-card glass">
                            <Text variant="eyebrow">Location</Text>
                            <Text variant="h3">South India</Text>
                            <Text>Available across Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, and Telangana.</Text>
                            <Text className="contact-card__note">We travel to you — by road, rail, or air.</Text>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={100}>
                        <div className="contact-card glass">
                            <Text variant="eyebrow">Hours</Text>
                            <Text variant="h3">By Appointment</Text>
                            <div className="contact-hours">
                                <div className="contact-hours__row">
                                    <span>Weekends</span>
                                    <span>Primary Work Days</span>
                                </div>
                                <div className="contact-hours__row">
                                    <span>Weekdays</span>
                                    <span>Consultations Only</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={200}>
                        <div className="contact-card glass">
                            <Text variant="eyebrow">Enquiries</Text>
                            <Text variant="h3">Reach Out</Text>
                            <Text>For booking requests, consultations, and partnership enquiries.</Text>
                            <Button to="/appointment" variant="primary" className="contact-card__btn">
                                Request a Slot
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </Section>

            <Section variant="dark" id="map-placeholder">
                <div className="contact-map-placeholder">
                    <span>Map Integration Placeholder</span>
                </div>
            </Section>
        </div>
    )
}

export default ContactPage
