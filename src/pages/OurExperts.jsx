import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useData } from '../contexts/DataContext'
import { 
  Heart, 
  Brain, 
  Baby, 
  Activity, 
  Eye, 
  Zap, 
  Shield,
  Stethoscope,
  Star,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Award,
  GraduationCap,
  Users,
  Filter,
  Search
} from 'lucide-react'
import logo from '../photo/logo.png'

const OurExperts = () => {
  const dataContext = useData()
  const doctors = dataContext?.doctors || []
  const [selectedSpecialty, setSelectedSpecialty] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  
  console.log('OurExperts: Received', doctors.length, 'doctors')
  console.log('OurExperts: Doctor IDs:', doctors.map(d => d.id))
  console.log('OurExperts: Doctor names:', doctors.map(d => d.name))

  // Get unique specialties from doctors
  const specialties = [
    { id: 'all', name: 'All Specialties' },
    ...Array.from(new Set(doctors.map(d => d.specialty)))
      .map(specialty => ({
        id: specialty.toLowerCase().replace(/\s+/g, '-'),
        name: specialty
      }))
  ]

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSpecialty = selectedSpecialty === 'all' || 
      doctor.specialty.toLowerCase().replace(/\s+/g, '-') === selectedSpecialty
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSpecialty && matchesSearch
  })
  
  console.log('OurExperts: Filtered doctors:', filteredDoctors.length)
  console.log('OurExperts: Selected specialty:', selectedSpecialty)
  console.log('OurExperts: Search term:', searchTerm)

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
              Our Experts
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto">
              Our team of board-certified specialists is dedicated to providing 
              exceptional healthcare with compassion and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search experts by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Specialty Filter */}
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty) => (
                <button
                  key={specialty.id}
                  onClick={() => setSelectedSpecialty(specialty.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedSpecialty === specialty.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {specialty.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experts Grid */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {selectedSpecialty === 'all' ? 'All Experts' : specialties.find(s => s.id === selectedSpecialty)?.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredDoctors.length} expert{filteredDoctors.length !== 1 ? 's' : ''} available
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDoctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                {/* Doctor Image */}
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-primary-400 to-secondary-500">
                  {doctor.image ? (
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Users className="w-20 h-20 text-white opacity-50" />
                    </div>
                  )}
                </div>

                {/* Doctor Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">
                    {doctor.specialty}
                  </p>
                </div>

                {/* Experience & Education */}
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4" />
                    <span>{doctor.experience} years experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>{doctor.qualifications}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{doctor.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{doctor.phone}</span>
                  </div>
                </div>

                {doctor.description && (
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {doctor.description}
                  </p>
                )}

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Link to={`/doctor/${doctor.id}`} className="w-full btn-outline flex items-center justify-center mb-2">
                    <Users className="w-4 h-4 mr-2" />
                    View Profile
                  </Link>
                  <Link to="/appointment" className="w-full btn-primary flex items-center justify-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Link>
                  {!doctor.available && (
                    <div className="text-center text-sm text-red-600">
                      Currently Unavailable
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No experts found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or specialty filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Experts */}
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
              Why Choose Our Experts?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our medical professionals are carefully selected for their expertise, 
              compassion, and commitment to patient care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Board Certified',
                description: 'All our experts are board-certified in their respective specialties'
              },
              {
                icon: GraduationCap,
                title: 'Top Education',
                description: 'Graduates from leading medical schools and training programs'
              },
              {
                icon: Star,
                title: 'High Ratings',
                description: 'Consistently high patient satisfaction and review ratings'
              },
              {
                icon: Heart,
                title: 'Patient-Focused',
                description: 'Committed to providing personalized, compassionate care'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {React.createElement(feature.icon, { className: "w-8 h-8 text-primary-600" })}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
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
              Ready to Meet Your Expert?
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Book an appointment with one of our expert doctors and take the first step 
              towards better health and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointment"
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment Now
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium px-8 py-4 rounded-lg transition-all duration-200 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call for Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default OurExperts
