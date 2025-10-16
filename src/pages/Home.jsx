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
    Activity,
    Building
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
        title: '24/7 Emergency Mental Health Services',
        description: 'Round-the-clock emergency mental health services with crisis intervention',
        color: 'from-red-600 to-red-500',
        link: '/our-services#emergency-mental-health'
      },
      {
        icon: Brain,
        title: 'Clinical Psychology and Therapy Services',
        description: 'Comprehensive therapeutic approaches including CBT, DBT, and trauma counseling',
        color: 'from-indigo-500 to-purple-500',
        link: '/our-services#clinical-psychology'
      },
      {
        icon: Baby,
        title: 'Child and Adolescent Mental Health Services',
        description: 'Specialized mental health services for children and adolescents',
        color: 'from-pink-500 to-rose-500',
        link: '/our-services#child-adolescent'
      },
      {
        icon: Shield,
        title: 'De-addiction and Rehabilitation Services',
        description: 'Comprehensive substance abuse treatment and rehabilitation programs',
        color: 'from-purple-500 to-indigo-500',
        link: '/our-services#deaddiction-rehab'
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
    
      { name: 'Dr. Piyush Verma', specialty: 'Psychiatrist', experience: '9+ years', image: piyush },
      { name: 'Dr. Sangeetha Hatila', specialty: 'Psychiatrist', experience: '13+ years', image: sangeetha },
      { name: 'Dr. Aditya Sharma', specialty: 'Psychiatrist', experience: '12+ years', image: aditya },
      { name: 'Dr. Akshita Shukla', specialty: 'Psychologist', experience: '10+ years', image: akshita },
      { name: 'Dr. Keshav Sharma', specialty: 'Psychologist', experience: '14+ years', image: keshav },
      { name: 'Dr. Kiran Bala', specialty: 'Neurologist', experience: '11+ years', image: kiran }
    ]



    return (
      <div className="pt-16 relative">
        {/* Group Photo Background - After Hero */}
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-20 z-0" style={{ marginTop: '100vh', backgroundImage: `url(${groupPhoto})` }}>
        </div>
        

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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                Your Mental Health
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Matters
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto px-4">
                Empowering your body and mind with expert care, advanced technology, 
                and compassionate healing for over two decades.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link
                  to="/appointment"
                  className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center justify-center w-full sm:w-auto"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Book Appointment
                </Link>
                <Link
                  to="/our-services"
                  className="btn-outline text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center justify-center w-full sm:w-auto"
                >
                  <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
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
        <section id="specialties-section" className="section-padding bg-white relative overflow-hidden">
          {/* Logo Background */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-15 z-0">
            <img src={logo} alt="AIMAN logo" className="w-80 h-auto" />
          </div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
                Our Specialties
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Comprehensive medical care across multiple specialties, 
                delivered with expertise and compassion.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                    {specialty.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    {specialty.description}
                  </p>
                  <Link
                    to={specialty.link}
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
        <section className="section-padding bg-primary-100 relative overflow-hidden">
          {/* Logo Background */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-15 z-0">
            <img src={logo} alt="AIMAN logo" className="w-80 h-auto" />
          </div>
          <div className="container-custom relative z-10">
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
        <section className="section-padding bg-white relative overflow-hidden">
          {/* Logo Background */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-15 z-0">
            <img src={logo} alt="AIMAN logo" className="w-80 h-auto" />
          </div>
          <div className="container-custom relative z-10">
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
                to="/our-experts"
                className="btn-outline text-lg px-8 py-3 inline-flex items-center"
              >
                View All Doctors
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>


        {/* Our Services Section - Horizontal Scrolling */}
        <section className="py-8 sm:py-10 bg-primary-100 overflow-hidden relative">
          {/* Logo Background */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-15 z-0">
            <img src={logo} alt="AIMAN logo" className="w-80 h-auto" />
          </div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
                Our Services
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Comprehensive healthcare services designed to meet all your medical needs 
                with state-of-the-art facilities and expert care.
              </p>
            </motion.div>
          </div>

          {/* Horizontal Scrolling Services */}
          <div className="relative">
            <motion.div
              className="flex space-x-8 py-8"
              animate={{
                x: [-100 * 6, 0] // Move from left to right
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear"
                }
              }}
            >
              {/* First set of services */}
              {[
                {
                  title: '24/7 Emergency Mental Health',
                  icon: Brain,
                  color: 'from-red-600 to-red-500',
                  link: '/our-services#emergency-mental-health'
                },
                {
                  title: 'OPD Services',
                  icon: Users,
                  color: 'from-blue-500 to-cyan-500',
                  link: '/our-services#opd-services'
                },
                {
                  title: 'IPD Services',
                  icon: Building,
                  color: 'from-green-500 to-teal-500',
                  link: '/our-services#ipd-services'
                },
                {
                  title: 'De-addiction & Rehab',
                  icon: Shield,
                  color: 'from-purple-500 to-indigo-500',
                  link: '/our-services#deaddiction-rehab'
                },
                {
                  title: 'Child & Adolescent Care',
                  icon: Baby,
                  color: 'from-pink-500 to-rose-500',
                  link: '/our-services#child-adolescent'
                },
                {
                  title: 'Clinical Psychology',
                  icon: Brain,
                  color: 'from-indigo-500 to-purple-500',
                  link: '/our-services#clinical-psychology'
                }
              ].map((service, index) => (
                <Link
                  key={`first-${index}`}
                  to={service.link}
                  className="flex-shrink-0 w-72 sm:w-80 h-28 sm:h-32 bg-white rounded-xl flex items-center justify-center space-x-3 sm:space-x-4 px-4 sm:px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center`}>
                    {React.createElement(service.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Professional Care
                    </p>
                  </div>
                </Link>
              ))}

              {/* Duplicate set for seamless loop */}
              {[
                {
                  title: '24/7 Emergency Mental Health',
                  icon: Brain,
                  color: 'from-red-600 to-red-500',
                  link: '/our-services#emergency-mental-health'
                },
                {
                  title: 'OPD Services',
                  icon: Users,
                  color: 'from-blue-500 to-cyan-500',
                  link: '/our-services#opd-services'
                },
                {
                  title: 'IPD Services',
                  icon: Building,
                  color: 'from-green-500 to-teal-500',
                  link: '/our-services#ipd-services'
                },
                {
                  title: 'De-addiction & Rehab',
                  icon: Shield,
                  color: 'from-purple-500 to-indigo-500',
                  link: '/our-services#deaddiction-rehab'
                },
                {
                  title: 'Child & Adolescent Care',
                  icon: Baby,
                  color: 'from-pink-500 to-rose-500',
                  link: '/our-services#child-adolescent'
                },
                {
                  title: 'Clinical Psychology',
                  icon: Brain,
                  color: 'from-indigo-500 to-purple-500',
                  link: '/our-services#clinical-psychology'
                }
              ].map((service, index) => (
                <Link
                  key={`second-${index}`}
                  to={service.link}
                  className="flex-shrink-0 w-72 sm:w-80 h-28 sm:h-32 bg-white rounded-xl flex items-center justify-center space-x-3 sm:space-x-4 px-4 sm:px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center`}>
                    {React.createElement(service.icon, { className: "w-5 h-5 sm:w-6 sm:h-6 text-white" })}
                      </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Professional Care
                    </p>
                  </div>
                  </Link>
              ))}
            </motion.div>
            </div>

          <div className="container-custom text-center mt-12">
              <Link
                to="/our-services"
                className="btn-outline text-lg px-8 py-3 inline-flex items-center"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-700 relative overflow-hidden">
          <div className="container-custom text-center text-white relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                Ready to Start Your Health Journey?
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-purple-100 max-w-3xl mx-auto px-4">
                Book your consultation today and take the first step towards 
                better health and wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link
                  to="/appointment"
                  className="bg-white text-primary-600 hover:bg-gray-100 font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center w-full sm:w-auto"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Book Your Consultation Today
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 inline-flex items-center justify-center w-full sm:w-auto"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
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
