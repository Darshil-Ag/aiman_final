import React, { createContext, useContext, useState, useEffect } from 'react'

const AdminContext = createContext()

const useAdmin = () => {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider')
  }
  return context
}

export { useAdmin }

export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [adminData, setAdminData] = useState(null)

  // Get admin credentials from localStorage or use defaults
  const getAdminCredentials = () => {
    const stored = localStorage.getItem('aimanAdminCredentials')
    if (stored) {
      return JSON.parse(stored)
    }
    // Default credentials
    return {
      username: 'admin',
      password: 'admin123'
    }
  }

  // Check if admin is logged in on mount
  useEffect(() => {
    const storedAuth = localStorage.getItem('aimanAdminAuth')
    if (storedAuth) {
      const authData = JSON.parse(storedAuth)
      setIsAuthenticated(true)
      setAdminData(authData)
    }
  }, [])

  const login = (username, password) => {
    const credentials = getAdminCredentials()
    if (username === credentials.username && password === credentials.password) {
      const authData = {
        username,
        loginTime: new Date().toISOString()
      }
      localStorage.setItem('aimanAdminAuth', JSON.stringify(authData))
      setIsAuthenticated(true)
      setAdminData(authData)
      return { success: true }
    }
    return { success: false, error: 'Invalid credentials' }
  }

  const logout = () => {
    localStorage.removeItem('aimanAdminAuth')
    setIsAuthenticated(false)
    setAdminData(null)
  }

  const changePassword = (currentPassword, newPassword) => {
    const credentials = getAdminCredentials()
    if (currentPassword === credentials.password) {
      const newCredentials = {
        username: credentials.username,
        password: newPassword
      }
      localStorage.setItem('aimanAdminCredentials', JSON.stringify(newCredentials))
      return { success: true, message: 'Password changed successfully' }
    }
    return { success: false, error: 'Current password is incorrect' }
  }

  return (
    <AdminContext.Provider 
      value={{ 
        isAuthenticated, 
        adminData, 
        login, 
        logout,
        changePassword
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}

