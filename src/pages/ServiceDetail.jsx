import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  Users, 
  Star,
  ArrowLeft,
  Heart,
  CheckCircle,
  Zap,
  Shield,
  Brain,
  Baby,
  Building,
  MapPin as MapPinIcon
} from 'lucide-react'
import logo from '../photo/logo.png'

const ServiceDetail = () => {
  const { serviceName } = useParams()
  
  // Service data - in a real app, this would come from an API
  const services = {
    'emergency-mental-health': {
      name: '24/7 Emergency Mental Health Services',
      icon: Zap,
      color: 'from-red-600 to-red-500',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop',
      description: 'Round-the-clock emergency mental health services providing immediate crisis intervention and support.',
      fullDescription: 'Our 24/7 Emergency Mental Health Services provide immediate, life-saving intervention for individuals experiencing mental health crises. Our dedicated team of psychiatrists, psychologists, and crisis intervention specialists are available around the clock to provide immediate support, assessment, and treatment for mental health emergencies.',
      services: [
        'Crisis Intervention',
        'Emergency Psychiatric Care',
        'Suicide Prevention',
        'Mental Health Triage',
        'Emergency Counseling'
      ],
      doctors: 8,
      availability: '24/7',
      phone: '+1 (555) 123-4567',
      email: 'emergency@aimanhospital.com',
      features: [
        'Immediate crisis response',
        'Specialized emergency protocols',
        'Trained crisis intervention team',
        'Secure emergency facilities',
        'Family support services'
      ],
      process: [
        'Immediate assessment upon arrival',
        'Crisis stabilization',
        'Safety planning',
        'Treatment planning',
        'Follow-up care coordination'
      ]
    },
    'opd-services': {
      name: 'OPD (Outpatient Department) Services',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop',
      description: 'Comprehensive outpatient mental health services for regular consultations and follow-ups.',
      fullDescription: 'Our Outpatient Department provides comprehensive mental health services for individuals who do not require inpatient care. We offer regular consultations, therapy sessions, medication management, and ongoing support in a comfortable, professional environment.',
      services: [
        'Initial Consultations',
        'Follow-up Appointments',
        'Medication Management',
        'Therapy Sessions',
        'Assessment Services'
      ],
      doctors: 6,
      availability: 'Mon-Fri 9AM-6PM',
      phone: '+1 (555) 123-4568',
      email: 'opd@aimanhospital.com',
      features: [
        'Flexible appointment scheduling',
        'Comprehensive assessments',
        'Individual and group therapy',
        'Medication management',
        'Family counseling'
      ],
      process: [
        'Initial consultation and assessment',
        'Treatment plan development',
        'Regular therapy sessions',
        'Progress monitoring',
        'Discharge planning'
      ]
    },
    'ipd-services': {
      name: 'IPD (Inpatient Department) Services',
      icon: Building,
      color: 'from-green-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
      description: 'Inpatient mental health services providing intensive care and treatment in a safe environment.',
      fullDescription: 'Our Inpatient Department provides intensive, round-the-clock mental health care for individuals requiring close monitoring and comprehensive treatment. Our secure, therapeutic environment ensures patient safety while delivering evidence-based treatments.',
      services: [
        'Inpatient Psychiatric Care',
        'Intensive Therapy Programs',
        'Medication Stabilization',
        'Crisis Management',
        'Rehabilitation Support'
      ],
      doctors: 10,
      availability: '24/7',
      phone: '+1 (555) 123-4569',
      email: 'ipd@aimanhospital.com',
      features: [
        'Secure therapeutic environment',
        '24/7 medical supervision',
        'Intensive therapy programs',
        'Family involvement',
        'Discharge planning'
      ],
      process: [
        'Admission assessment',
        'Treatment plan development',
        'Daily therapy sessions',
        'Progress monitoring',
        'Discharge planning'
      ]
    },
    'deaddiction-rehab': {
      name: 'De-addiction and Rehabilitation Services',
      icon: Shield,
      color: 'from-purple-500 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
      description: 'Specialized services for substance abuse treatment and comprehensive rehabilitation programs.',
      fullDescription: 'Our De-addiction and Rehabilitation Services provide comprehensive treatment for substance abuse and addiction. We offer evidence-based treatments, counseling, and support to help individuals achieve and maintain recovery.',
      services: [
        'Detoxification Programs',
        'Individual Counseling',
        'Group Therapy',
        'Family Support',
        'Aftercare Planning'
      ],
      doctors: 5,
      availability: 'Mon-Sat 8AM-8PM',
      phone: '+1 (555) 123-4570',
      email: 'rehab@aimanhospital.com',
      features: [
        'Medical detoxification',
        'Individual and group therapy',
        'Family education',
        'Relapse prevention',
        'Aftercare support'
      ],
      process: [
        'Initial assessment',
        'Detoxification if needed',
        'Intensive therapy',
        'Family involvement',
        'Aftercare planning'
      ]
    },
    'child-adolescent': {
      name: 'Child and Adolescent Mental Health Services',
      icon: Baby,
      color: 'from-pink-500 to-rose-500',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop',
      description: 'Specialized mental health services tailored for children and adolescents with age-appropriate care.',
      fullDescription: 'Our Child and Adolescent Mental Health Services provide specialized care for young people facing mental health challenges. We use age-appropriate therapies and involve families in the treatment process.',
      services: [
        'Child Psychology',
        'Adolescent Counseling',
        'Family Therapy',
        'Behavioral Interventions',
        'School Support Services'
      ],
      doctors: 4,
      availability: 'Mon-Fri 9AM-5PM',
      phone: '+1 (555) 123-4571',
      email: 'child@aimanhospital.com',
      features: [
        'Age-appropriate therapy',
        'Family involvement',
        'School collaboration',
        'Play therapy',
        'Parent education'
      ],
      process: [
        'Comprehensive assessment',
        'Family consultation',
        'Treatment planning',
        'Regular therapy sessions',
        'School coordination'
      ]
    },
    'womens-mental-health': {
      name: 'Women\'s Mental Health Services',
      icon: Heart,
      color: 'from-pink-600 to-purple-600',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=400&fit=crop',
      description: 'Comprehensive mental health services addressing the unique needs of women across all life stages.',
      fullDescription: 'Our Women\'s Mental Health Services provide specialized care addressing the unique mental health needs of women throughout their lives, including pregnancy, postpartum, menopause, and other life transitions.',
      services: [
        'Prenatal Mental Health',
        'Postpartum Support',
        'Menopause Counseling',
        'Trauma Therapy',
        'Hormonal Mental Health'
      ],
      doctors: 3,
      availability: 'Mon-Fri 9AM-6PM',
      phone: '+1 (555) 123-4572',
      email: 'women@aimanhospital.com',
      features: [
        'Gender-sensitive care',
        'Hormonal assessment',
        'Pregnancy support',
        'Trauma-informed care',
        'Life transition support'
      ],
      process: [
        'Comprehensive assessment',
        'Hormonal evaluation',
        'Individualized treatment',
        'Support group participation',
        'Follow-up care'
      ]
    },
    'geriatric-mental-health': {
      name: 'Geriatric Mental Health Services',
      icon: Users,
      color: 'from-gray-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=400&fit=crop',
      description: 'Specialized mental health care for elderly patients addressing age-related mental health challenges.',
      fullDescription: 'Our Geriatric Mental Health Services provide specialized care for elderly patients, addressing dementia, depression, anxiety, and other age-related mental health conditions with compassion and expertise.',
      services: [
        'Dementia Care',
        'Depression Treatment',
        'Anxiety Management',
        'Memory Care',
        'Family Support'
      ],
      doctors: 3,
      availability: 'Mon-Fri 9AM-5PM',
      phone: '+1 (555) 123-4573',
      email: 'geriatric@aimanhospital.com',
      features: [
        'Dementia assessment',
        'Memory care programs',
        'Family education',
        'Caregiver support',
        'Medication management'
      ],
      process: [
        'Comprehensive geriatric assessment',
        'Cognitive evaluation',
        'Treatment planning',
        'Family involvement',
        'Ongoing monitoring'
      ]
    },
    'clinical-psychology': {
      name: 'Clinical Psychology and Therapy Services',
      icon: Brain,
      color: 'from-indigo-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
      description: 'Therapy is a cornerstone of healing. Our clinical psychology services include comprehensive therapeutic approaches delivered by trained psychologists who create safe, non-judgmental spaces for healing.',
      fullDescription: 'Our Clinical Psychology and Therapy Services provide evidence-based therapeutic interventions delivered by licensed clinical psychologists. We offer a range of therapeutic approaches tailored to individual needs in a safe, supportive environment.',
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
      phone: '+1 (555) 123-4574',
      email: 'psychology@aimanhospital.com',
      features: [
        'Evidence-based therapies',
        'Individual and group sessions',
        'Trauma-informed care',
        'Crisis intervention',
        'Therapeutic assessment'
      ],
      process: [
        'Initial psychological assessment',
        'Treatment plan development',
        'Regular therapy sessions',
        'Progress monitoring',
        'Discharge planning'
      ]
    },
    'sexual-wellness': {
      name: 'Sexual Wellness Services',
      icon: Heart,
      color: 'from-rose-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
      description: 'Comprehensive sexual wellness and mental health services addressing intimate relationship and sexual health concerns.',
      fullDescription: 'Our Sexual Wellness Services provide confidential, professional support for individuals and couples dealing with sexual health concerns, relationship issues, and intimate wellness challenges.',
      services: [
        'Sexual Health Counseling',
        'Relationship Therapy',
        'Intimacy Issues',
        'Sexual Trauma Support',
        'Couples Counseling'
      ],
      doctors: 2,
      availability: 'Mon-Fri 9AM-6PM',
      phone: '+1 (555) 123-4575',
      email: 'sexualwellness@aimanhospital.com',
      features: [
        'Confidential counseling',
        'Couples therapy',
        'Trauma-informed care',
        'Relationship support',
        'Intimacy education'
      ],
      process: [
        'Confidential consultation',
        'Assessment and evaluation',
        'Individualized treatment',
        'Couples sessions if needed',
        'Ongoing support'
      ]
    },
    'home-visit': {
      name: 'Home Visit Services',
      icon: MapPinIcon,
      color: 'from-green-600 to-teal-600',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop',
      description: 'Convenient home-based mental health services bringing professional care directly to patients in their comfort zone.',
      fullDescription: 'Our Home Visit Services bring professional mental health care directly to patients in their homes, providing convenient access to therapy, counseling, and support services for those who cannot travel to our facility.',
      services: [
        'Home-based Therapy',
        'Family Counseling',
        'Medication Management',
        'Crisis Intervention',
        'Caregiver Support'
      ],
      doctors: 4,
      availability: 'Mon-Sat 9AM-6PM',
      phone: '+1 (555) 123-4576',
      email: 'homevisit@aimanhospital.com',
      features: [
        'Convenient home visits',
        'Family involvement',
        'Medication management',
        'Crisis support',
        'Caregiver education'
      ],
      process: [
        'Initial home assessment',
        'Treatment planning',
        'Regular home visits',
        'Family involvement',
        'Progress monitoring'
      ]
    }
  }

  const service = services[serviceName]

  if (!service) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/our-services" className="btn-primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Our Services
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
            {/* Service Icon */}
            <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white flex items-center justify-center">
              <div className={`w-full h-full bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center`}>
                {React.createElement(service.icon, { className: "w-16 h-16 lg:w-24 lg:h-24 text-white" })}
              </div>
            </div>
            
            {/* Service Info */}
            <div className="text-center lg:text-left flex-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {service.name}
                </h1>
                <p className="text-xl text-purple-100 mb-6 max-w-3xl">
                  {service.description}
                </p>
                
                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>{service.doctors} Expert{service.doctors > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span>{service.availability}</span>
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
            to="/our-services" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Our Services
          </Link>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Service */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="card"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Service</h2>
                <p className="text-gray-600 leading-relaxed">
                  {service.fullDescription}
                </p>
              </motion.div>

              {/* Services Offered */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Services We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.services.map((serviceItem, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{serviceItem}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="card"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Treatment Process */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="card"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Treatment Process</h2>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-600 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
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
                    <a href={`tel:${service.phone}`} className="text-gray-600 hover:text-primary-600">
                      {service.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <a href={`mailto:${service.email}`} className="text-gray-600 hover:text-primary-600">
                      {service.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary-600" />
                    <span className="text-gray-600">{service.availability}</span>
                  </div>
                </div>
              </motion.div>

              {/* Service Stats */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">Service Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experts Available:</span>
                    <span className="font-semibold">{service.doctors}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Availability:</span>
                    <span className="font-semibold">{service.availability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Services:</span>
                    <span className="font-semibold">{service.services.length}</span>
                  </div>
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
                <h3 className="text-xl font-bold text-gray-800 mb-4">Get Started</h3>
                <div className="space-y-3">
                  <a
                    href="/appointment"
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </a>
                  <a
                    href={`tel:${service.phone}`}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Contact us today to learn more about our {service.name.toLowerCase()} 
              and how we can help you or your loved ones.
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
                href={`tel:${service.phone}`}
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

export default ServiceDetail
