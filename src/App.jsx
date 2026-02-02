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

function App() {
    return (
        <Routes>
            {/* Public routes with Layout */}
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            <Route path="/brand" element={<Layout><BrandPage /></Layout>} />
            <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
            <Route path="/areas" element={<Layout><AreasPage /></Layout>} />
            <Route path="/gallery" element={<Layout><GalleryPage /></Layout>} />
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
