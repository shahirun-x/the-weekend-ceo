import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import Section from '../components/Section'
import Text from '../components/Text'
import ScrollReveal from '../components/ScrollReveal'
import './StoryDetailPage.css'

function StoryDetailPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [story, setStory] = useState(null)
    const [prevStory, setPrevStory] = useState(null)
    const [nextStory, setNextStory] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [lightboxImage, setLightboxImage] = useState(null)

    useEffect(() => {
        fetchStoryData()
        window.scrollTo(0, 0)
    }, [id])

    const fetchStoryData = async () => {
        setIsLoading(true)
        try {
            const { data: currentStory, error } = await supabase
                .from('stories')
                .select('*')
                .eq('id', id)
                .eq('is_published', true)
                .single()

            if (error || !currentStory) { navigate('/stories'); return }
            setStory(currentStory)

            const { data: siblingStories } = await supabase
                .from('stories')
                .select('id, story_number')
                .eq('year', currentStory.year)
                .eq('is_published', true)
                .order('story_number', { ascending: true })

            if (siblingStories && siblingStories.length > 0) {
                const currentIndex = siblingStories.findIndex(s => s.id === currentStory.id)
                setPrevStory(currentIndex > 0 ? siblingStories[currentIndex - 1] : null)
                setNextStory(currentIndex < siblingStories.length - 1 ? siblingStories[currentIndex + 1] : null)
            }
        } catch (err) {
            console.error('Error fetching story:', err)
            navigate('/stories')
        } finally {
            setIsLoading(false)
        }
    }

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text).then(() => alert(`${type} text copied!`)).catch(err => console.error('Copy failed:', err))
    }

    const handleShareTwitter = () => {
        if (!story) return
        const text = `Story #${story.story_number}. A ${story.car_make_model}. ${story.pack}. Crafted without shortcuts. — The Weekend CEO #TheWeekendCEO #96StoriesLeague`
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank')
    }

    const handleShareInstagram = () => {
        if (!story) return
        copyToClipboard(`Story #${story.story_number}. A ${story.year} ${story.car_make_model} in ${story.car_colour}.\n${story.pack}. ${story.city}.\n\n#TheWeekendCEO #96StoriesLeague #LuxuryDetailing`, 'Instagram caption')
    }

    const handleShareLinkedIn = () => {
        if (!story) return
        copyToClipboard(`${story.narrative.split('\n')[0]}\n\nRead the full story: ${window.location.href}`, 'LinkedIn post')
    }

    if (isLoading) return <div className="story-loading-page"><div className="story-loading-spinner"></div></div>
    if (!story) return null

    const hasPhotos = story.after_photos && story.after_photos.length > 0

    return (
        <div className="story-detail-page">
            <header className="story-header">
                <ScrollReveal direction="up">
                    <div className="story-header__number">#{String(story.story_number).padStart(3, '0')}</div>
                    <div className="story-header__meta">
                        <Text variant="h1">{story.car_make_model}</Text>
                        <div className="story-header__details">
                            <span>{story.car_colour}</span>
                            <span className="story-dot">•</span>
                            <span>{story.city}</span>
                            <span className="story-dot">•</span>
                            <span>{story.month} {story.year}</span>
                        </div>
                        <div className="story-header__pack">{story.pack}</div>
                    </div>
                </ScrollReveal>
            </header>

            <Section variant="darker" className="story-narrative-section">
                <ScrollReveal direction="up" delay={200}>
                    <div className="story-narrative">
                        {story.narrative.split('\n').map((p, i) => {
                            if (!p.trim()) return null
                            return <p key={i} className="story-narrative__p">{p}</p>
                        })}
                    </div>
                </ScrollReveal>
            </Section>

            <Section variant="dark" className="story-gallery-section" id="photos">
                <ScrollReveal direction="up">
                    {hasPhotos ? (
                        <div className="story-gallery">
                            {story.after_photos.map((url, idx) => (
                                <img key={idx} src={url} alt={`${story.car_make_model} Detail ${idx + 1}`} className="story-gallery__img" onClick={() => setLightboxImage(url)} />
                            ))}
                        </div>
                    ) : (
                        <div className="story-gallery-empty">
                            <div className="story-gallery-empty__watermark">KA</div>
                            <Text>Documentation in progress.</Text>
                        </div>
                    )}
                </ScrollReveal>
            </Section>

            <div className="story-share-strip">
                <Text variant="eyebrow" className="text-wine">Share This Story</Text>
                <div className="story-share-actions">
                    <button onClick={handleShareInstagram} className="story-share-btn">Instagram Caption</button>
                    <button onClick={handleShareTwitter} className="story-share-btn">X / Twitter</button>
                    <button onClick={handleShareLinkedIn} className="story-share-btn">LinkedIn</button>
                </div>
            </div>

            <Section variant="darker" className="story-signoff-section">
                <ScrollReveal direction="scale">
                    <div className="story-signoff">
                        <div className="story-signoff__initials">KA</div>
                        <Text variant="h3">Kishore Ananth — The Weekend CEO</Text>
                        <Text className="text-wine">Crafted without shortcuts.</Text>
                    </div>
                </ScrollReveal>
            </Section>

            <div className="story-nav-strip">
                <div className="story-nav-strip__container">
                    {prevStory ? <Link to={`/stories/${prevStory.id}`} className="story-nav-link">← Previous Story</Link> : <span className="story-nav-link story-nav-link--disabled"></span>}
                    <Link to="/stories" className="story-nav-link story-nav-link--center">Back to All Stories</Link>
                    {nextStory ? <Link to={`/stories/${nextStory.id}`} className="story-nav-link">Next Story →</Link> : <span className="story-nav-link story-nav-link--disabled"></span>}
                </div>
            </div>

            {lightboxImage && (
                <div className="story-lightbox" onClick={() => setLightboxImage(null)}>
                    <button className="story-lightbox__close" onClick={() => setLightboxImage(null)}>×</button>
                    <img src={lightboxImage} alt="Enlarged detail" onClick={e => e.stopPropagation()} />
                </div>
            )}
        </div>
    )
}

export default StoryDetailPage
