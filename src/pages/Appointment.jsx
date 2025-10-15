import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useData } from '../contexts/DataContext'
import { 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Stethoscope,
  CheckCircle,
  AlertCircle,
  Heart,
  Brain,
  Baby,
  Activity,
  Eye,
  Zap,
  Shield
} from 'lucide-react'
import logo from '../photo/logo.png'

const Appointment = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const { doctors } = useData()


  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ]

  const onSubmit = (data) => {
    // Validate all required fields
    if (!selectedDoctor || !selectedDate || !selectedTime) {
      alert('Please fill in all required fields')
      return
    }

    // Get doctor name and specialty
    const selectedDoctorData = doctors.find(d => d.id === selectedDoctor)
    const doctorName = selectedDoctorData?.name || 'Not specified'
    const doctorSpecialty = selectedDoctorData?.specialty || 'Not specified'

    // Format the WhatsApp message - Compatible with WhatsApp Business
    const message = `🏥 APPOINTMENT BOOKING REQUEST

Hi AIMAN Hospital Team,

I would like to book an appointment with the following details:

📋 PATIENT INFORMATION:
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
${data.age ? `Age: ${data.age} years` : ''}

🏥 APPOINTMENT DETAILS:
Doctor: ${doctorName}
Specialty: ${doctorSpecialty}
Preferred Date: ${selectedDate}
Preferred Time: ${selectedTime}

${data.message ? `📝 ADDITIONAL NOTES:\n${data.message}` : ''}

Please confirm my appointment at your earliest convenience. Thank you!

Looking forward to your response.`

    // WhatsApp Business number
    const whatsappNumber = '919414355273'
    
    // Create WhatsApp URL - Use API format for better compatibility
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    
    // Show success message
    setIsSubmitted(true)
    reset()
    setSelectedDepartment('')
    setSelectedDoctor('')
    setSelectedDate('')
    setSelectedTime('')
  }

  const getMinDate = () => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  const getMaxDate = () => {
    const today = new Date()
    const maxDate = new Date(today)
    maxDate.setDate(maxDate.getDate() + 30)
    return maxDate.toISOString().split('T')[0]
  }

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen bg-primary-50 flex items-center justify-center">
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
            Your appointment details have been prepared. Please send the message on WhatsApp 
            to complete your booking. We'll confirm your appointment shortly.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full btn-primary"
            >
              Book Another Appointment
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
    <div className="pt-16">
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
              Book Your Appointment
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto">
              Schedule your consultation with our expert doctors and take the first step 
              towards better health and wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Schedule Your Visit
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you to confirm your appointment.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        {...register('fullName', { required: 'Full name is required' })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-red-600 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        {...register('phone', { 
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[\+]?[1-9][\d]{0,15}$/,
                            message: 'Invalid phone number'
                          }
                        })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      {...register('age', { min: 0, max: 120 })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your age"
                    />
                  </div>
                </div>

                {/* Doctor Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Preferred Doctor *
                  </label>
                  <div className="space-y-2">
                    {doctors.map((doctor) => (
                      <button
                        key={doctor.id}
                        type="button"
                        onClick={() => setSelectedDoctor(doctor.id)}
                        className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                          selectedDoctor === doctor.id
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center overflow-hidden">
                            {doctor.image ? (
                              <img 
                                src={doctor.image} 
                                alt={doctor.name}
                                className="w-full h-full object-cover rounded-full"
                              />
                            ) : (
                              <User className="w-6 h-6 text-primary-600" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-800">{doctor.name}</p>
                            <p className="text-sm text-primary-600">{doctor.specialty}</p>
                            <p className="text-xs text-gray-500">{doctor.experience} years experience</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  {!selectedDoctor && (
                    <p className="text-red-600 text-sm mt-1 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      Please select a doctor
                    </p>
                  )}
                </div>


                {/* Date and Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={getMinDate()}
                        max={getMaxDate()}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    {!selectedDate && (
                      <p className="text-red-600 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        Please select a date
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                    {!selectedTime && (
                      <p className="text-red-600 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        Please select a time
                      </p>
                    )}
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Please describe your symptoms or reason for the appointment..."
                  />
                </div>

                {/* Emergency Notice */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-red-800 mb-1">Emergency Notice</h4>
                      <p className="text-red-700 text-sm">
                        If you are experiencing a medical emergency, please call 108 immediately 
                        or visit our emergency department. Do not wait for an appointment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-medium text-lg px-12 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book via WhatsApp
                  </button>
                  <p className="text-sm text-gray-500 mt-3">
                    Click to send appointment details via WhatsApp
                  </p>
                </div>
              </form>
            </motion.div>
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Need Help Booking?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our friendly staff is here to help you schedule your appointment 
              and answer any questions you may have.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Call Us
              </h3>
              <p className="text-gray-600 mb-2">
                +91 88008 33411
              </p>
              <p className="text-sm text-gray-500">
                Mon-Fri: 8AM-8PM<br />
                Sat-Sun: 9AM-6PM
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Email Us
              </h3>
              <p className="text-gray-600 mb-2">
                info@aimanhealth.com
              </p>
              <p className="text-sm text-gray-500">
                We'll respond within 24 hours
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Visit Us
              </h3>
              <p className="text-gray-600 mb-2">
              83P , Residency Green, Jal Vihar Colony<br />
              Sector 46, Main Sector Road<br />
              Gurgaon, Haryana 122003
              </p>
              <p className="text-sm text-gray-500">
                Walk-ins welcome
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Appointment
