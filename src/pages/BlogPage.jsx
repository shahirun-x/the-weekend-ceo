import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Text from '../components/Text'
import ScrollReveal from '../components/ScrollReveal'
import './BlogPage.css'

const articles = [
    { slug: 'paint-correction-guide', title: 'The Science Behind Paint Correction', excerpt: 'Understanding how multi-stage polishing restores factory-level clarity and depth to your vehicle\'s finish.', category: 'Education', date: 'Coming Soon', featured: true },
    { slug: 'ceramic-vs-wax', title: 'Ceramic Coating vs. Traditional Wax', excerpt: 'A founder\'s perspective on which protection method truly serves your vehicle long-term.', category: 'Insights', date: 'Coming Soon' },
    { slug: 'detailing-myths', title: '5 Detailing Myths You Need to Forget', excerpt: 'Common misconceptions that could be damaging your vehicle\'s finish without you realizing it.', category: 'Education', date: 'Coming Soon' },
    { slug: 'why-96', title: 'Why We Limit to 96 Cars Per Year', excerpt: 'The philosophy behind restraint: why less means infinitely more in premium detailing.', category: 'Philosophy', date: 'Coming Soon' },
    { slug: 'doorstep-detailing', title: 'The Doorstep Detailing Experience', excerpt: 'How we bring the full studio experience to your home, office, or private garage.', category: 'Insights', date: 'Coming Soon' },
    { slug: 'interior-care', title: 'Premium Interior Care: Beyond Vacuuming', excerpt: 'Steam cleaning, leather conditioning, and the art of restoring a cabin to showroom standards.', category: 'Education', date: 'Coming Soon' },
]

function BlogPage() {
    return (
        <div className="blog-page">
            <Hero
                eyebrow="Journal"
                title="AUTOMOTIVE"
                titleAccent="INSIGHTS"
                subtitle="Premium detailing knowledge, founder perspectives, and automotive care education."
                short
            />

            {/* Featured Article */}
            <Section variant="darker" id="featured">
                <ScrollReveal direction="up">
                    <div className="blog-featured">
                        <div className="blog-featured__image">
                            <span>Featured Article</span>
                        </div>
                        <div className="blog-featured__content">
                            <Text variant="eyebrow">{articles[0].category}</Text>
                            <Text variant="h2">{articles[0].title}</Text>
                            <Text>{articles[0].excerpt}</Text>
                            <span className="blog-featured__date">{articles[0].date}</span>
                        </div>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Article Grid */}
            <Section variant="dark" id="articles">
                <div className="blog-grid">
                    {articles.slice(1).map((article, idx) => (
                        <ScrollReveal key={idx} direction="up" delay={idx * 80}>
                            <div className="blog-card">
                                <div className="blog-card__image">
                                    <span>Article</span>
                                </div>
                                <div className="blog-card__content">
                                    <span className="blog-card__category">{article.category}</span>
                                    <Text variant="h4">{article.title}</Text>
                                    <Text className="blog-card__excerpt">{article.excerpt}</Text>
                                    <span className="blog-card__date">{article.date}</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </Section>
        </div>
    )
}

export default BlogPage
