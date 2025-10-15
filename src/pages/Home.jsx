import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Heart, 
  Shield, 
  Users, 
  Award, 
  Clock, 
  Phone, 
  ArrowRight,
  Calendar,
  Stethoscope,
  Brain,
  Baby,
  Activity
} from 'lucide-react'
import groupPhoto from '../photo/group photo.jpg'
import logo from '../photo/logo.png'
import aditya from '../photo/aditya.jpg'
import akshita from '../photo/akshita.jpg'
import keshav from '../photo/keshav.jpg'
import kiran from '../photo/kiran.jpg'
import piyush from '../photo/piyush.jpg'
import sangeetha from '../photo/sangeetha.jpg'

const Home = () => {
  const specialties = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Advanced heart care with state-of-the-art technology',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Mental Health',
      description: 'Comprehensive mental wellness and psychiatric care',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized care for children of all ages',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Activity,
      title: 'Orthopedics',
      description: 'Expert bone and joint treatment and surgery',
      color: 'from-blue-500 to-cyan-500'
    }
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Award-Winning Care',
      description: 'Recognized for excellence in patient care and medical innovation'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Board-certified specialists with years of experience'
    },
    {
      icon: Shield,
      title: 'Advanced Technology',
      description: 'Cutting-edge medical equipment and treatment methods'
    },
    {
      icon: Clock,
      title: '24/7 Emergency',
      description: 'Round-the-clock emergency services and critical care'
    }
  ]

  const doctors = [
    { name: 'Dr. Aditya Sharma', specialty: 'Cardiologist', experience: '12+ years', image: aditya },
    { name: 'Dr. Akshita Mehta', specialty: 'Pediatrician', experience: '10+ years', image: akshita },
    { name: 'Dr. Keshav Rao', specialty: 'Orthopedic Surgeon', experience: '14+ years', image: keshav },
    { name: 'Dr. Kiran Patel', specialty: 'Neurologist', experience: '11+ years', image: kiran },
    { name: 'Dr. Piyush Verma', specialty: 'ENT Specialist', experience: '9+ years', image: piyush },
    { name: 'Dr. Sangeetha Rao', specialty: 'Gynecologist', experience: '13+ years', image: sangeetha }
  ]



  return (
    <div className="pt-16">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-700"></div>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(${groupPhoto})`
          }}
        ></div>
        
        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Mental Health
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Matters
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Empowering your body and mind with expert care, advanced technology, 
              and compassionate healing for over two decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointment"
                className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Link>
              <Link
                to="/our-services"
                className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center justify-center"
              >
                <Stethoscope className="w-5 h-5 mr-2" />
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Emergency Contact
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-red-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span className="font-semibold">Emergency: 108</span>
          </motion.div>
        </div> */}
      </section>

      {/* Specialties Section */}
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
              Our Specialties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive medical care across multiple specialties, 
              delivered with expertise and compassion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${specialty.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {React.createElement(specialty.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {specialty.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {specialty.description}
                </p>
                <Link
                  to="/departments"
                  className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              Why Choose AIMAN?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing exceptional healthcare services 
              that prioritize your well-being and recovery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {React.createElement(item.icon, { className: "w-8 h-8 text-primary-600" })}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
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
              Meet Our Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of experienced healthcare professionals is dedicated 
              to providing you with the best possible care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {doctor.specialty}
                </p>
                <p className="text-gray-600 mb-4">
                  {doctor.experience} Experience
                </p>
                <Link
                  to="/appointment"
                  className="btn-primary w-full"
                >
                  Book with Dr. {doctor.name.split(' ')[1]}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/doctors"
              className="btn-outline text-lg px-8 py-3 inline-flex items-center"
            >
              View All Doctors
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>


      {/* Our Services Section */}
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
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare services designed to meet all your medical needs 
              with state-of-the-art facilities and expert care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Emergency Care',
                description: '24/7 emergency services with rapid response and critical care support.',
                icon: '🚨',
                features: ['24/7 Availability', 'Rapid Response', 'Critical Care', 'Trauma Center']
              },
              {
                title: 'Diagnostic Services',
                description: 'Advanced diagnostic imaging and laboratory services for accurate diagnosis.',
                icon: '🔬',
                features: ['MRI & CT Scan', 'Laboratory Tests', 'Ultrasound', 'X-Ray Services']
              },
              {
                title: 'Surgical Services',
                description: 'Minimally invasive and traditional surgical procedures with expert surgeons.',
                icon: '⚕️',
                features: ['Laparoscopic Surgery', 'Cardiac Surgery', 'Orthopedic Surgery', 'General Surgery']
              },
              {
                title: 'Rehabilitation',
                description: 'Comprehensive rehabilitation services for recovery and wellness.',
                icon: '🏥',
                features: ['Physical Therapy', 'Occupational Therapy', 'Speech Therapy', 'Sports Medicine']
              },
              {
                title: 'Preventive Care',
                description: 'Regular check-ups and preventive screenings for optimal health.',
                icon: '🛡️',
                features: ['Health Checkups', 'Vaccinations', 'Cancer Screening', 'Wellness Programs']
              },
              {
                title: 'Telemedicine',
                description: 'Remote consultations and digital health services for your convenience.',
                icon: '💻',
                features: ['Online Consultations', 'Digital Prescriptions', 'Health Monitoring', 'Remote Care']
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/our-services"
                  className="btn-primary w-full text-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/our-services"
              className="btn-outline text-lg px-8 py-3 inline-flex items-center"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-700 relative overflow-hidden">
        {/* Logo watermark in CTA section */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <img src={logo} alt="AIMAN logo" className="w-80 h-auto" />
        </div>
        <div className="container-custom text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Start Your Health Journey?
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Book your consultation today and take the first step towards 
              better health and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointment"
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Consultation Today
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium px-8 py-4 rounded-lg transition-all duration-200 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
