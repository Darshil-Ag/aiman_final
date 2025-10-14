import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useAdmin } from '../../contexts/AdminContext'
import { Lock, User, AlertCircle, Eye, EyeOff } from 'lucide-react'
import logo from '../../photo/logo.png'

const AdminLogin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  
  const { login } = useAdmin()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    setTimeout(() => {
      const result = login(username, password)
      if (result.success) {
        navigate('/admin/dashboard')
      } else {
        setError(result.error)
      }
      setLoading(false)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-700 flex items-center justify-center p-4">
      {/* Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <img src={logo} alt="AIMAN" className="w-[800px] h-auto" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-4">
              <Lock className="w-10 h-10 text-primary-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Login</h1>
            <p className="text-gray-600">AIMAN Hospital Management System</p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-2"
            >
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <p className="text-red-700 text-sm">{error}</p>
            </motion.div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter username"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full btn-primary py-3 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-primary-50 rounded-lg">
            <p className="text-sm text-gray-700 font-medium mb-2">Demo Credentials:</p>
            <p className="text-xs text-gray-600">Username: <span className="font-mono font-semibold">admin</span></p>
            <p className="text-xs text-gray-600">Password: <span className="font-mono font-semibold">admin123</span></p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <a href="/" className="text-white hover:text-purple-200 transition-colors duration-200">
            ← Back to Website
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default AdminLogin

