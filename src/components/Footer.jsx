import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()

  // Function to scroll to top and navigate
  const handleLinkClick = (path) => {
    // Instant scroll to top - no delay
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    navigate(path)
  }

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/our-services' },
    { name: 'Our Experts', path: '/our-experts' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Appointment', path: '/appointment' },
    { name: 'Contact', path: '/contact' },
  ]

  const services = [
    { name: '24/7 Emergency Mental Health', path: '/services/emergency-mental-health' },
    { name: 'OPD Services', path: '/services/opd-services' },
    { name: 'IPD Services', path: '/services/ipd-services' },
    { name: 'De-addiction & Rehab', path: '/services/deaddiction-rehab' },
    { name: 'Child & Adolescent', path: '/services/child-adolescent' },
    { name: 'Women\'s Mental Health', path: '/services/womens-mental-health' },
    { name: 'Geriatric Mental Health', path: '/services/geriatric-mental-health' },
    { name: 'Clinical Psychology', path: '/services/clinical-psychology' },
    { name: 'Sexual Wellness', path: '/services/sexual-wellness' },
    { name: 'Home Visit Services', path: '/services/home-visit' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Hospital Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center shadow-lg">
                <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <span className="text-2xl sm:text-3xl font-bold">AIMAN</span>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Your trusted partner in healthcare, providing comprehensive medical services 
              with compassion and excellence for over two decades.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label={social.label}
                >
                  {React.createElement(social.icon, { className: "w-5 h-5" })}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 cursor-pointer text-left text-sm sm:text-base block w-full py-1"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => handleLinkClick(service.path)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 cursor-pointer text-left text-sm sm:text-base block w-full py-1"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-semibold border-b border-gray-700 pb-2">Contact Info</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm sm:text-base break-words">
                    123 Healthcare Avenue<br />
                    Medical District, City 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div>
                  <a href="tel:+15551234567" className="text-gray-300 text-sm sm:text-base hover:text-primary-400 transition-colors">
                    +1 (555) 123-4567
                  </a>
                  <p className="text-red-400 text-xs sm:text-sm font-semibold">Emergency: 108</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:info@aimanhospital.com" className="text-gray-300 text-sm sm:text-base hover:text-primary-400 transition-colors break-all">
                  info@aimanhospital.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Mon - Fri: 8:00 AM - 8:00 PM<br />
                    Sat - Sun: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="border-t border-gray-800 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600 rounded-xl p-6 sm:p-8 text-center shadow-2xl">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-3">
              <Phone className="w-6 h-6 sm:w-7 sm:h-7 animate-pulse" />
              <span className="font-bold text-xl sm:text-2xl">Emergency Helpline</span>
            </div>
            <p className="text-red-100 text-sm sm:text-base mb-4">
              Available 24/7 for urgent medical assistance
            </p>
            <a
              href="tel:108"
              className="inline-block bg-white text-red-600 font-bold text-lg sm:text-xl px-8 py-3 sm:px-10 sm:py-4 rounded-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-200 shadow-lg"
            >
              📞 Call 108 Now
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} AIMAN Hospital. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <button
                onClick={() => handleLinkClick('/privacy')}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200 cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleLinkClick('/terms')}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200 cursor-pointer"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleLinkClick('/sitemap')}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200 cursor-pointer"
              >
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
