import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import './AdminDashboard.css'

function AdminDashboard() {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('appointments')
    
    // Appointments State
    const [appointments, setAppointments] = useState([])
    const [isApptLoading, setIsApptLoading] = useState(true)
    const [apptError, setApptError] = useState(null)
    const [updatingId, setUpdatingId] = useState(null)

    // Stories State
    const [stories, setStories] = useState([])
    const [isStoriesLoading, setIsStoriesLoading] = useState(true)
    const [storiesError, setStoriesError] = useState(null)
    const [isAddingStory, setIsAddingStory] = useState(false)
    
    // New Story Form State
    const currentYear = new Date().getFullYear()
    const [storyForm, setStoryForm] = useState({
        story_number: '',
        year: currentYear,
        car_make_model: '',
        car_colour: '',
        city: '',
        pack: "CEO's Luxury Pro Pack",
        month: 'January',
        narrative: '',
        after_photos: [''],
        is_published: false
    })

    useEffect(() => {
        if (activeTab === 'appointments') {
            fetchAppointments()
        } else if (activeTab === 'stories') {
            fetchStories()
        }
    }, [activeTab])

    // --- APPOINTMENTS LOGIC ---
    const fetchAppointments = async () => {
        setIsApptLoading(true)
        setApptError(null)

        try {
            const { data, error: fetchError } = await supabase
                .from('appointments')
                .select('*')
                .order('created_at', { ascending: false })

            if (fetchError) throw fetchError

            setAppointments(data || [])
        } catch (err) {
            console.error('Fetch error:', err)
            setApptError('Failed to load appointments. Please try again.')
        } finally {
            setIsApptLoading(false)
        }
    }

    const handleStatusChange = async (id, newStatus) => {
        setUpdatingId(id)

        try {
            const { error: updateError } = await supabase
                .from('appointments')
                .update({ status: newStatus })
                .eq('id', id)

            if (updateError) throw updateError

            setAppointments(prev =>
                prev.map(apt =>
                    apt.id === id ? { ...apt, status: newStatus } : apt
                )
            )
        } catch (err) {
            console.error('Update error:', err)
            alert('Failed to update status. Please try again.')
        } finally {
            setUpdatingId(null)
        }
    }

    const handleDeleteAppt = async (id) => {
        if (!window.confirm('Are you sure you want to delete this appointment?')) return

        setUpdatingId(id)

        try {
            const { error: deleteError } = await supabase
                .from('appointments')
                .delete()
                .eq('id', id)

            if (deleteError) throw deleteError

            setAppointments(prev => prev.filter(apt => apt.id !== id))
        } catch (err) {
            console.error('Delete error:', err)
            alert('Failed to delete appointment.')
        } finally {
            setUpdatingId(null)
        }
    }

    // --- STORIES LOGIC ---
    const fetchStories = async () => {
        setIsStoriesLoading(true)
        setStoriesError(null)

        try {
            const { data, error } = await supabase
                .from('stories')
                .select('*')
                .order('story_number', { ascending: false })

            if (error) throw error

            setStories(data || [])
            
            // Auto-suggest next story number for the form
            if (data && data.length > 0) {
                const maxNumber = Math.max(...data.map(s => s.story_number))
                setStoryForm(prev => ({ ...prev, story_number: maxNumber + 1 }))
            } else {
                setStoryForm(prev => ({ ...prev, story_number: 1 }))
            }
        } catch (err) {
            console.error('Fetch error:', err)
            setStoriesError('Failed to load stories.')
        } finally {
            setIsStoriesLoading(false)
        }
    }

    const handlePublishToggle = async (id, currentStatus) => {
        try {
            const { error } = await supabase
                .from('stories')
                .update({ is_published: !currentStatus })
                .eq('id', id)

            if (error) throw error

            setStories(prev =>
                prev.map(story =>
                    story.id === id ? { ...story, is_published: !currentStatus } : story
                )
            )
        } catch (err) {
            console.error('Toggle error:', err)
            alert('Failed to update publish status.')
        }
    }

    const handleDeleteStory = async (id) => {
        if (!window.confirm('Are you sure you want to delete this story?')) return

        try {
            const { error } = await supabase
                .from('stories')
                .delete()
                .eq('id', id)

            if (error) throw error

            setStories(prev => prev.filter(story => story.id !== id))
        } catch (err) {
            console.error('Delete error:', err)
            alert('Failed to delete story.')
        }
    }

    const handlePhotoChange = (index, value) => {
        const newPhotos = [...storyForm.after_photos]
        newPhotos[index] = value
        setStoryForm(prev => ({ ...prev, after_photos: newPhotos }))
    }

    const addPhotoField = () => {
        if (storyForm.after_photos.length >= 10) {
            alert('Maximum of 10 photos allowed.')
            return
        }
        setStoryForm(prev => ({ ...prev, after_photos: [...prev.after_photos, ''] }))
    }

    const removePhotoField = (index) => {
        const newPhotos = storyForm.after_photos.filter((_, i) => i !== index)
        setStoryForm(prev => ({ ...prev, after_photos: newPhotos }))
    }

    const handleStorySubmit = async (e) => {
        e.preventDefault()
        
        if (storyForm.narrative.length < 200) {
            alert('Narrative must be at least 200 characters.')
            return
        }
        
        const cleanPhotos = storyForm.after_photos.filter(url => url.trim() !== '')
        if (cleanPhotos.length > 10) {
            alert('Maximum of 10 photos allowed.')
            return
        }

        try {
            const { error } = await supabase.from('stories').insert([{
                story_number: parseInt(storyForm.story_number),
                year: parseInt(storyForm.year),
                car_make_model: storyForm.car_make_model,
                car_colour: storyForm.car_colour,
                city: storyForm.city,
                pack: storyForm.pack,
                month: storyForm.month,
                narrative: storyForm.narrative,
                after_photos: cleanPhotos,
                is_published: storyForm.is_published
            }])

            if (error) throw error

            alert(`Story #${storyForm.story_number} has been recorded.`)
            setIsAddingStory(false)
            fetchStories()
            
            // Reset form
            setStoryForm(prev => ({
                ...prev,
                car_make_model: '',
                car_colour: '',
                city: '',
                narrative: '',
                after_photos: [''],
                is_published: false
            }))
        } catch (err) {
            console.error('Submit error:', err)
            alert(`Failed to save story: ${err.message}`)
        }
    }

    const handleLogout = async () => {
        await supabase.auth.signOut()
        navigate('/admin-login')
    }

    const formatDate = (dateString) => {
        if (!dateString) return '—'
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric', month: 'short', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        })
    }

    const getStatusClass = (status) => {
        switch (status) {
            case 'new': return 'status--new'
            case 'contacted': return 'status--contacted'
            case 'completed': return 'status--completed'
            default: return ''
        }
    }

    // Story Stats
    const currentYearStories = stories.filter(s => s.year === currentYear)
    const publishedCurrentYear = currentYearStories.filter(s => s.is_published).length
    const draftsCurrentYear = currentYearStories.filter(s => !s.is_published).length
    const slotsRemaining = Math.max(0, 96 - publishedCurrentYear)

    return (
        <div className="admin-dashboard">
            <header className="admin-header">
                <div className="admin-header__brand">
                    <h1>Admin Dashboard</h1>
                    <span>The Weekend CEO</span>
                </div>
                <div className="admin-tabs">
                    <button 
                        className={`admin-tab ${activeTab === 'appointments' ? 'admin-tab--active' : ''}`}
                        onClick={() => setActiveTab('appointments')}
                    >
                        Appointments
                    </button>
                    <button 
                        className={`admin-tab ${activeTab === 'stories' ? 'admin-tab--active' : ''}`}
                        onClick={() => setActiveTab('stories')}
                    >
                        96 Stories
                    </button>
                </div>
                <div className="admin-header__actions">
                    <button 
                        onClick={activeTab === 'appointments' ? fetchAppointments : fetchStories} 
                        className="admin-btn admin-btn--secondary"
                    >
                        Refresh
                    </button>
                    <button onClick={handleLogout} className="admin-btn admin-btn--ghost">
                        Logout
                    </button>
                </div>
            </header>

            <main className="admin-main">
                {/* APPOINTMENTS TAB */}
                {activeTab === 'appointments' && (
                    <>
                        <div className="admin-stats">
                            <div className="admin-stat">
                                <span className="admin-stat__number">{appointments.length}</span>
                                <span className="admin-stat__label">Total</span>
                            </div>
                            <div className="admin-stat admin-stat--new">
                                <span className="admin-stat__number">
                                    {appointments.filter(a => a.status === 'new').length}
                                </span>
                                <span className="admin-stat__label">New</span>
                            </div>
                            <div className="admin-stat admin-stat--contacted">
                                <span className="admin-stat__number">
                                    {appointments.filter(a => a.status === 'contacted').length}
                                </span>
                                <span className="admin-stat__label">Contacted</span>
                            </div>
                            <div className="admin-stat admin-stat--completed">
                                <span className="admin-stat__number">
                                    {appointments.filter(a => a.status === 'completed').length}
                                </span>
                                <span className="admin-stat__label">Completed</span>
                            </div>
                        </div>

                        {apptError && (
                            <div className="admin-error">
                                {apptError}
                                <button onClick={fetchAppointments}>Retry</button>
                            </div>
                        )}

                        {isApptLoading ? (
                            <div className="admin-loading">
                                <div className="admin-loading__spinner"></div>
                                <p>Loading appointments...</p>
                            </div>
                        ) : appointments.length === 0 ? (
                            <div className="admin-empty">
                                <p>No appointments yet.</p>
                            </div>
                        ) : (
                            <div className="admin-table-wrapper">
                                <table className="admin-table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Contact</th>
                                            <th>City</th>
                                            <th>Car</th>
                                            <th>Service</th>
                                            <th>Message</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {appointments.map((apt) => (
                                            <tr key={apt.id} className={updatingId === apt.id ? 'row--updating' : ''}>
                                                <td className="cell-name">{apt.name}</td>
                                                <td className="cell-contact">
                                                    <div>{apt.email}</div>
                                                    <div className="text-muted">{apt.phone}</div>
                                                </td>
                                                <td>{apt.city}</td>
                                                <td>{apt.car_model}</td>
                                                <td>{apt.timeline}</td>
                                                <td className="cell-message">
                                                    <div className="message-preview" title={apt.message}>
                                                        {apt.message || '—'}
                                                    </div>
                                                </td>
                                                <td>
                                                    <select
                                                        value={apt.status || 'new'}
                                                        onChange={(e) => handleStatusChange(apt.id, e.target.value)}
                                                        className={`status-select ${getStatusClass(apt.status)}`}
                                                        disabled={updatingId === apt.id}
                                                    >
                                                        <option value="new">New</option>
                                                        <option value="contacted">Contacted</option>
                                                        <option value="completed">Completed</option>
                                                    </select>
                                                </td>
                                                <td className="cell-date">{formatDate(apt.created_at)}</td>
                                                <td>
                                                    <button
                                                        onClick={() => handleDeleteAppt(apt.id)}
                                                        className="admin-btn admin-btn--danger admin-btn--small"
                                                        disabled={updatingId === apt.id}
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </>
                )}

                {/* STORIES TAB */}
                {activeTab === 'stories' && (
                    <>
                        <div className="admin-stories-header">
                            <div className="admin-stories-stats">
                                <span className="admin-stat-text">{currentYear}:</span>
                                <span className="admin-stat-text"><strong>{publishedCurrentYear}</strong> published</span>
                                <span className="admin-stat-divider">|</span>
                                <span className="admin-stat-text"><strong>{draftsCurrentYear}</strong> drafts</span>
                                <span className="admin-stat-divider">|</span>
                                <span className="admin-stat-text text-yellow"><strong>{slotsRemaining}</strong> slots remaining</span>
                            </div>
                            <button 
                                className="admin-btn admin-btn--primary"
                                onClick={() => setIsAddingStory(!isAddingStory)}
                            >
                                {isAddingStory ? 'Cancel' : '+ New Story'}
                            </button>
                        </div>

                        {isAddingStory && (
                            <div className="admin-story-form-wrapper">
                                <h2>Create New Story</h2>
                                <form onSubmit={handleStorySubmit} className="admin-story-form">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Story Number</label>
                                            <input type="number" value={storyForm.story_number} onChange={e => setStoryForm({...storyForm, story_number: e.target.value})} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Year</label>
                                            <input type="number" value={storyForm.year} onChange={e => setStoryForm({...storyForm, year: e.target.value})} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Month</label>
                                            <select value={storyForm.month} onChange={e => setStoryForm({...storyForm, month: e.target.value})} required>
                                                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
                                                    <option key={m} value={m}>{m}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Car Make & Model</label>
                                            <input type="text" placeholder="e.g. Porsche 911" value={storyForm.car_make_model} onChange={e => setStoryForm({...storyForm, car_make_model: e.target.value})} required />
                                        </div>
                                        <div className="form-group">
                                            <label>Car Colour</label>
                                            <input type="text" placeholder="e.g. Midnight Black" value={storyForm.car_colour} onChange={e => setStoryForm({...storyForm, car_colour: e.target.value})} required />
                                        </div>
                                        <div className="form-group">
                                            <label>City</label>
                                            <input type="text" placeholder="e.g. Chennai" value={storyForm.city} onChange={e => setStoryForm({...storyForm, city: e.target.value})} required />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Pack</label>
                                        <select value={storyForm.pack} onChange={e => setStoryForm({...storyForm, pack: e.target.value})} required>
                                            <option value="CEO's Luxury Pro Pack">CEO's Luxury Pro Pack</option>
                                            <option value="CEO's Ultra Luxury Pack">CEO's Ultra Luxury Pack</option>
                                            <option value="CEO's Premium Signature Pack">CEO's Premium Signature Pack</option>
                                            <option value="CEO's Celebrities Signature Pack">CEO's Celebrities Signature Pack</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Narrative (min 200 chars)</label>
                                        <textarea 
                                            rows="6" 
                                            value={storyForm.narrative} 
                                            onChange={e => setStoryForm({...storyForm, narrative: e.target.value})} 
                                            required 
                                        />
                                        <span className="char-count">{storyForm.narrative.length} chars</span>
                                    </div>

                                    <div className="form-group">
                                        <label>After Photos URLs (Max 10)</label>
                                        {storyForm.after_photos.map((url, index) => (
                                            <div key={index} className="photo-input-row">
                                                <input 
                                                    type="url" 
                                                    placeholder="https://..." 
                                                    value={url} 
                                                    onChange={e => handlePhotoChange(index, e.target.value)} 
                                                />
                                                {index > 0 && (
                                                    <button type="button" onClick={() => removePhotoField(index)} className="remove-photo-btn">×</button>
                                                )}
                                            </div>
                                        ))}
                                        {storyForm.after_photos.length < 10 && (
                                            <button type="button" onClick={addPhotoField} className="add-photo-btn">+ Add another photo</button>
                                        )}
                                        {storyForm.after_photos.length >= 10 && (
                                            <span className="photo-limit-warning">Maximum of 10 photos reached.</span>
                                        )}
                                    </div>

                                    <div className="form-checkbox">
                                        <input 
                                            type="checkbox" 
                                            id="publish" 
                                            checked={storyForm.is_published} 
                                            onChange={e => setStoryForm({...storyForm, is_published: e.target.checked})} 
                                        />
                                        <label htmlFor="publish">Publish immediately?</label>
                                    </div>

                                    <button type="submit" className="admin-btn admin-btn--primary">Save Story</button>
                                </form>
                            </div>
                        )}

                        {storiesError && (
                            <div className="admin-error">
                                {storiesError}
                                <button onClick={fetchStories}>Retry</button>
                            </div>
                        )}

                        {isStoriesLoading ? (
                            <div className="admin-loading">
                                <div className="admin-loading__spinner"></div>
                                <p>Loading stories...</p>
                            </div>
                        ) : stories.length === 0 ? (
                            <div className="admin-empty">
                                <p>No stories yet.</p>
                            </div>
                        ) : (
                            <div className="admin-table-wrapper">
                                <table className="admin-table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Car</th>
                                            <th>Colour</th>
                                            <th>City</th>
                                            <th>Pack</th>
                                            <th>Month</th>
                                            <th>Published</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stories.map(story => (
                                            <tr key={story.id}>
                                                <td><strong>{story.story_number}</strong></td>
                                                <td>{story.car_make_model}</td>
                                                <td>{story.car_colour}</td>
                                                <td>{story.city}</td>
                                                <td>{story.pack}</td>
                                                <td>{story.month} {story.year}</td>
                                                <td>
                                                    <label className="toggle-switch">
                                                        <input 
                                                            type="checkbox" 
                                                            checked={story.is_published}
                                                            onChange={() => handlePublishToggle(story.id, story.is_published)}
                                                        />
                                                        <span className="slider"></span>
                                                    </label>
                                                </td>
                                                <td>
                                                    <button
                                                        onClick={() => handleDeleteStory(story.id)}
                                                        className="admin-btn admin-btn--danger admin-btn--small"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </>
                )}
            </main>
        </div>
    )
}

export default AdminDashboard
