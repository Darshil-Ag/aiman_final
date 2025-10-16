import React from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Target, 
  Eye, 
  Award, 
  Users, 
  Calendar, 
  Shield, 
  CheckCircle,
  Star,
  Building,
  Stethoscope,
  Clock
} from 'lucide-react'
import logo from '../photo/logo.png'

// Content from content folder
const objective = "To provide comprehensive, high-quality healthcare services that improve the health and well-being of our community through compassionate care, advanced technology, and continuous innovation. We are committed to delivering exceptional medical services with integrity, excellence, and patient-centered care."

const vision = "To be the leading healthcare provider in the region, recognized for excellence in patient care, medical innovation, and community health improvement. We envision a future where every patient receives world-class healthcare services delivered with compassion, expertise, and cutting-edge technology."

const slogan = "Your Health, Our Priority - Excellence in Healthcare"

const fullName = "Advanced Institute of Medical and Allied Sciences Network"

const About = () => {
  const stats = [
    { icon: Users, number: '50+', label: 'Expert Doctors' },
    { icon: Building, number: '200+', label: 'Hospital Beds' },
    { icon: Calendar, number: '25+', label: 'Years of Service' },
    { icon: Heart, number: '50K+', label: 'Patients Served' }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We treat every patient with empathy, understanding, and genuine care, ensuring they feel valued and supported throughout their healthcare journey.'
    },
    {
      icon: Shield,
      title: 'Excellence',
      description: 'We maintain the highest standards of medical care through continuous learning, advanced technology, and evidence-based practices.'
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our interactions, maintaining transparency and trust with our patients and community.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We embrace cutting-edge medical technology and innovative treatment approaches to provide the best possible outcomes for our patients.'
    }
  ]

  const achievements = [
    {
      icon: Award,
      title: 'JCI Accredited',
      description: 'Joint Commission International accreditation for quality healthcare standards'
    },
    {
      icon: Star,
      title: 'Best Hospital Award',
      description: 'Recognized as the best multi-specialty hospital in the region for 3 consecutive years'
    },
    {
      icon: Shield,
      title: 'ISO 9001:2015',
      description: 'International quality management system certification'
    },
    {
      icon: CheckCircle,
      title: 'NABH Accredited',
      description: 'National Accreditation Board for Hospitals & Healthcare Providers certification'
    }
  ]

  const timeline = [
    {
      year: '1999',
      title: 'Foundation',
      description: 'AIMAN Hospital was established with a vision to provide comprehensive healthcare services to the community.'
    },
    {
      year: '2005',
      title: 'Expansion',
      description: 'Added specialized departments including Cardiology, Neurology, and Mental Health services.'
    },
    {
      year: '2012',
      title: 'Technology Upgrade',
      description: 'Invested in state-of-the-art medical equipment and digital health systems.'
    },
    {
      year: '2018',
      title: 'Recognition',
      description: 'Received multiple awards for excellence in patient care and medical innovation.'
    },
    {
      year: '2024',
      title: 'Future Vision',
      description: 'Continuing to expand services and embrace new technologies for better patient outcomes.'
    }
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
        
        {/* Logo Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img src={logo} alt="AIMAN logo" className="opacity-15 w-80 h-auto" />
        </div>
        
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About {fullName}
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto mb-4">
              {slogan}
            </p>
            <p className="text-lg text-purple-200 max-w-4xl mx-auto">
              For over two decades, we have been dedicated to providing exceptional healthcare 
              services with compassion, innovation, and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Mission</h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Illustration Side */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                {/* Hexagonal design for mission */}
                <div className="w-80 h-80 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl flex items-center justify-center transform rotate-12">
                  <div className="w-64 h-64 bg-white rounded-2xl shadow-xl flex items-center justify-center transform -rotate-12">
                    <div className="text-center">
                      <Target className="w-20 h-20 text-primary-600 mx-auto mb-4" />
                      <div className="w-16 h-1 bg-primary-300 mx-auto mb-2"></div>
                      <div className="w-12 h-1 bg-primary-200 mx-auto"></div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary-300 rounded-full opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-secondary-300 rounded-full opacity-60"></div>
                <div className="absolute top-1/2 -right-8 w-6 h-6 bg-primary-400 rounded-full opacity-40"></div>
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:w-1/2">
              <div className="max-w-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {objective}
                </p>
                <div className="mt-8 flex items-center space-x-4">
                  <div className="w-8 h-1 bg-primary-600"></div>
                  <div className="w-6 h-1 bg-primary-400"></div>
                  <div className="w-4 h-1 bg-primary-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Vision</h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            {/* Illustration Side */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                {/* Diamond/rhombus design for vision */}
                <div className="w-80 h-80 bg-gradient-to-br from-secondary-100 to-secondary-200 transform rotate-45 flex items-center justify-center">
                  <div className="w-64 h-64 bg-white transform -rotate-45 flex items-center justify-center shadow-xl">
                    <div className="text-center transform rotate-45">
                      <Eye className="w-20 h-20 text-secondary-600 mx-auto mb-4" />
                      <div className="flex justify-center space-x-2">
                        <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-secondary-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-secondary-300 rounded-full opacity-70"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-primary-300 rounded-full opacity-70"></div>
                <div className="absolute top-1/4 -left-8 w-4 h-4 bg-secondary-400 rounded-full opacity-50"></div>
                <div className="absolute bottom-1/4 -right-8 w-6 h-6 bg-primary-400 rounded-full opacity-50"></div>
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:w-1/2">
              <div className="max-w-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {vision}
                </p>
                <div className="mt-8 flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-secondary-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-secondary-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-secondary-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Compassion, Excellence, Integrity, and Innovation guide everything we do. 
              These core values shape our culture and drive our commitment to providing 
              exceptional healthcare services.
            </p>
          </motion.div>

          {/* Values with illustrations */}
          <div className="space-y-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                {/* Illustration Side */}
                <div className="lg:w-1/2 flex justify-center">
                  <div className="relative">
                    {/* Background circle */}
                    <div className="w-64 h-64 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-full flex items-center justify-center">
                      {/* Medical illustration placeholder */}
                      <div className="w-48 h-48 bg-white rounded-full shadow-lg flex items-center justify-center">
                        {React.createElement(value.icon, { className: "w-24 h-24 text-primary-600" })}
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-200 rounded-full"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-200 rounded-full"></div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="lg:w-1/2">
                  <div className="max-w-lg">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Statistics - COMMENTED OUT */}
      {/* <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust 
              our community places in us.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {React.createElement(stat.icon, { className: "w-8 h-8 text-primary-600" })}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* What Drives Us */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Our core values are the foundation of everything we do, 
              guiding our decisions and actions every day. We are driven by our commitment 
              to excellence, innovation, and the well-being of our community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      {React.createElement(value.icon, { className: "w-6 h-6 text-primary-600" })}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements & Certifications - COMMENTED OUT */}
      {/* <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Recognition & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by leading 
              healthcare accreditation bodies and industry organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {React.createElement(achievement.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Story Timeline - COMMENTED OUT */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our humble beginnings to becoming a leading healthcare provider, 
              here's our story of growth and commitment to excellence.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-secondary-600 hidden lg:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:space-x-8`}
                >
                  <div className="lg:w-1/2">
                    <div className="card">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-primary-600">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden lg:block w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="lg:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience the AIMAN Difference
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Join thousands of patients who have trusted us with their healthcare needs. 
              Let us be your partner in health and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/appointment"
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                <Stethoscope className="w-5 h-5 mr-2" />
                Book an Appointment
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium px-8 py-4 rounded-lg transition-all duration-200 inline-flex items-center justify-center"
              >
                <Clock className="w-5 h-5 mr-2" />
                Visit Us Today
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
