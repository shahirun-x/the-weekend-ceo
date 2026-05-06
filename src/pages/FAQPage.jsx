import { useState } from 'react'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import ScrollReveal from '../components/ScrollReveal'
import './FAQPage.css'

const faqCategories = [
    {
        title: 'General',
        questions: [
            { q: 'What is The Weekend CEO?', a: 'The Weekend CEO is a founder-led, premium automotive detailing practice. We are not a franchise, chain, or staffed operation. Every vehicle is personally handled by the founder — Kishore Ananth — with a strict limit of 96 cars per year.' },
            { q: 'Why are you limited to 96 cars per year?', a: 'Because excellence is not scalable. Each vehicle receives an entire day (or more) of undivided attention. We operate exclusively on weekends, which naturally limits capacity to 6–8 vehicles per month — totalling approximately 96 per year.' },
            { q: 'Where are you based?', a: 'We are based in South India and travel to clients across Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, Telangana, and Pondicherry. We travel to you — by road, rail, or air — at no extra charge.' },
        ]
    },
    {
        title: 'Services',
        questions: [
            { q: 'What services do you offer?', a: 'Our packages range from the CEO\'s Luxury Pro Pack (Rs.75,000) to the CEO\'s Celebrities Signature Pack (Rs.5,00,000). Each includes multi-stage paint correction, decontamination, protection, interior refinement, and controlled finishing.' },
            { q: 'Do you offer ceramic coating?', a: 'We do not position ceramic coating as a marketing-driven add-on. When required, we use premium-grade sealants and coatings from globally recognised systems like CarPro and Swissvax. Application is based on surface condition, not sales.' },
            { q: 'Is your service available at my doorstep?', a: 'Yes. Every detail is performed at your location — home, office, or private garage. Our full studio-grade setup travels to you. No workshop visit required.' },
        ]
    },
    {
        title: 'Booking',
        questions: [
            { q: 'How do I book an appointment?', a: 'Submit a request through our appointment form. We review every request personally and respond within 48 hours. Submitting does not guarantee an appointment — we assess fit carefully.' },
            { q: 'What is the typical wait time?', a: 'Most work is pre-scheduled 2–4 weeks in advance. Returning clients receive priority. We respectfully ask for flexibility — craftsmanship cannot be rushed.' },
            { q: 'Can I reschedule?', a: 'Yes, with reasonable notice. We understand circumstances change. However, repeated rescheduling may affect future availability as slots are extremely limited.' },
        ]
    }
]

function FAQPage() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx)
    }

    let globalIdx = 0

    return (
        <div className="faq-page">
            <Hero
                eyebrow="Help"
                title="FREQUENTLY"
                titleAccent="ASKED"
                subtitle="Everything you need to know about working with The Weekend CEO."
                short
            />

            <Section variant="darker" id="faq">
                {faqCategories.map((cat, catIdx) => (
                    <div key={catIdx} className="faq-category">
                        <ScrollReveal direction="up">
                            <Text variant="eyebrow" className="faq-category__title">{cat.title}</Text>
                        </ScrollReveal>
                        {cat.questions.map((item) => {
                            const idx = globalIdx++
                            return (
                                <ScrollReveal key={idx} direction="up" delay={50}>
                                    <div className={`faq-item ${openIndex === idx ? 'faq-item--open' : ''}`}>
                                        <button className="faq-item__q" onClick={() => toggle(idx)}>
                                            <span>{item.q}</span>
                                            <span className="faq-item__icon">{openIndex === idx ? '−' : '+'}</span>
                                        </button>
                                        <div className="faq-item__a">
                                            <p>{item.a}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            )
                        })}
                    </div>
                ))}
            </Section>
        </div>
    )
}

export default FAQPage
