import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../photo/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        (isScrolled || isHovered) ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 w-full">
          {/* Left: Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="AIMAN" className="w-10 h-10 rounded-lg object-cover" />
              <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                AIMAN
              </span>
            </Link>
          </div>

          {/* Center: Nav Links */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-primary-600'
                      : (isScrolled || isHovered)
                      ? 'text-gray-700 hover:text-primary-600'
                      : 'text-white hover:text-primary-200 drop-shadow-md'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className={`w-4 h-4 ${(isScrolled || isHovered) ? 'text-primary-600' : 'text-white'}`} />
              <Link to="/contact" className={`${(isScrolled || isHovered) ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'}`}>
                Contact
              </Link>
            </div>
            <Link to="/appointment" className="btn-primary text-sm px-4 py-2">
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
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
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-700 mb-3">
                  <Phone className="w-4 h-4 text-primary-600" />
                  <Link to="/contact">Contact</Link>
                </div>
                <Link
                  to="/appointment"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full text-center block"
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
