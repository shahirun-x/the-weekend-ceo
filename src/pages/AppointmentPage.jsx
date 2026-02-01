import { useState } from 'react'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import Button from '../components/Button'
import ScrollReveal from '../components/ScrollReveal'
import { supabase } from '../supabaseClient'
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
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            const { error: supabaseError } = await supabase.from('appointments').insert([
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    city: formData.location,
                    car_model: `${formData.vehicleYear} ${formData.vehicleMake} ${formData.vehicleModel}`,
                    timeline: formData.serviceInterest,
                    message: formData.message,
                    status: 'new'
                }
            ])

            if (supabaseError) {
                throw supabaseError
            }

            setIsSubmitted(true)
        } catch (err) {
            console.error('Submission error:', err)
            setError('Sorry, there was an error submitting your request. Please try again or contact us directly.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="appointment-page">
            {/* Hero */}
            <Hero
                eyebrow="Appointments & Time Commitment"
                title="By Appointment."
                titleAccent="By Commitment."
                subtitle="At The Weekend CEO, time is not managed — it is protected."
                short
            />

            {/* Time Statement */}
            <Section variant="charcoal" id="time">
                <ScrollReveal direction="up">
                    <div className="appointment-time">
                        <Text variant="h3" className="text-white">
                            Most of our work is scheduled through advance pre-bookings.
                        </Text>
                        <Text className="appointment-time__text">
                            As a result, there may be occasions where we are unable to meet your preferred dates or timelines.
                        </Text>
                        <Text className="appointment-time__text">
                            We respectfully request your understanding in such cases.
                        </Text>
                        <div className="appointment-time__statement">
                            <Text className="appointment-time__highlight">
                                Craftsmanship cannot be rushed, rescheduled casually, or compressed without compromise.
                            </Text>
                            <Text className="appointment-time__highlight">
                                Clients who value this philosophy naturally align with our process.
                            </Text>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Client Relationship */}
            <Section variant="yellow" id="relationship">
                <ScrollReveal direction="up">
                    <div className="appointment-relationship">
                        <Text variant="eyebrow">Client Relationship & Continuity</Text>
                        <Text variant="h3">We prioritise long-term relationships over one-time engagements.</Text>
                        <div className="appointment-relationship__content">
                            <Text variant="body">
                                Existing and returning clients are always given preference in scheduling, continuity, and care —
                                because trust is built over time, not transactions.
                            </Text>
                            <Text variant="body">
                                This does not mean new clients are ignored.
                            </Text>
                            <Text variant="accent">
                                It means once you are part of The Weekend CEO circle, your car is never treated as "just another
                                booking".
                            </Text>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Form Section */}
            <Section variant="cream" id="application">
                <ScrollReveal direction="up">
                    <div className="appointment-content">
                        {!isSubmitted ? (
                            <>
                                <div className="appointment-intro">
                                    <Text variant="h3">Request an Appointment</Text>
                                    <Text variant="body">
                                        Tell us about you and your vehicle. The more information you share, the better we can assess if we're the right fit.
                                    </Text>
                                </div>

                                {error && (
                                    <div className="form-error-alert">
                                        <Text className="form-error-alert__text">{error}</Text>
                                    </div>
                                )}

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
                                                    disabled={isLoading}
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
                                                    disabled={isLoading}
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
                                                    disabled={isLoading}
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
                                                    disabled={isLoading}
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
                                                    disabled={isLoading}
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
                                                    disabled={isLoading}
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
                                                    disabled={isLoading}
                                                >
                                                    <option value="">Select an option</option>
                                                    <option value="luxury-pro">CEO's Luxury Pro Pack (Rs.75,000)</option>
                                                    <option value="ultra-luxury">CEO's Ultra Luxury Pack (Rs.1,50,000)</option>
                                                    <option value="premium-signature">CEO's Premium Signature Pack (Rs.3,00,000)</option>
                                                    <option value="celebrities-signature">CEO's Celebrities Signature Pack (Rs.5,00,000)</option>
                                                    <option value="undecided">Not sure yet — need guidance</option>
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
                                                    placeholder="Your city or area"
                                                    disabled={isLoading}
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
                                                placeholder="Tell us about your vehicle's current condition, any specific concerns, or your expectations..."
                                                disabled={isLoading}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="form-submit">
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            className={`button--large ${isLoading ? 'button--loading' : ''}`}
                                            disabled={isLoading}
                                        >
                                            {isLoading ? 'Submitting...' : 'Submit Request'}
                                        </Button>
                                        <Text variant="caption" className="form-disclaimer">
                                            Submitting this form does not guarantee an appointment. We review every request personally and will respond within 48 hours.
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
                                <Text variant="body" className="appointment-success__note">
                                    Clients who value this philosophy naturally align with our process.
                                </Text>
                                <div className="appointment-success__actions">
                                    <Button to="/gallery" variant="secondary">View Our Work</Button>
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
