import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import './AdminLogin.css'

function AdminLogin() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            const { error: authError } = await supabase.auth.signInWithPassword({
                email,
                password
            })

            if (authError) {
                throw authError
            }

            navigate('/admin')
        } catch (err) {
            console.error('Login error:', err)
            setError(err.message || 'Failed to login. Please check your credentials.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="admin-login">
            <div className="admin-login__container">
                <div className="admin-login__header">
                    <h1 className="admin-login__title">Admin Access</h1>
                    <p className="admin-login__subtitle">The Weekend CEO Dashboard</p>
                </div>

                {error && (
                    <div className="admin-login__error">
                        {error}
                    </div>
                )}

                <form className="admin-login__form" onSubmit={handleSubmit}>
                    <div className="admin-login__field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="admin@example.com"
                            disabled={isLoading}
                        />
                    </div>

                    <div className="admin-login__field">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                            disabled={isLoading}
                        />
                    </div>

                    <button
                        type="submit"
                        className={`admin-login__button ${isLoading ? 'admin-login__button--loading' : ''}`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>

                <div className="admin-login__footer">
                    <a href="/" className="admin-login__link">← Back to Website</a>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
