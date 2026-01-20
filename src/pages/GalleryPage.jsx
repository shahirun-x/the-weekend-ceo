import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import MediaGrid from '../components/MediaGrid'
import ScrollReveal from '../components/ScrollReveal'
import Button from '../components/Button'
import './GalleryPage.css'

// Placeholder gallery items - in production, these would come from a CMS or API
const galleryItems = [
    {
        src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
        alt: 'Luxury sports car detailing',
        title: 'Porsche 911 GT3',
        featured: true
    },
    {
        src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80',
        alt: 'Premium sedan restoration',
        title: 'Mercedes-AMG GT'
    },
    {
        src: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80',
        alt: 'Executive vehicle care',
        title: 'BMW M5'
    },
    {
        src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&q=80',
        alt: 'Classic car restoration',
        title: 'Audi RS e-tron GT'
    },
    {
        src: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80',
        alt: 'Supercar detailing',
        title: 'Ferrari F8 Tributo'
    },
    {
        src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80',
        alt: 'Luxury SUV treatment',
        title: 'Range Rover Sport',
        featured: true
    },
    {
        src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80',
        alt: 'Sports coupe finish',
        title: 'Jaguar F-Type'
    },
    {
        src: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80',
        alt: 'EV premium care',
        title: 'Tesla Model S Plaid'
    }
]

function GalleryPage() {
    return (
        <div className="gallery-page">
            {/* Hero */}
            <Hero
                eyebrow="Our Work"
                title="Craftsmanship in frame."
                subtitle="Every vehicle tells a story. These are some of the transformations we've had the privilege to deliver."
                fullHeight={false}
            />

            {/* Gallery Notice */}
            <Section id="gallery-intro">
                <ScrollReveal>
                    <div className="gallery-notice">
                        <Text variant="body">
                            What you see here represents vehicles we've treated with complete transparency
                            from their owners. We don't photograph every car—only those where the transformation
                            speaks for itself.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Main Gallery */}
            <Section dark id="portfolio">
                <ScrollReveal>
                    <div className="gallery-section">
                        <Text variant="eyebrow">Portfolio</Text>
                        <Text variant="h2">Selected Works</Text>
                        <MediaGrid items={galleryItems} className="gallery-main" />
                    </div>
                </ScrollReveal>
            </Section>

            {/* Note */}
            <Section id="gallery-note">
                <ScrollReveal>
                    <div className="gallery-disclaimer">
                        <Text variant="accent">
                            All images represent actual work performed by The Weekend CEO.
                            No stock photography. No filters. Just craft.
                        </Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* CTA */}
            <Section dark className="gallery-cta-section">
                <ScrollReveal>
                    <div className="gallery-cta">
                        <Text variant="h2">Your vehicle could be next.</Text>
                        <Button to="/appointment" variant="primary" className="button--large">
                            Request Appointment
                        </Button>
                    </div>
                </ScrollReveal>
            </Section>
        </div>
    )
}

export default GalleryPage
