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
  Star,
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
  const [isVisible, setIsVisible] = React.useState(true)

  // Show/hide floating logo based on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      // Hide logo when scrolled past first section (about 800px)
      setIsVisible(scrollPosition < 800)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    { name: 'Dr. Aditya Sharma', specialty: 'Cardiologist', experience: '12+ years', image: aditya, rating: 4.9 },
    { name: 'Dr. Akshita Mehta', specialty: 'Pediatrician', experience: '10+ years', image: akshita, rating: 4.8 },
    { name: 'Dr. Keshav Rao', specialty: 'Orthopedic Surgeon', experience: '14+ years', image: keshav, rating: 4.9 },
    { name: 'Dr. Kiran Patel', specialty: 'Neurologist', experience: '11+ years', image: kiran, rating: 4.8 },
    { name: 'Dr. Piyush Verma', specialty: 'ENT Specialist', experience: '9+ years', image: piyush, rating: 4.7 },
    { name: 'Dr. Sangeetha Rao', specialty: 'Gynecologist', experience: '13+ years', image: sangeetha, rating: 4.9 }
  ]

  const testimonials = [
    {
      name: 'John Smith',
      treatment: 'Cardiac Surgery',
      quote: 'The care I received at AIMAN was exceptional. The doctors and staff made me feel comfortable throughout my treatment.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      treatment: 'Mental Health Support',
      quote: 'The mental health team helped me through a difficult time. Their compassionate approach made all the difference.',
      rating: 5
    },
    {
      name: 'David Wilson',
      treatment: 'Orthopedic Surgery',
      quote: 'Professional, caring, and highly skilled. I would recommend AIMAN to anyone seeking quality healthcare.',
      rating: 5
    }
  ]

  const blogPosts = [
    {
      title: 'Understanding Mental Health: A Comprehensive Guide',
      excerpt: 'Learn about the importance of mental health and how to maintain it in today\'s fast-paced world.',
      date: 'Dec 15, 2024',
      category: 'Mental Health',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop'
    },
    {
      title: 'Preventive Care: Your First Line of Defense',
      excerpt: 'Discover how regular check-ups and preventive measures can help you maintain optimal health.',
      date: 'Dec 10, 2024',
      category: 'Wellness',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop'
    },
    {
      title: 'Heart Health: Tips for a Stronger Heart',
      excerpt: 'Simple lifestyle changes that can significantly improve your cardiovascular health.',
      date: 'Dec 5, 2024',
      category: 'Cardiology',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop'
    }
  ]

  return (
    <div className="pt-16">
      {/* Big Floating Logo - Visible throughout home page */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isVisible ? 0.25 : 0,
          scale: isVisible ? 1 : 0.5,
        }}
        transition={{ 
          duration: 1,
          type: "spring",
          stiffness: 100
        }}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none"
      >
        <motion.img
          src={logo}
          alt="AIMAN Hospital - Floating Logo"
          className="select-none"
          style={{
            width: '900px',
            height: 'auto',
            filter: 'drop-shadow(0 0 60px rgba(220, 38, 38, 0.5)) brightness(1.1)',
          }}
          animate={{
            scale: [1, 1.12, 1, 1.12, 1, 1, 1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1, 1]
          }}
        />
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-700"></div>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
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
              Your Journey to Better Health
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Starts Here
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
                to="/departments"
                className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600 inline-flex items-center justify-center"
              >
                <Stethoscope className="w-5 h-5 mr-2" />
                Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Emergency Contact */}
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
        </div>
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
                <p className="text-gray-600 mb-3">
                  {doctor.experience} Experience
                </p>
                <div className="flex items-center justify-center space-x-1 mb-4">
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
                    {doctor.rating}
                  </span>
                </div>
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

      {/* Testimonials Section */}
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
              Patient Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our patients about their experiences and the care they received.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.treatment}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="btn-outline text-lg px-8 py-3 inline-flex items-center"
            >
              Read More Stories
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
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
              Health Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest health tips, medical insights, 
              and wellness advice from our experts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary-600 font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  to="/blog"
                  className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="btn-outline text-lg px-8 py-3 inline-flex items-center"
            >
              View All Articles
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
