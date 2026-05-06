import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import HomePage from './pages/HomePage'
import BrandPage from './pages/BrandPage'
import ServicesPage from './pages/ServicesPage'
import AreasPage from './pages/AreasPage'
import GalleryPage from './pages/GalleryPage'
import AppointmentPage from './pages/AppointmentPage'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import SafetyAssurancePage from './pages/SafetyAssurancePage'
import StandardsPage from './pages/StandardsPage'
import StoriesPage from './pages/StoriesPage'
import StoryDetailPage from './pages/StoryDetailPage'
import ContactPage from './pages/ContactPage'
import FAQPage from './pages/FAQPage'
import BlogPage from './pages/BlogPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
    return (
        <Routes>
            {/* Public routes with Layout */}
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/brand" element={<Layout><BrandPage /></Layout>} />
            <Route path="/packages" element={<Layout><ServicesPage /></Layout>} />
            <Route path="/safety-assurance" element={<Layout><SafetyAssurancePage /></Layout>} />
            <Route path="/areas" element={<Layout><AreasPage /></Layout>} />
            <Route path="/standards" element={<Layout><StandardsPage /></Layout>} />
            <Route path="/gallery" element={<Layout><GalleryPage /></Layout>} />
            <Route path="/stories" element={<Layout><StoriesPage /></Layout>} />
            <Route path="/stories/:id" element={<Layout><StoryDetailPage /></Layout>} />
            <Route path="/appointment" element={<Layout><AppointmentPage /></Layout>} />
            <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
            <Route path="/faq" element={<Layout><FAQPage /></Layout>} />
            <Route path="/blog" element={<Layout><BlogPage /></Layout>} />

            {/* Admin routes without Layout */}
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route
                path="/admin"
                element={
                    <ProtectedRoute>
                        <AdminDashboard />
                    </ProtectedRoute>
                }
            />

            {/* 404 Catch-all */}
            <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
        </Routes>
    )
}

export default App
