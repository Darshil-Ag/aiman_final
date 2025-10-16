import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import FixedLogoBackground from './components/FixedLogoBackground'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import OurServices from './pages/OurServices'
import OurExperts from './pages/OurExperts'
import Appointment from './pages/Appointment'
import FAQs from './pages/FAQs'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import DoctorProfile from './pages/DoctorProfile'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Sitemap from './pages/Sitemap'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminDoctors from './pages/admin/AdminDoctors'
import AdminBlogs from './pages/admin/AdminBlogs'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-primary-50 relative">
        <FixedLogoBackground />
        <div className="relative z-10">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={
              <>
                <Navbar />
                <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <Home />
                </motion.main>
                <Footer />
                <WhatsAppButton />
              </>
            } />
            <Route path="/about" element={
              <>
                <Navbar />
                <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <About />
                </motion.main>
                <Footer />
                <WhatsAppButton />
              </>
            } />
            <Route path="/our-services" element={
              <>
                <Navbar />
                <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <OurServices />
                </motion.main>
                <Footer />
                <WhatsAppButton />
              </>
            } />
            <Route path="/our-experts" element={
              <>
                <Navbar />
                <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <OurExperts />
                </motion.main>
                <Footer />
                <WhatsAppButton />
              </>
            } />
            <Route path="/appointment" element={
              <>
                <Navbar />
                <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <Appointment />
                </motion.main>
                <Footer />
                <WhatsAppButton />
              </>
            } />
            <Route path="/faqs" element={
              <>
                <Navbar />
                <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <FAQs />
                </motion.main>
                <Footer />
                <WhatsAppButton />
              </>
            } />
            <Route path="/blog" element={
              <>
                <Navbar />
                <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <Blog />
                </motion.main>
                <Footer />
                <WhatsAppButton />
              </>
            } />
            <Route path="/contact" element={
              <>
                <Navbar />
                <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <Contact />
                </motion.main>
                <Footer />
                <WhatsAppButton />
              </>
            } />
            
            {/* Service Routes */}
            <Route path="/services/:serviceName" element={
              <>
                <Navbar />
                <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <ServiceDetail />
                </motion.main>
                <Footer />
                <WhatsAppButton />
              </>
            } />

            {/* Doctor Profile Routes */}
            <Route path="/doctor/:doctorName" element={
              <>
                <Navbar />
                <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <DoctorProfile />
                </motion.main>
                <Footer />
                <WhatsAppButton />
              </>
            } />

            {/* Privacy Policy */}
            <Route path="/privacy-policy" element={
              <>
                <Navbar />
                <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <PrivacyPolicy />
                </motion.main>
                <Footer />
                <WhatsAppButton />
              </>
            } />

            {/* Terms of Service */}
            <Route path="/terms-of-service" element={
              <>
                <Navbar />
                <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <TermsOfService />
                </motion.main>
                <Footer />
                <WhatsAppButton />
              </>
            } />

            {/* Sitemap */}
            <Route path="/sitemap" element={
              <>
                <Navbar />
                <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <Sitemap />
                </motion.main>
                <Footer />
                <WhatsAppButton />
              </>
            } />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/doctors" element={<AdminDoctors />} />
            <Route path="/admin/blogs" element={<AdminBlogs />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
