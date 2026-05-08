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
        name: '', email: '', phone: '',
        vehicleMake: '', vehicleModel: '', vehicleYear: '',
        serviceInterest: '', location: '', message: ''
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
            const { error: supabaseError } = await supabase.from('appointments').insert([{
                name: formData.name, email: formData.email, phone: formData.phone,
                city: formData.location,
                car_model: `${formData.vehicleYear} ${formData.vehicleMake} ${formData.vehicleModel}`,
                timeline: formData.serviceInterest, message: formData.message, status: 'new'
            }])
            if (supabaseError) throw supabaseError
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
            <Hero
                eyebrow="Appointments"
                title="BY APPOINTMENT."
                titleAccent="BY COMMITMENT."
                subtitle="Time is not managed — it is protected. Most work is scheduled through advance pre-bookings."
                short
            />

            <Section variant="darker" id="booking">
                <ScrollReveal direction="up">
                    <div className="appt-content">
                        {!isSubmitted ? (
                            <>
                                <div className="appt-intro">
                                    <Text variant="h3">Request an Appointment</Text>
                                    <Text>Tell us about you and your vehicle. The more information you share, the better we can assess if we're the right fit.</Text>
                                </div>

                                {error && <div className="appt-error"><Text>{error}</Text></div>}

                                <form className="appt-form" onSubmit={handleSubmit}>
                                    <div className="appt-section-label">Your Information</div>
                                    <div className="appt-grid">
                                        <div className="appt-field appt-field--full">
                                            <label htmlFor="name">Full Name</label>
                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" disabled={isLoading} />
                                        </div>
                                        <div className="appt-field">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" disabled={isLoading} />
                                        </div>
                                        <div className="appt-field">
                                            <label htmlFor="phone">Phone</label>
                                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" disabled={isLoading} />
                                        </div>
                                    </div>

                                    <div className="appt-section-label">Vehicle Details</div>
                                    <div className="appt-grid appt-grid--three">
                                        <div className="appt-field">
                                            <label htmlFor="vehicleMake">Make</label>
                                            <input type="text" id="vehicleMake" name="vehicleMake" value={formData.vehicleMake} onChange={handleChange} required placeholder="e.g., Porsche" disabled={isLoading} />
                                        </div>
                                        <div className="appt-field">
                                            <label htmlFor="vehicleModel">Model</label>
                                            <input type="text" id="vehicleModel" name="vehicleModel" value={formData.vehicleModel} onChange={handleChange} required placeholder="e.g., 911 GT3" disabled={isLoading} />
                                        </div>
                                        <div className="appt-field">
                                            <label htmlFor="vehicleYear">Year</label>
                                            <input type="text" id="vehicleYear" name="vehicleYear" value={formData.vehicleYear} onChange={handleChange} required placeholder="e.g., 2023" disabled={isLoading} />
                                        </div>
                                    </div>

                                    <div className="appt-section-label">Service Interest</div>
                                    <div className="appt-grid">
                                        <div className="appt-field">
                                            <label htmlFor="serviceInterest">Which experience interests you?</label>
                                            <select id="serviceInterest" name="serviceInterest" value={formData.serviceInterest} onChange={handleChange} required disabled={isLoading}>
                                                <option value="">Select an option</option>
                                                <option value="luxury-pro">CEO's Luxury Pro Pack (Rs.75,000/-)</option>
                                                <option value="ultra-luxury">CEO's Ultra Luxury Pack (Rs.150,000/-)</option>
                                                <option value="premium-signature">CEO's Premium Signature Pack (Rs.3,00,000/-)</option>
                                                <option value="celebrities-signature">CEO's Celebritie's Signature Pack (Rs.5,00,000/-)</option>
                                                <option value="undecided">Not sure yet — need guidance</option>
                                            </select>
                                        </div>
                                        <div className="appt-field">
                                            <label htmlFor="location">Service Location</label>
                                            <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required placeholder="Your city or area" disabled={isLoading} />
                                        </div>
                                    </div>

                                    <div className="appt-section-label">Additional Notes</div>
                                    <div className="appt-field appt-field--full">
                                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Tell us about your vehicle's current condition, any specific concerns, or your expectations..." disabled={isLoading}></textarea>
                                    </div>

                                    <div className="appt-submit">
                                        <Button type="submit" variant="primary" className={`btn--large ${isLoading ? 'btn--loading' : ''}`} disabled={isLoading}>
                                            {isLoading ? 'Submitting...' : 'Submit Request'}
                                        </Button>
                                        <Text variant="caption" className="appt-disclaimer">
                                            Submitting this form does not guarantee an appointment. We review every request personally and respond within 48 hours.
                                        </Text>
                                    </div>
                                </form>
                            </>
                        ) : (
                            <div className="appt-success">
                                <div className="appt-success__icon">✓</div>
                                <Text variant="h2">Request <span className="text-wine">Received</span></Text>
                                <Text>Thank you for your interest in The Weekend CEO. We've received your request and will review it personally. Expect to hear from us within 48 hours.</Text>
                                <div className="appt-success__actions">
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
