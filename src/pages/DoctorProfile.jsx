import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { useData } from '../contexts/DataContext'
import { 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  GraduationCap, 
  Users, 
  ArrowLeft,
  Heart,
  Stethoscope,
  CheckCircle
} from 'lucide-react'
import logo from '../photo/logo.png'
import adityaImg from '../photo/aditya.jpg'
import akshitaImg from '../photo/akshita.jpg'
import keshavImg from '../photo/keshav.jpg'
import kiranImg from '../photo/kiran.jpg'
import piyushImg from '../photo/piyush.jpg'
import sangeethaImg from '../photo/sangeetha.jpg'

const DoctorProfile = () => {
  const { doctorName } = useParams()
  const dataContext = useData()
  const contextDoctors = dataContext?.doctors || []
  
  // Convert array to object for easier lookup
  const doctors = contextDoctors.reduce((acc, doctor) => {
    acc[doctor.id] = {
      name: doctor.name,
      specialty: doctor.specialty,
      image: doctor.image,
      experience: doctor.experience,
      qualifications: doctor.qualifications,
      email: doctor.email,
      phone: doctor.phone,
      availability: 'Mon-Fri 9AM-5PM', // Default availability
      description: doctor.description,
      education: [
        doctor.qualifications,
        'Additional training and certifications'
      ],
      specializations: [
        doctor.specialty,
        'General Consultation',
        'Preventive Care'
      ],
      achievements: [
        `${doctor.experience} years of experience`,
        'Board Certified',
        'Patient-focused care'
      ],
      languages: ['English', 'Hindi']
    }
    return acc
  }, {})
  

  const doctor = doctors[doctorName]

  if (!doctor) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Doctor Not Found</h1>
          <p className="text-gray-600 mb-8">The doctor you're looking for doesn't exist.</p>
          <Link to="/our-experts" className="btn-primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Our Experts
          </Link>
        </div>
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
        
        <div className="relative z-10 container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Doctor Image */}
            <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Doctor Info */}
            <div className="text-center lg:text-left flex-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {doctor.name}
                </h1>
                <p className="text-2xl md:text-3xl text-purple-100 mb-4">
                  {doctor.specialty}
                </p>
                <p className="text-lg text-purple-100 mb-6 max-w-2xl">
                  {doctor.description}
                </p>
                
                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5" />
                    <span>{doctor.experience} years experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>{doctor.availability}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-4 bg-white border-b">
        <div className="container-custom">
          <Link 
            to="/our-experts" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Our Experts
          </Link>
        </div>
      </section>

      {/* Doctor Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="card"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About Dr. {doctor.name.split(' ')[2]}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {doctor.description}
                </p>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Education & Training</h2>
                <ul className="space-y-3">
                  {doctor.education.map((edu, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <GraduationCap className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{edu}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Specializations */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="card"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Specializations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {doctor.specializations.map((spec, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-600">{spec}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="card"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Achievements & Awards</h2>
                <ul className="space-y-3">
                  {doctor.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <a href={`tel:${doctor.phone}`} className="text-gray-600 hover:text-primary-600">
                      {doctor.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <a href={`mailto:${doctor.email}`} className="text-gray-600 hover:text-primary-600">
                      {doctor.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-600">{doctor.availability}</span>
                  </div>
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Languages Spoken</h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.languages.map((language, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Book Appointment</h3>
                <div className="space-y-3">
                  <a
                    href="/appointment"
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </a>
                  <a
                    href={`tel:${doctor.phone}`}
                    className="w-full btn-outline flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

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
              Ready to Meet Dr. {doctor.name.split(' ')[2]}?
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Book an appointment with {doctor.name} and take the first step 
              towards better health and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/appointment"
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment Now
              </a>
              <a
                href={`tel:${doctor.phone}`}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium px-8 py-4 rounded-lg transition-all duration-200 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call for Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DoctorProfile
