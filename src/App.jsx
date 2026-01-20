import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import BrandPage from './pages/BrandPage'
import ServicesPage from './pages/ServicesPage'
import AreasPage from './pages/AreasPage'
import GalleryPage from './pages/GalleryPage'
import AppointmentPage from './pages/AppointmentPage'

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/brand" element={<BrandPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/areas" element={<AreasPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/appointment" element={<AppointmentPage />} />
            </Routes>
        </Layout>
    )
}

export default App
