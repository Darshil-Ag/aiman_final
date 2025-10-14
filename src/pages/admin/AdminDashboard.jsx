import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useAdmin } from '../../contexts/AdminContext'
import { useData } from '../../contexts/DataContext'
import { 
  Users, 
  FileText, 
  Building2, 
  Calendar, 
  TrendingUp,
  LogOut,
  Settings,
  Bell,
  MessageSquare
} from 'lucide-react'

const AdminDashboard = () => {
  const { isAuthenticated, logout, adminData } = useAdmin()
  const { doctors, blogs, departments } = useData()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login')
    }
  }, [isAuthenticated, navigate])

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  const stats = [
    {
      title: 'Total Doctors',
      value: doctors.length,
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      link: '/admin/doctors'
    },
    {
      title: 'Blog Posts',
      value: blogs.length,
      icon: FileText,
      color: 'from-green-500 to-green-600',
      link: '/admin/blogs'
    },
    {
      title: 'Departments',
      value: departments.length,
      icon: Building2,
      color: 'from-purple-500 to-purple-600',
      link: '/admin/departments'
    },
    {
      title: 'Active Appointments',
      value: '12',
      icon: Calendar,
      color: 'from-orange-500 to-orange-600',
      link: '#'
    }
  ]

  const quickActions = [
    { title: 'Add New Doctor', link: '/admin/doctors?action=add', icon: Users },
    { title: 'Create Blog Post', link: '/admin/blogs?action=add', icon: FileText },
    { title: 'Add Department', link: '/admin/departments?action=add', icon: Building2 },
    { title: 'View Messages', link: '#', icon: MessageSquare }
  ]

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, {adminData?.username}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200">
                <Settings className="w-5 h-5" />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                to={stat.link}
                className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {React.createElement(stat.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                <p className="text-gray-600">{stat.title}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <Link
                key={action.title}
                to={action.link}
                className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 group"
              >
                {React.createElement(action.icon, { 
                  className: "w-5 h-5 text-gray-600 group-hover:text-primary-600" 
                })}
                <span className="text-gray-700 group-hover:text-primary-700 font-medium">
                  {action.title}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity & Management Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Management Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Management</h2>
            <div className="space-y-3">
              <Link
                to="/admin/doctors"
                className="flex items-center justify-between p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200 group"
              >
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-primary-600" />
                  <span className="font-medium text-gray-800">Manage Doctors</span>
                </div>
                <span className="text-sm text-primary-600 group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link>
              <Link
                to="/admin/blogs"
                className="flex items-center justify-between p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200 group"
              >
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-gray-800">Manage Blogs</span>
                </div>
                <span className="text-sm text-green-600 group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link>
              <Link
                to="/admin/departments"
                className="flex items-center justify-between p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200 group"
              >
                <div className="flex items-center space-x-3">
                  <Building2 className="w-5 h-5 text-purple-600" />
                  <span className="font-medium text-gray-800">Manage Departments</span>
                </div>
                <span className="text-sm text-purple-600 group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </Link>
            </div>
          </motion.div>

          {/* System Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">System Information</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Active Doctors</span>
                <span className="font-semibold text-gray-800">
                  {doctors.filter(d => d.available).length}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Published Blogs</span>
                <span className="font-semibold text-gray-800">
                  {blogs.filter(b => b.published).length}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Active Departments</span>
                <span className="font-semibold text-gray-800">{departments.length}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Last Login</span>
                <span className="font-semibold text-gray-800">
                  {new Date(adminData?.loginTime).toLocaleTimeString()}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard

