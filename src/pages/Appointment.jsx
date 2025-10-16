import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
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
import adityaImg from '../photo/aditya.jpg'
import akshitaImg from '../photo/akshita.jpg'
import keshavImg from '../photo/keshav.jpg'
import kiranImg from '../photo/kiran.jpg'
import piyushImg from '../photo/piyush.jpg'
import sangeethaImg from '../photo/sangeetha.jpg'

const Appointment = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  // Hardcoded doctor data
  const doctors = [
    { 
      id: 'piyush', 
      name: 'Dr. Piyush Verma', 
      specialty: 'Psychiatrist', 
      experience: '11+', 
      email: 'piyush.verma@aimanhospital.com',
      phone: '+91 98765 43210',
      qualifications: 'MBBS, MD Psychiatry, PGIMER Rohtak',
      description: 'Dr Piyush believe that mental health is for all. As a psychiatrist of more than 11 years of clinical expertise, he has deep compassion to support individuals and their family through their mental health journey.',
      image: piyushImg,
      available: true
    },
    { 
      id: 'sangeetha', 
      name: 'Dr. Sangeeta Hatila', 
      specialty: 'Psychiatrist', 
      experience: '8+', 
      email: 'sangeetha.hatila@aimanhospital.com',
      phone: '+91 98765 43211',
      qualifications: 'MBBS, MD Psychiatry, SMS Medical College',
      description: 'Dr Sangeeta is dedicated and compassionate psychiatrist with 8 years of extensive experience in diagnosing and treating wide range of mental health conditions.',
      image: sangeethaImg,
      available: true
    },
    { 
      id: 'aditya', 
      name: 'Dr. Aditya Sharma', 
      specialty: 'Psychiatrist', 
      experience: '5+', 
      email: 'aditya.sharma@aimanhospital.com',
      phone: '+91 98765 43212',
      qualifications: 'MBBS, MD Psychiatry, SMS Medical College, IHBAS Delhi',
      description: 'Dr Aditya is consultant psychiatrist with strong background in clinical psychiatry and mental health advocacy.',
      image: adityaImg,
      available: true
    },
    { 
      id: 'kiran', 
      name: 'Dr. Kiran Bala', 
      specialty: 'Neurologist', 
      experience: '30+', 
      email: 'kiran.bala@aimanhospital.com',
      phone: '+91 98765 43213',
      qualifications: 'MBBS, MD Neurology, DM Neurology',
      description: 'Dr. Kiran Bala is a highly respected neurologist with over 30 years of experience in the field.',
      image: kiranImg,
      available: true
    },      
    { 
      id: 'akshita', 
      name: 'Miss Akshita Shukla', 
      specialty: 'Psychologist', 
      experience: '5+', 
      email: 'akshita.shukla@aimanhospital.com',
      phone: '+91 98765 43214',
      qualifications: 'M.Phil Clinical Psychology, Amity University Noida',
      description: 'Committed to create safe spaces for healing, Miss Akshita received her clinical psychology and M.phil degree from Amity university, Noida.',
      image: akshitaImg,
      available: true
    },
    { 
      id: 'keshav', 
      name: 'Miss Keshav Sharma', 
      specialty: 'Psychologist', 
      experience: '8+', 
      email: 'keshav.sharma@aimanhospital.com',
      phone: '+91 98765 43215',
      qualifications: 'M.Sc Clinical Psychology, University of Jammu and Kashmir',
      description: 'With years of clinical expertise, Miss Keshav is dedicated to provide compassionate health care.',
      image: keshavImg,
      available: true
    }   
  ]

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

    // Create appointment data
    const appointmentData = {
      ...data,
      doctor: doctorName,
      specialty: doctorSpecialty,
      date: selectedDate,
      time: selectedTime,
      timestamp: new Date().toISOString()
    }

    // Store in localStorage
    const existingAppointments = JSON.parse(localStorage.getItem('aimanAppointments') || '[]')
    existingAppointments.push(appointmentData)
    localStorage.setItem('aimanAppointments', JSON.stringify(existingAppointments))

    // Send WhatsApp message
    const whatsappMessage = `🏥 *AIMAN Hospital - Appointment Booking*

👤 *Patient Details:*
• Name: ${data.name}
• Phone: ${data.phone}
• Email: ${data.email || 'Not provided'}
• Age: ${data.age || 'Not provided'}

👨‍⚕️ *Doctor Details:*
• Doctor: ${doctorName}
• Specialty: ${doctorSpecialty}

📅 *Appointment Details:*
• Date: ${selectedDate}
• Time: ${selectedTime}

📝 *Reason for Visit:*
${data.reason || 'Not specified'}

⏰ *Booking Time:* ${new Date().toLocaleString()}

Please confirm this appointment. Thank you!`

    // Create WhatsApp URL
    const whatsappNumber = '9414355273'
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    // Open WhatsApp
    window.open(whatsappURL, '_blank')

    // Show success message
    setIsSubmitted(true)
    reset()
    setSelectedDoctor('')
    setSelectedDate('')
    setSelectedTime('')
  }

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen bg-primary-100 flex items-center justify-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Appointment Booked Successfully!
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for choosing AIMAN Hospital. We have received your appointment request and will contact you shortly to confirm the details.
              </p>
              <div className="bg-primary-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">What happens next?</h3>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Your appointment request has been submitted successfully
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    You will receive a confirmation call within 24 hours
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Please arrive 15 minutes before your appointment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Bring a valid ID and insurance card (if applicable)
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  Book Another Appointment
                </button>
                <a href="/" className="btn-outline">
                  Return to Home
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 lg:pt-24 relative">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Book Your Appointment
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-purple-100 max-w-3xl mx-auto px-4">
              Schedule your consultation with our expert healthcare professionals. 
              We're here to provide you with the best medical care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="bg-red-100 border-l-4 border-red-500 p-4">
        <div className="container-custom">
          <div className="flex items-center">
            <AlertCircle className="w-6 h-6 text-red-500 mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-red-800">Emergency Notice</h3>
              <p className="text-red-700">
                For medical emergencies, please call our emergency line immediately at <strong>+91 98765 43210</strong> or visit our emergency department.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Schedule Your Visit
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Fill out the form below to book your appointment with our healthcare experts.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Doctor Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Doctor *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {doctors.map((doctor) => (
                          <div
                            key={doctor.id}
                            className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                              selectedDoctor === doctor.id
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-gray-200 hover:border-primary-300'
                            }`}
                            onClick={() => setSelectedDoctor(doctor.id)}
                          >
                            <div className="flex items-center space-x-3">
                              <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <div className="flex-1">
                                <h3 className="font-semibold text-gray-800">{doctor.name}</h3>
                                <p className="text-sm text-primary-600">{doctor.specialty}</p>
                                <p className="text-xs text-gray-500">{doctor.experience} experience</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Date Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>

                    {/* Time Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
                              selectedTime === time
                                ? 'border-primary-500 bg-primary-50 text-primary-700'
                                : 'border-gray-300 hover:border-primary-300'
                            }`}
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Patient Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          {...register('name', { required: 'Name is required' })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          {...register('phone', { 
                            required: 'Phone number is required',
                            pattern: {
                              value: /^[0-9+\-\s()]+$/,
                              message: 'Please enter a valid phone number'
                            }
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          {...register('email', {
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Please enter a valid email address'
                            }
                          })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Enter your email address"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
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

                    {/* Reason for Visit */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Reason for Visit
                      </label>
                      <textarea
                        {...register('reason')}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Please describe your symptoms or reason for the appointment"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold text-lg py-5 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 transform flex items-center justify-center"
                    >
                      <Calendar className="w-6 h-6 mr-3" />
                      Book Appointment
                    </button>
                  </form>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-primary-600 mr-3" />
                      <span className="text-gray-600">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-primary-600 mr-3" />
                      <span className="text-gray-600">info@aimanhospital.com</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-primary-600 mr-3" />
                      <span className="text-gray-600">AIMAN Hospital, Gurgaon</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-primary-600 mr-3" />
                      <span className="text-gray-600">24/7 Emergency Services</span>
                    </div>
                  </div>
                </motion.div>

                {/* Emergency Contact */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="card bg-red-50 border-red-200"
                >
                  <h3 className="text-xl font-bold text-red-800 mb-4">Emergency Contact</h3>
                  <p className="text-red-700 mb-4">
                    For medical emergencies, call our emergency line immediately.
                  </p>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-red-600 mr-3" />
                    <span className="text-red-800 font-semibold">+91 98765 43210</span>
                  </div>
                </motion.div>

                {/* Available Doctors */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Our Experts</h3>
                  <div className="space-y-3">
                    {doctors.slice(0, 3).map((doctor) => (
                      <div key={doctor.id} className="flex items-center space-x-3">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-800 text-sm">{doctor.name}</h4>
                          <p className="text-xs text-primary-600">{doctor.specialty}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Appointment