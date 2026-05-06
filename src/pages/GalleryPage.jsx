import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import MediaGrid from '../components/MediaGrid'
import ScrollReveal from '../components/ScrollReveal'
import Button from '../components/Button'
import './GalleryPage.css'

const galleryItems = [
    { src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', alt: 'Luxury sports car detailing', title: 'Porsche 911 GT3', subtitle: 'Signature Pack', category: 'exterior', featured: true },
    { src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80', alt: 'Premium sedan restoration', title: 'Mercedes-AMG GT', subtitle: 'Luxury Pro Pack', category: 'exterior' },
    { src: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80', alt: 'Executive vehicle care', title: 'BMW M5', subtitle: 'Signature Pack', category: 'correction' },
    { src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80', alt: 'Electric vehicle care', title: 'Audi RS e-tron GT', subtitle: 'Luxury Pro Pack', category: 'exterior' },
    { src: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80', alt: 'Supercar detailing', title: 'Ferrari F8 Tributo', subtitle: 'Signature Pack', category: 'correction' },
    { src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80', alt: 'Luxury SUV treatment', title: 'Range Rover Sport', subtitle: 'Signature Pack', category: 'exterior', featured: true },
    { src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80', alt: 'Sports coupe finish', title: 'Jaguar F-Type', subtitle: 'Luxury Pro Pack', category: 'interior' },
    { src: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80', alt: 'EV premium care', title: 'Tesla Model S', subtitle: 'Luxury Pro Pack', category: 'interior' },
]

function GalleryPage() {
    return (
        <div className="gallery-page">
            <Hero
                eyebrow="Portfolio"
                title="CRAFT IN"
                titleAccent="FRAME."
                subtitle="Every vehicle tells a story. These are the transformations we've delivered."
                short
            />

            <Section variant="darker" id="portfolio">
                <ScrollReveal direction="up">
                    <MediaGrid items={galleryItems} />
                </ScrollReveal>
            </Section>

            <section className="gallery-cta-section">
                <div className="gallery-cta-ambient"></div>
                <ScrollReveal direction="scale">
                    <div className="gallery-cta-content">
                        <Text variant="h2">Your Vehicle Could Be <span className="text-wine">Next.</span></Text>
                        <Button to="/appointment" variant="primary" className="btn--large">Request a Slot</Button>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    )
}

export default GalleryPage
