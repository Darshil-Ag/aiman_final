import React, { createContext, useContext, useState, useEffect } from 'react'
import adityaImg from '../photo/aditya.jpg'
import akshitaImg from '../photo/akshita.jpg'
import keshavImg from '../photo/keshav.jpg'
import kiranImg from '../photo/kiran.jpg'
import piyushImg from '../photo/piyush.jpg'
import sangeethaImg from '../photo/sangeetha.jpg'

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
    const defaultDoctors = [
      { 
        id: 'aditya', 
        name: 'Dr. Aditya Sharma', 
        specialty: 'Cardiology', 
        experience: '15+', 
        email: 'aditya.sharma@aimanhospital.com',
        phone: '+1 (555) 123-4567',
        qualifications: 'MD, DM Cardiology, FACC',
        description: 'Dr. Aditya Sharma is a renowned cardiologist with over 15 years of experience in treating complex heart conditions. He specializes in interventional cardiology and has performed thousands of successful procedures.',
        image: adityaImg,
        available: true
      },
      { 
        id: 'akshita', 
        name: 'Dr. Akshita Patel', 
        specialty: 'Mental Health & Psychiatry', 
        experience: '12+', 
        email: 'akshita.patel@aimanhospital.com',
        phone: '+1 (555) 123-4568',
        qualifications: 'MD, DPM, PhD Psychology',
        description: 'Dr. Akshita Patel is a compassionate psychiatrist specializing in mood disorders, anxiety, and trauma therapy. She combines evidence-based treatments with a patient-centered approach.',
        image: akshitaImg,
        available: true
      },
      { 
        id: 'keshav', 
        name: 'Dr. Keshav Singh', 
        specialty: 'Orthopedics', 
        experience: '18+', 
        email: 'keshav.singh@aimanhospital.com',
        phone: '+1 (555) 123-4569',
        qualifications: 'MS Orthopedics, MCh, FRCS',
        description: 'Dr. Keshav Singh is a leading orthopedic surgeon specializing in joint replacement and sports medicine. He has performed over 2000 successful surgeries and is known for his innovative techniques.',
        image: keshavImg,
        available: true
      },
      { 
        id: 'kiran', 
        name: 'Dr. Kiran Reddy', 
        specialty: 'Pediatrics', 
        experience: '14+', 
        email: 'kiran.reddy@aimanhospital.com',
        phone: '+1 (555) 123-4570',
        qualifications: 'MD Pediatrics, DCH, MRCPCH',
        description: 'Dr. Kiran Reddy is a dedicated pediatrician with a special focus on child development and preventive care. She has a gentle approach that makes children feel comfortable during visits.',
        image: kiranImg,
        available: true
      },
      { 
        id: 'piyush', 
        name: 'Dr. Piyush Agarwal', 
        specialty: 'Neurology', 
        experience: '16+', 
        email: 'piyush.agarwal@aimanhospital.com',
        phone: '+1 (555) 123-4571',
        qualifications: 'MD Neurology, DM Neurology, FRCP',
        description: 'Dr. Piyush Agarwal is a distinguished neurologist specializing in stroke treatment and neurological disorders. He leads our stroke unit and has saved countless lives through timely intervention.',
        image: piyushImg,
        available: true
      },
      { 
        id: 'sangeetha', 
        name: 'Dr. Sangeetha Iyer', 
        specialty: 'Ophthalmology', 
        experience: '13+', 
        email: 'sangeetha.iyer@aimanhospital.com',
        phone: '+1 (555) 123-4572',
        qualifications: 'MS Ophthalmology, DNB, FICO',
        description: 'Dr. Sangeetha Iyer is a skilled ophthalmologist specializing in cataract surgery and retinal treatments. She has performed over 3000 successful eye surgeries with excellent outcomes.',
        image: sangeethaImg,
        available: true
      }
    ]
    
    return saved ? JSON.parse(saved) : defaultDoctors
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

