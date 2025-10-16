import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Phone,
  Mail,
  Clock,
  Search,
  Filter,
  AlertTriangle
} from 'lucide-react'
import logo from '../photo/logo.png'

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All FAQs' },
    { id: 'general', name: 'General' },
    { id: 'appointments', name: 'Appointments' },
    { id: 'billing', name: 'Billing' },
    { id: 'services', name: 'Services' },
    { id: 'emergency', name: 'Emergency' }
  ]

  const faqs = [
    {
      id: 1,
      question: 'What are your hospital hours?',
      answer: 'Our main hospital operates 24/7 for emergency services. Regular outpatient services are available Monday to Friday from 8:00 AM to 8:00 PM, and Saturday to Sunday from 9:00 AM to 6:00 PM. Emergency services are available 24/7.',
      category: 'general',
      tags: ['hours', 'timing', 'schedule']
    },
    {
      id: 2,
      question: 'How do I book an appointment?',
      answer: 'You can book an appointment in several ways: 1) Call our appointment line at +9188008 334411 2) Use our online booking system on our website, 3) Visit our hospital in person, or 4) Use our mobile app. We recommend booking in advance to secure your preferred time slot.',
      category: 'appointments',
      tags: ['booking', 'appointment', 'schedule']
    },
    {
      id: 3,
      question: 'What insurance do you accept?',
      answer: 'We accept most major insurance plans including Medicare, Medicaid, and private insurance providers. Please contact our billing department at +1 (555) 123-4568 to verify your specific insurance coverage before your visit.',
      category: 'billing',
      tags: ['insurance', 'billing', 'payment']
    },
    {
      id: 4,
      question: 'Do you have emergency services?',
      answer: 'Yes, we have a fully equipped emergency department that operates 24/7. Our emergency services include trauma care, critical care, emergency surgery, ambulance services, and triage services. For emergencies, call 108 or visit our emergency department immediately.',
      category: 'emergency',
      tags: ['emergency', 'urgent', 'trauma']
    },
    {
      id: 5,
      question: 'What specialties do you offer?',
      answer: 'We offer comprehensive medical services including Cardiology, Mental Health, Pediatrics, Orthopedics, Neurology, Ophthalmology, Emergency Medicine, and Radiology & Imaging. Each specialty is staffed with board-certified specialists and state-of-the-art equipment.',
      category: 'services',
      tags: ['specialties', 'departments', 'services']
    },
    {
      id: 6,
      question: 'How do I prepare for surgery?',
      answer: 'Preparation for surgery varies by procedure, but generally includes: fasting for 8-12 hours before surgery, stopping certain medications as directed by your doctor, arranging for transportation home, and following pre-operative instructions. Your surgical team will provide detailed instructions specific to your procedure.',
      category: 'services',
      tags: ['surgery', 'preparation', 'procedure']
    },
    {
      id: 7,
      question: 'Can I get my medical records?',
      answer: 'Yes, you can request your medical records by filling out a release form at our medical records department or through our patient portal. There may be a small fee for copying and processing. Records are typically available within 5-7 business days.',
      category: 'general',
      tags: ['records', 'medical history', 'documents']
    },
    {
      id: 8,
      question: 'What is your cancellation policy?',
      answer: 'We require 24-hour notice for appointment cancellations. Cancellations made less than 24 hours in advance may incur a cancellation fee. Emergency situations are exempt from this policy. Please call us as soon as possible if you need to reschedule.',
      category: 'appointments',
      tags: ['cancellation', 'reschedule', 'policy']
    },
    {
      id: 9,
      question: 'Do you offer telemedicine services?',
      answer: 'Yes, we offer telemedicine consultations for many specialties. This allows you to consult with our doctors remotely for follow-up visits, routine consultations, and certain types of care. Contact us to see if telemedicine is appropriate for your needs.',
      category: 'services',
      tags: ['telemedicine', 'virtual', 'remote']
    },
    {
      id: 10,
      question: 'How do I contact a specific doctor?',
      answer: 'You can contact a specific doctor through our main switchboard at +91 88008 33411, or through their direct extension if you have it. You can also send a message through our patient portal or email them directly if you have their contact information.',
      category: 'general',
      tags: ['contact', 'doctor', 'communication']
    },
    {
      id: 11,
      question: 'What should I bring to my appointment?',
      answer: 'Please bring: a valid ID, insurance card, list of current medications, medical history, any relevant test results or imaging, and a list of questions for your doctor. For new patients, arrive 15 minutes early to complete registration forms.',
      category: 'appointments',
      tags: ['appointment', 'documents', 'preparation']
    },
    {
      id: 12,
      question: 'Do you have parking facilities?',
      answer: 'Yes, we have ample parking facilities including valet parking, disabled parking spaces, and free parking for patients and visitors. Parking is available in our main lot and underground garage. Valet service is available at the main entrance.',
      category: 'general',
      tags: ['parking', 'facilities', 'accessibility']
    }
  ]

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div className="pt-16 relative">
      {/* Logo Background Watermark */}
      <div className="fixed top-16 left-0 right-0 bottom-0 flex items-center justify-center pointer-events-none opacity-10 z-0">
        <img src={logo} alt="AIMAN logo" className="w-96 h-auto" />
      </div>
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto">
              Find answers to common questions about our services, appointments, 
              billing, and more. Can't find what you're looking for? Contact us!
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
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
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
        </div>
      </section>

      {/* FAQs Section */}
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
              {selectedCategory === 'all' ? 'All FAQs' : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === faq.id ? (
                    <ChevronUp className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 pb-4"
                  >
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {faq.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No FAQs found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
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
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Call Us
              </h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our support team
              </p>
              <a
                href="tel:+91 88008-334411"
                className="btn-primary inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                +91 88008-334411
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Email Us
              </h3>
              <p className="text-gray-600 mb-4">
                Send us your questions via email
              </p>
              <a
                href="mailto:info@aimanhealth.com"
                className="btn-primary inline-flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                info@aimanhealth.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Visit Us
              </h3>
              <p className="text-gray-600 mb-4">
                Come to our hospital for in-person assistance
              </p>
              <a
                href="https://www.google.com/maps/place/AIMAN+-+Ataraxia+Institute+of+Mental+Health+%26+Neurosciences/@28.4385731,77.0511214,17z/data=!3m1!4b1!4m6!3m5!1s0x390d194351c6b57b:0x18d58b3633d7a68c!8m2!3d28.4385684!4d77.0536963!16s%2Fg%2F11xz8c6t7z?entry=tts&g_ep=EgoyMDI1MTAxMi4wIPu8ASoASAFQAw%3D%3D&skid=d3bffdf1-7ee6-450d-8ad0-2264aac7c73b"
                className="btn-primary inline-flex items-center"
              >
                <Clock className="w-4 h-4 mr-2" />
                Get Directions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section-padding bg-red-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Emergency Questions?
            </h2>
            <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
              For medical emergencies, don't wait for answers. Call our emergency line immediately.
            </p>
            <a
              href="tel:108"
              className="bg-white text-red-600 hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Emergency: 108
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FAQs
