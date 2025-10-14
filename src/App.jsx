import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import FixedLogoBackground from './components/FixedLogoBackground'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Departments from './pages/Departments'
import Doctors from './pages/Doctors'
import Appointment from './pages/Appointment'
import Testimonials from './pages/Testimonials'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Services from './pages/Services'
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
            <Route path="/departments" element={
              <>
                <Navbar />
                <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <Departments />
                </motion.main>
                <Footer />
                <WhatsAppButton />
              </>
            } />
            <Route path="/doctors" element={
              <>
                <Navbar />
                <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <Doctors />
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
            <Route path="/testimonials" element={
              <>
                <Navbar />
                <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <Testimonials />
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
                  <Services />
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
