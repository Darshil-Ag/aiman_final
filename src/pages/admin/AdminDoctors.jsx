import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useAdmin } from '../../contexts/AdminContext'
import { useData } from '../../contexts/DataContext'
import { 
  ArrowLeft,
  Plus, 
  Edit, 
  Trash2, 
  Search,
  X,
  Save,
  User,
  Mail,
  Phone,
  Award,
  Briefcase,
  FileText,
  Image,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react'

const AdminDoctors = () => {
  const { isAuthenticated } = useAdmin()
  const { doctors, addDoctor, updateDoctor, deleteDoctor } = useData()
  const navigate = useNavigate()
  
  
  const [searchTerm, setSearchTerm] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [editingDoctor, setEditingDoctor] = useState(null)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null)
  const [notification, setNotification] = useState(null)
  
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    experience: '',
    email: '',
    phone: '',
    qualifications: '',
    description: '',
    image: '',
    available: true,
    availability: 'Mon-Fri 9AM-5PM',
    education: [],
    specializations: [],
    achievements: [],
    languages: ['English', 'Hindi'],
    bio: '',
    awards: [],
    publications: []
  })

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login')
    }
  }, [isAuthenticated, navigate])

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 3000)
  }

  const handleOpenModal = (doctor = null) => {
    if (doctor) {
      setEditingDoctor(doctor)
      setFormData({
        name: doctor.name,
        specialty: doctor.specialty,
        experience: doctor.experience,
        email: doctor.email,
        phone: doctor.phone,
        qualifications: doctor.qualifications,
        description: doctor.description,
        image: doctor.image,
        available: doctor.available,
        availability: doctor.availability || 'Mon-Fri 9AM-5PM',
        education: doctor.education || [],
        specializations: doctor.specializations || [],
        achievements: doctor.achievements || [],
        languages: doctor.languages || ['English', 'Hindi'],
        bio: doctor.bio || '',
        awards: doctor.awards || [],
        publications: doctor.publications || []
      })
    } else {
      setEditingDoctor(null)
      setFormData({
        name: '',
        specialty: '',
        experience: '',
        email: '',
        phone: '',
        qualifications: '',
        description: '',
        image: '',
        available: true,
        availability: 'Mon-Fri 9AM-5PM',
        education: [],
        specializations: [],
        achievements: [],
        languages: ['English', 'Hindi'],
        bio: '',
        awards: [],
        publications: []
      })
    }
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setEditingDoctor(null)
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (editingDoctor) {
      updateDoctor(editingDoctor.id, formData)
      showNotification('Doctor updated successfully!')
    } else {
      addDoctor(formData)
      showNotification('Doctor added successfully!')
    }
    
    handleCloseModal()
  }

  const handleDelete = (id) => {
    deleteDoctor(id)
    showNotification('Doctor deleted successfully!', 'info')
    setShowDeleteConfirm(null)
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/admin/dashboard')}
                className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Manage Doctors</h1>
                <p className="text-sm text-gray-600">{doctors.length} total doctors</p>
              </div>
            </div>
            <button
              onClick={() => handleOpenModal()}
              className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
            >
              <Plus className="w-5 h-5" />
              <span>Add New Doctor</span>
            </button>
          </div>
        </div>
      </header>

      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 right-4 z-50"
          >
            <div className={`flex items-center space-x-2 px-6 py-3 rounded-lg shadow-lg ${
              notification.type === 'success' ? 'bg-green-500' : 
              notification.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
            } text-white`}>
              {notification.type === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : notification.type === 'error' ? (
                <XCircle className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
              <span>{notification.message}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search doctors by name, specialty, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Doctor Image */}
              <div className="h-48 bg-gradient-to-br from-primary-400 to-secondary-500 relative">
                {doctor.image ? (
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="w-20 h-20 text-white opacity-50" />
                  </div>
                )}
                <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-medium ${
                  doctor.available ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
                }`}>
                  {doctor.available ? 'Available' : 'Unavailable'}
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{doctor.name}</h3>
                <p className="text-primary-600 text-sm font-medium mb-2">{doctor.specialty}</p>
                
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4" />
                    <span>{doctor.experience} years exp.</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{doctor.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{doctor.phone}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{doctor.description}</p>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleOpenModal(doctor)}
                    className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
                  >
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => setShowDeleteConfirm(doctor.id)}
                    className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No doctors found</h3>
            <p className="text-gray-600">Try adjusting your search or add a new doctor.</p>
          </div>
        )}
      </main>

      {/* Add/Edit Doctor Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">
                  {editingDoctor ? 'Edit Doctor' : 'Add New Doctor'}
                </h2>
                <button
                  onClick={handleCloseModal}
                  className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <form onSubmit={handleSubmit} className="p-6">
                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Dr. John Doe"
                      required
                    />
                  </div>

                  {/* Specialty and Experience */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Briefcase className="w-4 h-4 inline mr-1" />
                        Specialty *
                      </label>
                      <input
                        type="text"
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Psychiarist"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Award className="w-4 h-4 inline mr-1" />
                        Experience (years) *
                      </label>
                      <input
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="10"
                        required
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="w-4 h-4 inline mr-1" />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="doctor@aiman.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="w-4 h-4 inline mr-1" />
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  {/* Qualifications */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <FileText className="w-4 h-4 inline mr-1" />
                      Qualifications *
                    </label>
                    <input
                      type="text"
                      name="qualifications"
                      value={formData.qualifications}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="MBBS, MD (Psychiarist)"
                      required
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Brief description about the doctor..."
                    />
                  </div>

                  {/* Image URL */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Image className="w-4 h-4 inline mr-1" />
                      Image URL
                    </label>
                    <input
                      type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="https://example.com/doctor.jpg or /src/photo/doctor.jpg"
                    />
                    {formData.image && (
                      <div className="mt-2">
                        <img
                          src={formData.image}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded-lg"
                          onError={(e) => {
                            e.target.style.display = 'none'
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Available Checkbox */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="available"
                      id="available"
                      checked={formData.available}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="available" className="text-sm font-medium text-gray-700">
                      Available for appointments
                    </label>
                  </div>

                  {/* Availability */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Availability Schedule
                    </label>
                    <input
                      type="text"
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Mon-Fri 9AM-5PM"
                    />
                  </div>

                  {/* Bio */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Detailed biography of the doctor..."
                    />
                  </div>

                  {/* Education */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Education (one per line)
                    </label>
                    <textarea
                      name="education"
                      value={formData.education.join('\n')}
                      onChange={(e) => setFormData({...formData, education: e.target.value.split('\n').filter(item => item.trim())})}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="MD, DM Psychiarist, FACC&#10;Fellowship in Interventional Psychiarist"
                    />
                  </div>

                  {/* Specializations */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Specializations (one per line)
                    </label>
                    <textarea
                      name="specializations"
                      value={formData.specializations.join('\n')}
                      onChange={(e) => setFormData({...formData, specializations: e.target.value.split('\n').filter(item => item.trim())})}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Interventional Psychiarist&#10;Preventive Psychiarist&#10;Cardiac Rehabilitation"
                    />
                  </div>

                  {/* Achievements */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Achievements (one per line)
                    </label>
                    <textarea
                      name="achievements"
                      value={formData.achievements.join('\n')}
                      onChange={(e) => setFormData({...formData, achievements: e.target.value.split('\n').filter(item => item.trim())})}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="15+ years of experience&#10;Board Certified Cardiologist&#10;Performed 5000+ successful procedures"
                    />
                  </div>

                  {/* Languages */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Languages (comma separated)
                    </label>
                    <input
                      type="text"
                      name="languages"
                      value={formData.languages.join(', ')}
                      onChange={(e) => setFormData({...formData, languages: e.target.value.split(',').map(item => item.trim()).filter(item => item)})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="English, Hindi, Spanish"
                    />
                  </div>

                  {/* Awards */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Awards (one per line)
                    </label>
                    <textarea
                      name="awards"
                      value={formData.awards.join('\n')}
                      onChange={(e) => setFormData({...formData, awards: e.target.value.split('\n').filter(item => item.trim())})}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Best Cardiologist Award 2023&#10;Excellence in Patient Care&#10;Innovation in Medical Technology"
                    />
                  </div>

                  {/* Publications */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Publications (one per line)
                    </label>
                    <textarea
                      name="publications"
                      value={formData.publications.join('\n')}
                      onChange={(e) => setFormData({...formData, publications: e.target.value.split('\n').filter(item => item.trim())})}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Advanced Techniques in Interventional Psychiarist&#10;Preventive Psychiarist: A Comprehensive Guide&#10;Cardiac Rehabilitation Protocols"
                    />
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex space-x-3 mt-6 pt-6 border-t">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
                  >
                    <Save className="w-4 h-4" />
                    <span>{editingDoctor ? 'Update Doctor' : 'Add Doctor'}</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-lg shadow-xl w-full max-w-md p-6"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Delete Doctor?</h3>
                <p className="text-gray-600 mb-6">
                  Are you sure you want to delete this doctor? This action cannot be undone.
                </p>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowDeleteConfirm(null)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDelete(showDeleteConfirm)}
                    className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AdminDoctors

