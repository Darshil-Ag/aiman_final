import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../photo/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Function to scroll to top and navigate
  const handleNavigation = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    navigate(path)
    setIsOpen(false)
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Departments', path: '/departments' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Appointment', path: '/appointment' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blog', path: '/blog' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 shadow-lg transition-all duration-300"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 w-full">
          {/* Left: Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="AIMAN" className="w-10 h-10 rounded-lg object-cover shadow-md" />
              <span className="text-2xl font-bold text-white drop-shadow-md">
                AIMAN
              </span>
            </Link>
          </div>

          {/* Center: Nav Links */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`font-medium transition-all duration-200 cursor-pointer ${
                    location.pathname === item.path
                      ? 'text-yellow-300 scale-105 drop-shadow-lg'
                      : 'text-white hover:text-yellow-200 hover:scale-105 drop-shadow-md'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => handleNavigation('/contact')}
              className="flex items-center space-x-2 text-sm text-white hover:text-yellow-200 transition-colors duration-200 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </button>
            <button
              onClick={() => handleNavigation('/appointment')}
              className="bg-white text-primary-600 hover:bg-yellow-300 hover:text-primary-700 font-medium text-sm px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/20 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 mt-2"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full text-left block px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => handleNavigation('/contact')}
                  className="flex items-center space-x-2 text-sm text-gray-700 mb-3 hover:text-primary-600 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-primary-600" />
                  <span>Contact</span>
                </button>
                <button
                  onClick={() => handleNavigation('/appointment')}
                  className="btn-primary w-full text-center"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
