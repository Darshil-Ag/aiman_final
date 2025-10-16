import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Heart, 
  Brain, 
  Baby, 
  Activity, 
  Eye, 
  Zap, 
  Shield,
  Stethoscope,
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
import adityaImg from '../photo/aditya.jpg'
import akshitaImg from '../photo/akshita.jpg'
import keshavImg from '../photo/keshav.jpg'
import kiranImg from '../photo/kiran.jpg'
import piyushImg from '../photo/piyush.jpg'
import sangeethaImg from '../photo/sangeetha.jpg'

const OurExperts = () => {
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
      description: 'Dr Piyush believe that mental health is for all. As a psychiatrist of more than 11 years of clinical expertise, he has deep compassion to support individuals and their family through their mental health journey. With academic training and experience from PGIMER Rohtak dr Piyush integrate latest scientific findings into ever day psychiatry practice. He actively contribute to ongoing research and medical education. Dr Piyush is also passionate about raising awareness around mental health and reducing stigma.',
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
      description: 'Dr Sangeeta is dedicated and compassionate psychiatrist with 8 years of extensive experience in diagnosing and treating wide range of mental health conditions. After her MBBS, she did her MD psychiatry from SMS Medical college. She also served as assistant professor in SPMC, Bikaner which equipped her with comprehensive knowledge and skills to deliver high quality care. She has number of publications and academics paper throughout her career. Dr Sangeeta communicate fluently in English, Hindi allowing her to engage effectively with diverse patient population.',
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
      description: 'Dr Aditya is consultant psychiatrist with strong background in clinical psychiatry and mental health advocacy. After doing his MD from SMS medical college, Dr Aditya had experience of working in IHBAS, Delhi. With over 5 years of experiences he has worked with diverse patient population addressing range of psychiatric disorders. Dr Aditya is actively involved in medical education and academic research.',
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
      description: 'Dr. Kiran Bala is a highly respected neurologist with over 30 years of experience in the field. Based in Gurgaon, she has built a distinguished career diagnosing and treating a broad spectrum of neurological conditions, earning widespread recognition and trust from both patients and medical professionals. Renowned for her deep clinical expertise and dedication to excellence, Dr. Bala is considered a leading authority in neurology. Her patient-centered approach, marked by compassion and attentiveness, ensures that every individual receives personalized care tailored to their unique needs.',
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
      description: 'Committed to create safe spaces for healing, Miss Akshita received her clinical psychology and M.phil degree from Amity university, Noida. She has worked extensively in assessment, therapy of individuals. She provides tailored integrative care in various psychiatric disorders.',
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
      description: 'With years of clinical expertise, Miss Keshav is dedicated to provide compassionate health care. She hold master of science in clinical psychology from university of Jammu and Kashmir. She specialise in grief counselling and psycho-oncology. She works with individuals of all age group.',
      image: keshavImg,
      available: true
    }   
  ]

  const [selectedSpecialty, setSelectedSpecialty] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  

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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Our Experts
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-100 max-w-4xl mx-auto px-4">
              Our team of board-certified specialists is dedicated to providing 
              exceptional healthcare with compassion and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-6 sm:py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search experts by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 sm:pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            {/* Specialty Filter */}
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              {specialties.map((specialty) => (
                <button
                  key={specialty.id}
                  onClick={() => setSelectedSpecialty(specialty.id)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
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
      <section className="section-padding bg-primary-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
              {selectedSpecialty === 'all' ? 'All Experts' : specialties.find(s => s.id === selectedSpecialty)?.name}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              {filteredDoctors.length} expert{filteredDoctors.length !== 1 ? 's' : ''} available
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                <div className="w-full h-40 sm:h-48 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-primary-400 to-secondary-500">
                  {doctor.image ? (
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Users className="w-16 h-16 sm:w-20 sm:h-20 text-white opacity-50" />
                    </div>
                  )}
                </div>

                {/* Doctor Info */}
                <div className="text-center mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2 text-sm sm:text-base">
                    {doctor.specialty}
                  </p>
                </div>

                {/* Experience & Education */}
                <div className="space-y-2 mb-4 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{doctor.experience} years experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="truncate">{doctor.qualifications}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="truncate">{doctor.email}</span>
                  </div>
                </div>

                {doctor.description && (
                  <p className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-2">
                    {doctor.description}
                  </p>
                )}

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link to={`/doctor/${doctor.id}`} className="w-full btn-outline flex items-center justify-center text-sm sm:text-base py-2 sm:py-3 hover:scale-105 transform transition-all duration-200">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    View Profile
                  </Link>
                  <Link to="/appointment" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold flex items-center justify-center text-sm sm:text-base py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book with {doctor.name.split(' ')[1]}
                  </Link>
                  {!doctor.available && (
                    <div className="text-center text-xs sm:text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
              Why Choose Our Experts?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our medical professionals are carefully selected for their expertise, 
              compassion, and commitment to patient care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
                icon: Users,
                title: 'Patient-Centered Care',
                description: 'Compassionate care focused on individual patient needs and comfort'
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
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  {React.createElement(feature.icon, { className: "w-6 h-6 sm:w-8 sm:h-8 text-primary-600" })}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Ready to Meet Your Expert?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-purple-100 max-w-3xl mx-auto px-4">
              Book an appointment with one of our expert doctors and take the first step 
              towards better health and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                to="/appointment"
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Book Appointment Now
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 inline-flex items-center justify-center w-full sm:w-auto"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
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