import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Phone } from 'lucide-react'

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = '919414355273' // Format: country code + number without spaces or special characters
  const displayPhoneNumber = '+91 94143 55273' // Display format for tooltip

  const handleCallClick = () => {
    window.open(`tel:${phoneNumber}`, '_self')
  }

  const handleWhatsAppClick = () => {
    // More comprehensive message for WhatsApp Business
    const message = `Hello AIMAN Hospital! 👋

I'm interested in learning more about your services.

I would like information about:
- Appointments and consultations
- Available departments
- Doctor availability
- General inquiries

Looking forward to hearing from you!`
    
    // Use WhatsApp Business API format for better compatibility
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
        {/* Call Button */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCallClick}
            className="bg-primary-600 hover:bg-primary-700 text-white rounded-full p-4 shadow-2xl flex items-center justify-center transition-colors duration-200 group"
            aria-label="Call us"
          >
            <Phone className="w-7 h-7" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              Call us: {displayPhoneNumber}
            </div>
          </motion.button>

          {/* Pulse Animation */}
          <motion.div
            className="absolute inset-0 bg-primary-400 rounded-full -z-10"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* WhatsApp Button */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl flex items-center justify-center transition-colors duration-200 group"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-7 h-7" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              Chat with us on WhatsApp
            </div>
          </motion.button>

          {/* Pulse Animation */}
          <motion.div
            className="absolute inset-0 bg-green-400 rounded-full -z-10"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </>
  )
}

export default WhatsAppButton

