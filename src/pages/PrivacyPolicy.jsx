import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Database, UserCheck, FileText, AlertTriangle } from 'lucide-react'
import logo from '../photo/logo.png'

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
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
              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-8">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">Last Updated</h3>
                </div>
                <p className="text-gray-700">This privacy policy was last updated on {new Date().toLocaleDateString()}</p>
              </div>

              <div className="space-y-8">
                {/* Information We Collect */}
                <div className="card">
                  <div className="flex items-center mb-6">
                    <Database className="w-8 h-8 text-primary-600 mr-4" />
                    <h2 className="text-3xl font-bold text-gray-800">Information We Collect</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Name, email address, and phone number when you book appointments</li>
                        <li>Medical history and health information relevant to your treatment</li>
                        <li>Insurance information for billing purposes</li>
                        <li>Emergency contact information</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Information</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>IP address and browser information</li>
                        <li>Website usage data and analytics</li>
                        <li>Device information and operating system</li>
                        <li>Cookies and similar tracking technologies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* How We Use Information */}
                <div className="card">
                  <div className="flex items-center mb-6">
                    <Eye className="w-8 h-8 text-primary-600 mr-4" />
                    <h2 className="text-3xl font-bold text-gray-800">How We Use Your Information</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Medical Care</h4>
                        <p className="text-green-700 text-sm">Providing healthcare services and treatment</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Appointment Management</h4>
                        <p className="text-blue-700 text-sm">Scheduling and managing your appointments</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">Communication</h4>
                        <p className="text-purple-700 text-sm">Sending appointment reminders and health updates</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-800 mb-2">Billing</h4>
                        <p className="text-orange-700 text-sm">Processing payments and insurance claims</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Information Sharing */}
                <div className="card">
                  <div className="flex items-center mb-6">
                    <UserCheck className="w-8 h-8 text-primary-600 mr-4" />
                    <h2 className="text-3xl font-bold text-gray-800">Information Sharing</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                    
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li><strong>Medical Professionals:</strong> With your healthcare providers for treatment purposes</li>
                      <li><strong>Insurance Companies:</strong> For billing and claims processing</li>
                      <li><strong>Legal Requirements:</strong> When required by law or court order</li>
                      <li><strong>Emergency Situations:</strong> To protect your health and safety</li>
                      <li><strong>Service Providers:</strong> With trusted partners who assist in our operations</li>
                    </ul>
                  </div>
                </div>

                {/* Data Security */}
                <div className="card">
                  <div className="flex items-center mb-6">
                    <Lock className="w-8 h-8 text-primary-600 mr-4" />
                    <h2 className="text-3xl font-bold text-gray-800">Data Security</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700">We implement appropriate security measures to protect your personal information:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-800">Encryption</h4>
                          <p className="text-sm text-gray-600">All data is encrypted in transit and at rest</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Lock className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-800">Access Controls</h4>
                          <p className="text-sm text-gray-600">Strict access controls and authentication</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Database className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-800">Secure Storage</h4>
                          <p className="text-sm text-gray-600">Data stored in secure, HIPAA-compliant systems</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <FileText className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-800">Regular Audits</h4>
                          <p className="text-sm text-gray-600">Regular security audits and monitoring</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Your Rights */}
                <div className="card">
                  <div className="flex items-center mb-6">
                    <UserCheck className="w-8 h-8 text-primary-600 mr-4" />
                    <h2 className="text-3xl font-bold text-gray-800">Your Rights</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Access</h4>
                        <p className="text-blue-700 text-sm">Request a copy of your personal information</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Correction</h4>
                        <p className="text-green-700 text-sm">Correct inaccurate or incomplete information</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">Deletion</h4>
                        <p className="text-purple-700 text-sm">Request deletion of your personal information</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-800 mb-2">Portability</h4>
                        <p className="text-orange-700 text-sm">Receive your data in a portable format</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="card bg-primary-50">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this privacy policy or how we handle your personal information, please contact us:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                      <p className="text-gray-600">privacy@aimanhospital.com</p>
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
                      <h4 className="font-semibold text-gray-800 mb-2">Data Protection Officer</h4>
                      <p className="text-gray-600">dpo@aimanhospital.com</p>
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

export default PrivacyPolicy

