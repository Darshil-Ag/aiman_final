import React, { useState } from 'react'
import { motion } from 'framer-motion'
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
import aditya from '../photo/aditya.jpg'
import akshita from '../photo/akshita.jpg'
import keshav from '../photo/keshav.jpg'
import kiran from '../photo/kiran.jpg'
import piyush from '../photo/piyush.jpg'
import sangeetha from '../photo/sangeetha.jpg'

const Doctors = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const specialties = [
    { id: 'all', name: 'All Specialties' },
    { id: 'cardiology', name: 'Cardiology' },
    { id: 'mental-health', name: 'Mental Health' },
    { id: 'pediatrics', name: 'Pediatrics' },
    { id: 'orthopedics', name: 'Orthopedics' },
    { id: 'neurology', name: 'Neurology' },
    { id: 'ophthalmology', name: 'Ophthalmology' },
    { id: 'emergency', name: 'Emergency Medicine' }
  ]

  const doctors = [
    {
      id: 1,
      name: 'Dr. Aditya Sharma',
      specialty: 'cardiology',
      specialtyName: 'Cardiology',
      title: 'Consultant Cardiologist',
      experience: '12+ years',
      education: 'MBBS, MD (Cardiology)',
      hospital: 'AIMAN Hospital',
      rating: 4.9,
      reviews: 142,
      consultationFee: '$150',
      availability: 'Mon-Fri 9AM-5PM',
      languages: ['English', 'Hindi'],
      image: aditya,
      bio: 'Dr. Aditya specializes in interventional cardiology and preventive heart care with a patient-first approach.',
      achievements: ['Interventional Cardiologist', 'PCI Specialist'],
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 2,
      name: 'Dr. Akshita Mehta',
      specialty: 'pediatrics',
      specialtyName: 'Pediatrics',
      title: 'Pediatrician',
      experience: '10+ years',
      education: 'MBBS, MD (Pediatrics)',
      hospital: 'AIMAN Hospital',
      rating: 4.8,
      reviews: 98,
      consultationFee: '$100',
      availability: 'Mon-Thu 10AM-6PM',
      languages: ['English'],
      image: akshita,
      bio: 'Dr. Akshita provides child-friendly, evidence-based pediatric care focused on growth and development.',
      achievements: ['Child Health Specialist'],
      icon: Baby,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 3,
      name: 'Dr. Keshav Rao',
      specialty: 'orthopedics',
      specialtyName: 'Orthopedics',
      title: 'Orthopedic Surgeon',
      experience: '14+ years',
      education: 'MBBS, MS (Orthopedics)',
      hospital: 'AIMAN Hospital',
      rating: 4.9,
      reviews: 121,
      consultationFee: '$160',
      availability: 'Tue-Thu 8AM-4PM',
      languages: ['English'],
      image: keshav,
      bio: 'Dr. Keshav specializes in joint replacement and sports injury management.',
      achievements: ['Joint Replacement Specialist'],
      icon: Activity,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 4,
      name: 'Dr. Kiran Patel',
      specialty: 'neurology',
      specialtyName: 'Neurology',
      title: 'Neurologist',
      experience: '11+ years',
      education: 'MBBS, DM (Neurology)',
      hospital: 'AIMAN Hospital',
      rating: 4.8,
      reviews: 87,
      consultationFee: '$170',
      availability: 'Mon-Wed 9AM-5PM',
      languages: ['English'],
      image: kiran,
      bio: 'Dr. Kiran focuses on stroke care, epilepsy and complex neurological disorders.',
      achievements: ['Stroke Care Specialist'],
      icon: Brain,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 5,
      name: 'Dr. Piyush Verma',
      specialty: 'ent',
      specialtyName: 'ENT',
      title: 'ENT Specialist',
      experience: '9+ years',
      education: 'MBBS, MS (ENT)',
      hospital: 'AIMAN Hospital',
      rating: 4.7,
      reviews: 64,
      consultationFee: '$120',
      availability: 'Wed-Fri 10AM-6PM',
      languages: ['English', 'Hindi'],
      image: piyush,
      bio: 'Dr. Piyush treats a range of ENT conditions including hearing and sinus disorders.',
      achievements: ['ENT Surgeon'],
      icon: Stethoscope,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 6,
      name: 'Dr. Sangeetha Rao',
      specialty: 'gynecology',
      specialtyName: 'Gynecology',
      title: 'Gynecologist',
      experience: '13+ years',
      education: 'MBBS, MS (OBG)',
      hospital: 'AIMAN Hospital',
      rating: 4.9,
      reviews: 103,
      consultationFee: '$140',
      availability: 'Mon-Fri 9AM-4PM',
      languages: ['English'],
      image: sangeetha,
      bio: 'Dr. Sangeetha provides comprehensive women’s health services including prenatal care.',
      achievements: ['Women’s Health Specialist'],
      icon: Star,
      color: 'from-pink-500 to-red-500'
    }
  ]

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSpecialty = selectedSpecialty === 'all' || doctor.specialty === selectedSpecialty
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialtyName.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSpecialty && matchesSearch
  })

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet Our Expert Doctors
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
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
                placeholder="Search doctors by name or specialty..."
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

      {/* Doctors Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {selectedSpecialty === 'all' ? 'All Doctors' : specialties.find(s => s.id === selectedSpecialty)?.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''} available
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
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Doctor Info */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-1">
                    {doctor.title}
                  </p>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className={`w-6 h-6 bg-gradient-to-r ${doctor.color} rounded-full flex items-center justify-center`}>
                      {React.createElement(doctor.icon, { className: "w-3 h-3 text-white" })}
                    </div>
                    <span className="text-sm text-gray-600">
                      {doctor.specialtyName}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(doctor.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {doctor.rating} ({doctor.reviews} reviews)
                  </span>
                </div>

                {/* Experience & Education */}
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4" />
                    <span>{doctor.experience}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>{doctor.hospital}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{doctor.availability}</span>
                  </div>
                </div>

                {/* Consultation Fee */}
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-primary-600">
                    {doctor.consultationFee}
                  </span>
                  <span className="text-gray-600 ml-1">consultation</span>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button className="w-full btn-primary">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </button>
                  <button className="w-full btn-outline text-sm py-2">
                    View Profile
                  </button>
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
                No doctors found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or specialty filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Doctors */}
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
              Why Choose Our Doctors?
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
                description: 'All our doctors are board-certified in their respective specialties'
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
              Ready to Meet Your Doctor?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Book an appointment with one of our expert doctors and take the first step 
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
                href="/contact"
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

export default Doctors
