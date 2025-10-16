import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Brain, 
  Baby, 
  Activity, 
  Zap, 
  Eye,
  Bone,
  Stethoscope,
  ArrowLeft,
  Calendar,
  Phone,
  Clock,
  Users,
  CheckCircle,
  Shield,
  Award
} from 'lucide-react'
import logo from '../photo/logo.png'

const Services = () => {
  const { serviceName } = useParams()
  const navigate = useNavigate()

  const servicesData = {
    'emergency-care': {
      name: 'Emergency Care',
      icon: Zap,
      color: 'from-red-600 to-orange-600',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=400&fit=crop',
      description: 'Round-the-clock emergency medical services with state-of-the-art trauma care facilities.',
      longDescription: 'Our Emergency Department operates 24/7, providing immediate medical attention for life-threatening conditions and critical injuries. Equipped with advanced medical technology and staffed by experienced emergency physicians, we ensure rapid response and expert care when every second counts.',
      features: [
        '24/7 Emergency Services',
        'Advanced Trauma Care',
        'Rapid Response Team',
        'Critical Care Unit',
        'Emergency Surgery',
        'Ambulance Services',
        'Poison Control',
        'Emergency Pediatrics'
      ],
      stats: [
        { label: 'Response Time', value: '< 5 min' },
        { label: 'Emergency Beds', value: '50+' },
        { label: 'Success Rate', value: '98%' }
      ],
      availability: '24/7',
      contact: 'Emergency Hotline: +91 88008 33411'
    },
    'mental-health': {
      name: 'Mental Health',
      icon: Brain,
      color: 'from-purple-600 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
      description: 'Comprehensive mental health services including therapy, counseling, and psychiatric care.',
      longDescription: 'Our Mental Health Department offers compassionate, evidence-based care for a wide range of mental health conditions. We provide individual therapy, group sessions, psychiatric evaluations, and medication management in a supportive, confidential environment designed to promote healing and wellness.',
      features: [
        'Individual Therapy',
        'Group Therapy Sessions',
        'Psychiatric Evaluation',
        'Medication Management',
        'Crisis Intervention',
        'Family Counseling',
        'Stress Management',
        'Addiction Treatment'
      ],
      stats: [
        { label: 'Therapists', value: '12+' },
        { label: 'Success Rate', value: '92%' },
        { label: 'Patient Satisfaction', value: '96%' }
      ],
      availability: 'Mon-Fri 8AM-8PM',
      contact: 'Helpline: +91 88008 33411'
    },
    'cardiology': {
      name: 'Cardiology',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop',
      description: 'Advanced heart care with cutting-edge diagnostic and treatment options.',
      longDescription: 'Our Cardiology Department provides comprehensive cardiovascular care, from preventive cardiology to advanced interventional procedures. With state-of-the-art cardiac catheterization labs and a team of renowned cardiologists, we deliver world-class heart care focused on improving outcomes and quality of life.',
      features: [
        'Echocardiography',
        'Cardiac Catheterization',
        'Angioplasty & Stenting',
        'Heart Surgery',
        'Cardiac Rehabilitation',
        'Preventive Cardiology',
        'Heart Failure Management',
        'Arrhythmia Treatment'
      ],
      stats: [
        { label: 'Procedures/Year', value: '5000+' },
        { label: 'Success Rate', value: '97%' },
        { label: 'Cardiologists', value: '15+' }
      ],
      availability: '24/7 Emergency',
      contact: 'Heart Care: +91 88008 33411'
    },
    'neurology': {
      name: 'Neurology',
      icon: Brain,
      color: 'from-indigo-600 to-purple-600',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop',
      description: 'Expert neurological care for brain, spine, and nervous system disorders.',
      longDescription: 'Our Neurology Department specializes in diagnosing and treating conditions affecting the brain, spinal cord, and nervous system. From stroke care to complex neurological disorders, our team of expert neurologists utilizes advanced diagnostic tools and innovative treatment approaches to provide comprehensive neurological care.',
      features: [
        'Stroke Care & Prevention',
        'Epilepsy Management',
        'Multiple Sclerosis Treatment',
        'Parkinsons Disease Care',
        'Headache & Migraine Clinic',
        'Neuromuscular Disorders',
        'Memory Disorders',
        'Sleep Disorders'
      ],
      stats: [
        { label: 'Neurologists', value: '10+' },
        { label: 'Procedures/Year', value: '3000+' },
        { label: 'Recovery Rate', value: '89%' }
      ],
      availability: 'Mon-Sat 8AM-8PM',
      contact: 'Neuro Helpline: +91 88008 33411'
    },
    'pediatrics': {
      name: 'Pediatrics',
      icon: Baby,
      color: 'from-green-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop',
      description: 'Specialized healthcare for infants, children, and adolescents.',
      longDescription: 'Our Pediatrics Department provides comprehensive medical care for children from birth through adolescence. With child-friendly facilities and a team of caring pediatricians, we focus on preventive care, early diagnosis, and effective treatment to ensure your child grows up healthy and strong.',
      features: [
        'Well-Child Checkups',
        'Vaccinations & Immunizations',
        'Developmental Assessments',
        'Pediatric Surgery',
        'Emergency Pediatrics',
        'Neonatal Care',
        'Adolescent Medicine',
        'Behavioral Health'
      ],
      stats: [
        { label: 'Pediatricians', value: '12+' },
        { label: 'Children Served', value: '10,000+' },
        { label: 'Parent Satisfaction', value: '98%' }
      ],
      availability: 'Mon-Sat 9AM-6PM',
      contact: 'Pediatric Care: +91 88008 33411'
    },
    'orthopedics': {
      name: 'Orthopedics',
      icon: Bone,
      color: 'from-blue-600 to-cyan-600',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
      description: 'Expert care for bones, joints, muscles, and sports injuries.',
      longDescription: 'Our Orthopedics Department offers comprehensive care for musculoskeletal conditions, from sports injuries to complex joint replacements. With advanced surgical techniques, state-of-the-art rehabilitation facilities, and a patient-centered approach, we help you return to an active, pain-free life.',
      features: [
        'Joint Replacement Surgery',
        'Sports Medicine',
        'Spine Surgery',
        'Fracture Care',
        'Arthroscopic Surgery',
        'Physical Therapy',
        'Pain Management',
        'Pediatric Orthopedics'
      ],
      stats: [
        { label: 'Surgeries/Year', value: '2500+' },
        { label: 'Success Rate', value: '96%' },
        { label: 'Orthopedic Surgeons', value: '18+' }
      ],
      availability: 'Mon-Fri 8AM-6PM',
      contact: 'Orthopedic Care: +91 88008 33411'
    }
  }

  const service = servicesData[serviceName]

  // If service not found, redirect to departments
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
          <button onClick={() => navigate('/departments')} className="btn-primary">
            View All Departments
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className={`relative py-20 bg-gradient-to-br ${service.color} text-white`}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        
        <div className="relative z-10 container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <button
              onClick={() => navigate('/departments')}
              className="flex items-center space-x-2 text-white hover:text-purple-200 mb-6 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Departments</span>
            </button>

            <div className="flex items-center space-x-4 mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                {React.createElement(service.icon, { className: "w-12 h-12 text-white" })}
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-2">
                  {service.name}
                </h1>
                <p className="text-xl text-purple-100">
                  Department of {service.name}
                </p>
              </div>
            </div>
            
            <p className="text-2xl text-purple-100 max-w-4xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Image */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-primary-50 rounded-lg"
              >
                <div className={`text-4xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                About Our {service.name} Department
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {service.longDescription}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-primary-600" />
                  <span className="text-gray-700">
                    <strong>{service.specialists}+ Specialists</strong> on our team
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-primary-600" />
                  <span className="text-gray-700">
                    <strong>Available:</strong> {service.availability}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-primary-600" />
                  <span className="text-gray-700">{service.contact}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Services We Offer
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Our {service.name} Department?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Excellence in care, compassion in service, and commitment to your health.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Expert Care',
                description: 'Board-certified specialists with years of experience'
              },
              {
                icon: Award,
                title: 'Advanced Technology',
                description: 'State-of-the-art equipment and treatment methods'
              },
              {
                icon: Heart,
                title: 'Patient-Centered',
                description: 'Personalized care plans tailored to your needs'
              },
              {
                icon: CheckCircle,
                title: 'Proven Results',
                description: 'High success rates and patient satisfaction'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {React.createElement(item.icon, { className: "w-8 h-8 text-white" })}
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

      {/* Call to Action */}
      <section className={`section-padding bg-gradient-to-r ${service.color}`}>
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Schedule an appointment with our {service.name} specialists and take the first step 
              towards better health and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/appointment')}
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book an Appointment
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium px-8 py-4 rounded-lg transition-all duration-200 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services

