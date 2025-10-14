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
  CheckCircle
} from 'lucide-react'

const Departments = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Departments' },
    { id: 'medical', name: 'Medical' },
    { id: 'surgical', name: 'Surgical' },
    { id: 'emergency', name: 'Emergency' },
    { id: 'specialty', name: 'Specialty' }
  ]

  const departments = [
    {
      id: 'cardiology',
      name: 'Cardiology',
      category: 'medical',
      icon: Heart,
      description: 'Comprehensive heart and cardiovascular care with advanced diagnostic and treatment options.',
      services: [
        'Echocardiography',
        'Cardiac Catheterization',
        'Angioplasty',
        'Heart Surgery',
        'Cardiac Rehabilitation'
      ],
      doctors: 8,
      availability: '24/7 Emergency',
      color: 'from-red-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      id: 'mental-health',
      name: 'Mental Health & Psychiatry',
      category: 'specialty',
      icon: Brain,
      description: 'Comprehensive mental health services including therapy, counseling, and psychiatric care.',
      services: [
        'Individual Therapy',
        'Group Therapy',
        'Psychiatric Evaluation',
        'Medication Management',
        'Crisis Intervention'
      ],
      doctors: 6,
      availability: 'Mon-Fri 8AM-8PM',
      color: 'from-purple-500 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
    },
    {
      id: 'pediatrics',
      name: 'Pediatrics',
      category: 'medical',
      icon: Baby,
      description: 'Specialized healthcare for infants, children, and adolescents with child-friendly facilities.',
      services: [
        'Well-child Checkups',
        'Vaccinations',
        'Developmental Assessments',
        'Pediatric Surgery',
        'Emergency Pediatrics'
      ],
      doctors: 5,
      availability: 'Mon-Sat 9AM-6PM',
      color: 'from-green-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop'
    },
    {
      id: 'orthopedics',
      name: 'Orthopedics',
      category: 'surgical',
      icon: Activity,
      description: 'Expert care for bones, joints, muscles, and sports injuries with advanced surgical techniques.',
      services: [
        'Joint Replacement',
        'Sports Medicine',
        'Spine Surgery',
        'Fracture Care',
        'Physical Therapy'
      ],
      doctors: 7,
      availability: 'Mon-Fri 8AM-6PM',
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    },
    {
      id: 'neurology',
      name: 'Neurology',
      category: 'medical',
      icon: Brain,
      description: 'Advanced neurological care for brain, spine, and nervous system disorders.',
      services: [
        'EEG Testing',
        'MRI/CT Scans',
        'Stroke Care',
        'Epilepsy Treatment',
        'Neurological Surgery'
      ],
      doctors: 4,
      availability: '24/7 Emergency',
      color: 'from-indigo-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop'
    },
    {
      id: 'ophthalmology',
      name: 'Ophthalmology',
      category: 'surgical',
      icon: Eye,
      description: 'Comprehensive eye care including vision correction, cataract surgery, and retinal treatments.',
      services: [
        'Cataract Surgery',
        'LASIK Surgery',
        'Retinal Treatment',
        'Glaucoma Care',
        'Pediatric Ophthalmology'
      ],
      doctors: 3,
      availability: 'Mon-Fri 9AM-5PM',
      color: 'from-yellow-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop'
    },
    {
      id: 'emergency',
      name: 'Emergency Medicine',
      category: 'emergency',
      icon: Zap,
      description: '24/7 emergency care with rapid response and critical care capabilities.',
      services: [
        'Trauma Care',
        'Critical Care',
        'Emergency Surgery',
        'Ambulance Services',
        'Triage Services'
      ],
      doctors: 12,
      availability: '24/7',
      color: 'from-red-600 to-red-500',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop'
    },
    {
      id: 'radiology',
      name: 'Radiology & Imaging',
      category: 'medical',
      icon: Shield,
      description: 'Advanced diagnostic imaging services with state-of-the-art equipment.',
      services: [
        'MRI Scans',
        'CT Scans',
        'Ultrasound',
        'X-Ray',
        'Nuclear Medicine'
      ],
      doctors: 5,
      availability: '24/7 Emergency',
      color: 'from-gray-500 to-gray-600',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop'
    }
  ]

  const filteredDepartments = selectedCategory === 'all' 
    ? departments 
    : departments.filter(dept => dept.category === selectedCategory)

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
              Our Departments
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
              Comprehensive medical care across multiple specialties, 
              delivered with expertise and compassion by our dedicated team.
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

      {/* Departments Grid */}
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
              {selectedCategory === 'all' ? 'All Departments' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredDepartments.length} department{filteredDepartments.length !== 1 ? 's' : ''} available
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDepartments.map((department, index) => (
              <motion.div
                key={department.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                {/* Department Image */}
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                  <img
                    src={department.image}
                    alt={department.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Department Info */}
                <div className="flex items-start space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${department.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {React.createElement(department.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {department.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {department.description}
                    </p>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Services:</h4>
                  <div className="flex flex-wrap gap-1">
                    {department.services.slice(0, 3).map((service) => (
                      <span
                        key={service}
                        className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                    {department.services.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{department.services.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Department Stats */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{department.doctors} Doctors</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{department.availability}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button className="flex-1 btn-primary text-sm py-2">
                    Book Appointment
                  </button>
                  <button className="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-200">
                    <Phone className="w-4 h-4" />
                  </button>
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
              Emergency Services Available 24/7
            </h2>
            <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
              Our emergency department is staffed with experienced professionals 
              and equipped with advanced life-saving technology.
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

      {/* Why Choose Our Departments */}
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
              Why Choose Our Departments?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each department is designed to provide specialized care with 
              the latest technology and expert medical professionals.
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

export default Departments
