import { useState } from 'react'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'
import './AppointmentPage.css'

function AppointmentPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        vehicleMake: '',
        vehicleModel: '',
        vehicleYear: '',
        serviceInterest: '',
        location: '',
        message: ''
    })

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // In production, this would send to a backend
        console.log('Form submitted:', formData)
        setIsSubmitted(true)
    }

    return (
        <div className="appointment-page">
            {/* Hero */}
            <Hero
                eyebrow="Request an Appointment"
                title="Begin the conversation."
                subtitle="This is not a checkout. It's an application. We review every request personally to ensure we can deliver the experience your vehicle deserves."
                fullHeight={false}
            />

            {/* Form Section */}
            <Section id="application">
                <ScrollReveal>
                    <div className="appointment-content">
                        {!isSubmitted ? (
                            <>
                                <div className="appointment-intro">
                                    <Text variant="body">
                                        Please provide details about yourself and your vehicle. The more information
                                        you share, the better we can assess whether we're the right fit for your needs.
                                    </Text>
                                </div>

                                <form className="appointment-form" onSubmit={handleSubmit}>
                                    {/* Personal Information */}
                                    <div className="form-section">
                                        <Text variant="eyebrow" className="form-section__title">Your Information</Text>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="name">Full Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="Your name"
                                                />
                                            </div>
                                        </div>

                                        <div className="form-row form-row--two">
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="you@example.com"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="+91 XXXXX XXXXX"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Vehicle Information */}
                                    <div className="form-section">
                                        <Text variant="eyebrow" className="form-section__title">Vehicle Details</Text>

                                        <div className="form-row form-row--three">
                                            <div className="form-group">
                                                <label htmlFor="vehicleMake">Make</label>
                                                <input
                                                    type="text"
                                                    id="vehicleMake"
                                                    name="vehicleMake"
                                                    value={formData.vehicleMake}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="e.g., Porsche"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="vehicleModel">Model</label>
                                                <input
                                                    type="text"
                                                    id="vehicleModel"
                                                    name="vehicleModel"
                                                    value={formData.vehicleModel}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="e.g., 911 GT3"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="vehicleYear">Year</label>
                                                <input
                                                    type="text"
                                                    id="vehicleYear"
                                                    name="vehicleYear"
                                                    value={formData.vehicleYear}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="e.g., 2023"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Service Interest */}
                                    <div className="form-section">
                                        <Text variant="eyebrow" className="form-section__title">Service Interest</Text>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="serviceInterest">Which service interests you?</label>
                                                <select
                                                    id="serviceInterest"
                                                    name="serviceInterest"
                                                    value={formData.serviceInterest}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="">Select a service pack</option>
                                                    <option value="luxury-pro">Luxury Pro Pack</option>
                                                    <option value="ceo-signature">CEO's Premium Signature Pack</option>
                                                    <option value="undecided">Not sure yet — need guidance</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="location">Service Location (City/Area)</label>
                                                <input
                                                    type="text"
                                                    id="location"
                                                    name="location"
                                                    value={formData.location}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="e.g., South Delhi"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional Notes */}
                                    <div className="form-section">
                                        <Text variant="eyebrow" className="form-section__title">Additional Notes</Text>

                                        <div className="form-row">
                                            <div className="form-group">
                                                <label htmlFor="message">Anything else we should know?</label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows="4"
                                                    placeholder="Tell us about your vehicle's current condition, any specific concerns, or what you're hoping to achieve..."
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-submit">
                                        <Button type="submit" variant="primary" className="button--large">
                                            Submit Request
                                        </Button>
                                        <Text variant="caption" className="form-disclaimer">
                                            Submitting this form does not guarantee an appointment. We will review your
                                            request and respond within 48 hours.
                                        </Text>
                                    </div>
                                </form>
                            </>
                        ) : (
                            <div className="appointment-success">
                                <Text variant="h2">Request Received</Text>
                                <Text variant="body">
                                    Thank you for your interest in The Weekend CEO. We've received your request
                                    and will review it personally. Expect to hear from us within 48 hours.
                                </Text>
                                <Text variant="accent" className="appointment-success__note">
                                    In the meantime, we invite you to explore our gallery and learn more about
                                    our approach.
                                </Text>
                                <div className="appointment-success__actions">
                                    <Button to="/gallery" variant="secondary">View Gallery</Button>
                                    <Button to="/brand" variant="ghost">Read Our Philosophy</Button>
                                </div>
                            </div>
                        )}
                    </div>
                </ScrollReveal>
            </Section>
        </div>
    )
}

export default AppointmentPage
