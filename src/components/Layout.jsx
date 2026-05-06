import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'

function Layout({ children }) {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <div className="layout grain-overlay">
            <Header />
            <main className="layout__main">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
