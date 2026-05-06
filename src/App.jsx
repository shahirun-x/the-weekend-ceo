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
        </Routes>
    )
}

export default App
