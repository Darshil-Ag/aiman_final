import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Star, 
  Quote, 
  Heart, 
  Brain, 
  Baby, 
  Activity, 
  Eye, 
  Zap,
  ChevronLeft,
  ChevronRight,
  Play,
  Calendar,
  Award
} from 'lucide-react'
import logo from '../photo/logo.png'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Stories' },
    { id: 'cardiology', name: 'Cardiology' },
    { id: 'mental-health', name: 'Mental Health' },
    { id: 'pediatrics', name: 'Pediatrics' },
    { id: 'orthopedics', name: 'Orthopedics' },
    { id: 'surgery', name: 'Surgery' }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      age: 58,
      treatment: 'Cardiac Surgery',
      category: 'cardiology',
      rating: 5,
      quote: 'The care I received at AIMAN Hospital was exceptional. Dr. Johnson and her team made me feel comfortable throughout my cardiac surgery. The facilities are world-class and the staff is incredibly compassionate.',
      story: 'I was diagnosed with a blocked artery and needed immediate surgery. From the moment I arrived at AIMAN, I felt confident in the care I was receiving. The surgical team was professional, skilled, and kept me informed every step of the way. My recovery was smooth, and I\'m now back to my active lifestyle.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      date: 'December 2024',
      doctor: 'Dr. Sarah Johnson',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      age: 34,
      treatment: 'Mental Health Support',
      category: 'mental-health',
      rating: 5,
      quote: 'The mental health team at AIMAN helped me through one of the most difficult times in my life. Dr. Chen\'s compassionate approach and evidence-based treatment made all the difference in my recovery.',
      story: 'I was struggling with anxiety and depression for months before seeking help. Dr. Chen created a personalized treatment plan that included therapy and medication management. The support I received was life-changing, and I now have the tools to manage my mental health effectively.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      date: 'November 2024',
      doctor: 'Dr. Michael Chen',
      icon: Brain,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 3,
      name: 'David Wilson',
      age: 45,
      treatment: 'Knee Replacement Surgery',
      category: 'orthopedics',
      rating: 5,
      quote: 'Dr. Wilson\'s expertise in orthopedic surgery is unmatched. My knee replacement was successful, and the rehabilitation program helped me regain full mobility. I highly recommend AIMAN for orthopedic care.',
      story: 'After years of knee pain, I finally decided to have knee replacement surgery. Dr. Wilson explained the procedure thoroughly and answered all my questions. The surgery went perfectly, and the physical therapy team helped me recover quickly. I\'m now pain-free and more active than I\'ve been in years.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      date: 'October 2024',
      doctor: 'Dr. James Wilson',
      icon: Activity,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      age: 28,
      treatment: 'Pregnancy & Delivery',
      category: 'pediatrics',
      rating: 5,
      quote: 'The maternity ward at AIMAN provided exceptional care during my pregnancy and delivery. The staff was supportive, knowledgeable, and made the entire experience comfortable and safe.',
      story: 'From my first prenatal visit to the delivery of my baby, the team at AIMAN was incredible. Dr. Rodriguez was attentive and answered all my questions. The delivery went smoothly, and the postpartum care was excellent. I felt well-cared for throughout the entire process.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      date: 'September 2024',
      doctor: 'Dr. Emily Rodriguez',
      icon: Baby,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 5,
      name: 'Robert Chen',
      age: 62,
      treatment: 'Cataract Surgery',
      category: 'surgery',
      rating: 5,
      quote: 'Dr. Thompson\'s skill in cataract surgery is remarkable. The procedure was quick and painless, and my vision is now crystal clear. The entire experience exceeded my expectations.',
      story: 'I had been struggling with cataracts for several years, and it was affecting my daily activities. Dr. Thompson performed the surgery with precision and care. The recovery was quick, and I was amazed at how much better I could see immediately after the procedure.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
      date: 'August 2024',
      doctor: 'Dr. Robert Thompson',
      icon: Eye,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 6,
      name: 'Lisa Park',
      age: 41,
      treatment: 'Emergency Care',
      category: 'surgery',
      rating: 5,
      quote: 'When I had a medical emergency, the emergency team at AIMAN acted quickly and professionally. Their rapid response and expert care saved my life. I\'m forever grateful.',
      story: 'I experienced a sudden medical emergency and was rushed to AIMAN\'s emergency department. Dr. Foster and her team acted immediately, providing life-saving treatment. The care was exceptional, and I felt safe and well-cared for throughout the entire process.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face',
      date: 'July 2024',
      doctor: 'Dr. Amanda Foster',
      icon: Zap,
      color: 'from-red-600 to-red-500'
    }
  ]

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === selectedCategory)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index)
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
        
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Patient Stories
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto">
              Real stories from real patients who have experienced exceptional care 
              and life-changing treatments at AIMAN Hospital.
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
                onClick={() => {
                  setSelectedCategory(category.id)
                  setCurrentTestimonial(0)
                }}
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

      {/* Featured Testimonial Carousel */}
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
              Featured Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredTestimonials.length} inspiring story{filteredTestimonials.length !== 1 ? 'ies' : ''} of healing and hope
            </p>
          </motion.div>

          {filteredTestimonials.length > 0 && (
            <div className="max-w-4xl mx-auto">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="card relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="w-8 h-8 text-primary-200" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Patient Info */}
                  <div className="text-center lg:text-left">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto lg:mx-0 mb-4">
                      <img
                        src={filteredTestimonials[currentTestimonial].image}
                        alt={filteredTestimonials[currentTestimonial].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                      {filteredTestimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Age {filteredTestimonials[currentTestimonial].age}
                    </p>
                    <div className="flex items-center justify-center lg:justify-start space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <div className={`w-6 h-6 bg-gradient-to-r ${filteredTestimonials[currentTestimonial].color} rounded-full flex items-center justify-center`}>
                          {React.createElement(filteredTestimonials[currentTestimonial].icon, { className: "w-3 h-3 text-white" })}
                        </div>
                        <span>{filteredTestimonials[currentTestimonial].treatment}</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{filteredTestimonials[currentTestimonial].date}</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <Award className="w-4 h-4" />
                        <span>{filteredTestimonials[currentTestimonial].doctor}</span>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="lg:col-span-2">
                    <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                      "{filteredTestimonials[currentTestimonial].quote}"
                    </blockquote>
                    <div className="bg-primary-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Full Story:</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {filteredTestimonials[currentTestimonial].story}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-600" />
                  </button>

                  <div className="flex space-x-2">
                    {filteredTestimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                          index === currentTestimonial
                            ? 'bg-primary-600'
                            : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* All Testimonials Grid */}
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
              All Patient Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read more inspiring stories from our patients across all departments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.treatment}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className={`w-6 h-6 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center`}>
                      {React.createElement(testimonial.icon, { className: "w-3 h-3 text-white" })}
                    </div>
                    <span>{testimonial.treatment}</span>
                  </div>
                  <span>{testimonial.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Share Your Story
            </h2>
            <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Have you had a positive experience at AIMAN Hospital? We'd love to hear your story 
              and share it with others who might benefit from your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                <Heart className="w-5 h-5 mr-2" />
                Share Your Experience
              </a>
              <a
                href="/appointment"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium px-8 py-4 rounded-lg transition-all duration-200 inline-flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Visit
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
