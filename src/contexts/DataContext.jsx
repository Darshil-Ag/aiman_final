import React, { createContext, useContext, useState, useEffect } from 'react'

const DataContext = createContext()

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within DataProvider')
  }
  return context
}

export const DataProvider = ({ children }) => {
  // Initial data with some sample entries
  const [doctors, setDoctors] = useState(() => {
    const saved = localStorage.getItem('aimanDoctors')
    return saved ? JSON.parse(saved) : [
      { 
        id: '1', 
        name: 'Dr. Aditya Sharma', 
        specialty: 'Cardiology', 
        experience: '12', 
        email: 'aditya@aiman.com',
        phone: '+91 98765 43210',
        qualifications: 'MBBS, MD (Cardiology)',
        description: 'Specialized in interventional cardiology with extensive experience.',
        image: '/src/photo/aditya.jpg',
        available: true
      },
      { 
        id: '2', 
        name: 'Dr. Akshita Mehta', 
        specialty: 'Pediatrics', 
        experience: '10', 
        email: 'akshita@aiman.com',
        phone: '+91 98765 43211',
        qualifications: 'MBBS, MD (Pediatrics)',
        description: 'Expert in child healthcare and development.',
        image: '/src/photo/akshita.jpg',
        available: true
      }
    ]
  })

  const [blogs, setBlogs] = useState(() => {
    const saved = localStorage.getItem('aimanBlogs')
    return saved ? JSON.parse(saved) : [
      {
        id: '1',
        title: 'Understanding Mental Health: A Comprehensive Guide',
        excerpt: 'Learn about the importance of mental health and how to maintain it in today\'s fast-paced world.',
        content: 'Full blog content here...',
        category: 'Mental Health',
        author: 'Dr. Sarah Johnson',
        date: new Date().toISOString(),
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
        published: true
      }
    ]
  })

  const [departments, setDepartments] = useState(() => {
    const saved = localStorage.getItem('aimanDepartments')
    return saved ? JSON.parse(saved) : [
      {
        id: '1',
        name: 'Cardiology',
        description: 'Advanced heart care with state-of-the-art technology',
        icon: 'Heart',
        facilities: ['24/7 Emergency', 'ICU', 'Cath Lab'],
        doctors: 5
      },
      {
        id: '2',
        name: 'Mental Health',
        description: 'Comprehensive mental wellness and psychiatric care',
        icon: 'Brain',
        facilities: ['Counseling', 'Therapy', 'Support Groups'],
        doctors: 3
      }
    ]
  })

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('aimanDoctors', JSON.stringify(doctors))
  }, [doctors])

  useEffect(() => {
    localStorage.setItem('aimanBlogs', JSON.stringify(blogs))
  }, [blogs])

  useEffect(() => {
    localStorage.setItem('aimanDepartments', JSON.stringify(departments))
  }, [departments])

  // Doctor CRUD operations
  const addDoctor = (doctor) => {
    const newDoctor = { ...doctor, id: Date.now().toString() }
    setDoctors([...doctors, newDoctor])
    return newDoctor
  }

  const updateDoctor = (id, updatedDoctor) => {
    setDoctors(doctors.map(doc => doc.id === id ? { ...doc, ...updatedDoctor } : doc))
  }

  const deleteDoctor = (id) => {
    setDoctors(doctors.filter(doc => doc.id !== id))
  }

  // Blog CRUD operations
  const addBlog = (blog) => {
    const newBlog = { ...blog, id: Date.now().toString(), date: new Date().toISOString() }
    setBlogs([...blogs, newBlog])
    return newBlog
  }

  const updateBlog = (id, updatedBlog) => {
    setBlogs(blogs.map(blog => blog.id === id ? { ...blog, ...updatedBlog } : blog))
  }

  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id))
  }

  // Department CRUD operations
  const addDepartment = (department) => {
    const newDepartment = { ...department, id: Date.now().toString() }
    setDepartments([...departments, newDepartment])
    return newDepartment
  }

  const updateDepartment = (id, updatedDepartment) => {
    setDepartments(departments.map(dept => dept.id === id ? { ...dept, ...updatedDepartment } : dept))
  }

  const deleteDepartment = (id) => {
    setDepartments(departments.filter(dept => dept.id !== id))
  }

  return (
    <DataContext.Provider
      value={{
        doctors,
        blogs,
        departments,
        addDoctor,
        updateDoctor,
        deleteDoctor,
        addBlog,
        updateBlog,
        deleteBlog,
        addDepartment,
        updateDepartment,
        deleteDepartment
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

