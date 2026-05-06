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
            // Fetch current story
            const { data: currentStory, error } = await supabase
                .from('stories')
                .select('*')
                .eq('id', id)
                .eq('is_published', true)
                .single()

            if (error || !currentStory) {
                navigate('/stories')
                return
            }

            setStory(currentStory)

            // Fetch Prev/Next within the same year based on story_number
            const { data: siblingStories } = await supabase
                .from('stories')
                .select('id, story_number')
                .eq('year', currentStory.year)
                .eq('is_published', true)
                .order('story_number', { ascending: true })

            if (siblingStories && siblingStories.length > 0) {
                const currentIndex = siblingStories.findIndex(s => s.id === currentStory.id)
                if (currentIndex > 0) {
                    setPrevStory(siblingStories[currentIndex - 1])
                } else {
                    setPrevStory(null)
                }
                
                if (currentIndex < siblingStories.length - 1) {
                    setNextStory(siblingStories[currentIndex + 1])
                } else {
                    setNextStory(null)
                }
            }
        } catch (err) {
            console.error('Error fetching story:', err)
            navigate('/stories')
        } finally {
            setIsLoading(false)
        }
    }

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text).then(() => {
            alert(`${type} text copied to clipboard!`)
        }).catch(err => {
            console.error('Failed to copy text: ', err)
        })
    }

    const handleShareTwitter = () => {
        if (!story) return
        const text = `Story #${story.story_number}. A ${story.car_make_model}. ${story.pack}. Crafted without shortcuts. — The Weekend CEO #TheWeekendCEO #96StoriesLeague`
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
        window.open(url, '_blank')
    }

    const handleShareInstagram = () => {
        if (!story) return
        const text = `Story #${story.story_number}. A ${story.year} ${story.car_make_model} in ${story.car_colour}.\n${story.pack}. ${story.city}. Crafted without shortcuts.\n\n#TheWeekendCEO #96StoriesLeague #LuxuryDetailing #NoOrdinaryTouches`
        copyToClipboard(text, 'Instagram caption')
    }

    const handleShareLinkedIn = () => {
        if (!story) return
        // Get first paragraph of narrative
        const firstPara = story.narrative.split('\n')[0]
        const text = `${firstPara}\n\nRead the full story: ${window.location.href}`
        copyToClipboard(text, 'LinkedIn post')
    }

    if (isLoading) {
        return (
            <div className="story-loading-page">
                <div className="admin-loading__spinner"></div>
            </div>
        )
    }

    if (!story) return null

    const hasPhotos = story.after_photos && story.after_photos.length > 0

    return (
        <div className="story-detail-page">
            {/* Story Header */}
            <header className="story-header">
                <ScrollReveal direction="up">
                    <div className="story-header__number">
                        #{String(story.story_number).padStart(3, '0')}
                    </div>
                    <div className="story-header__meta">
                        <Text variant="h1" className="text-white">{story.car_make_model}</Text>
                        <div className="story-header__details">
                            <span>{story.car_colour}</span>
                            <span className="dot-separator">•</span>
                            <span>{story.city}</span>
                            <span className="dot-separator">•</span>
                            <span>{story.month} {story.year}</span>
                        </div>
                        <div className="story-header__pack">
                            {story.pack}
                        </div>
                    </div>
                </ScrollReveal>
            </header>

            {/* Narrative */}
            <Section variant="charcoal" className="story-narrative-section">
                <ScrollReveal direction="up" delay={200}>
                    <div className="story-narrative">
                        {story.narrative.split('\n').map((paragraph, index) => {
                            if (!paragraph.trim()) return null
                            return (
                                <p key={index} className="story-narrative__p">
                                    {paragraph}
                                </p>
                            )
                        })}
                    </div>
                </ScrollReveal>
            </Section>

            {/* Photos Gallery */}
            <Section variant="charcoal" className="story-gallery-section" id="photos">
                <ScrollReveal direction="up">
                    {hasPhotos ? (
                        <div className="story-gallery">
                            {story.after_photos.map((url, idx) => (
                                <img 
                                    key={idx} 
                                    src={url} 
                                    alt={`${story.car_make_model} Detail ${idx + 1}`} 
                                    className="story-gallery__img"
                                    onClick={() => setLightboxImage(url)}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="story-gallery-empty">
                            <div className="story-gallery-empty__watermark">KA</div>
                            <Text className="text-white">Documentation in progress.</Text>
                        </div>
                    )}
                </ScrollReveal>
            </Section>

            {/* Social Share */}
            <div className="story-share-strip">
                <Text variant="eyebrow" className="text-yellow">Share This Story</Text>
                <div className="story-share-actions">
                    <button onClick={handleShareInstagram} className="story-share-btn">
                        Instagram Caption
                    </button>
                    <button onClick={handleShareTwitter} className="story-share-btn">
                        X / Twitter
                    </button>
                    <button onClick={handleShareLinkedIn} className="story-share-btn">
                        LinkedIn
                    </button>
                </div>
            </div>

            {/* KA Sign-off */}
            <Section variant="charcoal" className="story-signoff-section">
                <ScrollReveal direction="scale">
                    <div className="story-signoff">
                        <div className="story-signoff__initials">KA</div>
                        <Text variant="h3" className="text-white">Kishore Ananth — The Weekend CEO</Text>
                        <Text className="text-yellow">Crafted without shortcuts.</Text>
                    </div>
                </ScrollReveal>
            </Section>

            {/* Navigation Strip */}
            <div className="story-nav-strip">
                <div className="story-nav-strip__container">
                    {prevStory ? (
                        <Link to={`/stories/${prevStory.id}`} className="story-nav-link">
                            ← Previous Story
                        </Link>
                    ) : (
                        <span className="story-nav-link story-nav-link--disabled"></span>
                    )}
                    
                    <Link to="/stories" className="story-nav-link story-nav-link--center">
                        Back to All Stories
                    </Link>
                    
                    {nextStory ? (
                        <Link to={`/stories/${nextStory.id}`} className="story-nav-link">
                            Next Story →
                        </Link>
                    ) : (
                        <span className="story-nav-link story-nav-link--disabled"></span>
                    )}
                </div>
            </div>

            {/* Lightbox */}
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
