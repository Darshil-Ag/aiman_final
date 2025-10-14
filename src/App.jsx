import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import FixedLogoBackground from './components/FixedLogoBackground'
import Home from './pages/Home'
import About from './pages/About'
import Departments from './pages/Departments'
import Doctors from './pages/Doctors'
import Appointment from './pages/Appointment'
import Testimonials from './pages/Testimonials'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary-50 relative">
        <FixedLogoBackground />
        <div className="relative z-10">
          <Navbar />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.main>
          <Footer />
          <WhatsAppButton />
        </div>
      </div>
    </Router>
  )
}

export default App
