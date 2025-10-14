import React, { createContext, useContext, useState, useEffect } from 'react'

const AdminContext = createContext()

export const useAdmin = () => {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider')
  }
  return context
}

export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [adminData, setAdminData] = useState(null)

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
    // Simple authentication (in production, use proper backend authentication)
    if (username === 'admin' && password === 'admin123') {
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

  return (
    <AdminContext.Provider 
      value={{ 
        isAuthenticated, 
        adminData, 
        login, 
        logout 
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}

