import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import './AdminDashboard.css'

function AdminDashboard() {
    const navigate = useNavigate()
    const [appointments, setAppointments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [updatingId, setUpdatingId] = useState(null)

    useEffect(() => {
        fetchAppointments()
    }, [])

    const fetchAppointments = async () => {
        setIsLoading(true)
        setError(null)

        try {
            const { data, error: fetchError } = await supabase
                .from('appointments')
                .select('*')
                .order('created_at', { ascending: false })

            if (fetchError) throw fetchError

            setAppointments(data || [])
        } catch (err) {
            console.error('Fetch error:', err)
            setError('Failed to load appointments. Please try again.')
        } finally {
            setIsLoading(false)
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

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this appointment?')) {
            return
        }

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
            alert('Failed to delete appointment. Please try again.')
        } finally {
            setUpdatingId(null)
        }
    }

    const handleLogout = async () => {
        await supabase.auth.signOut()
        navigate('/admin-login')
    }

    const formatDate = (dateString) => {
        if (!dateString) return '—'
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
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

    return (
        <div className="admin-dashboard">
            <header className="admin-header">
                <div className="admin-header__brand">
                    <h1>Admin Dashboard</h1>
                    <span>The Weekend CEO</span>
                </div>
                <div className="admin-header__actions">
                    <button onClick={fetchAppointments} className="admin-btn admin-btn--secondary">
                        Refresh
                    </button>
                    <button onClick={handleLogout} className="admin-btn admin-btn--ghost">
                        Logout
                    </button>
                </div>
            </header>

            <main className="admin-main">
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

                {error && (
                    <div className="admin-error">
                        {error}
                        <button onClick={fetchAppointments}>Retry</button>
                    </div>
                )}

                {isLoading ? (
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
                                                onClick={() => handleDelete(apt.id)}
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
            </main>
        </div>
    )
}

export default AdminDashboard
