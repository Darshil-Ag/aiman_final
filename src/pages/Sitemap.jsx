import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Home, 
  Users, 
  FileText, 
  Calendar, 
  Phone, 
  HelpCircle, 
  Shield, 
  MapPin,
  Heart,
  Brain,
  Baby,
  Activity,
  Eye,
  Zap,
  Stethoscope,
  Building,
  Mail,
  Clock
} from 'lucide-react'
import logo from '../photo/logo.png'

const Sitemap = () => {
  const mainPages = [
    { name: 'Home', path: '/', icon: Home, description: 'Main homepage with hospital overview' },
    { name: 'About Us', path: '/about', icon: Users, description: 'Learn about our hospital and mission' },
    { name: 'Our Services', path: '/our-services', icon: Heart, description: 'Comprehensive mental health services' },
    { name: 'Our Experts', path: '/our-experts', icon: Stethoscope, description: 'Meet our medical professionals' },
    { name: 'Book Appointment', path: '/appointment', icon: Calendar, description: 'Schedule your medical appointment' },
    { name: 'Blog', path: '/blog', icon: FileText, description: 'Health articles and medical insights' },
    { name: 'FAQs', path: '/faqs', icon: HelpCircle, description: 'Frequently asked questions' },
    { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch with us' }
  ]

  const servicePages = [
    { name: 'Emergency Mental Health Services', path: '/services/emergency-mental-health', icon: Zap },
    { name: 'OPD Services', path: '/services/opd-services', icon: Users },
    { name: 'IPD Services', path: '/services/ipd-services', icon: Building },
    { name: 'De-addiction & Rehabilitation', path: '/services/deaddiction-rehab', icon: Shield },
    { name: 'Child & Adolescent Mental Health', path: '/services/child-adolescent', icon: Baby },
    { name: 'Women\'s Mental Health', path: '/services/womens-mental-health', icon: Heart },
    { name: 'Geriatric Mental Health', path: '/services/geriatric-mental-health', icon: Users },
    { name: 'Clinical Psychology & Therapy', path: '/services/clinical-psychology', icon: Brain },
    { name: 'Sexual Wellness Services', path: '/services/sexual-wellness', icon: Heart },
    { name: 'Home Visit Services', path: '/services/home-visit', icon: MapPin }
  ]

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy-policy', icon: Shield, description: 'How we protect your personal information' },
    { name: 'Terms of Service', path: '/terms-of-service', icon: FileText, description: 'Terms and conditions for using our services' }
  ]

  const adminPages = [
    { name: 'Admin Login', path: '/admin/login', icon: Shield, description: 'Administrator login portal' },
    { name: 'Admin Dashboard', path: '/admin/dashboard', icon: Users, description: 'Hospital management dashboard' },
    { name: 'Manage Doctors', path: '/admin/doctors', icon: Stethoscope, description: 'Doctor management system' },
    { name: 'Manage Blogs', path: '/admin/blogs', icon: FileText, description: 'Blog content management' }
  ]

  const contactInfo = [
    { type: 'Phone', value: '+91 88008 33411', icon: Phone },
    { type: 'Email', value: 'info@aimanhospital.com', icon: Mail },
    { type: 'Emergency', value: '108', icon: Zap },
    { type: 'Hours', value: '24/7 Emergency Services', icon: Clock }
  ]

  return (
    <div className="pt-16 relative">
      {/* Logo Background Watermark */}
      <div className="fixed top-16 left-0 right-0 bottom-0 flex items-center justify-center pointer-events-none opacity-10 z-0">
        <img src={logo} alt="AIMAN logo" className="w-96 h-auto" />
      </div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sitemap
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto">
              Navigate through all pages and sections of our website. 
              Find everything you need quickly and easily.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Pages */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Main Pages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential pages for patients and visitors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainPages.map((page, index) => (
              <motion.div
                key={page.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <Link to={page.path} className="block">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                      <page.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                        {page.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {page.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Pages */}
      <section className="section-padding bg-primary-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mental health and medical services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicePages.map((service, index) => (
              <motion.div
                key={service.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <Link to={service.path} className="block">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                      <service.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Pages */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Legal & Policies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important legal information and policies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {legalPages.map((page, index) => (
              <motion.div
                key={page.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <Link to={page.path} className="block">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                      <page.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {page.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {page.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Pages */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Admin Portal
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Administrative access for hospital staff
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {adminPages.map((page, index) => (
              <motion.div
                key={page.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <Link to={page.path} className="block">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                      <page.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                        {page.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {page.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Get in touch with us anytime
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{contact.type}</h3>
                <p className="text-purple-100">{contact.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Quick Links
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/appointment" className="btn-primary">
                Book Appointment
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
              <Link to="/our-experts" className="btn-outline">
                Our Doctors
              </Link>
              <Link to="/our-services" className="btn-outline">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Sitemap

