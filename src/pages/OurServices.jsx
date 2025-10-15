import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Brain, 
  Baby, 
  Activity, 
  Eye, 
  Bone, 
  Zap, 
  Shield,
  ArrowRight,
  Clock,
  Users,
  Phone,
  CheckCircle,
  MapPin,
  Building
} from 'lucide-react'
import logo from '../photo/logo.png'

const OurServices = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'medical', name: 'Medical' },
    { id: 'surgical', name: 'Surgical' },
    { id: 'emergency', name: 'Emergency' },
    { id: 'specialty', name: 'Specialty' }
  ]

  const services = [
    {
      id: 'emergency-mental-health',
      name: '24/7 Emergency Mental Health Services',
      category: 'emergency',
      icon: Zap,
      description: 'Round-the-clock emergency mental health services providing immediate crisis intervention and support.',
      services: [
        'Crisis Intervention',
        'Emergency Psychiatric Care',
        'Suicide Prevention',
        'Mental Health Triage',
        'Emergency Counseling'
      ],
      doctors: 8,
      availability: '24/7',
      color: 'from-red-600 to-red-500',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop'
    },
    {
      id: 'opd-services',
      name: 'OPD (Outpatient Department) Services',
      category: 'medical',
      icon: Users,
      description: 'Comprehensive outpatient mental health services for regular consultations and follow-ups.',
      services: [
        'Initial Consultations',
        'Follow-up Appointments',
        'Medication Management',
        'Therapy Sessions',
        'Assessment Services'
      ],
      doctors: 6,
      availability: 'Mon-Fri 9AM-6PM',
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      id: 'ipd-services',
      name: 'IPD (Inpatient Department) Services',
      category: 'medical',
      icon: Building,
      description: 'Inpatient mental health services providing intensive care and treatment in a safe environment.',
      services: [
        'Inpatient Psychiatric Care',
        'Intensive Therapy Programs',
        'Medication Stabilization',
        'Crisis Management',
        'Rehabilitation Support'
      ],
      doctors: 10,
      availability: '24/7',
      color: 'from-green-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    },
    {
      id: 'deaddiction-rehab',
      name: 'De-addiction and Rehabilitation Services',
      category: 'specialty',
      icon: Shield,
      description: 'Specialized services for substance abuse treatment and comprehensive rehabilitation programs.',
      services: [
        'Detoxification Programs',
        'Individual Counseling',
        'Group Therapy',
        'Family Support',
        'Aftercare Planning'
      ],
      doctors: 5,
      availability: 'Mon-Sat 8AM-8PM',
      color: 'from-purple-500 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    },
    {
      id: 'child-adolescent',
      name: 'Child and Adolescent Mental Health Services',
      category: 'specialty',
      icon: Baby,
      description: 'Specialized mental health services tailored for children and adolescents with age-appropriate care.',
      services: [
        'Child Psychology',
        'Adolescent Counseling',
        'Family Therapy',
        'Behavioral Interventions',
        'School Support Services'
      ],
      doctors: 4,
      availability: 'Mon-Fri 9AM-5PM',
      color: 'from-pink-500 to-rose-500',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop'
    },
    {
      id: 'womens-mental-health',
      name: 'Women\'s Mental Health Services',
      category: 'specialty',
      icon: Heart,
      description: 'Comprehensive mental health services addressing the unique needs of women across all life stages.',
      services: [
        'Prenatal Mental Health',
        'Postpartum Support',
        'Menopause Counseling',
        'Trauma Therapy',
        'Hormonal Mental Health'
      ],
      doctors: 3,
      availability: 'Mon-Fri 9AM-6PM',
      color: 'from-pink-600 to-purple-600',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop'
    },
    {
      id: 'geriatric-mental-health',
      name: 'Geriatric Mental Health Services',
      category: 'specialty',
      icon: Users,
      description: 'Specialized mental health care for elderly patients addressing age-related mental health challenges.',
      services: [
        'Dementia Care',
        'Depression Treatment',
        'Anxiety Management',
        'Memory Care',
        'Family Support'
      ],
      doctors: 3,
      availability: 'Mon-Fri 9AM-5PM',
      color: 'from-gray-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop'
    },
    {
      id: 'clinical-psychology',
      name: 'Clinical Psychology and Therapy Services',
      category: 'specialty',
      icon: Brain,
      description: 'Therapy is a cornerstone of healing. Our clinical psychology services include comprehensive therapeutic approaches delivered by trained psychologists who create safe, non-judgmental spaces for healing.',
      services: [
        'Cognitive Behavioral Therapy (CBT)',
        'Dialectical Behavior Therapy (DBT)',
        'Family and Couple Therapy',
        'Trauma Counseling',
        'Grief Counseling',
        'Psycho-oncology Support',
        'Stress and Anger Management'
      ],
      doctors: 7,
      availability: 'Mon-Fri 8AM-8PM',
      color: 'from-indigo-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    },
    {
      id: 'sexual-wellness',
      name: 'Sexual Wellness Services',
      category: 'specialty',
      icon: Heart,
      description: 'Comprehensive sexual wellness and mental health services addressing intimate relationship and sexual health concerns.',
      services: [
        'Sexual Health Counseling',
        'Relationship Therapy',
        'Intimacy Issues',
        'Sexual Trauma Support',
        'Couples Counseling'
      ],
      doctors: 2,
      availability: 'Mon-Fri 9AM-6PM',
      color: 'from-rose-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    },
    {
      id: 'home-visit',
      name: 'Home Visit Services',
      category: 'specialty',
      icon: MapPin,
      description: 'Convenient home-based mental health services bringing professional care directly to patients in their comfort zone.',
      services: [
        'Home-based Therapy',
        'Family Counseling',
        'Medication Management',
        'Crisis Intervention',
        'Caregiver Support'
      ],
      doctors: 4,
      availability: 'Mon-Sat 9AM-6PM',
      color: 'from-green-600 to-teal-600',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    }
  ]

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

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
              Our Mental Health Services
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto">
              Comprehensive mental health services across all specialties, 
              delivered with expertise, compassion, and evidence-based care by our dedicated team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
              {selectedCategory === 'all' ? 'All Mental Health Services' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredServices.length} mental health service{filteredServices.length !== 1 ? 's' : ''} available
            </p>
          </motion.div>

          <div className="space-y-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Service Image */}
                  <div className="lg:w-1/3 h-64 lg:h-auto">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Service Content */}
                  <div className="lg:w-2/3 p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        {React.createElement(service.icon, { className: "w-8 h-8 text-white" })}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Services List */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Our Services Include:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.services.map((serviceItem, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{serviceItem}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service Stats and Actions */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>{service.doctors} Expert{service.doctors > 1 ? 's' : ''}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{service.availability}</span>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <a href={`/services/${service.id}`} className="btn-outline px-6 py-3 flex items-center space-x-2">
                          <span>Learn More</span>
                        </a>
                        <button className="btn-primary px-6 py-3">
                          Book Appointment
                        </button>
                        <button className="px-6 py-3 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-200 flex items-center space-x-2">
                          <Phone className="w-4 h-4" />
                          <span>Call Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services Highlight */}
      <section className="section-padding bg-red-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mental Health Emergency Services Available 24/7
            </h2>
            <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
              Our mental health emergency services are staffed with experienced professionals 
              and equipped to provide immediate crisis intervention and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:108"
                className="bg-white text-red-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency: 108
              </a>
              <a
                href="/appointment"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-medium px-8 py-4 rounded-lg transition-all duration-200 inline-flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Book Non-Emergency
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Services */}
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
              Why Choose Our Mental Health Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each service is designed to provide specialized mental health care with 
              evidence-based treatments and expert mental health professionals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: 'Expert Specialists',
                description: 'Board-certified doctors with years of experience in their respective fields'
              },
              {
                icon: Shield,
                title: 'Advanced Technology',
                description: 'State-of-the-art equipment and cutting-edge treatment methods'
              },
              {
                icon: Clock,
                title: 'Quick Access',
                description: 'Minimal wait times and efficient appointment scheduling'
              },
              {
                icon: Heart,
                title: 'Patient-Centered',
                description: 'Personalized care plans tailored to individual patient needs'
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
    </div>
  )
}

export default OurServices
