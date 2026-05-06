import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import Section from '../components/Section'
import Text from '../components/Text'
import ScrollReveal from '../components/ScrollReveal'
import './StoriesPage.css'

function StoriesPage() {
    const [stories, setStories] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())
    const [availableYears, setAvailableYears] = useState([new Date().getFullYear()])

    useEffect(() => {
        fetchStories()
    }, [])

    const fetchStories = async () => {
        setIsLoading(true)
        try {
            const { data, error } = await supabase
                .from('stories')
                .select('*')
                .order('story_number', { ascending: false })

            if (error) throw error

            if (data) {
                setStories(data)
                
                // Extract unique years
                const years = [...new Set(data.map(story => story.year))]
                if (years.length > 0) {
                    setAvailableYears(years.sort((a, b) => b - a))
                    if (!years.includes(selectedYear)) {
                        setSelectedYear(years[0])
                    }
                }
            }
        } catch (err) {
            console.error('Error fetching stories:', err)
        } finally {
            setIsLoading(false)
        }
    }

    const filteredStories = stories.filter(story => story.year === selectedYear)
    const currentYearCount = stories.filter(story => story.year === new Date().getFullYear()).length
    const slotsRemaining = Math.max(0, 96 - currentYearCount)

    return (
        <div className="stories-page">
            <Section variant="charcoal" className="stories-hero">
                <ScrollReveal direction="up">
                    <div className="stories-hero__content">
                        <Text variant="h1" className="text-yellow">THE 96 STORIES LEAGUE</Text>
                        <Text className="stories-hero__subtitle">
                            Every car that earns the CEO's touch becomes a numbered story. Limited to 96 per year. No exceptions.
                        </Text>
                        
                        <div className="stories-hero__counter">
                            <Text variant="h2" className="text-white">
                                {currentYearCount} of 96 stories this year — {slotsRemaining} slots remaining
                            </Text>
                        </div>

                        {availableYears.length > 1 && (
                            <div className="stories-year-tabs">
                                {availableYears.map(year => (
                                    <button 
                                        key={year}
                                        className={`stories-year-tab ${selectedYear === year ? 'stories-year-tab--active' : ''}`}
                                        onClick={() => setSelectedYear(year)}
                                    >
                                        {year}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </ScrollReveal>
            </Section>

            <Section variant="charcoal" className="stories-grid-section">
                {isLoading ? (
                    <div className="stories-loading">
                        <Text className="text-white">Loading stories...</Text>
                    </div>
                ) : filteredStories.length === 0 ? (
                    <div className="stories-empty">
                        <Text variant="h3" className="text-white">The first story is being written. 96 slots. Zero shortcuts.</Text>
                    </div>
                ) : (
                    <div className="stories-grid">
                        {filteredStories.map((story, idx) => {
                            const hasPhoto = story.after_photos && story.after_photos.length > 0
                            return (
                                <ScrollReveal key={story.id} direction="up" delay={idx * 50}>
                                    <Link to={`/stories/${story.id}`} className="story-card">
                                        {hasPhoto ? (
                                            <div 
                                                className="story-card__bg" 
                                                style={{ backgroundImage: `url(${story.after_photos[0]})` }}
                                            />
                                        ) : (
                                            <div className="story-card__fallback">
                                                <div className="story-card__watermark">KA</div>
                                            </div>
                                        )}
                                        
                                        <div className="story-card__overlay">
                                            <div className="story-card__top">
                                                <span className="story-card__number">#{String(story.story_number).padStart(3, '0')}</span>
                                                <span className="story-card__date">{story.month} {story.year}</span>
                                            </div>
                                            
                                            <div className="story-card__content">
                                                <Text variant="h3" className="story-card__title">{story.car_make_model}</Text>
                                                
                                                <div className="story-card__tags">
                                                    <span className="story-card__tag">{story.car_colour}</span>
                                                    <span className="story-card__tag">{story.city}</span>
                                                </div>
                                                
                                                <span className="story-card__pack">{story.pack}</span>
                                                
                                                <Text className="story-card__excerpt">
                                                    {story.narrative.substring(0, 100)}{story.narrative.length > 100 ? '...' : ''}
                                                </Text>
                                                
                                                <span className="story-card__read">Read Story →</span>
                                            </div>
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            )
                        })}
                    </div>
                )}
            </Section>

            <div className="stories-slots-strip">
                <div className="stories-slots-strip__container">
                    <Text className="stories-slots-strip__text">
                        96 slots per year. [{currentYearCount}] have been claimed. [{slotsRemaining}] remain.
                    </Text>
                    <div className="stories-slots-strip__progress">
                        <div 
                            className="stories-slots-strip__fill" 
                            style={{ width: `${(currentYearCount / 96) * 100}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoriesPage
