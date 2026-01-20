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
        console.log('Form submitted:', formData)
        setIsSubmitted(true)
    }

    return (
        <div className="appointment-page">
            {/* Hero */}
            <Hero
                eyebrow="Request an Appointment"
                title="Begin The"
                titleAccent="Conversation."
                subtitle="This is not a checkout. It's an application. We review every request personally."
                short
            />

            {/* Form Section */}
            <Section variant="cream" id="application">
                <ScrollReveal direction="up">
                    <div className="appointment-content">
                        {!isSubmitted ? (
                            <>
                                <div className="appointment-intro">
                                    <Text variant="h3">Tell us about you & your vehicle</Text>
                                    <Text variant="body">
                                        The more information you share, the better we can assess if we're the right fit.
                                    </Text>
                                </div>

                                <form className="appointment-form" onSubmit={handleSubmit}>
                                    {/* Personal */}
                                    <div className="form-section">
                                        <Text variant="eyebrow" className="form-section__title">Your Information</Text>
                                        <div className="form-grid">
                                            <div className="form-group form-group--full">
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

                                    {/* Vehicle */}
                                    <div className="form-section">
                                        <Text variant="eyebrow" className="form-section__title">Vehicle Details</Text>
                                        <div className="form-grid form-grid--three">
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
                                        <div className="form-grid">
                                            <div className="form-group">
                                                <label htmlFor="serviceInterest">Which experience interests you?</label>
                                                <select
                                                    id="serviceInterest"
                                                    name="serviceInterest"
                                                    value={formData.serviceInterest}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="">Select an option</option>
                                                    <option value="luxury-pro">Luxury Pro Pack</option>
                                                    <option value="ceo-signature">CEO's Premium Signature Pack</option>
                                                    <option value="undecided">Not sure yet</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="location">Service Location</label>
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

                                    {/* Message */}
                                    <div className="form-section">
                                        <Text variant="eyebrow" className="form-section__title">Anything Else?</Text>
                                        <div className="form-group form-group--full">
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="4"
                                                placeholder="Tell us about your vehicle's current condition, any specific concerns..."
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="form-submit">
                                        <Button type="submit" variant="primary" className="button--large">
                                            Submit Request
                                        </Button>
                                        <Text variant="caption" className="form-disclaimer">
                                            Submitting this form does not guarantee an appointment. We will respond within 48 hours.
                                        </Text>
                                    </div>
                                </form>
                            </>
                        ) : (
                            <div className="appointment-success">
                                <div className="appointment-success__icon">✓</div>
                                <Text variant="h2">Request <span className="text-teal">Received</span></Text>
                                <Text variant="body">
                                    Thank you for your interest in The Weekend CEO. We've received your request
                                    and will review it personally. Expect to hear from us within 48 hours.
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
