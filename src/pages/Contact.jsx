import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  AlertCircle,
  Navigation,
  Car,
  Bus,
  Train,
  Plane,
  Wifi,
  Square,
  Coffee,
  Heart,
  Zap
} from 'lucide-react'
import logo from '../photo/logo.png'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [
        '83P, Residency Green',
        'Jal Vihar Colony, Sector 46',
        'Gurgaon, Haryana 122003'
      ],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Main: +91 88008 33411',
        'Emergency: 108'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'General: info@aimanhealth.com',
        'Founder: founder@aimanhealth.com'
             ],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      details: [
        'Emergency: 24/7',
        'Outpatient: Mon-Fri 8AM-8PM',
        'Weekend: Sat-Sun 9AM-6PM'
      ],
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  const departments = [
    { name: 'Emergency Department', phone: '+91 88008 33411' },
    { name: 'Cardiology', phone: '+91 88008 33411' },
    { name: 'Mental Health', phone: '+91 88008 33411' },
    { name: 'Pediatrics', phone: '+91 88008 33411' },
    { name: 'Orthopedics', phone: '+91 88008 33411' },
    { name: 'Neurology', phone: '+91 88008 33411' },
    { name: 'Ophthalmology', phone: '+91 88008 33411' },
    { name: 'Radiology', phone: '+91 88008 33411' }
  ]

  const facilities = [
    { icon: Square, name: 'Free Parking', description: 'Ample parking space available' },
    { icon: Wifi, name: 'Free WiFi', description: 'High-speed internet throughout the hospital' },
    { icon: Coffee, name: 'Cafeteria', description: 'Fresh meals and beverages available' },
    { icon: Heart, name: 'Pharmacy', description: 'On-site pharmacy for prescriptions' },
    { icon: Car, name: 'Valet Service', description: 'Complimentary valet parking' },
    { icon: Bus, name: 'Shuttle Service', description: 'Free shuttle from nearby areas' }
  ]

  const transportation = [
    {
      icon: Car,
      title: 'By Car',
      description: 'Located off Highway 101, exit 15. Free parking available.',
      details: ['GPS: 123 Healthcare Avenue', 'Parking: Free for patients and visitors']
    },
    {
      icon: Bus,
      title: 'By Bus',
      description: 'Multiple bus routes serve our location.',
      details: ['Route 15: Healthcare District', 'Route 22: Medical Center', 'Route 45: Hospital Loop']
    },
    {
      icon: Train,
      title: 'By Train',
      description: 'Nearest train station is 2 miles away.',
      details: ['Medical District Station', 'Free shuttle service available', '15-minute ride to hospital']
    },
    {
      icon: Plane,
      title: 'By Air',
      description: 'International airport is 30 minutes away.',
      details: ['City International Airport', 'Taxi/Uber available', 'Helicopter landing pad on-site']
    }
  ]

  const onSubmit = (data) => {
    // Format the WhatsApp message
    const message = `🏥 CONTACT FORM MESSAGE

Hi AIMAN Hospital Team,

I would like to get in touch with the following details:

📋 CONTACT INFORMATION:
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}

📝 MESSAGE DETAILS:
Subject: ${data.subject}
Message: ${data.message}

Please get back to me at your earliest convenience.

Thank you!`

    // Create WhatsApp URL
    const whatsappNumber = '9414355273'
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank')
    
    // Show success message
    setIsSubmitted(true)
    reset()
  }

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen bg-primary-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="card text-center max-w-md mx-auto"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            WhatsApp Opened!
          </h2>
          <p className="text-gray-600 mb-6">
            Your message has been formatted and WhatsApp is opening. Please send the message 
            to complete your inquiry. We'll respond as soon as possible.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full btn-primary"
            >
              Send Another Message via WhatsApp
            </button>
            <a
              href="/"
              className="w-full btn-outline block text-center"
            >
              Return to Home
            </a>
          </div>
        </motion.div>
      </div>
    )
  }

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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto">
              Get in touch with us for appointments, inquiries, or emergency care. 
              We're here to help you 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-6 bg-red-600 text-white">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center space-x-4">
            <Zap className="w-8 h-8" />
            <div>
              <h2 className="text-2xl font-bold">Medical Emergency?</h2>
              <p className="text-red-100">Call 108 immediately or visit our emergency department</p>
            </div>
            <a
              href="tel:108"
              className="bg-white text-red-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Call 108
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
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
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us for your healthcare needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {React.createElement(info.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section-padding bg-primary-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="card">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Send us a Message
                </h2>
                <p className="text-gray-600 mb-6">
                  Have a question or need to schedule an appointment? 
                  Fill out the form below and it will be sent to us via WhatsApp.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        {...register('firstName', { required: 'First name is required' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && (
                        <p className="text-red-600 text-sm mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        {...register('lastName', { required: 'Last name is required' })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && (
                        <p className="text-red-600 text-sm mt-1 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      {...register('subject', { required: 'Please select a subject' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="appointment">Book Appointment</option>
                      <option value="general">General Inquiry</option>
                      <option value="billing">Billing Question</option>
                      <option value="medical">Medical Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="text-red-600 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Please describe your inquiry or concern..."
                    />
                    {errors.message && (
                      <p className="text-red-600 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Find Us
                </h3>
                <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2155!2d-74.0059!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuMiJX!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="AIMAN Hospital Location"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="mt-4 p-4 bg-primary-100 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Navigation className="w-5 h-5 text-primary-600" />
                    <span className="font-medium text-primary-800">Get Directions</span>
                  </div>
                  <p className="text-sm text-primary-700 mb-3">
                  83P , Residency Green, Jal Vihar Colony, Sector 46, Gurgaon, Haryana 122003             </p>
                  <a
                    href="https://maps.app.goo.gl/KUSokbpUDrfc71X96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Department Contacts */}
              <div className="card">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Department Contacts
                </h3>
                <div className="space-y-3">
                  {departments.map((dept, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-primary-100 rounded-lg">
                      <span className="font-medium text-gray-800">{dept.name}</span>
                      <a
                        href={`tel:${dept.phone}`}
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        {dept.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transportation */}
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
              How to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple transportation options to make your visit convenient
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transportation.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {React.createElement(option.icon, { className: "w-8 h-8 text-primary-600" })}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {option.description}
                </p>
                <div className="space-y-1">
                  {option.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-gray-500">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
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
              Hospital Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide various amenities to make your visit comfortable and convenient
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {React.createElement(facility.icon, { className: "w-8 h-8 text-secondary-600" })}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {facility.name}
                </h3>
                <p className="text-gray-600">
                  {facility.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
