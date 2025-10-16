import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Shield, AlertCircle, CheckCircle, Clock, Users, Phone, Mail } from 'lucide-react'
import logo from '../photo/logo.png'

const TermsOfService = () => {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto">
              Please read these terms carefully before using our services. 
              By using our website, you agree to be bound by these terms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Last Updated</h3>
                </div>
                <p className="text-gray-700">These terms of service were last updated on {new Date().toLocaleDateString()}</p>
              </div>

              <div className="space-y-8">
                {/* Acceptance of Terms */}
                <div className="card">
                  <div className="flex items-center mb-6">
                    <CheckCircle className="w-8 h-8 text-primary-600 mr-4" />
                    <h2 className="text-3xl font-bold text-gray-800">Acceptance of Terms</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      By accessing and using AIMAN Hospital's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>You must be at least 18 years old to use our services</li>
                      <li>You agree to provide accurate and complete information</li>
                      <li>You are responsible for maintaining the confidentiality of your account</li>
                      <li>You agree to notify us immediately of any unauthorized use</li>
                    </ul>
                  </div>
                </div>

                {/* Medical Services */}
                <div className="card">
                  <div className="flex items-center mb-6">
                    <Shield className="w-8 h-8 text-primary-600 mr-4" />
                    <h2 className="text-3xl font-bold text-gray-800">Medical Services</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Important Notice</h4>
                      <p className="text-yellow-700 text-sm">
                        Our website provides information about medical services but does not replace professional medical advice, diagnosis, or treatment.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-800">Service Scope</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Appointment booking and scheduling</li>
                        <li>General health information and resources</li>
                        <li>Contact information for medical professionals</li>
                        <li>Emergency contact services</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-800">Limitations</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Online information is not a substitute for medical consultation</li>
                        <li>Emergency situations require immediate professional medical attention</li>
                        <li>We do not provide medical advice through our website</li>
                        <li>All medical decisions should be made in consultation with qualified healthcare providers</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* User Responsibilities */}
                <div className="card">
                  <div className="flex items-center mb-6">
                    <Users className="w-8 h-8 text-primary-600 mr-4" />
                    <h2 className="text-3xl font-bold text-gray-800">User Responsibilities</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Prohibited Activities</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Using the website for any unlawful purpose</li>
                      <li>Attempting to gain unauthorized access to our systems</li>
                      <li>Transmitting viruses, malware, or other harmful code</li>
                      <li>Harassing, threatening, or abusing other users</li>
                      <li>Violating any applicable laws or regulations</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800">Account Security</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Keep your login credentials secure and confidential</li>
                      <li>Notify us immediately of any security breaches</li>
                      <li>Use strong, unique passwords</li>
                      <li>Log out from shared or public computers</li>
                    </ul>
                  </div>
                </div>

                {/* Privacy and Data */}
                <div className="card">
                  <div className="flex items-center mb-6">
                    <FileText className="w-8 h-8 text-primary-600 mr-4" />
                    <h2 className="text-3xl font-bold text-gray-800">Privacy and Data Protection</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      We are committed to protecting your privacy and personal information. Our data practices are governed by our Privacy Policy and applicable healthcare regulations.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Data Collection</h4>
                        <p className="text-green-700 text-sm">We collect only necessary information for providing healthcare services</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Data Security</h4>
                        <p className="text-blue-700 text-sm">Your information is protected with industry-standard security measures</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">HIPAA Compliance</h4>
                        <p className="text-purple-700 text-sm">We follow HIPAA guidelines for healthcare data protection</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-800 mb-2">Data Sharing</h4>
                        <p className="text-orange-700 text-sm">We do not sell or share your personal information with third parties</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Limitation of Liability */}
                <div className="card">
                  <div className="flex items-center mb-6">
                    <AlertCircle className="w-8 h-8 text-primary-600 mr-4" />
                    <h2 className="text-3xl font-bold text-gray-800">Limitation of Liability</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">Important Disclaimer</h4>
                      <p className="text-red-700 text-sm">
                        AIMAN Hospital shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
                      </p>
                    </div>
                    
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>We do not guarantee the accuracy of all information on our website</li>
                      <li>Technical issues may temporarily affect service availability</li>
                      <li>We are not responsible for third-party websites or services</li>
                      <li>Emergency situations require immediate professional medical attention</li>
                    </ul>
                  </div>
                </div>

                {/* Changes to Terms */}
                <div className="card">
                  <div className="flex items-center mb-6">
                    <Clock className="w-8 h-8 text-primary-600 mr-4" />
                    <h2 className="text-3xl font-bold text-gray-800">Changes to Terms</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>We will notify users of significant changes via email or website notice</li>
                      <li>Continued use of our services constitutes acceptance of new terms</li>
                      <li>Users may terminate their use if they disagree with changes</li>
                      <li>Previous versions of terms are available upon request</li>
                    </ul>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="card bg-primary-50">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these terms of service, please contact us:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                      <p className="text-gray-600">legal@aimanhospital.com</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Phone</h4>
                      <p className="text-gray-600">+91 88008 33411</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Address</h4>
                      <p className="text-gray-600">AIMAN Hospital<br />Gurgaon, Haryana, India</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Legal Department</h4>
                      <p className="text-gray-600">legal@aimanhospital.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsOfService

